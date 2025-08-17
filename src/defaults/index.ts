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

export abstract class EndpointBase {
    protected readonly apiClient: AxiosInstance;
    constructor(apiClient: AxiosInstance) {
        this.apiClient = apiClient;
    }
}