import type { TwelveDataConfig } from "./types/config";
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


export default class TwelveDataWrapper extends EndpointBase {
    private readonly config: TwelveDataConfig;
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

    constructor(config?: TwelveDataConfig) {

        const configDefaults = getDefaultConfig();
        const fullConfig: TwelveDataConfig = {
            apiKey: config?.apiKey ?? configDefaults.apiKey,
            debugMode: config?.debugMode ?? configDefaults.debugMode,
            baseUrl: config?.baseUrl ?? configDefaults.baseUrl,
            timeout: config?.timeout ?? configDefaults.timeout,
            retryCount: config?.retryCount ?? configDefaults.retryCount,
            retryWaitTime: config?.retryWaitTime ?? configDefaults.retryWaitTime
        }

        super(buildApiClient(fullConfig));
        this.config = fullConfig;

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