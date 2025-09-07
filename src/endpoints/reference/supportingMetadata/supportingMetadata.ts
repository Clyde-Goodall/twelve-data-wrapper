import { EndpointBase } from "../../../defaults";
import type { AxiosInstance } from "axios";
import { Endpoints } from "../../endpoints";
import {
    CountriesResponse,
    InstrumentTypeResponse,
    TechnicalIndicatorsResponse
} from "./supportingMetadata.interfaces";
import { RateLimiter } from "../../../rateLimiter";

export default class SupportingMetadata extends EndpointBase {
    constructor(
        apiClient: AxiosInstance,
        rateLimiter: RateLimiter
    ) {
        super(apiClient, rateLimiter);
    }

    // Endpoint fetching functions starts here
    async getCountries(): Promise<CountriesResponse> {
        const params = this.constructUrlParams({}, Endpoints.Countries);
        return this.get<CountriesResponse>(Endpoints.Countries, params);
    }

    async getInstrumentType(): Promise<InstrumentTypeResponse> {
        const params = this.constructUrlParams({}, Endpoints.InstrumentType);
        return this.get<InstrumentTypeResponse>(Endpoints.InstrumentType, params);
    }

    async getTechnicalIndicators(): Promise<TechnicalIndicatorsResponse> {
        const params = this.constructUrlParams({}, Endpoints.TechnicalIndicators);
        return this.get<TechnicalIndicatorsResponse>(Endpoints.TechnicalIndicators, params);
    }
}