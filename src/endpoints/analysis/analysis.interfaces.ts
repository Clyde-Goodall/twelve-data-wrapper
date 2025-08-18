import { Meta } from "../shared.interfaces";

/*
    /earnings_estimate
 */
export interface EarningsEstimateRequest {
    symbol: string;
    figi: string;
    isin: string;
    cusip: string;
    exchange?: string;
    country?: string;
}

export interface EarningsEstimateResponse {
    meta: Meta;
    earningsEstimate: Array<EarningsEstimateEntry>;
}

export interface EarningsEstimateEntry {
    date: string;
    period: string;
    numberOfAnalysts: number;
    avgEstimate: number;
    lowEstimate: number;
    highEstimate: number;
    yearAgoEps: number;
}

/*
    /revenue_estimate
*/
export interface RevenueEstimateRequest {
    symbol: string;
    figi: string;
    isin: string;
    cusip: string;
    exchange?: string;
    country?: string;
    dp?: string;
}

export interface RevenueEstimateResponse {
    meta: Meta;
    revenueEstimate: Array<RevenueEstimateEntry>;
}

export interface RevenueEstimateEntry {
    date: string;
    period: string;
    numberOfAnalysts: number;
    avgEstimate: number;
    lowEstimate: number;
    highEstimate: number;
    yearAgoSales: number;
    salesGrowth: number;
}

/*
    /eps_trend
*/
export interface EPSTrendRequest {
    symbol: string;
    figi: string;
    isin: string;
    cusip: string;
    exchange?: string;
    country?: string;
}

export interface EPSTrendResponse {
    meta: Meta;
    epsTrend: Array<EPSTrendEntry>;
}

export interface EPSTrendEntry {
    date: string;
    period: string;
    currentEstimate: number;
    sevenDaysAgo: number;
    thirtyDaysAgo: number;
    sixtyDaysAgo: number;
    ninetyDaysAgo: number;
}

/*
    /eps_revisions
*/
export interface EPSRevisionsRequest {
    symbol: string;
    figi: string;
    isin: string;
    cusip: string;
    exchange?: string;
    country?: string;
}

export interface EPSRevisionsResponse {
    meta: Meta;
    epsTrend: Array<EPSRevisionsEntry>;
}

export interface EPSRevisionsEntry {
    date: string;
    period: string;
    upLastWeek: number;
    upLastMonth: number;
    downLastWeek: number;
    downLastMonth: number;
}

/*
    /growth_estimates
*/
export interface GrowthEstimatesRequest {
    symbol: string;
    figi: string;
    isin: string;
    cusip: string;
    exchange?: string;
    country?: string;
}

export interface GrowthEstimatesResponse {
    meta: Meta;
    growthEstimates: {
        currentQuarter: number;
        nextQuarter: 0.01;
        currentYear: 0.087;
        nextYear: 0.055999998;
        nextFiveYearsPa: 0.094799995;
        pastFiveYearsPa: 0.23867;
    };
}

/*
    /recommendations
*/
export interface RecommendationsRequest {
    symbol: string;
    figi: string;
    isin: string;
    cusip: string;
    exchange?: string;
    country?: string;
}

export interface RecommendationsResponse {
    meta: Meta;
    trends: {
        currentMonth: BuySellRating;
        previousMonth: BuySellRating;
        twoMonthsAgo: BuySellRating;
        threeMonthsAgo: BuySellRating;
    },
    rating: number,
}

export interface BuySellRating {
    strongBuy: number;
    buy: number;
    hold: number;
    sell: number;
    strongSell: number;
}


/*
    /price_target
*/
export interface PriceTargetRequest {
    symbol: string;
    figi: string;
    isin: string;
    cusip: string;
    exchange?: string;
    country?: string;
}

export interface PriceTargetResponse {
    meta: Meta;
    priceTarget: {
        high: number;
        median: number;
        low: number;
        average: number;
        current: number;
        currency: string;
    }
}

/*
    /analyst_ratings/light
*/
export interface AnalystRatingsSnapshotRequest {
    symbol: string;
    figi: string;
    isin: string;
    cusip: string;
    exchange?: string;
    country?: string;
}

export interface AnalystRatingsSnapshotResponse {
    meta: Meta;
    ratings: Array<RatingsSnapshotEntry>;
}

export interface RatingsSnapshotEntry {
    date: string;
    firm: string;
    ratingChange: string;
    ratingCurrent: string;
    ratingPrior: string;
}

/*
    /analyst_ratings/us_equities
*/
export interface AnalystRatingsUSEquitiesRequest {
    symbol: string;
    figi: string;
    isin: string;
    cusip: string;
    exchange?: string;
    country?: string;
}

export interface AnalystRatingsUSEquitiesResponse {
    meta: Meta;
    ratings: Array<USEquitiesRatingsEntry>;
}

export interface USEquitiesRatingsEntry {
    date: string;
    firm: string;
    analystName: string;
    ratingChange: string;
    ratingCurrent: string;
    ratingPrior: string;
    time: string;
    actionPriceTarget: string;
    priceTargetCurrent: number;
    priceTargetPrior: number;
}