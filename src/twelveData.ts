import { TwelveDataConfig } from "./twelveData.interfaces";
import { EndpointBase, getDefaultConfig } from "./defaults";
import Advanced from "./endpoints/advanced/advanced";
import Analysis from "./endpoints/analysis/analysis";
import Core from "./endpoints/core/core";
import Currencies from "./endpoints/currencies/currencies";
import ETFs from "./endpoints/etfs/etfs";
import Fundamentals from "./endpoints/fundamentals/fundamentals";
import MutualFunds from "./endpoints/mutualFunds/mutualFunds";
import Reference from "./endpoints/reference/reference";
import Regulatory from "./endpoints/regulatory/regulatory";
import TechnicalIndicators from "./endpoints/technicalIndicators/technicalIndicators";
import { buildApiClient } from "./apiClient";
import { RateLimiter } from "./rateLimiter";

export class TwelveData extends EndpointBase {
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
    private readonly config: TwelveDataConfig;

    constructor(config?: TwelveDataConfig) {

        const configDefaults = getDefaultConfig();
        const fullConfig: TwelveDataConfig = {
            apiKey: config?.apiKey ?? configDefaults.apiKey,
            debugMode: config?.debugMode ?? configDefaults.debugMode,
            baseUrl: config?.baseUrl ?? configDefaults.baseUrl,
            timeout: config?.timeout ?? configDefaults.timeout,
            retryCount: config?.retryCount ?? configDefaults.retryCount,
            retryWaitTime: config?.retryWaitTime ?? configDefaults.retryWaitTime,
            creditsPerMinute: config?.creditsPerMinute ?? configDefaults.creditsPerMinute,
        };

        const apiClient = buildApiClient(fullConfig);
        const rateLimiter = new RateLimiter(fullConfig.creditsPerMinute ?? 0);

        super(apiClient, rateLimiter);
        this.config = fullConfig;

        // endpoint class binding
        this.advanced = new Advanced(apiClient, rateLimiter);
        this.analysis = new Analysis(apiClient, rateLimiter);
        this.core = new Core(apiClient, rateLimiter);
        this.currencies = new Currencies(apiClient, rateLimiter);
        this.etfs = new ETFs(apiClient, rateLimiter);
        this.fundamentals = new Fundamentals(apiClient, rateLimiter);
        this.mutualFunds = new MutualFunds(apiClient, rateLimiter);
        this.reference = new Reference(apiClient, rateLimiter);
        this.regulatory = new Regulatory(apiClient, rateLimiter);
        this.technicalIndicators = new TechnicalIndicators(apiClient, rateLimiter);
    }
}