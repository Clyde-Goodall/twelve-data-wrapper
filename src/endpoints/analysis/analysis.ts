import type { AxiosInstance } from "axios";
import { EndpointBase } from "../../defaults";
import {
    AnalystRatingsSnapshotRequest,
    AnalystRatingsSnapshotResponse,
    AnalystRatingsUSEquitiesRequest,
    AnalystRatingsUSEquitiesResponse,
    EarningsEstimateRequest,
    EarningsEstimateResponse,
    EPSRevisionsRequest,
    EPSRevisionsResponse,
    EPSTrendRequest,
    EPSTrendResponse,
    GrowthEstimatesRequest,
    GrowthEstimatesResponse,
    PriceTargetRequest,
    PriceTargetResponse,
    RecommendationsRequest,
    RecommendationsResponse,
    RevenueEstimateRequest,
    RevenueEstimateResponse
} from "./analysis.interfaces";
import { Endpoints } from "../endpoints";
import { globalTransformationManager } from "../../serialization";

export default class Analysis extends EndpointBase {
    constructor(apiClient: AxiosInstance) {
        super(apiClient);
        registerEPSTrendEstimateTransformations();
        registerEPSRevisionsEstimateTransformations();
        registerRecommendationsTransformations()
        registerRevenueEstimateTransformations();
        registerEarningsEstimateTransformations();
        registerAnalystRatingsSnapshotTransformations();
        registerAnalystRatingsUSEquitiesTransformations();
    }

    // Endpoint fetching functions starts here
    async getEarningsEstimate(requestConfig: EarningsEstimateRequest): Promise<EarningsEstimateResponse> {
        if (!this.atLeastOneOf(requestConfig, ["symbol", "figi", "isin", "cusip"])) {
            throw new Error('At least one of symbol, figi, isin or cusip is required');
        }

        const params = this.constructUrlParams(requestConfig, Endpoints.EarningsEstimate);
        return this.request<EarningsEstimateResponse>(Endpoints.EarningsEstimate, params);
    }

    async getRevenueEstimate(requestConfig: RevenueEstimateRequest): Promise<RevenueEstimateResponse> {
        if (!this.atLeastOneOf(requestConfig, ["symbol", "figi", "isin", "cusip"])) {
            throw new Error('At least one of symbol, figi, isin or cusip is required');
        }

        const params = this.constructUrlParams(requestConfig, Endpoints.RevenueEstimate);
        return this.request<RevenueEstimateResponse>(Endpoints.RevenueEstimate, params);
    }

    async getEpsTrend(requestConfig: EPSTrendRequest): Promise<EPSTrendResponse> {
        if (!this.atLeastOneOf(requestConfig, ["symbol", "figi", "isin", "cusip"])) {
            throw new Error('At least one of symbol, figi, isin or cusip is required');
        }

        const params = this.constructUrlParams(requestConfig, Endpoints.EpsTrend);
        return this.request<EPSTrendResponse>(Endpoints.EpsTrend, params);
    }

    async getEpsRevisions(requestConfig: EPSRevisionsRequest): Promise<EPSRevisionsResponse> {
        if (!this.atLeastOneOf(requestConfig, ["symbol", "figi", "isin", "cusip"])) {
            throw new Error('At least one of symbol, figi, isin or cusip is required');
        }

        const params = this.constructUrlParams(requestConfig, Endpoints.EpsRevisions);
        return this.request<EPSRevisionsResponse>(Endpoints.EpsRevisions, params);
    }

    async getGrowthEstimates(requestConfig: GrowthEstimatesRequest): Promise<GrowthEstimatesResponse> {
        if (!this.atLeastOneOf(requestConfig, ["symbol", "figi", "isin", "cusip"])) {
            throw new Error('At least one of symbol, figi, isin or cusip is required');
        }

        const params = this.constructUrlParams(requestConfig, Endpoints.GrowthEstimates);
        return this.request<GrowthEstimatesResponse>(Endpoints.GrowthEstimates, params);
    }

    async getRecommendations(requestConfig: RecommendationsRequest): Promise<RecommendationsResponse> {
        if (!this.atLeastOneOf(requestConfig, ["symbol", "figi", "isin", "cusip"])) {
            throw new Error('At least one of symbol, figi, isin or cusip is required');
        }

        const params = this.constructUrlParams(requestConfig, Endpoints.Recommendations);
        return this.request<RecommendationsResponse>(Endpoints.Recommendations, params);
    }
    
    async getPriceTarget(requestConfig: PriceTargetRequest): Promise<PriceTargetResponse> {
        if (!this.atLeastOneOf(requestConfig, ["symbol", "figi", "isin", "cusip"])) {
            throw new Error('At least one of symbol, figi, isin or cusip is required');
        }

        const params = this.constructUrlParams(requestConfig, Endpoints.PriceTarget);
        return this.request<PriceTargetResponse>(Endpoints.PriceTarget, params);
    }
    
    async getAnalystRatingsSnapshot(requestConfig: AnalystRatingsSnapshotRequest): Promise<AnalystRatingsSnapshotResponse> {
        if (!this.atLeastOneOf(requestConfig, ["symbol", "figi", "isin", "cusip"])) {
            throw new Error('At least one of symbol, figi, isin or cusip is required');
        }

        const params = this.constructUrlParams(requestConfig, Endpoints.AnalystRatingsSnapshot);
        return this.request<AnalystRatingsSnapshotResponse>(Endpoints.AnalystRatingsSnapshot, params);
    }
    
    async getAnalystRatingsUsEquities(requestConfig: AnalystRatingsUSEquitiesRequest): Promise<AnalystRatingsUSEquitiesResponse> {
        if (!this.atLeastOneOf(requestConfig, ["symbol", "figi", "isin", "cusip"])) {
            throw new Error('At least one of symbol, figi, isin or cusip is required');
        }

        const params = this.constructUrlParams(requestConfig, Endpoints.AnalystRatingsUsEquities);
        return this.request<AnalystRatingsUSEquitiesResponse>(Endpoints.AnalystRatingsUsEquities, params);
    }
}

function registerEarningsEstimateTransformations() {
    globalTransformationManager.addEndpointConfig(Endpoints.EarningsEstimate, {
        dateFields: ['date'],
    });
}

function registerRevenueEstimateTransformations() {
    globalTransformationManager.addEndpointConfig(Endpoints.RevenueEstimate, {
        dateFields: ['date'],
    });
}

function registerRecommendationsTransformations() {
    globalTransformationManager.addEndpointConfig(Endpoints.Recommendations, {
        responseMappings: {
            '2_months_ago': 'twoMonthsAgo',
            '3_months_ago': 'threeMonthsAgo',
        },
        dateFields: ['date'],
    });
}

function registerEPSTrendEstimateTransformations() {
    globalTransformationManager.addEndpointConfig(Endpoints.EpsTrend, {
        dateFields: ['date'],
    });
}

function registerEPSRevisionsEstimateTransformations() {
    globalTransformationManager.addEndpointConfig(Endpoints.EpsRevisions, {
        dateFields: ['date'],
    });
}

function registerAnalystRatingsSnapshotTransformations() {
    globalTransformationManager.addEndpointConfig(Endpoints.AnalystRatingsSnapshot, {
        dateFields: ['date'],
    });
}

function registerAnalystRatingsUSEquitiesTransformations() {
    globalTransformationManager.addEndpointConfig(Endpoints.AnalystRatingsUsEquities, {
        dateFields: ['date'],
    });
}
