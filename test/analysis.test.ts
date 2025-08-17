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
import { createMock } from "ts-auto-mock";

describe('Analysis API Endpoint response test', () => {
    beforeEach(() => {
        nock.cleanAll();
    })
    afterEach(() => {
        // Verify that all expected HTTP calls were made
        assert.strictEqual(nock.isDone(), true, 'Not all nocked requests were called');
    });

    it("Should return a valid EarningsEstimateResponse object", async () => {
        const earningsEstimateResponseMockData = createMock<EarningsEstimateResponse>();
        const earningsEstimateRequestMockData = createMock<EarningsEstimateRequest>();
        const client = new TwelveDataWrapper();
        nock(getDefaultConfig().baseUrl!)
            .get(`/earnings_estimate?apikey=demo`) // with no config it should only be appending the apikey
            .reply(200, earningsEstimateResponseMockData);

        const result = await client.analysis.earningsEstimate(earningsEstimateRequestMockData);
        assert.deepEqual(result, earningsEstimateResponseMockData)
    });

    it("Should return a valid RevenueEstimateResponse object", async () => {
        const revenueEstimateResponseMockData = createMock<RevenueEstimateResponse>();
        const revenueEstimateRequestMockData = createMock<RevenueEstimateRequest>();
        const client = new TwelveDataWrapper();
        nock(getDefaultConfig().baseUrl!)
            .get(`/revenue_estimate?apikey=demo`)
            .reply(200, revenueEstimateResponseMockData);

        const result = await client.analysis.revenueEstimate(revenueEstimateRequestMockData);
        assert.deepEqual(result, revenueEstimateResponseMockData)
    });

    it("Should return a valid EPSTrendResponse object", async () => {
        const epsTrendResponseMockData = createMock<EPSTrendResponse>();
        const epsTrendRequestMockData = createMock<EPSTrendRequest>();
        const client = new TwelveDataWrapper();
        nock(getDefaultConfig().baseUrl!)
            .get(`/eps_trend?apikey=demo`)
            .reply(200, epsTrendResponseMockData);

        const result = await client.analysis.epsTrend(epsTrendRequestMockData);
        assert.deepEqual(result, epsTrendResponseMockData)
    });

    it("Should return a valid EPSRevisionsResponse object", async () => {
        const epsRevisionsResponseMockData = createMock<EPSRevisionsResponse>();
        const epsRevisionsRequestMockData = createMock<EPSRevisionsRequest>();
        const client = new TwelveDataWrapper();
        nock(getDefaultConfig().baseUrl!)
            .get(`/eps_revisions?apikey=demo`)
            .reply(200, epsRevisionsResponseMockData);

        const result = await client.analysis.epsRevisions(epsRevisionsRequestMockData);
        assert.deepEqual(result, epsRevisionsResponseMockData)
    });

    it("Should return a valid GrowthEstimatesResponse object", async () => {
        const growthEstimatesResponseMockData = createMock<GrowthEstimatesResponse>();
        const growthEstimatesRequestMockData = createMock<GrowthEstimatesRequest>();
        const client = new TwelveDataWrapper();
        nock(getDefaultConfig().baseUrl!)
            .get(`/growth_estimates?apikey=demo`)
            .reply(200, growthEstimatesResponseMockData);

        const result = await client.analysis.growthEstimates(growthEstimatesRequestMockData);
        assert.deepEqual(result, growthEstimatesResponseMockData)
    });

    it("Should return a valid RecommendationsResponse object", async () => {
        const recommendationsResponseMockData = createMock<RecommendationsResponse>();
        const recommendationsRequestMockData = createMock<RecommendationsRequest>();
        const client = new TwelveDataWrapper();
        nock(getDefaultConfig().baseUrl!)
            .get(`/recommendations?apikey=demo`)
            .reply(200, recommendationsResponseMockData);

        const result = await client.analysis.recommendations(recommendationsRequestMockData);
        assert.deepEqual(result, recommendationsResponseMockData)
    });

    it("Should return a valid PriceTargetResponse object", async () => {
        const priceTargetResponseMockData = createMock<PriceTargetResponse>();
        const priceTargetRequestMockData = createMock<PriceTargetRequest>();
        const client = new TwelveDataWrapper();
        nock(getDefaultConfig().baseUrl!)
            .get(`/price_target?apikey=demo`)
            .reply(200, priceTargetResponseMockData);

        const result = await client.analysis.priceTarget(priceTargetRequestMockData);
        assert.deepEqual(result, priceTargetResponseMockData)
    });

    it("Should return a valid AnalystRatingsSnapshotResponse object", async () => {
        const analystRatingsSnapshotResponseMockData = createMock<AnalystRatingsSnapshotResponse>();
        const analystRatingsSnapshotRequestMockData = createMock<AnalystRatingsSnapshotRequest>();
        const client = new TwelveDataWrapper();
        nock(getDefaultConfig().baseUrl!)
            .get(`/analyst_ratings/light?apikey=demo`)
            .reply(200, analystRatingsSnapshotResponseMockData);

        const result = await client.analysis.analystRatingsSnapshot(analystRatingsSnapshotRequestMockData);
        assert.deepEqual(result, analystRatingsSnapshotResponseMockData)
    });

    it("Should return a valid AnalystRatingsUSEquitiesResponse object", async () => {
        const analystRatingsUSEquitiesResponseMockData = createMock<AnalystRatingsUSEquitiesResponse>();
        const analystRatingsUSEquitiesRequestMockData = createMock<AnalystRatingsUSEquitiesRequest>();
        const client = new TwelveDataWrapper();
        nock(getDefaultConfig().baseUrl!)
            .get(`/analyst_ratings/us_equities?apikey=demo`)
            .reply(200, analystRatingsUSEquitiesResponseMockData);

        const result = await client.analysis.analystRatingsUsEquities(analystRatingsUSEquitiesRequestMockData);
        assert.deepEqual(result, analystRatingsUSEquitiesResponseMockData)
    });

})