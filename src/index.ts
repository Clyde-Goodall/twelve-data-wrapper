import type {TwelveDataConfig} from "./types/index.ts";
import {configDefaults} from "./defaults/index.ts";

export default class TwelveDataWrapper {
    config: TwelveDataConfig;
    constructor(config: TwelveDataConfig) {
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