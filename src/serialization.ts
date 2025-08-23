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
    obj: T,
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

type SerializeDirection = 'serialize' | 'deserialize';

// Date transformation function
function transformDates<T>(obj: T, config: TransformConfig, direction: SerializeDirection): T {
    const result = { ...obj } as any;
    const { dateFields = [], dateTimeFields = [] } = config;
    const allDateFields: string[] = [...dateFields, ...dateTimeFields];

    for (const [key, value] of Object.entries(result)) {
        if (!value) { continue; }
        if (allDateFields.includes(key) && isDateOrString(value)) {
            result[key] = transformDateValue(key, value, config, direction);
            console.log();
        } else if (Array.isArray(value)) {
            result[key] = value.map(item => transformDates(item, config, direction));
        } else if (typeof value === 'object') {
            result[key] = transformDates(value, config, direction);
        }
    }

    return result;
}

type DateOrString<T> = T extends string | Date ? T : never;
function isDateOrString<T>(value: unknown): value is DateOrString<T> {
    return typeof value === 'string' || value instanceof Date;
}

function transformDateValue(
    key: string,
    value: string | Date,
    config: TransformConfig,
    direction: SerializeDirection
): string | Date {
    const { dateFields = [] } = config;
    if (direction === 'serialize') {
        if (value instanceof Date) {
            return dateFields.includes(key)
                ? DateTime.fromJSDate(value).toISODate()! // YYYY-MM-DD for date fields
                : DateTime.fromJSDate(value).toFormat('yyyy-MM-dd HH:mm:ss'); // Custom format for datetime
        }
    } else {
        if (typeof value === 'string') {
            // Check for a space because the API will return dates or date-times in the same field depending on context
            return value.indexOf(' ') === -1
                ? DateTime.fromISO(value).toJSDate()
                : DateTime.fromFormat(value, 'yyyy-MM-dd HH:mm:ss').toJSDate();
        }
    }
    throw new Error(`Error serializing/deserializing date field ${key} with value ${value}`);
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