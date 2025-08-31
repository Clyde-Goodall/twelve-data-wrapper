import type { AxiosInstance } from "axios";
import { EndpointBase } from "../../defaults";
import { Endpoints } from "../endpoints";
import {
    EtfCompositionRequest,
    EtfCompositionResponse,
    EtfFullDataRequest,
    EtfFullDataResponse,
    EtfPerformanceRequest,
    EtfPerformanceResponse,
    EtfRiskRequest,
    EtfRiskResponse,
    EtfsDirectoryRequest,
    EtfsDirectoryResponse,
    EtfsFamilyRequest,
    EtfsFamilyResponse,
    EtfsTypeRequest,
    EtfsTypeResponse,
    EtfSummaryRequest,
    EtfSummaryResponse
} from "./etfs.interfaces";

export default class ETFs extends EndpointBase {
    constructor(apiClient: AxiosInstance) {
        super(apiClient);
    }

    // Endpoint fetching functions starts here
    async getEtfsDirectory(requestConfig?: EtfsDirectoryRequest): Promise<EtfsDirectoryResponse> {
        const params = this.constructUrlParams(requestConfig, Endpoints.EtfsDirectory);
        return this.get<EtfsDirectoryResponse>(Endpoints.EtfsDirectory, params);
    }

    async getEtfsFullData(requestConfig: EtfFullDataRequest): Promise<EtfFullDataResponse> {
        this.validateRequiredIdentifiers(requestConfig);

        const params = this.constructUrlParams(requestConfig, Endpoints.EtfsFullData);
        return this.get<EtfFullDataResponse>(Endpoints.EtfsFullData, params);
    }

    async getEtfsSummary(requestConfig: EtfSummaryRequest): Promise<EtfSummaryResponse> {
        this.validateRequiredIdentifiers(requestConfig);

        const params = this.constructUrlParams(requestConfig, Endpoints.EtfsSummary);
        return this.get<EtfSummaryResponse>(Endpoints.EtfsSummary, params);
    }

    async getEtfsPerformance(requestConfig: EtfPerformanceRequest): Promise<EtfPerformanceResponse> {
        this.validateRequiredIdentifiers(requestConfig);

        const params = this.constructUrlParams(requestConfig, Endpoints.ETfsPerformance);
        return this.get<EtfPerformanceResponse>(Endpoints.ETfsPerformance, params);
    }

    async getEtfsRisk(requestConfig: EtfRiskRequest): Promise<EtfRiskResponse> {
        this.validateRequiredIdentifiers(requestConfig);

        const params = this.constructUrlParams(requestConfig, Endpoints.EtfsRisk);
        return this.get<EtfRiskResponse>(Endpoints.EtfsRisk, params);
    }

    async getEtfsComposition(requestConfig: EtfCompositionRequest): Promise<EtfCompositionResponse> {
        this.validateRequiredIdentifiers(requestConfig);

        const params = this.constructUrlParams(requestConfig, Endpoints.EtfsComposition);
        return this.get<EtfCompositionResponse>(Endpoints.EtfsComposition, params);
    }

    async getEtfsFamilies(requestConfig?: EtfsFamilyRequest): Promise<EtfsFamilyResponse> {
        const params = this.constructUrlParams(requestConfig, Endpoints.EtfsFamilies);
        return this.get<EtfsFamilyResponse>(Endpoints.EtfsFamilies, params);
    }

    async getEtfsTypes(requestConfig?: EtfsTypeRequest): Promise<EtfsTypeResponse> {
        const params = this.constructUrlParams(requestConfig, Endpoints.EtfsTypes);
        return this.get<EtfsTypeResponse>(Endpoints.EtfsTypes, params);
    }

}