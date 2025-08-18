import { DateTime } from "luxon";
import { Endpoints } from "./endpoints/endpoints";

export interface FieldMappings {
    [key: string]: string;
}

export interface TransformConfig {
    requestMappings?: FieldMappings;   // camelCase -> API format
    responseMappings?: FieldMappings;  // API format -> camelCase
    dateFields?: string[];             // Fields that should be YYYY-MM-DD
    dateTimeFields?: string[];         // Fields that should be full ISO strings
}

// Basic case conversion functions
function toSnakeCase(str: string): string {
    return str.replace(/[A-Z]/g, letter => `_${letter.toLowerCase()}`);
}

function toCamelCase(str: string): string {
    return str.replace(/_([a-z])/g, (_, letter) => letter.toUpperCase());
}

// Core transformation function with mapping support
function transformKeysWithMapping<T>(
    obj: any,
    keyTransformer: (key: string) => string,
    fieldMappings: FieldMappings = {}
): T {
    if (obj === null || typeof obj !== 'object') {
        return obj;
    }

    if (Array.isArray(obj)) {
        return obj.map(item => transformKeysWithMapping(item, keyTransformer, fieldMappings)) as T;
    }

    const result: any = {};
    for (const [key, value] of Object.entries(obj)) {
        // Check for explicit mapping first, then fall back to automatic transformation
        const transformedKey = fieldMappings[key] ?? keyTransformer(key);
        result[transformedKey] = transformKeysWithMapping(value, keyTransformer, fieldMappings);
    }
    return result;
}

// Date transformation function
function transformDates<T>(obj: T, config: TransformConfig, direction: 'serialize' | 'deserialize'): T {
    if (!obj || typeof obj !== 'object') return obj;

    const result = { ...obj } as any;
    const { dateFields = [], dateTimeFields = [] } = config;

    for (const field of [...dateFields, ...dateTimeFields]) {
        if (field in result && result[field]) {
            if (direction === 'serialize') {
                // Convert Date to string for API
                if (result[field] instanceof Date) {
                    result[field] = dateFields.includes(field)
                        ? DateTime.fromJSDate(result[field]).toISODate() // YYYY-MM-DD for date fields
                        : DateTime.fromJSDate(result[field]).toFormat('yyyy-MM-dd HH:mm:ss'); // For datetime fields
                }
            } else {
                // Convert string to Date from API
                if (typeof result[field] === 'string') {
                    result[field] = dateFields.includes(field)
                        ? DateTime.fromISO(result[field]).toJSDate() // Convert to Date for date
                        : DateTime.fromFormat(result[field], 'yyyy-MM-dd HH:mm:ss').toJSDate(); // Convert to Date for datetime
                }
            }
        }
    }

    return result;
}

// Public transformation functions
export function objectToSnakeCaseWithMappings<T>(obj: T, mappings: FieldMappings = {}): any {
    return transformKeysWithMapping(obj, toSnakeCase, mappings);
}

export function objectToCamelCaseWithMappings<T>(obj: T, mappings: FieldMappings = {}): any {
    return transformKeysWithMapping(obj, toCamelCase, mappings);
}

// Fallback transformations (simple snake_case/camelCase without mappings)
export function simpleToSnakeCase(obj: any): any {
    return transformKeysWithMapping(obj, toSnakeCase, {});
}

export function simpleToCamelCase(obj: any): any {
    return transformKeysWithMapping(obj, toCamelCase, {});
}

// ============================================================================
// ENDPOINT CONFIGURATION SYSTEM
// ============================================================================

class TransformationManager {
    private endpointConfigs: Map<string, TransformConfig> = new Map();

    constructor() {
        this.registerDefaultConfigurations();
    }

    // TODO: move these configurations to the actual endpoint function definitions
    // Won't fill out too many so it isn't clogged up
    private registerDefaultConfigurations(): void {
        // Time Series endpoint configuration
        this.endpointConfigs.set(Endpoints.TimeSeries, {
            requestMappings: {
                outputSize: 'outputsize',
                prePost: 'prepost',
                previousClose: 'previous_close'
            },
            responseMappings: {
                datetime: 'dateTime',
            },
            dateFields: ['date'],
            dateTimeFields: ['startDate', 'endDate', 'start_date', 'end_date']
        });

        // API Usage endpoint configuration
        this.endpointConfigs.set(Endpoints.APIUsage, {
            dateTimeFields: ['timestamp']
        });

        // Profile endpoint configuration
        this.endpointConfigs.set(Endpoints.Profile, {
            responseMappings: {
                addressTwo: 'address2',
            }
        });

        // Lots of redundant outputsize

        // Splits Calendar Consolidated endpoint configuration
        this.endpointConfigs.set(Endpoints.SplitsCalendar, {
            requestMappings: {
                outputSize: 'outputsize',
            },
        });

        // Cash Flow Consolidated endpoint configuration
        this.endpointConfigs.set(Endpoints.CashFlow, {
            requestMappings: {
                outputSize: 'outputsize',
            },
        });

        // Cash Flow Consolidated endpoint configuration
        this.endpointConfigs.set(Endpoints.CashFlowConsolidated, {
            requestMappings: {
                outputSize: 'outputsize',
            },
        });
    }

    // Add new endpoint configuration
    addEndpointConfig(endpoint: string, config: TransformConfig): void {
        this.endpointConfigs.set(endpoint, config);
    }

    // Transform request data for a specific endpoint
    transformRequestForEndpoint(data: any, endpoint: string): any {
        const config = this.endpointConfigs.get(endpoint);
        if (!config) {
            // Fallback to simple snake_case conversion
            return simpleToSnakeCase(data);
        }

        const dateTransformed = transformDates(data, config, 'serialize');
        return objectToSnakeCaseWithMappings(dateTransformed, config.requestMappings);
    }

    // Transform response data for a specific endpoint
    transformResponseForEndpoint(data: any, endpoint: string): any {
        const config = this.endpointConfigs.get(endpoint);
        if (!config) {
            // Fallback to simple camelCase conversion
            return simpleToCamelCase(data);
        }

        const camelCased = objectToCamelCaseWithMappings(data, config.responseMappings);
        return transformDates(camelCased, config, 'deserialize');
    }
}

// Global transformation manager instance
export const globalTransformationManager = new TransformationManager();

// Convenience function to add endpoint configurations
export function addEndpointTransformConfig(endpoint: string, config: TransformConfig): void {
    globalTransformationManager.addEndpointConfig(endpoint, config);
}

// Function to be used in axios transformResponse
export function serializeTwelveDataResponse(data: any, headers?: any): any {
    if (!data || typeof data === 'string') {
        try {
            data = JSON.parse(data);
        } catch {
            return data;
        }
    }

    // Try to get endpoint from headers set in the request
    const endpoint = headers?.['x-endpoint-path'] || headers?.['X-Endpoint-Path'];

    if (endpoint) {
        return globalTransformationManager.transformResponseForEndpoint(data, endpoint);
    }

    // Fallback transformation
    return simpleToCamelCase(data);
}