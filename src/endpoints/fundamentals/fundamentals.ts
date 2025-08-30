import {
    BalanceSheetRequest,
    BalanceSheetResponse,
    CashFlowConsolidatedRequest,
    CashFlowConsolidatedResponse,
    CashFlowRequest,
    CashFlowResponse,
    DividendsCalendarRequest,
    DividendsCalendarResponse,
    DividendsRequest,
    DividendsResponse,
    EarningsCalendarRequest,
    EarningsCalendarResponse,
    EarningsRequest,
    EarningsResponse,
    IncomeStatementConsolidatedRequest,
    IncomeStatementConsolidatedResponse,
    IncomeStatementRequest,
    IncomeStatementResponse,
    IPOCalendarRequest,
    IPOCalendarResponse,
    KeyExecutivesRequest,
    KeyExecutivesResponse,
    LastChangeRequest,
    LastChangeResponse,
    LogoRequest,
    LogoResponse,
    MarketCapRequest,
    MarketCapResponse,
    ProfileRequest,
    ProfileResponse,
    SplitsCalendarRequest,
    SplitsCalendarResponse,
    SplitsRequest,
    SplitsResponse,
    StatisticsRequest,
    StatisticsResponse
} from "./fundamental.interfaces";
import { EndpointBase } from "../../defaults";
import { AxiosInstance } from "axios";
import { Endpoints } from "../endpoints";
import { globalTransformationManager } from "../../serialization";

export default class Fundamentals extends EndpointBase {
    constructor(apiClient: AxiosInstance) {
        super(apiClient);
        registerStatisticsTransformations();
    }

    // Endpoint fetching functions starts here
    async getLogo(requestConfig: LogoRequest): Promise<LogoResponse> {
        const params = this.constructUrlParams(requestConfig, Endpoints.Logo);
        return this.request<LogoResponse>(Endpoints.Logo, params);
    }

    async getProfile(requestConfig: ProfileRequest): Promise<ProfileResponse> {
        this.validateRequiredIdentifiers(requestConfig);

        const params = this.constructUrlParams(requestConfig, Endpoints.Profile,);
        return this.request<ProfileResponse>(Endpoints.Profile, params);
    }

    async getDividends(requestConfig: DividendsRequest): Promise<DividendsResponse> {
        this.validateRequiredIdentifiers(requestConfig);

        const params = this.constructUrlParams(requestConfig, Endpoints.Dividends);
        return this.request<DividendsResponse>(Endpoints.Dividends, params);
    }

    async getDividendsCalendar(requestConfig?: DividendsCalendarRequest): Promise<DividendsCalendarResponse> {
        if (requestConfig) {
            this.validateRequiredIdentifiers(requestConfig);
        }

        const params = this.constructUrlParams(requestConfig, Endpoints.DividendsCalendar);
        return this.request<DividendsCalendarResponse>(Endpoints.DividendsCalendar, params);
    }

    async getSplits(requestConfig: SplitsRequest): Promise<SplitsResponse> {
        this.validateRequiredIdentifiers(requestConfig);

        const params = this.constructUrlParams(requestConfig, Endpoints.Splits);
        return this.request<SplitsResponse>(Endpoints.Splits, params);
    }

    async getSplitsCalendar(requestConfig?: SplitsCalendarRequest): Promise<SplitsCalendarResponse> {
        if (requestConfig) {
            this.validateRequiredIdentifiers(requestConfig);
        }

        const params = this.constructUrlParams(requestConfig, Endpoints.SplitsCalendar);
        return this.request<SplitsCalendarResponse>(Endpoints.SplitsCalendar, params);
    }

    async getEarnings(requestConfig: EarningsRequest): Promise<EarningsResponse> {
        this.validateRequiredIdentifiers(requestConfig);

        const params = this.constructUrlParams(requestConfig, Endpoints.Earnings);
        return this.request<EarningsResponse>(Endpoints.Earnings, params);
    }

    async getEarningsCalendar(requestConfig?: EarningsCalendarRequest): Promise<EarningsCalendarResponse> {
        const params = this.constructUrlParams(requestConfig, Endpoints.EarningsCalendar);
        return this.request<EarningsCalendarResponse>(Endpoints.EarningsCalendar, params);
    }

    async getIpoCalendar(requestConfig?: IPOCalendarRequest): Promise<IPOCalendarResponse> {
        const params = this.constructUrlParams(requestConfig, Endpoints.IpoCalendar);
        return this.request<IPOCalendarResponse>(Endpoints.IpoCalendar, params);
    }

    async getStatistics(requestConfig: StatisticsRequest): Promise<StatisticsResponse> {
        this.validateRequiredIdentifiers(requestConfig);

        const params = this.constructUrlParams(requestConfig, Endpoints.Statistics);
        return this.request<StatisticsResponse>(Endpoints.Statistics, params);
    }

    async getIncomeStatement(requestConfig: IncomeStatementRequest): Promise<IncomeStatementResponse> {
        this.validateRequiredIdentifiers(requestConfig);

        const params = this.constructUrlParams(requestConfig, Endpoints.IncomeStatement);
        return this.request<IncomeStatementResponse>(Endpoints.IncomeStatement, params);
    }

    async getIncomeStatementConsolidated(requestConfig: IncomeStatementConsolidatedRequest): Promise<IncomeStatementConsolidatedResponse> {
        this.validateRequiredIdentifiers(requestConfig);

        const params = this.constructUrlParams(requestConfig, Endpoints.IncomeStatementConsolidated);
        return this.request<IncomeStatementConsolidatedResponse>(Endpoints.IncomeStatementConsolidated, params);
    }

    async getBalanceSheet(requestConfig: BalanceSheetRequest): Promise<BalanceSheetResponse> {
        this.validateRequiredIdentifiers(requestConfig);

        const params = this.constructUrlParams(requestConfig, Endpoints.BalanceSheet);
        return this.request<BalanceSheetResponse>(Endpoints.BalanceSheet, params);
    }

    async getCashFlow(requestConfig: CashFlowRequest): Promise<CashFlowResponse> {
        this.validateRequiredIdentifiers(requestConfig);

        const params = this.constructUrlParams(requestConfig, Endpoints.CashFlow);
        return this.request<CashFlowResponse>(Endpoints.CashFlow, params);
    }

    async getCashFlowConsolidated(requestConfig: CashFlowConsolidatedRequest): Promise<CashFlowConsolidatedResponse> {
        this.validateRequiredIdentifiers(requestConfig);

        const params = this.constructUrlParams(requestConfig, Endpoints.CashFlowConsolidated);
        return this.request<CashFlowConsolidatedResponse>(Endpoints.CashFlowConsolidated, params);
    }

    async getMarketCap(requestConfig: MarketCapRequest): Promise<MarketCapResponse> {
        this.validateRequiredIdentifiers(requestConfig);

        const params = this.constructUrlParams(requestConfig, Endpoints.MarketCap);
        return this.request<MarketCapResponse>(Endpoints.MarketCap, params);
    }

    async getKeyExecutives(requestConfig: KeyExecutivesRequest): Promise<KeyExecutivesResponse> {
        this.validateRequiredIdentifiers(requestConfig);

        const params = this.constructUrlParams(requestConfig, Endpoints.KeyExecutives);
        return this.request<KeyExecutivesResponse>(Endpoints.KeyExecutives, params);
    }

    async getLastChange(requestConfig: LastChangeRequest): Promise<LastChangeResponse> {
        const joinedUri = `${Endpoints.LastChanges}/${requestConfig.endpoint}`;
        const params = this.constructUrlParams(requestConfig, joinedUri);
        return this.request<LastChangeResponse>(joinedUri, params);
    }
}

function registerStatisticsTransformations() {
    globalTransformationManager.addEndpointConfig(Endpoints.Statistics, {
        responseMappings: {
            "avg_10_volume": "avgTenVolume",
            "avg_90_volume": "avgNinetyVolume",
            "day_50_ma": "dayFiftyMa",
            "day_200_ma": "dayTwoHundredMa",
            "5_year_average_dividend_yield": "fiveYearAverageDividendYield"
        },
    });
}