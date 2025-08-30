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
    // TODO: runtime atleastone for 'symbol' | 'figi' | 'isin' | 'cusip'
    async getEarningsEstimate(requestConfig: EarningsEstimateRequest): Promise<EarningsEstimateResponse> {
        const params = this.constructUrlParams(requestConfig, Endpoints.EarningsEstimate);
        return this.request<EarningsEstimateResponse>(Endpoints.EarningsEstimate, params);
    }

    // TODO: runtime atleastone for 'symbol' | 'figi' | 'isin' | 'cusip'
    async getRevenueEstimate(requestConfig: RevenueEstimateRequest): Promise<RevenueEstimateResponse> {
        const params = this.constructUrlParams(requestConfig, Endpoints.RevenueEstimate);

        return this.request<RevenueEstimateResponse>(Endpoints.RevenueEstimate, params);
    }

    // TODO: runtime atleastone for 'symbol' | 'figi' | 'isin' | 'cusip'
    async getEpsTrend(requestConfig: EPSTrendRequest): Promise<EPSTrendResponse> {
        const params = this.constructUrlParams(requestConfig, Endpoints.EpsTrend);
        return this.request<EPSTrendResponse>(Endpoints.EpsTrend, params);
    }

    // TODO: runtime atleastone for 'symbol' | 'figi' | 'isin' | 'cusip'
    async getEpsRevisions(requestConfig: EPSRevisionsRequest): Promise<EPSRevisionsResponse> {
        const params = this.constructUrlParams(requestConfig, Endpoints.EpsRevisions);
        return this.request<EPSRevisionsResponse>(Endpoints.EpsRevisions, params);
    }

    // TODO: runtime atleastone for 'symbol' | 'figi' | 'isin' | 'cusip'
    async getGrowthEstimates(requestConfig: GrowthEstimatesRequest): Promise<GrowthEstimatesResponse> {
        const params = this.constructUrlParams(requestConfig, Endpoints.GrowthEstimates);
        return this.request<GrowthEstimatesResponse>(Endpoints.GrowthEstimates, params);
    }

    // TODO: runtime atleastone for 'symbol' | 'figi' | 'isin' | 'cusip'
    async getRecommendations(requestConfig: RecommendationsRequest): Promise<RecommendationsResponse> {
        const params = this.constructUrlParams(requestConfig, Endpoints.Recommendations);
        return this.request<RecommendationsResponse>(Endpoints.Recommendations, params);
    }
    
    // TODO: runtime atleastone for 'symbol' | 'figi' | 'isin' | 'cusip'
    async getPriceTarget(requestConfig: PriceTargetRequest): Promise<PriceTargetResponse> {
        const params = this.constructUrlParams(requestConfig, Endpoints.PriceTarget);
        return this.request<PriceTargetResponse>(Endpoints.PriceTarget, params);
    }
    
    // TODO: runtime atleastone for 'symbol' | 'figi' | 'isin' | 'cusip'
    async getAnalystRatingsSnapshot(requestConfig: AnalystRatingsSnapshotRequest): Promise<AnalystRatingsSnapshotResponse> {
        const params = this.constructUrlParams(requestConfig, Endpoints.AnalystRatingsSnapshot);
        return this.request<AnalystRatingsSnapshotResponse>(Endpoints.AnalystRatingsSnapshot, params);
    }
    
    // TODO: runtime atleastone for 'symbol' | 'figi' | 'isin' | 'cusip'
    async getAnalystRatingsUsEquities(requestConfig: AnalystRatingsUSEquitiesRequest): Promise<AnalystRatingsUSEquitiesResponse> {
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
