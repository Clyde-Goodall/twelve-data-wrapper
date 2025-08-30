import type { AxiosInstance } from "axios";
import { EndpointBase } from "../../defaults";
import { Endpoints } from "../endpoints";
import {
    CurrencyConversionRequest,
    CurrencyConversionResponse,
    ExchangeRateRequest,
    ExchangeRateResponse
} from "./currencies.interfaces";

export default class Currencies extends EndpointBase {
    constructor(apiClient: AxiosInstance) {
        super(apiClient);
    }

    // Endpoint fetching functions starts here
    async getExchangeRate(requestConfig: ExchangeRateRequest): Promise<ExchangeRateResponse> {
        const params = this.constructUrlParams(requestConfig, Endpoints.ExchangeRate);
        return this.request<ExchangeRateResponse>(Endpoints.ExchangeRate, params);
    }

    async getCurrencyConversion(requestConfig: CurrencyConversionRequest): Promise<CurrencyConversionResponse> {
        const params = this.constructUrlParams(requestConfig, Endpoints.CurrencyConversion,);

        return this.request<CurrencyConversionResponse>(Endpoints.CurrencyConversion, params);
    }
}
