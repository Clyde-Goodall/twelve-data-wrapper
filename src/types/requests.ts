

export interface APIUsageRequest {
    format?: 'JSON', // they also support CSV but not sure how to handle that just yet
    delimiter?: string,
    // https://en.wikipedia.org/wiki/List_of_tz_database_time_zones
    // (we should check against a list before request execution to save time)
    timezone?: string,
}

export interface EarningsEstimateRequest {
    symbol: string,
    figi: string,
    isin: string,
    cusip: string,
    exchange?: string,
    country?: string,
}

export interface RevenueEstimateRequest {
    symbol: string,
    figi: string,
    isin: string,
    cusip: string,
    exchange?: string,
    country?: string,
    dp?: string;
}

export interface EPSTrendRequest {
    symbol: string,
    figi: string,
    isin: string,
    cusip: string,
    exchange?: string,
    country?: string,
}