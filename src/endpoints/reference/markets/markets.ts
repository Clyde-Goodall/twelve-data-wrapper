import { EndpointBase } from "../../../defaults";
import type { AxiosInstance } from "axios";
import { Endpoints } from "../../endpoints";
import {
    CryptocurrencyExchangesRequest,
    CryptocurrencyExchangesResponse,
    ExchangeScheduleRequest,
    ExchangeScheduleResponse,
    ExchangesRequest,
    ExchangesResponse,
    MarketStateRequest,
    MarketStateResponse
} from "./markets.interfaces";

export default class Markets extends EndpointBase {
    constructor(apiClient: AxiosInstance) {
        super(apiClient);
    }

    // Endpoint fetching functions starts here
    async getExchanges(requestConfig: ExchangesRequest, format: "csv"): Promise<string>;
    async getExchanges(requestConfig: ExchangesRequest, format?: "json"): Promise<ExchangesResponse>;
    async getExchanges(requestConfig: ExchangesRequest, format?: "json" | "csv"): Promise<ExchangesResponse | string> {
        const params = this.constructUrlParams(requestConfig, Endpoints.Exchanges);
        return this.requestWithFormat(Endpoints.Exchanges, params, format);
    }

    async getExchangeSchedule(requestConfig: ExchangeScheduleRequest, format: "csv"): Promise<string>;
    async getExchangeSchedule(requestConfig: ExchangeScheduleRequest, format?: "json"): Promise<ExchangeScheduleResponse>;
    async getExchangeSchedule(requestConfig: ExchangeScheduleRequest, format?: "json" | "csv"): Promise<ExchangeScheduleResponse | string> {
        const params = this.constructUrlParams(requestConfig, Endpoints.ExchangeSchedule);
        return this.requestWithFormat(Endpoints.ExchangeSchedule, params, format);
    }

    async getCryptocurrencyExchanges(requestConfig: CryptocurrencyExchangesRequest, format: "csv"): Promise<string>;
    async getCryptocurrencyExchanges(requestConfig?: CryptocurrencyExchangesRequest, format?: "json"): Promise<CryptocurrencyExchangesResponse>;
    async getCryptocurrencyExchanges(requestConfig?: CryptocurrencyExchangesRequest, format?: "json" | "csv"): Promise<CryptocurrencyExchangesResponse | string> {
        const params = this.constructUrlParams(requestConfig, Endpoints.CryptocurrencyExchanges);
        return this.requestWithFormat(Endpoints.CryptocurrencyExchanges, params, format);
    }

    async getMarketState(requestConfig: MarketStateRequest, format: "csv"): Promise<string>;
    async getMarketState(requestConfig?: MarketStateRequest, format?: "json"): Promise<MarketStateResponse>;
    async getMarketState(requestConfig?: MarketStateRequest, format?: "json" | "csv"): Promise<MarketStateResponse | string> {
        const params = this.constructUrlParams(requestConfig, Endpoints.MarketState);
        return this.requestWithFormat(Endpoints.MarketState, params, format);
    }
}