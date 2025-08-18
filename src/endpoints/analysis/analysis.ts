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


export default class Analysis extends EndpointBase {
    constructor(apiClient: AxiosInstance) {
        super(apiClient);
    }

    // Endpoint fetching functions starts here
    async earningsEstimate(requestConfig: EarningsEstimateRequest): Promise<EarningsEstimateResponse> {
        const params = this.constructUrlParams(requestConfig, '/earnings_estimate');
        return this.request<EarningsEstimateResponse>('/earnings_estimate', params);
    }

    async revenueEstimate(requestConfig: RevenueEstimateRequest): Promise<RevenueEstimateResponse> {
        const params = this.constructUrlParams(requestConfig, '/revenue_estimate');
        return this.request<RevenueEstimateResponse>('/revenue_estimate', params);
    }

    async epsTrend(requestConfig: EPSTrendRequest): Promise<EPSTrendResponse> {
        const params = this.constructUrlParams(requestConfig, '/eps_trend');
        return this.request<EPSTrendResponse>('/eps_trend', params);
    }

    async epsRevisions(requestConfig: EPSRevisionsRequest): Promise<EPSRevisionsResponse> {
        const params = this.constructUrlParams(requestConfig, '/eps_revisions');
        return this.request<EPSRevisionsResponse>('/eps_revisions', params);
    }

    async growthEstimates(requestConfig: GrowthEstimatesRequest): Promise<GrowthEstimatesResponse> {
        const params = this.constructUrlParams(requestConfig, '/growth_estimates');
        return this.request<GrowthEstimatesResponse>('/growth_estimates', params);
    }

    async recommendations(requestConfig: RecommendationsRequest): Promise<RecommendationsResponse> {
        const params = this.constructUrlParams(requestConfig, '/recommendations');
        return this.request<RecommendationsResponse>('/recommendations', params);
    }
    async priceTarget(requestConfig: PriceTargetRequest): Promise<PriceTargetResponse> {
        const params = this.constructUrlParams(requestConfig, '/price_target');
        return this.request<PriceTargetResponse>('/price_target', params);
    }
    async analystRatingsSnapshot(requestConfig: AnalystRatingsSnapshotRequest): Promise<AnalystRatingsSnapshotResponse> {
        const params = this.constructUrlParams(requestConfig, '/analyst_ratings/light');
        return this.request<AnalystRatingsSnapshotResponse>('/analyst_ratings/light', params);
    }
    async analystRatingsUsEquities(requestConfig: AnalystRatingsUSEquitiesRequest): Promise<AnalystRatingsUSEquitiesResponse> {
        const params = this.constructUrlParams(requestConfig, '/analyst_ratings/us_equities');
        return this.request<AnalystRatingsUSEquitiesResponse>('/analyst_ratings/us_equities', params);
    }
}