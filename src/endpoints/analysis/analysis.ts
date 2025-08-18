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
import { Endpoints } from '../endpoints'

export default class Analysis extends EndpointBase {
    constructor(apiClient: AxiosInstance) {
        super(apiClient);

    }

    // Endpoint fetching functions starts here
    async earningsEstimate(requestConfig: EarningsEstimateRequest): Promise<EarningsEstimateResponse> {
        const params = this.constructUrlParams(requestConfig, Endpoints.EarningsEstimate);
        return this.request<EarningsEstimateResponse>(Endpoints.EarningsEstimate, params);
    }

    async revenueEstimate(requestConfig: RevenueEstimateRequest): Promise<RevenueEstimateResponse> {
        const params = this.constructUrlParams(requestConfig, Endpoints.RevenueEstimate);

        return this.request<RevenueEstimateResponse>(Endpoints.RevenueEstimate, params);
    }

    async epsTrend(requestConfig: EPSTrendRequest): Promise<EPSTrendResponse> {
        const params = this.constructUrlParams(requestConfig, Endpoints.EpsTrend);
        return this.request<EPSTrendResponse>(Endpoints.EpsTrend, params);
    }

    async epsRevisions(requestConfig: EPSRevisionsRequest): Promise<EPSRevisionsResponse> {
        const params = this.constructUrlParams(requestConfig, Endpoints.EpsRevisions);
        return this.request<EPSRevisionsResponse>(Endpoints.EpsRevisions, params);
    }

    async growthEstimates(requestConfig: GrowthEstimatesRequest): Promise<GrowthEstimatesResponse> {
        const params = this.constructUrlParams(requestConfig, Endpoints.GrowthEstimates);
        return this.request<GrowthEstimatesResponse>(Endpoints.GrowthEstimates, params);
    }

    async recommendations(requestConfig: RecommendationsRequest): Promise<RecommendationsResponse> {
        const params = this.constructUrlParams(requestConfig, Endpoints.Recommendations);
        return this.request<RecommendationsResponse>(Endpoints.Recommendations, params);
    }
    async priceTarget(requestConfig: PriceTargetRequest): Promise<PriceTargetResponse> {
        const params = this.constructUrlParams(requestConfig, Endpoints.PriceTarget);
        return this.request<PriceTargetResponse>(Endpoints.PriceTarget, params);
    }
    async analystRatingsSnapshot(requestConfig: AnalystRatingsSnapshotRequest): Promise<AnalystRatingsSnapshotResponse> {
        const params = this.constructUrlParams(requestConfig, Endpoints.AnalystRatingsSnapshot);
        return this.request<AnalystRatingsSnapshotResponse>(Endpoints.AnalystRatingsSnapshot, params);
    }
    async analystRatingsUsEquities(requestConfig: AnalystRatingsUSEquitiesRequest): Promise<AnalystRatingsUSEquitiesResponse> {
        const params = this.constructUrlParams(requestConfig, Endpoints.AnalystRatingsUsEquities);
        return this.request<AnalystRatingsUSEquitiesResponse>(Endpoints.AnalystRatingsUsEquities, params);
    }
}