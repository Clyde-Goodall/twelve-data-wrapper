import type { AxiosInstance } from "axios";
import { EndpointBase } from "../../defaults";
import {
    BalanceSheetRequest,
    BalanceSheetResponse,
    CashFlowRequest,
    CashFlowResponse,
    CashFlowConsolidatedRequest,
    CashFlowConsolidatedResponse,
    DividendsRequest,
    DividendsResponse,
    DividendsCalendarRequest,
    DividendsCalendarResponse,
    EarningsRequest,
    EarningsResponse,
    EarningsCalendarRequest,
    EarningsCalendarResponse,
    IncomeStatementRequest,
    IncomeStatementResponse,
    IncomeStatementConsolidatedRequest,
    IncomeStatementConsolidatedResponse,
    IPOCalendarRequest,
    IPOCalendarResponse,
    KeyExecutivesRequest,
    KeyExecutivesResponse,
    LogoRequest,
    LogoResponse,
    MarketCapRequest,
    MarketCapResponse,
    ProfileRequest,
    ProfileResponse,
    SplitsRequest,
    SplitsResponse,
    SplitsCalendarRequest,
    SplitsCalendarResponse,
    StatisticsRequest,
    StatisticsResponse
} from "./fundamental.interfaces";
import { globalTransformationManager } from "../../serialization";
import { Endpoints } from "../endpoints";

export default class Fundamentals extends EndpointBase {
    constructor(apiClient: AxiosInstance) {
        super(apiClient);
    }

    // Endpoint fetching functions starts here
    async logo(requestConfig: LogoRequest): Promise<LogoResponse> {
        const params = this.constructUrlParams(requestConfig, '/logo');
        return this.request<LogoResponse>('/logo', params);
    }

    async profile(requestConfig: ProfileRequest): Promise<ProfileResponse> {
        const params = this.constructUrlParams(requestConfig, '/profile');
        return this.request<ProfileResponse>('/profile', params);
    }

    async dividends(requestConfig: DividendsRequest): Promise<DividendsResponse> {
        const params = this.constructUrlParams(requestConfig, '/dividends');
        return this.request<DividendsResponse>('/dividends', params);
    }

    async dividendsCalendar(requestConfig: DividendsCalendarRequest): Promise<DividendsCalendarResponse> {
        const params = this.constructUrlParams(requestConfig, '/dividends_calendar');
        return this.request<DividendsCalendarResponse>('/dividends_calendar', params);
    }

    async splits(requestConfig: SplitsRequest): Promise<SplitsResponse> {
        const params = this.constructUrlParams(requestConfig, '/splits');
        return this.request<SplitsResponse>('/splits', params);
    }

    async splitsCalendar(requestConfig: SplitsCalendarRequest): Promise<SplitsCalendarResponse> {
        const params = this.constructUrlParams(requestConfig, '/splits_calendar');
        return this.request<SplitsCalendarResponse>('/splits_calendar', params);
    }

    async earnings(requestConfig: EarningsRequest): Promise<EarningsResponse> {
        const params = this.constructUrlParams(requestConfig, '/earnings');
        return this.request<EarningsResponse>('/earnings', params);
    }

    async earningsCalendar(requestConfig: EarningsCalendarRequest): Promise<EarningsCalendarResponse> {
        const params = this.constructUrlParams(requestConfig, '/earnings_calendar');
        return this.request<EarningsCalendarResponse>('/earnings_calendar', params);
    }

    async ipoCalendar(requestConfig: IPOCalendarRequest): Promise<IPOCalendarResponse> {
        const params = this.constructUrlParams(requestConfig, '/ipo_calendar');
        return this.request<IPOCalendarResponse>('/ipo_calendar', params);
    }

    async statistics(requestConfig: StatisticsRequest): Promise<StatisticsResponse> {
        const params = this.constructUrlParams(requestConfig, '/statistics');
        return this.request<StatisticsResponse>('/statistics', params);
    }

    async incomeStatement(requestConfig: IncomeStatementRequest): Promise<IncomeStatementResponse> {
        const params = this.constructUrlParams(requestConfig, '/income_statement');
        return this.request<IncomeStatementResponse>('/income_statement', params);
    }

    async incomeStatementConsolidated(requestConfig: IncomeStatementConsolidatedRequest): Promise<IncomeStatementConsolidatedResponse> {
        const params = this.constructUrlParams(requestConfig, '/income_statement/consolidated');
        return this.request<IncomeStatementConsolidatedResponse>('/income_statement/consolidated', params);
    }

    async balanceSheet(requestConfig: BalanceSheetRequest): Promise<BalanceSheetResponse> {
        const params = this.constructUrlParams(requestConfig, '/balance_sheet');
        return this.request<BalanceSheetResponse>('/balance_sheet', params);
    }

    async cashFlow(requestConfig: CashFlowRequest): Promise<CashFlowResponse> {
        const params = this.constructUrlParams(requestConfig, '/cash_flow');
        return this.request<CashFlowResponse>('/cash_flow', params);
    }

    async cashFlowConsolidated(requestConfig: CashFlowConsolidatedRequest): Promise<CashFlowConsolidatedResponse> {
        const params = this.constructUrlParams(requestConfig, '/cash_flow/consolidated');
        return this.request<CashFlowConsolidatedResponse>('/cash_flow/consolidated', params);
    }

    async marketCap(requestConfig: MarketCapRequest): Promise<MarketCapResponse> {
        const params = this.constructUrlParams(requestConfig, '/market_cap');
        return this.request<MarketCapResponse>('/market_cap', params);
    }

    async keyExecutives(requestConfig: KeyExecutivesRequest): Promise<KeyExecutivesResponse> {
        const params = this.constructUrlParams(requestConfig, '/key_executives');
        return this.request<KeyExecutivesResponse>('/key_executives', params);
    }
}