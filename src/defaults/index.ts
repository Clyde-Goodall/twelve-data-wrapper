import type {TwelveDataConfig} from "../types/config";

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