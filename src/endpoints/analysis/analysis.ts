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
        const params = new URLSearchParams();

        const response = await this.apiClient.get(`/usage${params}`)
        if (response.status !== 200) {
            throw new Error(response.statusText);
        }
        return response.data;
    }

    async revenueEstimate(requestConfig: RevenueEstimateRequest): Promise<RevenueEstimateResponse> {
        const params = new URLSearchParams();

        const response = await this.apiClient.get(`/revenue_estimate${params}`)
        if (response.status !== 200) {
            throw new Error(response.statusText);
        }
        return response.data;
    }

    async epsTrend(requestConfig: EPSTrendRequest): Promise<EPSTrendResponse> {
        const params = new URLSearchParams();

        const response = await this.apiClient.get(`/eps_trend${params}`)
        if (response.status !== 200) {
            throw new Error(response.statusText);
        }
        return response.data;
    }

    async epsRevisions(requestConfig: EPSRevisionsRequest): Promise<EPSRevisionsResponse> {
        const params = new URLSearchParams();

        const response = await this.apiClient.get(`/eps_revisions${params}`)
        if (response.status !== 200) {
            throw new Error(response.statusText);
        }
        return response.data;
    }

    async growthEstimates(requestConfig: GrowthEstimatesRequest): Promise<GrowthEstimatesResponse> {
        const params = new URLSearchParams();

        const response = await this.apiClient.get(`/growth_estimates${params}`)
        if (response.status !== 200) {
            throw new Error(response.statusText);
        }
        return response.data;
    }

    async recommendations(requestConfig: RecommendationsRequest): Promise<RecommendationsResponse> {
        const params = new URLSearchParams();

        const response = await this.apiClient.get(`/recommendations${params}`)
        if (response.status !== 200) {
            throw new Error(response.statusText);
        }
        return response.data;
    }
    async priceTarget(requestConfig: PriceTargetRequest): Promise<PriceTargetResponse> {
        const params = new URLSearchParams();

        const response = await this.apiClient.get(`/price_target${params}`)
        if (response.status !== 200) {
            throw new Error(response.statusText);
        }
        return response.data;
    }
    async analystRatingsSnapshot(requestConfig: AnalystRatingsSnapshotRequest): Promise<AnalystRatingsSnapshotResponse> {
        const params = new URLSearchParams();

        const response = await this.apiClient.get(`/analyst_ratings/light${params}`)
        if (response.status !== 200) {
            throw new Error(response.statusText);
        }
        return response.data;
    }
    async analystRatingsUsEquities(requestConfig: AnalystRatingsUSEquitiesRequest): Promise<AnalystRatingsUSEquitiesResponse> {
        const params = new URLSearchParams();

        const response = await this.apiClient.get(`/analyst_ratings/us_equities${params}`)
        if (response.status !== 200) {
            throw new Error(response.statusText);
        }
        return response.data;
    }
}