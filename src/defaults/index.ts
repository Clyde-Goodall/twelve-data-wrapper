import type { TwelveDataConfig } from "../types/config";
import { AxiosInstance } from "axios";

export function getDefaultConfig(): TwelveDataConfig {
    return {
        apiKey: 'demo',
        debugMode: false,
        baseUrl: 'https://api.twelvedata.com',
        timeout: 25,
        retryCount: 1,
        retryWaitTime: 1000
    };
}

type UrlParams = Record<string, string | number | boolean | undefined> | {};

export abstract class EndpointBase {
    protected readonly apiClient: AxiosInstance;
    constructor(apiClient: AxiosInstance) {
        this.apiClient = apiClient;
    }
    
    protected constructUrlParams(params: UrlParams): string {
        const urlParams = new URLSearchParams();
        for (const [key, value] of Object.entries(params)) {
            if (value !== undefined) {
                urlParams.append(key, String(value));
            }
        }
        const paramString = urlParams.toString();
        return paramString ? `?${paramString}` : '';
    }
}