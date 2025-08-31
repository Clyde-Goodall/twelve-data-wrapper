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

export class TwelveDataWrapper extends EndpointBase {
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
            retryWaitTime: config?.retryWaitTime ?? configDefaults.retryWaitTime
        };

        const apiClient = buildApiClient(fullConfig);

        super(apiClient);
        this.config = fullConfig;

        // endpoint class binding
        this.advanced = new Advanced(apiClient);
        this.analysis = new Analysis(apiClient);
        this.core = new Core(apiClient);
        this.currencies = new Currencies(apiClient);
        this.etfs = new ETFs(apiClient);
        this.fundamentals = new Fundamentals(apiClient);
        this.mutualFunds = new MutualFunds(apiClient);
        this.reference = new Reference(apiClient);
        this.regulatory = new Regulatory(apiClient);
        this.technicalIndicators = new TechnicalIndicators(apiClient);
    }
}