import type {TwelveDataConfig} from "../types/index.ts";

export const configDefaults: TwelveDataConfig = {
    apiKey: 'demo',
    debugMode: false,
    baseUrl: 'https://api.twelvedata.com',
    timeout: 25,
    retryCount: 1,
    retryWaitTime: 1000
}