import type {TwelveDataConfig} from "./types/config.ts";
import {configDefaults} from "./defaults/index.ts";
import type {APIUsageRequest} from "./types/requests.ts";
import type {APIUsageResponse} from "./types/responses.ts";

export default class TwelveDataWrapper {
    config: TwelveDataConfig;
    constructor(config?: TwelveDataConfig) {
        if (!config) {
            this.config = configDefaults;
        } else {
            this.config = {
                apiKey: config.apiKey ?? configDefaults.apiKey,
                debugMode: config.debugMode ?? configDefaults.debugMode,
                baseUrl: config.baseUrl ?? configDefaults.baseUrl,
                timeout: config.timeout ?? configDefaults.timeout,
                retryCount: config.retryCount ?? configDefaults.retryCount,
                retryWaitTime: config.retryWaitTime ?? configDefaults.retryWaitTime
            }
        }
    }

    buildURLParams(params?: Record<string, string>) {
        // need to convert keys back to snake case for the url params
        if (!params) {
            params = {}
        }
        params.apikey = this.config.apiKey;
        return Object
            .keys(params)
            .map(key => `${toSnakeCase(key)}=${params[key]}`)
            .join('&');
    }

}

function toSnakeCase(str: string) {
    return str.replace(/(([a-z])(?=[A-Z][a-zA-Z])|([A-Z])(?=[A-Z][a-z]))/g,'$1_').toLowerCase()
}

function keysAsCamelCase<T>(obj: T): T {
    if (Array.isArray(obj)) {
        return obj.map((v) => keysAsCamelCase(v)) as T;
    } else if (obj !== null && typeof obj === 'object' && !Array.isArray(obj)) {
        return Object.keys(obj).reduce((acc: Record<string, any>, key: string) => {
            const camelKey = toCamelCase(key);
            acc[camelKey] = keysAsCamelCase((obj as any)[key]);
            return acc;
        }, {}) as T;
    }
    return obj;
}

function toCamelCase(str: string) {
    return str.replace(/_([a-z])/g, (g) => g[1].toUpperCase());
}