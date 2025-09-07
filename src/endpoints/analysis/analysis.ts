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
import { RateLimiter } from "../../rateLimiter";

export default class Analysis extends EndpointBase {
    constructor(
        apiClient: AxiosInstance,
        rateLimiter: RateLimiter
    ) {
        super(apiClient, rateLimiter);
        registerRecommendationsTransformations();
    }

    // Endpoint fetching functions starts here
    async getEarningsEstimate(requestConfig: EarningsEstimateRequest): Promise<EarningsEstimateResponse> {
        this.validateRequiredIdentifiers(requestConfig);

        const params = this.constructUrlParams(requestConfig, Endpoints.EarningsEstimate);
        return this.get<EarningsEstimateResponse>(Endpoints.EarningsEstimate, params);
    }

    async getRevenueEstimate(requestConfig: RevenueEstimateRequest): Promise<RevenueEstimateResponse> {
        this.validateRequiredIdentifiers(requestConfig);

        const params = this.constructUrlParams(requestConfig, Endpoints.RevenueEstimate);
        return this.get<RevenueEstimateResponse>(Endpoints.RevenueEstimate, params);
    }

    async getEpsTrend(requestConfig: EPSTrendRequest): Promise<EPSTrendResponse> {
        this.validateRequiredIdentifiers(requestConfig);

        const params = this.constructUrlParams(requestConfig, Endpoints.EpsTrend);
        return this.get<EPSTrendResponse>(Endpoints.EpsTrend, params);
    }

    async getEpsRevisions(requestConfig: EPSRevisionsRequest): Promise<EPSRevisionsResponse> {
        this.validateRequiredIdentifiers(requestConfig);

        const params = this.constructUrlParams(requestConfig, Endpoints.EpsRevisions);
        return this.get<EPSRevisionsResponse>(Endpoints.EpsRevisions, params);
    }

    async getGrowthEstimates(requestConfig: GrowthEstimatesRequest): Promise<GrowthEstimatesResponse> {
        this.validateRequiredIdentifiers(requestConfig);

        const params = this.constructUrlParams(requestConfig, Endpoints.GrowthEstimates);
        return this.get<GrowthEstimatesResponse>(Endpoints.GrowthEstimates, params);
    }

    async getRecommendations(requestConfig: RecommendationsRequest): Promise<RecommendationsResponse> {
        this.validateRequiredIdentifiers(requestConfig);

        const params = this.constructUrlParams(requestConfig, Endpoints.Recommendations);
        return this.get<RecommendationsResponse>(Endpoints.Recommendations, params);
    }

    async getPriceTarget(requestConfig: PriceTargetRequest): Promise<PriceTargetResponse> {
        this.validateRequiredIdentifiers(requestConfig);

        const params = this.constructUrlParams(requestConfig, Endpoints.PriceTarget);
        return this.get<PriceTargetResponse>(Endpoints.PriceTarget, params);
    }

    async getAnalystRatingsSnapshot(requestConfig: AnalystRatingsSnapshotRequest): Promise<AnalystRatingsSnapshotResponse> {
        this.validateRequiredIdentifiers(requestConfig);

        const params = this.constructUrlParams(requestConfig, Endpoints.AnalystRatingsSnapshot);
        return this.get<AnalystRatingsSnapshotResponse>(Endpoints.AnalystRatingsSnapshot, params);
    }

    async getAnalystRatingsUsEquities(requestConfig: AnalystRatingsUSEquitiesRequest): Promise<AnalystRatingsUSEquitiesResponse> {
        this.validateRequiredIdentifiers(requestConfig);

        const params = this.constructUrlParams(requestConfig, Endpoints.AnalystRatingsUsEquities);
        return this.get<AnalystRatingsUSEquitiesResponse>(Endpoints.AnalystRatingsUsEquities, params);
    }
}

function registerRecommendationsTransformations() {
    globalTransformationManager.addEndpointConfig(Endpoints.Recommendations, {
        responseMappings: {
            "2_months_ago": "twoMonthsAgo",
            "3_months_ago": "threeMonthsAgo",
        }
    });
}
