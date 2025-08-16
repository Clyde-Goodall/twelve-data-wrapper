import type {TwelveDataConfig} from "./types/config.ts";
import {configDefaults} from "./defaults/index.ts";
import Advanced from "./endpoints/advanced.ts";
import {AxiosInstance} from "axios";
import {buildApiClient} from "./apiClient.ts";
import Analysis from "./endpoints/analysis.ts";
import Core from "./endpoints/core.ts";
import Currencies from "./endpoints/currencies.ts";
import ETFs from "./endpoints/etfs.ts";
import Fundamentals from "./endpoints/fundamentals.ts";
import MutualFunds from "./endpoints/mutualFunds.ts";
import Reference from "./endpoints/reference.ts";
import Regulatory from "./endpoints/regulatory.ts";
import TechnicalIndicators from "./endpoints/technicalIndicators.ts";

export default class TwelveDataWrapper {
    private readonly config: TwelveDataConfig;
    private readonly apiClient: AxiosInstance;
    public readonly advanced: Advanced;
    public readonly analysis: Analysis;
    public readonly core: Core;
    public readonly currencies: Currencies;
    public readonly etfs: ETFs;
    public readonly fundamentals: Fundamentals;
    public readonly mutualFunds: MutualFunds;
    public readonly reference: Reference;
    public readonly regulatory: Regulatory;
    public readonly technicalIndicators: TechnicalIndicators;
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
        this.core = new Core(this.apiClient);
        this.currencies = new Currencies(this.apiClient);
        this.etfs = new ETFs(this.apiClient);
        this.fundamentals = new Fundamentals(this.apiClient);
        this.mutualFunds = new MutualFunds(this.apiClient);
        this.reference = new Reference(this.apiClient);
        this.regulatory = new Regulatory(this.apiClient);
        this.technicalIndicators = new TechnicalIndicators(this.apiClient);

    }
}