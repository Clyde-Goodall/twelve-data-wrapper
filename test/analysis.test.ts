import {afterEach, beforeEach, describe, it} from "node:test";
import assert from "node:assert";
import nock from "nock";
import TwelveDataWrapper from "../src/twelveDataWrapper";
import {getDefaultConfig} from "../src/defaults";
import { 
    EarningsEstimateRequest, 
    EarningsEstimateResponse,
    RevenueEstimateRequest,
    RevenueEstimateResponse,
    EPSTrendRequest,
    EPSTrendResponse,
    EPSRevisionsRequest,
    EPSRevisionsResponse,
    GrowthEstimatesRequest,
    GrowthEstimatesResponse,
    RecommendationsRequest,
    RecommendationsResponse,
    PriceTargetRequest,
    PriceTargetResponse,
    AnalystRatingsSnapshotRequest,
    AnalystRatingsSnapshotResponse,
    AnalystRatingsUSEquitiesRequest,
    AnalystRatingsUSEquitiesResponse
} from "../src/endpoints/analysis/analysis.interfaces";

describe('Analysis API Endpoint response test', () => {
    beforeEach(() => {
        nock.cleanAll();
    })
    afterEach(() => {
        // Verify that all expected HTTP calls were made
        assert.strictEqual(nock.isDone(), true, 'Not all nocked requests were called');
    });

    it("Should return a valid EarningsEstimateResponse object", async () => {
        const earningsEstimateResponseMockData: EarningsEstimateResponse = {
            meta: { symbol: "AAPL", name: "Apple Inc.", currency: "USD", exchangeTimezone: "America/New_York", exchange: "NASDAQ", micCode: "XNGS", type: "Common Stock" },
            earningsEstimate: [{
                date: "2023-12-31",
                period: "Q4",
                number_of_analysts: 15,
                avg_estimate: 2.5,
                low_estimate: 2.0,
                high_estimate: 3.0,
                year_ago_eps: 2.1
            }]
        };
        const earningsEstimateRequestMockData: EarningsEstimateRequest = {
            symbol: "AAPL",
            figi: "BBG000B9XRY4",
            isin: "US0378331005",
            cusip: "037833100"
        };
        const client = new TwelveDataWrapper();
        nock(getDefaultConfig().baseUrl!)
            .get(`/earnings_estimate?apikey=demo`) // with no config it should only be appending the apikey
            .reply(200, earningsEstimateResponseMockData);

        const result = await client.analysis.earningsEstimate(earningsEstimateRequestMockData);
        assert.deepEqual(result, earningsEstimateResponseMockData)
    });

    it("Should return a valid RevenueEstimateResponse object", async () => {
        const revenueEstimateResponseMockData: RevenueEstimateResponse = {
            meta: { symbol: "AAPL", name: "Apple Inc.", currency: "USD", exchangeTimezone: "America/New_York", exchange: "NASDAQ", micCode: "XNGS", type: "Common Stock" },
            revenueEstimate: [{
                date: "2023-12-31",
                period: "Q4",
                number_of_analysts: 12,
                avg_estimate: 120000000000,
                low_estimate: 115000000000,
                high_estimate: 125000000000,
                year_ago_sales: 110000000000,
                sales_growth: 0.09
            }]
        };
        const revenueEstimateRequestMockData: RevenueEstimateRequest = {
            symbol: "AAPL",
            figi: "BBG000B9XRY4",
            isin: "US0378331005",
            cusip: "037833100"
        };
        const client = new TwelveDataWrapper();
        nock(getDefaultConfig().baseUrl!)
            .get(`/revenue_estimate?apikey=demo`)
            .reply(200, revenueEstimateResponseMockData);

        const result = await client.analysis.revenueEstimate(revenueEstimateRequestMockData);
        assert.deepEqual(result, revenueEstimateResponseMockData)
    });

    it("Should return a valid EPSTrendResponse object", async () => {
        const epsTrendResponseMockData: EPSTrendResponse = {
            meta: { symbol: "AAPL", name: "Apple Inc.", currency: "USD", exchangeTimezone: "America/New_York", exchange: "NASDAQ", micCode: "XNGS", type: "Common Stock" },
            epsTrend: [{
                date: "2023-12-31",
                period: "Q4",
                current_estimate: 2.5,
                sevenDaysAgo: 2.4,
                thirtyDaysAgo: 2.3,
                sixtyDaysAgo: 2.2,
                ninetyDaysAgo: 2.1
            }]
        };
        const epsTrendRequestMockData: EPSTrendRequest = {
            symbol: "AAPL",
            figi: "BBG000B9XRY4",
            isin: "US0378331005",
            cusip: "037833100"
        };
        const client = new TwelveDataWrapper();
        nock(getDefaultConfig().baseUrl!)
            .get(`/eps_trend?apikey=demo`)
            .reply(200, epsTrendResponseMockData);

        const result = await client.analysis.epsTrend(epsTrendRequestMockData);
        assert.deepEqual(result, epsTrendResponseMockData)
    });

    it("Should return a valid EPSRevisionsResponse object", async () => {
        const epsRevisionsResponseMockData: EPSRevisionsResponse = {
            meta: { symbol: "AAPL", name: "Apple Inc.", currency: "USD", exchangeTimezone: "America/New_York", exchange: "NASDAQ", micCode: "XNGS", type: "Common Stock" },
            epsTrend: [{
                date: "2023-12-31",
                period: "Q4",
                upLastWeek: 3,
                upLastMonth: 5,
                downLastWeek: 1,
                downLastMonth: 2
            }]
        };
        const epsRevisionsRequestMockData: EPSRevisionsRequest = {
            symbol: "AAPL",
            figi: "BBG000B9XRY4",
            isin: "US0378331005",
            cusip: "037833100"
        };
        const client = new TwelveDataWrapper();
        nock(getDefaultConfig().baseUrl!)
            .get(`/eps_revisions?apikey=demo`)
            .reply(200, epsRevisionsResponseMockData);

        const result = await client.analysis.epsRevisions(epsRevisionsRequestMockData);
        assert.deepEqual(result, epsRevisionsResponseMockData)
    });

    it("Should return a valid GrowthEstimatesResponse object", async () => {
        const growthEstimatesResponseMockData: GrowthEstimatesResponse = {
            meta: { symbol: "AAPL", name: "Apple Inc.", currency: "USD", exchangeTimezone: "America/New_York", exchange: "NASDAQ", micCode: "XNGS", type: "Common Stock" },
            growthEstimates: {
                currentQuarter: 0.05,
                nextQuarter: 0.01,
                currentYear: 0.087,
                nextYear: 0.055999998,
                nextFiveYearsPa: 0.094799995,
                pastFiveYearsPa: 0.23867
            }
        };
        const growthEstimatesRequestMockData: GrowthEstimatesRequest = {
            symbol: "AAPL",
            figi: "BBG000B9XRY4",
            isin: "US0378331005",
            cusip: "037833100"
        };
        const client = new TwelveDataWrapper();
        nock(getDefaultConfig().baseUrl!)
            .get(`/growth_estimates?apikey=demo`)
            .reply(200, growthEstimatesResponseMockData);

        const result = await client.analysis.growthEstimates(growthEstimatesRequestMockData);
        assert.deepEqual(result, growthEstimatesResponseMockData)
    });

    it("Should return a valid RecommendationsResponse object", async () => {
        const recommendationsResponseMockData: RecommendationsResponse = {
            meta: { symbol: "AAPL", name: "Apple Inc.", currency: "USD", exchangeTimezone: "America/New_York", exchange: "NASDAQ", micCode: "XNGS", type: "Common Stock" },
            trends: {
                currentMonth: {
                    strongBuy: 5,
                    buy: 8,
                    hold: 12,
                    sell: 2,
                    strongSell: 1
                },
                previousMonth: {
                    strongBuy: 4,
                    buy: 9,
                    hold: 11,
                    sell: 3,
                    strongSell: 1
                },
                twoMonthsAgo: {
                    strongBuy: 6,
                    buy: 7,
                    hold: 10,
                    sell: 4,
                    strongSell: 1
                },
                threeMonthsAgo: {
                    strongBuy: 5,
                    buy: 6,
                    hold: 13,
                    sell: 3,
                    strongSell: 1
                }
            },
            rating: 2.3
        };
        const recommendationsRequestMockData: RecommendationsRequest = {
            symbol: "AAPL",
            figi: "BBG000B9XRY4",
            isin: "US0378331005",
            cusip: "037833100"
        };
        const client = new TwelveDataWrapper();
        nock(getDefaultConfig().baseUrl!)
            .get(`/recommendations?apikey=demo`)
            .reply(200, recommendationsResponseMockData);

        const result = await client.analysis.recommendations(recommendationsRequestMockData);
        assert.deepEqual(result, recommendationsResponseMockData)
    });

    it("Should return a valid PriceTargetResponse object", async () => {
        const priceTargetResponseMockData: PriceTargetResponse = {
            meta: { symbol: "AAPL", name: "Apple Inc.", currency: "USD", exchangeTimezone: "America/New_York", exchange: "NASDAQ", micCode: "XNGS", type: "Common Stock" },
            priceTarget: {
                high: 200.0,
                median: 180.0,
                low: 160.0,
                average: 180.5,
                current: 175.0,
                currency: "USD"
            }
        };
        const priceTargetRequestMockData: PriceTargetRequest = {
            symbol: "AAPL",
            figi: "BBG000B9XRY4",
            isin: "US0378331005",
            cusip: "037833100"
        };
        const client = new TwelveDataWrapper();
        nock(getDefaultConfig().baseUrl!)
            .get(`/price_target?apikey=demo`)
            .reply(200, priceTargetResponseMockData);

        const result = await client.analysis.priceTarget(priceTargetRequestMockData);
        assert.deepEqual(result, priceTargetResponseMockData)
    });

    it("Should return a valid AnalystRatingsSnapshotResponse object", async () => {
        const analystRatingsSnapshotResponseMockData: AnalystRatingsSnapshotResponse = {
            meta: { symbol: "AAPL", name: "Apple Inc.", currency: "USD", exchangeTimezone: "America/New_York", exchange: "NASDAQ", micCode: "XNGS", type: "Common Stock" },
            ratings: [{
                date: "2023-12-01",
                firm: "Goldman Sachs",
                ratingChange: "Upgrade",
                ratingCurrent: "Buy",
                ratingPrior: "Hold"
            }]
        };
        const analystRatingsSnapshotRequestMockData: AnalystRatingsSnapshotRequest = {
            symbol: "AAPL",
            figi: "BBG000B9XRY4",
            isin: "US0378331005",
            cusip: "037833100"
        };
        const client = new TwelveDataWrapper();
        nock(getDefaultConfig().baseUrl!)
            .get(`/analyst_ratings/light?apikey=demo`)
            .reply(200, analystRatingsSnapshotResponseMockData);

        const result = await client.analysis.analystRatingsSnapshot(analystRatingsSnapshotRequestMockData);
        assert.deepEqual(result, analystRatingsSnapshotResponseMockData)
    });

    it("Should return a valid AnalystRatingsUSEquitiesResponse object", async () => {
        const analystRatingsUSEquitiesResponseMockData: AnalystRatingsUSEquitiesResponse = {
            meta: { symbol: "AAPL", name: "Apple Inc.", currency: "USD", exchangeTimezone: "America/New_York", exchange: "NASDAQ", micCode: "XNGS", type: "Common Stock" },
            ratings: [{
                date: "2023-12-01",
                firm: "Morgan Stanley",
                analystName: "John Doe",
                ratingChange: "Maintained",
                ratingCurrent: "Overweight",
                ratingPrior: "Overweight",
                time: "09:30:00",
                actionPriceTarget: "Raised",
                priceTargetCurrent: 185.0,
                priceTargetPrior: 180.0
            }]
        };
        const analystRatingsUSEquitiesRequestMockData: AnalystRatingsUSEquitiesRequest = {
            symbol: "AAPL",
            figi: "BBG000B9XRY4",
            isin: "US0378331005",
            cusip: "037833100"
        };
        const client = new TwelveDataWrapper();
        nock(getDefaultConfig().baseUrl!)
            .get(`/analyst_ratings/us_equities?apikey=demo`)
            .reply(200, analystRatingsUSEquitiesResponseMockData);

        const result = await client.analysis.analystRatingsUsEquities(analystRatingsUSEquitiesRequestMockData);
        assert.deepEqual(result, analystRatingsUSEquitiesResponseMockData)
    });

})