
// Import all request interfaces
import type {
  EarningsEstimateRequest,
  RevenueEstimateRequest,
  EPSTrendRequest,
  EPSRevisionsRequest,
  GrowthEstimatesRequest,
  RecommendationsRequest,
  PriceTargetRequest,
  AnalystRatingsSnapshotRequest,
  AnalystRatingsUSEquitiesRequest,
} from '../analysis/analysis.interfaces';
import type { APIUsageRequest } from '../advanced/advanced.interfaces';
import type {
  TimeSeriesRequest,
  TimeSeriesCrossRequest,
  QuoteRequest,
  LatestPriceRequest,
  EndOfDayPriceRequest,
} from '../core/core.interfaces';
import type {
  ExchangeRateRequest,
  CurrencyConversionRequest,
} from '../currencies/currencies.interfaces';
import type {
  EtfsDirectoryRequest,
  EtfFullDataRequest,
  EtfSummaryRequest,
  EtfPerformanceRequest,
  EtfRiskRequest,
  EtfCompositionRequest,
  EtfsFamilyRequest,
  EtfsTypeRequest,
} from '../etfs/etfs.interfaces';
import type {
  LogoRequest,
  ProfileRequest,
  DividendsRequest,
  DividendsCalendarRequest,
  SplitsRequest,
  SplitsCalendarRequest,
  EarningsRequest,
  EarningsCalendarRequest,
  IPOCalendarRequest,
  StatisticsRequest,
  IncomeStatementRequest,
  IncomeStatementConsolidatedRequest,
  BalanceSheetRequest,
  CashFlowRequest,
  CashFlowConsolidatedRequest,
  MarketCapRequest,
  KeyExecutivesRequest,
  LastChangeRequest,
} from '../fundamentals/fundamental.interfaces';
import type {
  StocksRequest,
  ForexPairsRequest,
  CryptocurrencyPairsRequest,
  ETFsRequest,
  FundsRequest,
  CommoditiesRequest,
  FixedIncomeRequest,
} from '../reference/assetCatalogs/assetCatalogs.interfaces';
import type {
  SymbolSearchRequest,
  CrossListingsRequest,
  EarliestTimestampRequest,
} from '../reference/discovery/discovery.interfaces';
import type {
  ExchangesRequest,
  ExchangeScheduleRequest,
  CryptocurrencyExchangesRequest,
  MarketStateRequest,
} from '../reference/markets/markets.interfaces';

// Import all response interfaces
import type {
  EarningsEstimateResponse,
  RevenueEstimateResponse,
  EPSTrendResponse,
  EPSRevisionsResponse,
  GrowthEstimatesResponse,
  RecommendationsResponse,
  PriceTargetResponse,
  AnalystRatingsSnapshotResponse,
  AnalystRatingsUSEquitiesResponse,
} from '../analysis/analysis.interfaces';
import type { APIUsageResponse } from '../advanced/advanced.interfaces';
import type {
  TimeSeriesResponse,
  TimeSeriesCrossResponse,
  QuoteResponse,
  LatestPriceResponse,
  EndOfDayPriceResponse,
} from '../core/core.interfaces';
import type {
  ExchangeRateResponse,
  CurrencyConversionResponse,
} from '../currencies/currencies.interfaces';
import type {
  EtfsDirectoryResponse,
  EtfFullDataResponse,
  EtfSummaryResponse,
  EtfPerformanceResponse,
  EtfRiskResponse,
  EtfCompositionResponse,
  EtfsFamilyResponse,
  EtfsTypeResponse,
} from '../etfs/etfs.interfaces';
import type {
  LogoResponse,
  ProfileResponse,
  DividendsResponse,
  DividendsCalendarResponse,
  SplitsResponse,
  SplitsCalendarResponse,
  EarningsResponse,
  EarningsCalendarResponse,
  IPOCalendarResponse,
  StatisticsResponse,
  IncomeStatementResponse,
  IncomeStatementConsolidatedResponse,
  BalanceSheetResponse,
  CashFlowResponse,
  CashFlowConsolidatedResponse,
  MarketCapResponse,
  KeyExecutivesResponse,
  LastChangeResponse,
} from '../fundamentals/fundamental.interfaces';
import type {
  StocksResponse,
  ForexPairResponse,
  CryptocurrencyPairsResponse,
  ETFsResponse,
  FundsResponse,
  CommoditiesResponse,
  FixedIncomeResponse,
} from '../reference/assetCatalogs/assetCatalogs.interfaces';
import type {
  SymbolSearchResponse,
  CrossListingsResponse,
  EarliestTimestampResponse,
} from '../reference/discovery/discovery.interfaces';
import type {
  CountriesResponse,
  InstrumentTypeResponse,
  TechnicalIndicatorsResponse,
} from '../reference/supportingMetadata/supportingMetadata.interfaces';
import type {
  ExchangesResponse,
  ExchangeScheduleResponse,
  CryptocurrencyExchangesResponse,
  MarketStateResponse,
} from '../reference/markets/markets.interfaces';
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

export interface BatchRequest {
  endpoint: Endpoints;
  request:AllEndpointRequests; // Each key is request ID, value is the endpoint URL
}

export interface BatchRequestConfig {
  [key: string]: {
    url: string;
  }
}

export interface BatchResponse {
  [requestId: string]: AllEndpointResponses | { error: string; code?: string };
}