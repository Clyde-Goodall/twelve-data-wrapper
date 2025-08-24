import { AtLeastOne, Meta } from "../shared.interfaces";

/*
    /earnings_estimate
 */
interface EarningsEstimateRequestBase {
    symbol?: string;
    figi?: string;
    isin?: string;
    cusip?: string;
    exchange?: string;
    country?: string;
}

export type EarningsEstimateRequest = AtLeastOne<EarningsEstimateRequestBase, 'symbol' | 'figi' | 'isin' | 'cusip'>;

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
interface RevenueEstimateRequestBase {
    symbol?: string;
    figi?: string;
    isin?: string;
    cusip?: string;
    exchange?: string;
    country?: string;
    dp?: string;
}

export type RevenueEstimateRequest = AtLeastOne<RevenueEstimateRequestBase, 'symbol' | 'figi' | 'isin' | 'cusip'>;


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
interface EPSTrendRequestBase {
    symbol?: string;
    figi?: string;
    isin?: string;
    cusip?: string;
    exchange?: string;
    country?: string;
}

export type EPSTrendRequest = AtLeastOne<EPSTrendRequestBase, 'symbol' | 'figi' | 'isin' | 'cusip'>;

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
interface EPSRevisionsRequestBase {
    symbol?: string;
    figi?: string;
    isin?: string;
    cusip?: string;
    exchange?: string;
    country?: string;
}

export type EPSRevisionsRequest = AtLeastOne<EPSRevisionsRequestBase, 'symbol' | 'figi' | 'isin' | 'cusip'>;

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
interface GrowthEstimatesRequestBase {
    symbol?: string;
    figi?: string;
    isin?: string;
    cusip?: string;
    exchange?: string;
    country?: string;
}

export type GrowthEstimatesRequest = AtLeastOne<GrowthEstimatesRequestBase, 'symbol' | 'figi' | 'isin' | 'cusip'>;

export interface GrowthEstimatesResponse {
    meta: Meta;
    growthEstimates: {
        currentQuarter: number;
        nextQuarter: number;
        currentYear: number;
        nextYear: number;
        nextFiveYearsPa: number;
        pastFiveYearsPa: number;
    };
}

/*
    /recommendations
*/
interface RecommendationsRequestBase {
    symbol?: string;
    figi?: string;
    isin?: string;
    cusip?: string;
    exchange?: string;
    country?: string;
}

export type RecommendationsRequest = AtLeastOne<RecommendationsRequestBase, 'symbol' | 'figi' | 'isin' | 'cusip'>;

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
interface PriceTargetRequestBase {
    symbol?: string;
    figi?: string;
    isin?: string;
    cusip?: string;
    exchange?: string;
    country?: string;
}

export type PriceTargetRequest = AtLeastOne<PriceTargetRequestBase, 'symbol' | 'figi' | 'isin' | 'cusip'>;

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
interface AnalystRatingsSnapshotRequestBase {
    symbol?: string;
    figi?: string;
    isin?: string;
    cusip?: string;
    exchange?: string;
    country?: string;
}

export type AnalystRatingsSnapshotRequest = AtLeastOne<AnalystRatingsSnapshotRequestBase, 'symbol' | 'figi' | 'isin' | 'cusip'>;

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
interface AnalystRatingsUSEquitiesRequestBase {
    symbol?: string;
    figi?: string;
    isin?: string;
    cusip?: string;
    exchange?: string;
    country?: string;
}

export type AnalystRatingsUSEquitiesRequest = AtLeastOne<AnalystRatingsUSEquitiesRequestBase, 'symbol' | 'figi' | 'isin' | 'cusip'>;


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