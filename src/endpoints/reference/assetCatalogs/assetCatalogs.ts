import type { AxiosInstance } from "axios";
import { EndpointBase } from "../../../defaults";
import {
    CommoditiesRequest,
    CommoditiesResponse,
    CryptocurrencyPairsRequest,
    CryptocurrencyPairsResponse,
    ETFsRequest,
    ETFsResponse,
    FixedIncomeRequest,
    FixedIncomeResponse,
    ForexPairResponse,
    ForexPairsRequest,
    FundsRequest,
    FundsResponse,
    StocksRequest,
    StocksResponse
} from "./assetCatalogs.interfaces";
import { Endpoints } from "../../endpoints";


export default class AssetCatalogs extends EndpointBase {
    constructor(apiClient: AxiosInstance) {
        super(apiClient);
    }

    // Endpoint fetching functions starts here
    async stocks(requestConfig: StocksRequest): Promise<StocksResponse> {
        const params = this.constructUrlParams(requestConfig, Endpoints.Stocks);
        return this.request<StocksResponse>(Endpoints.Stocks, params);
    }

    async etfs(requestConfig: ETFsRequest): Promise<ETFsResponse> {
        const params = this.constructUrlParams(requestConfig, Endpoints.ETFs);
        return this.request<ETFsResponse>(Endpoints.ETFs, params);
    }

    async forexPairs(requestConfig: ForexPairsRequest): Promise<ForexPairResponse> {
        const params = this.constructUrlParams(requestConfig, Endpoints.ForexPairs);
        return this.request<ForexPairResponse>(Endpoints.ForexPairs, params);
    }

    async cryptocurrencyPairs(requestConfig: CryptocurrencyPairsRequest): Promise<CryptocurrencyPairsResponse> {
        const params = this.constructUrlParams(requestConfig, Endpoints.Cryptocurrencies);
        return this.request<CryptocurrencyPairsResponse>(Endpoints.Cryptocurrencies, params);
    }

    async funds(requestConfig?: FundsRequest): Promise<FundsResponse> {
        const params = this.constructUrlParams(requestConfig, Endpoints.Funds);
        return this.request<FundsResponse>(Endpoints.Funds, params);
    }

    async commodities(requestConfig?: CommoditiesRequest): Promise<CommoditiesResponse> {
        const params = this.constructUrlParams(requestConfig, Endpoints.Commodities);
        return this.request<CommoditiesResponse>(Endpoints.Commodities, params);
    }

    async fixedIncome(requestConfig?: FixedIncomeRequest): Promise<FixedIncomeResponse> {
        const params = this.constructUrlParams(requestConfig, Endpoints.Bonds);
        return this.request<FixedIncomeResponse>(Endpoints.Bonds, params);
    }

}