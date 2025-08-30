import { EndpointBase } from "../../../defaults";
import type { AxiosInstance } from "axios";
import { Endpoints } from "../../endpoints";
import {
    CryptocurrencyExchangeeResponse,
    CryptocurrencyExchangesRequest,
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
    async getExchanges(requestConfig: ExchangesRequest): Promise<ExchangesResponse> {
        const params = this.constructUrlParams(requestConfig, Endpoints.Exchanges);
        return this.request<ExchangesResponse>(Endpoints.Exchanges, params);
    }

    async getExchangeSchedule(requestConfig: ExchangeScheduleRequest): Promise<ExchangeScheduleResponse> {
        const params = this.constructUrlParams(requestConfig, Endpoints.ExchangeSchedule);
        return this.request<ExchangeScheduleResponse>(Endpoints.ExchangeSchedule, params);
    }

    async getCryptocurrencyExchanges(requestConfig?: CryptocurrencyExchangesRequest): Promise<CryptocurrencyExchangeeResponse> {
        const params = this.constructUrlParams(requestConfig, Endpoints.CryptocurrencyExchanges);
        return this.request<CryptocurrencyExchangeeResponse>(Endpoints.CryptocurrencyExchanges, params);
    }

    async getMarketState(requestConfig?: MarketStateRequest): Promise<MarketStateResponse> {
        const params = this.constructUrlParams(requestConfig, Endpoints.MarketState);
        return this.request<MarketStateResponse>(Endpoints.MarketState, params);
    }
}