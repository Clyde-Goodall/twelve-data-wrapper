
export interface Meta {
    symbol: string,
    name: string,
    currency: string,
    exchangeTimezone: string,
    exchange: string,
    micCode: string,
    type: string;
}

export interface APIUsageResponse {
    timestamp: string,
    currentUsage: number,
    planLimit: number;
}

export interface EarningsEstimateResponse {
    meta: Meta,
    earningsEstimate: Array<EarningsEstimateEntry>;
}

export interface EarningsEstimateEntry {
    date: string,
    period: string,
    number_of_analysts: number,
    avg_estimate: number,
    low_estimate: number,
    high_estimate: number,
    year_ago_eps: number;
}

export interface RevenueEstimateResponse {
    meta: Meta,
    revenueEstimate: Array<RevenueEstimateEntry>;
}

export interface RevenueEstimateEntry {
    date: string,
    period: string,
    number_of_analysts: number,
    avg_estimate: number,
    low_estimate: number,
    high_estimate: number,
    year_ago_sales: number,
    sales_growth: number;
}

export interface EPSTrendResponse {
    meta: Meta,
    epsTrend: Array<EPSTrendEntry>;
}

export interface EPSTrendEntry {
    date: string,
    period: string,
    current_estimate: number,
    sevenDaysAgo: number,
    thirtyDaysAgo: number,
    sixtyDaysAgo: number,
    ninetyDaysAgo: number
}