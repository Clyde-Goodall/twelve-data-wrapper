import type {TwelveDataConfig} from "./types/config.ts";
import {configDefaults} from "./defaults/index.ts";
import Advanced from "./endpoints/advanced.ts";
import {AxiosInstance} from "axios";

export default class TwelveDataWrapper {
    config: TwelveDataConfig;
    advanced: Advanced;
    apiClient: AxiosInstance;
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

        // endpoint class binding
        this.advanced = new Advanced();
    }
}