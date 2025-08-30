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
    async getExchangeRate(requestConfig: ExchangeRateRequest, format: "csv"): Promise<string>;
    async getExchangeRate(requestConfig: ExchangeRateRequest, format?: "json"): Promise<ExchangeRateResponse>;
    async getExchangeRate(requestConfig: ExchangeRateRequest, format?: "json" | "csv"): Promise<ExchangeRateResponse | string> {
        const params = this.constructUrlParams(requestConfig, Endpoints.ExchangeRate);
        return this.requestWithFormat(Endpoints.ExchangeRate, params, format);
    }

    async getCurrencyConversion(requestConfig: CurrencyConversionRequest, format: "csv"): Promise<string>;
    async getCurrencyConversion(requestConfig: CurrencyConversionRequest, format?: "json"): Promise<CurrencyConversionResponse>;
    async getCurrencyConversion(requestConfig: CurrencyConversionRequest, format?: "json" | "csv"): Promise<CurrencyConversionResponse | string> {
        const params = this.constructUrlParams(requestConfig, Endpoints.CurrencyConversion,);

        return this.requestWithFormat(Endpoints.CurrencyConversion, params, format);
    }
}
