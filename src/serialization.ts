import { Endpoints } from "./endpoints/endpoints";

export interface FieldMappings {
    [key: string]: string;
}

export interface TransformConfig {
    requestMappings?: FieldMappings;   // camelCase -> API format
    responseMappings?: FieldMappings;  // API format -> camelCase
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
    if (obj === null || typeof obj !== "object") {
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

        return objectToSnakeCaseWithMappings(data, config.requestMappings);
    }

    // Transform response data for a specific endpoint
    transformResponseForEndpoint(data: any, endpoint: string): any {
        const config = this.endpointConfigs.get(endpoint);
        if (!config) {
            // Fallback to simple camelCase conversion
            return simpleToCamelCase(data);
        }

        return objectToCamelCaseWithMappings(data, config.responseMappings);
    }

    // Won't fill out too many so it isn't clogged up
    private registerDefaultConfigurations(): void {
        // Profile endpoint configuration
        this.endpointConfigs.set(Endpoints.Profile, {
            responseMappings: {
                addressTwo: "address2",
            }
        });

        // Lots of redundant outputsize

        // Splits Calendar Consolidated endpoint configuration
        this.endpointConfigs.set(Endpoints.SplitsCalendar, {
            requestMappings: {
                outputSize: "outputsize",
            },
        });

        // Cash Flow Consolidated endpoint configuration
        this.endpointConfigs.set(Endpoints.CashFlow, {
            requestMappings: {
                outputSize: "outputsize",
            },
        });

        // Cash Flow Consolidated endpoint configuration
        this.endpointConfigs.set(Endpoints.CashFlowConsolidated, {
            requestMappings: {
                outputSize: "outputsize",
            },
        });
    }
}

// Global transformation manager instance
export const globalTransformationManager = new TransformationManager();

// Convenience function to add endpoint configurations
export function addEndpointTransformConfig(endpoint: string, config: TransformConfig): void {
    globalTransformationManager.addEndpointConfig(endpoint, config);
}
