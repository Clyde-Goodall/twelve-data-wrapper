/*
 * /etfs/list
 * */
export interface EtfsDirectoryRequest {
    symbol?: string;
    figi?: string;
    isin?: string;
    cusip?: string;
    cik?: string;
    country?: string;
    fundFamily?: string;
    fundType?: string;
    page?: number;
    outputSize?: number;
}

export interface EtfsDirectoryResponse {
    result: {
        count: number;
        list: Array<EtfsDirectoryEntry>;
    };
}

export interface EtfsDirectoryEntry {
    symbol: string;
    name: string;
    country: string;
    mic_code: string;
    fund_family: string;
    fund_type: string;
}

export interface EtfFullDataRequest {
    symbol?: string;
    figi?: string;
    isin?: string;
    cusip?: string;
    country?: string;
    dp?: number;
}

export interface EtfFullDataResponse {
    etf: EtfData;
}


/*
 * /etfs/world
 * */
export interface EtfData {
    summary: EtfSummary;
    performance: EtfPerformance;
    risk: EtfRisk;
    composition: EtfComposition;
}

export interface EtfSummary {
    symbol: string;
    name: string;
    fundFamily: string;
    fundType: string;
    currency: string;
    shareClassInceptionDate: string;
    ytdReturn: number;
    expenseRatioNet: number;
    yield: number;
    nav: number;
    lastPrice: number;
    turnoverRate: number;
    netAssets: number;
    overview: string;
}

export interface EtfPerformance {
    trailingReturns: TrailingReturn[];
    annualTotalReturns: AnnualTotalReturn[];
}

export interface TrailingReturn {
    period: string;
    shareClassReturn: number;
    categoryReturn: number;
}

export interface AnnualTotalReturn {
    year: number;
    shareClassReturn: number;
    categoryReturn: number;
}

export interface EtfRisk {
    volatilityMeasures: VolatilityMeasure[];
    valuationMetrics: ValuationMetrics;
}

export interface VolatilityMeasure {
    period: string;
    alpha: number;
    alphaCategory: number;
    beta: number;
    betaCategory: number;
    meanAnnualReturn: number;
    meanAnnualReturnCategory: number;
    rSquared: number;
    rSquaredCategory: number;
    std: number;
    stdCategory: number;
    sharpeRatio: number;
    sharpeRatioCategory: number;
    treynorRatio: number;
    treynorRatioCategory: number;
}

export interface ValuationMetrics {
    priceToEarnings: number;
    priceToBook: number;
    priceToSales: number;
    priceToCashflow: number;
}

export interface EtfComposition {
    majorMarketSectors: MarketSector[];
    countryAllocation: CountryAllocation[];
    assetAllocation: AssetAllocation;
    topHoldings: TopHolding[];
    bondBreakdown: BondBreakdown;
}

export interface MarketSector {
    sector: string;
    weight: number;
}

export interface CountryAllocation {
    country: string;
    allocation: number;
}

export interface AssetAllocation {
    cash: number;
    stocks: number;
    preferredStocks: number;
    convertables: number;
    bonds: number;
    others: number;
}

export interface TopHolding {
    symbol: string;
    name: string;
    exchange: string;
    micCode: string;
    weight: number;
}

export interface BondBreakdown {
    averageMaturity: AverageMetric;
    averageDuration: AverageMetric;
    creditQuality: CreditQuality[];
}

export interface AverageMetric {
    fund: number;
    category: number;
}

export interface CreditQuality {
    grade: string;
    weight: number;
}