import type { AxiosInstance } from "axios";
import { EndpointBase } from "../../defaults";
import { Endpoints } from "../endpoints";
import {
    EtfsDirectoryRequest, 
    EtfsDirectoryResponse,
    EtfFullDataRequest,
    EtfFullDataResponse,
    EtfSummaryRequest,
    EtfSummaryResponse,
    EtfPerformanceRequest,
    EtfPerformanceResponse,
    EtfRiskRequest,
    EtfRiskResponse,
    EtfCompositionRequest,
    EtfCompositionResponse,
    EtfsFamilyRequest,
    EtfsFamilyResponse,
    EtfsTypeRequest,
    EtfsTypeResponse
} from "./etfs.interfaces";

export default class ETFs extends EndpointBase {
    constructor(apiClient: AxiosInstance) {
        super(apiClient);
    }

    // Endpoint fetching functions starts here
    async getEtfsDirectory(requestConfig?: EtfsDirectoryRequest): Promise<EtfsDirectoryResponse> {
        const params = this.constructUrlParams(requestConfig, Endpoints.EtfsDirectory);
        return this.request<EtfsDirectoryResponse>(Endpoints.EtfsDirectory, params);
    }

    async getEtfsFullData(requestConfig: EtfFullDataRequest): Promise<EtfFullDataResponse> {
        this.validateRequiredIdentifiers(requestConfig);

        const params = this.constructUrlParams(requestConfig, Endpoints.EtfsFullData);
        return this.request<EtfFullDataResponse>(Endpoints.EtfsFullData, params);
    }

    async getEtfsSummary(requestConfig: EtfSummaryRequest): Promise<EtfSummaryResponse> {
        this.validateRequiredIdentifiers(requestConfig);

        const params = this.constructUrlParams(requestConfig, Endpoints.EtfsSummary);
        return this.request<EtfSummaryResponse>(Endpoints.EtfsSummary, params);
    }

    async getEtfsPerformance(requestConfig: EtfPerformanceRequest): Promise<EtfPerformanceResponse> {
        this.validateRequiredIdentifiers(requestConfig);

        const params = this.constructUrlParams(requestConfig, Endpoints.ETfsPerformance);
        return this.request<EtfPerformanceResponse>(Endpoints.ETfsPerformance, params);
    }

    async getEtfsRisk(requestConfig: EtfRiskRequest): Promise<EtfRiskResponse> {
        this.validateRequiredIdentifiers(requestConfig);

        const params = this.constructUrlParams(requestConfig, Endpoints.EtfsRisk);
        return this.request<EtfRiskResponse>(Endpoints.EtfsRisk, params);
    }

    async getEtfsComposition(requestConfig: EtfCompositionRequest): Promise<EtfCompositionResponse> {
        this.validateRequiredIdentifiers(requestConfig);

        const params = this.constructUrlParams(requestConfig, Endpoints.EtfsComposition);
        return this.request<EtfCompositionResponse>(Endpoints.EtfsComposition, params);
    }

    async getEtfsFamilies(requestConfig?: EtfsFamilyRequest): Promise<EtfsFamilyResponse> {
        const params = this.constructUrlParams(requestConfig, Endpoints.EtfsFamilies);
        return this.request<EtfsFamilyResponse>(Endpoints.EtfsFamilies, params);
    }

    async getEtfsTypes(requestConfig?: EtfsTypeRequest): Promise<EtfsTypeResponse> {
        const params = this.constructUrlParams(requestConfig, Endpoints.EtfsTypes);
        return this.request<EtfsTypeResponse>(Endpoints.EtfsTypes, params);
    }

}