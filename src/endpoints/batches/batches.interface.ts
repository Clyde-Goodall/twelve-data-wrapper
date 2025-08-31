// Import all request interfaces
// Import all response interfaces
import type {
    AnalystRatingsSnapshotRequest,
    AnalystRatingsSnapshotResponse,
    AnalystRatingsUSEquitiesRequest,
    AnalystRatingsUSEquitiesResponse,
    EarningsEstimateRequest,
    EarningsEstimateResponse,
    EPSRevisionsRequest,
    EPSRevisionsResponse,
    EPSTrendRequest,
    EPSTrendResponse,
    GrowthEstimatesRequest,
    GrowthEstimatesResponse,
    PriceTargetRequest,
    PriceTargetResponse,
    RecommendationsRequest,
    RecommendationsResponse,
    RevenueEstimateRequest,
    RevenueEstimateResponse,
} from "../analysis/analysis.interfaces";
import type { APIUsageRequest, APIUsageResponse } from "../advanced/advanced.interfaces";
import type {
    EndOfDayPriceRequest,
    EndOfDayPriceResponse,
    LatestPriceRequest,
    LatestPriceResponse,
    QuoteRequest,
    QuoteResponse,
    TimeSeriesCrossRequest,
    TimeSeriesCrossResponse,
    TimeSeriesRequest,
    TimeSeriesResponse,
} from "../core/core.interfaces";
import type {
    CurrencyConversionRequest,
    CurrencyConversionResponse,
    ExchangeRateRequest,
    ExchangeRateResponse,
} from "../currencies/currencies.interfaces";
import type {
    EtfCompositionRequest,
    EtfCompositionResponse,
    EtfFullDataRequest,
    EtfFullDataResponse,
    EtfPerformanceRequest,
    EtfPerformanceResponse,
    EtfRiskRequest,
    EtfRiskResponse,
    EtfsDirectoryRequest,
    EtfsDirectoryResponse,
    EtfsFamilyRequest,
    EtfsFamilyResponse,
    EtfsTypeRequest,
    EtfsTypeResponse,
    EtfSummaryRequest,
    EtfSummaryResponse,
} from "../etfs/etfs.interfaces";
import type {
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
    StatisticsResponse,
} from "../fundamentals/fundamental.interfaces";
import type {
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
    StocksResponse,
} from "../reference/assetCatalogs/assetCatalogs.interfaces";
import type {
    CrossListingsRequest,
    CrossListingsResponse,
    EarliestTimestampRequest,
    EarliestTimestampResponse,
    SymbolSearchRequest,
    SymbolSearchResponse,
} from "../reference/discovery/discovery.interfaces";
import type {
    CryptocurrencyExchangesRequest,
    CryptocurrencyExchangesResponse,
    ExchangeScheduleRequest,
    ExchangeScheduleResponse,
    ExchangesRequest,
    ExchangesResponse,
    MarketStateRequest,
    MarketStateResponse,
} from "../reference/markets/markets.interfaces";
import type {
    CountriesResponse,
    InstrumentTypeResponse,
    TechnicalIndicatorsResponse,
} from "../reference/supportingMetadata/supportingMetadata.interfaces";
import { Endpoints } from "../endpoints";

// Union type for all request interfaces
export type AllEndpointRequests =
  | EarningsEstimateRequest
  | RevenueEstimateRequest
  | EPSTrendRequest
  | EPSRevisionsRequest
  | GrowthEstimatesRequest
  | RecommendationsRequest
  | PriceTargetRequest
  | AnalystRatingsSnapshotRequest
  | AnalystRatingsUSEquitiesRequest
  | APIUsageRequest
  | TimeSeriesRequest
  | TimeSeriesCrossRequest
  | QuoteRequest
  | LatestPriceRequest
  | EndOfDayPriceRequest
  | ExchangeRateRequest
  | CurrencyConversionRequest
  | EtfsDirectoryRequest
  | EtfFullDataRequest
  | EtfSummaryRequest
  | EtfPerformanceRequest
  | EtfRiskRequest
  | EtfCompositionRequest
  | EtfsFamilyRequest
  | EtfsTypeRequest
  | LogoRequest
  | ProfileRequest
  | DividendsRequest
  | DividendsCalendarRequest
  | SplitsRequest
  | SplitsCalendarRequest
  | EarningsRequest
  | EarningsCalendarRequest
  | IPOCalendarRequest
  | StatisticsRequest
  | IncomeStatementRequest
  | IncomeStatementConsolidatedRequest
  | BalanceSheetRequest
  | CashFlowRequest
  | CashFlowConsolidatedRequest
  | MarketCapRequest
  | KeyExecutivesRequest
  | LastChangeRequest
  | StocksRequest
  | ForexPairsRequest
  | CryptocurrencyPairsRequest
  | ETFsRequest
  | FundsRequest
  | CommoditiesRequest
  | FixedIncomeRequest
  | SymbolSearchRequest
  | CrossListingsRequest
  | EarliestTimestampRequest
  | ExchangesRequest
  | ExchangeScheduleRequest
  | CryptocurrencyExchangesRequest
  | MarketStateRequest;

// Union type for all response interfaces
export type AllEndpointResponses =
  | EarningsEstimateResponse
  | RevenueEstimateResponse
  | EPSTrendResponse
  | EPSRevisionsResponse
  | GrowthEstimatesResponse
  | RecommendationsResponse
  | PriceTargetResponse
  | AnalystRatingsSnapshotResponse
  | AnalystRatingsUSEquitiesResponse
  | APIUsageResponse
  | TimeSeriesResponse
  | TimeSeriesCrossResponse
  | QuoteResponse
  | LatestPriceResponse
  | EndOfDayPriceResponse
  | ExchangeRateResponse
  | CurrencyConversionResponse
  | EtfsDirectoryResponse
  | EtfFullDataResponse
  | EtfSummaryResponse
  | EtfPerformanceResponse
  | EtfRiskResponse
  | EtfCompositionResponse
  | EtfsFamilyResponse
  | EtfsTypeResponse
  | LogoResponse
  | ProfileResponse
  | DividendsResponse
  | DividendsCalendarResponse
  | SplitsResponse
  | SplitsCalendarResponse
  | EarningsResponse
  | EarningsCalendarResponse
  | IPOCalendarResponse
  | StatisticsResponse
  | IncomeStatementResponse
  | IncomeStatementConsolidatedResponse
  | BalanceSheetResponse
  | CashFlowResponse
  | CashFlowConsolidatedResponse
  | MarketCapResponse
  | KeyExecutivesResponse
  | LastChangeResponse
  | StocksResponse
  | ForexPairResponse
  | CryptocurrencyPairsResponse
  | ETFsResponse
  | FundsResponse
  | CommoditiesResponse
  | FixedIncomeResponse
  | SymbolSearchResponse
  | CrossListingsResponse
  | EarliestTimestampResponse
  | CountriesResponse
  | InstrumentTypeResponse
  | TechnicalIndicatorsResponse
  | ExchangesResponse
  | ExchangeScheduleResponse
  | CryptocurrencyExchangesResponse
  | MarketStateResponse;

export interface BatchesRequest {
  endpoint: Endpoints;
  request:AllEndpointRequests; // Each key is request ID, value is the endpoint URL
}

export interface BatchesRequestConfig {
  [key: string]: {
    url: string;
  }
}

export interface BatchesResponse {
  data: {
    [requestId: string]: AllEndpointResponses | { error: string; };
  }
}