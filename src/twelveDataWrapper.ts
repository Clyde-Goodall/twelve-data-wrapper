import type {TwelveDataConfig} from "./types/config.ts";
import {configDefaults} from "./defaults/index.ts";
import Advanced from "./endpoints/advanced.ts";
import {AxiosInstance} from "axios";
import {buildApiClient} from "./apiClient.ts";
import Analysis from "./endpoints/analysis.ts";

export default class TwelveDataWrapper {
    private readonly config: TwelveDataConfig;
    private readonly apiClient: AxiosInstance;
    public readonly advanced: Advanced;
    public readonly analysis: Analysis;
    public readonly currencies: Currencies;
    constructor(config: TwelveDataConfig = configDefaults) {
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
        this.apiClient = buildApiClient(this.config);
        // endpoint class binding
        this.advanced = new Advanced(this.apiClient);
        this.analysis = new Analysis(this.apiClient);

    }
}