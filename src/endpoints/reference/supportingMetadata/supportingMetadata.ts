import { EndpointBase } from "../../../defaults";
import type { AxiosInstance } from "axios";
import { Endpoints } from "../../endpoints";
import {
    CountriesRequest,
    CountriesResponse,
    InstrumentTypeRequest,
    InstrumentTypeResponse,
    TechnicalIndicatorsRequest,
    TechnicalIndicatorsResponse
} from "./supportingMetadata.interfaces";

export default class SupportingMetadata extends EndpointBase {
    constructor(apiClient: AxiosInstance) {
        super(apiClient);
    }

    // Endpoint fetching functions starts here
    async countries(requestConfig: CountriesRequest): Promise<CountriesResponse> {
        const params = this.constructUrlParams(requestConfig, Endpoints.Countries);
        return this.request<CountriesResponse>(Endpoints.Countries, params);
    }

    async instrumentType(requestConfig: InstrumentTypeRequest): Promise<InstrumentTypeResponse> {
        const params = this.constructUrlParams(requestConfig, Endpoints.InstrumentType);
        return this.request<InstrumentTypeResponse>(Endpoints.InstrumentType, params);
    }

    async technicalIndicators(requestConfig: TechnicalIndicatorsRequest): Promise<TechnicalIndicatorsResponse> {
        const params = this.constructUrlParams(requestConfig, Endpoints.TechnicalIndicators);
        return this.request<TechnicalIndicatorsResponse>(Endpoints.TechnicalIndicators, params);
    }
}