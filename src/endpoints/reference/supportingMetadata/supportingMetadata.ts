import { EndpointBase } from "../../../defaults";
import type { AxiosInstance } from "axios";
import { Endpoints } from "../../endpoints";
import {
    CountriesResponse,
    InstrumentTypeResponse,
    TechnicalIndicatorsResponse
} from "./supportingMetadata.interfaces";

export default class SupportingMetadata extends EndpointBase {
    constructor(apiClient: AxiosInstance) {
        super(apiClient);
    }

    // Endpoint fetching functions starts here
    async getCountries(): Promise<CountriesResponse> {
        const params = this.constructUrlParams({}, Endpoints.Countries);
        return this.request<CountriesResponse>(Endpoints.Countries, params);
    }

    async getInstrumentType(): Promise<InstrumentTypeResponse> {
        const params = this.constructUrlParams({}, Endpoints.InstrumentType);
        return this.request<InstrumentTypeResponse>(Endpoints.InstrumentType, params);
    }

    async getTechnicalIndicators(): Promise<TechnicalIndicatorsResponse> {
        const params = this.constructUrlParams({}, Endpoints.TechnicalIndicators);
        return this.request<TechnicalIndicatorsResponse>(Endpoints.TechnicalIndicators, params);
    }
}