import {
    AssetClassType,
    AtLeastOne,
    DecimalPlaces,
    Interval,
    Meta,
    ReqSortOrder,
    ResponseFormat
} from "../shared.interfaces";

/**
 * /time_series endpoint request and response interfaces
 */
interface TimeSeriesRequestBase {
    // Symbol of the asset (e.g. "AAPL", "BTC/USD")
    symbol?: string;
    // Financial Instrument Global Identifier
    figi?: string;
    // International Securities Identification Number
    isin?: string;
    // Committee on Uniform Securities Identification Procedures
    cusip?: string;
    // Required: Time interval for the candles (e.g. "1min", "1day")
    interval: Interval;
    // Exchange code (e.g. "NASDAQ", "Binance")
    exchange?: string;
    // Market Identifier Code (e.g. "XNAS" for NASDAQ)
    micCode?: string;
    // Country code (e.g. "US" or "United States")
    country?: string;
    // Type of asset (e.g. "Digital currency", "Common stock")
    type?: string;
    // Number of candles to return (default is 30, max is 5000)
    outputSize?: number;
    // Response format, either "JSON" or "CSV" (default is "JSON")
    format?: ResponseFormat;
    // Delimiter for CSV format (default is ";")
    delimiter?: string;
    // Include pre/post market data (default is false)
    prePost?: boolean;
    // Number of decimal places for float values. Supports -1-11, default is -1 (API automatically determines precision)
    dp?: DecimalPlaces;
    // Sorting order for the results "asc" and "desc" (default is "desc")
    order?: ReqSortOrder;
    // Timezone for the response (e.g. "America/New_York", "UTC"). Defaults to "Exchange"
    timezone?: string;
    // Specific day to fetch data for (time is ignored)
    date?: Date;
    // Time when the series starts
    startDate?: Date;
    // Time when the series ends
    endDate?: Date;
    // Include previous close price in the response (default is false)
    previousClose?: boolean;
    // Adjusting mode for prices ("none", "dividends", "splits", "all"). Default is "none"
    adjust?: string;
}

export type TimeSeriesRequest = AtLeastOne<TimeSeriesRequestBase, 'symbol' | 'figi' | 'isin' | 'cusip'>;

export interface TimeSeriesResponse {
    meta: Meta;
    values: TimeSeriesCandle[];
}

export interface TimeSeriesCandle {
    dateTime: Date;
    open: string;
    close: string;
    high: string;
    low: string;
    volume: string;
}

/**
 * /time_series/cross endpoint request and response interfaces
 */
export interface TimeSeriesCrossRequest {
    // Required: Base currency (e.g. "USD" or "BTC")
    base: string;
    // Type of the base currency (e.g. "Physical Currency")
    baseType?: string;
    // Exchange for the base currency (e.g. "Binance")
    baseExchange?: string;
    // Market Identifier Code for the base currency (e.g. "XNAS" for NASDAQ)
    baseMicCode?: string;
    // Required: Quote currency (e.g. "USD" or "BTC")
    quote: string;
    // Type of the quote currency (e.g. "Physical Currency")
    quoteType?: string;
    // Exchange for the quote currency (e.g. "Binance")
    quoteExchange?: string;
    // Market Identifier Code for the quote currency (e.g. "XNAS" for NASDAQ)
    quoteMicCode?: string;
    // Required: Interval between two consecutive points in time series
    interval: Interval;
    // Number of candles to return (default is 30, max is 5000)
    outputSize?: number;
    // Response format, either "JSON" or "CSV" (default is "JSON")
    format?: ResponseFormat;
    // Delimiter for CSV format (default is ";")
    delimiter?: string;
    // Include pre/post market data (default is false)
    prePost?: boolean;
    // Number of decimal places for float values. Supports 0-11, default is 5
    dp?: DecimalPlaces;
    // Timezone for the response (e.g. "America/New_York", "UTC"). Defaults to "Exchange"
    timezone?: string;
    // Time when the series starts
    startDate?: Date;
    // Time when the series ends
    endDate?: Date;
    // Specifies if there should be an adjustment (default is true)
    adjust?: boolean;

}

export interface TimeSeriesCrossMeta {
    baseInstrument: string;
    baseCurrency: string;
    baseExchange: string;
    interval: Interval;
    quoteInstrument: string;
    quoteCurrency: string;
    quoteExchange: string;
}

export interface TimeSeriesCrossValue {
    dateTime: Date;
    open: string;
    close: string;
    high: string;
    low: string;
}

export interface TimeSeriesCrossResponse {
    meta: TimeSeriesCrossMeta;
    values: TimeSeriesCrossValue[];
}

/**
 * /quote endpoint request and response interfaces
 */
interface QuoteRequestBase {
    // Symbol of the asset (e.g. "AAPL", "BTC/USD")
    symbol?: string;
    // Financial Instrument Global Identifier
    figi?: string;
    // International Securities Identification Number
    isin?: string;
    // Committee on Uniform Securities Identification Procedures
    cusip?: string;
    // Time interval for the candles (e.g. "1min", "1day"). Default: "1day"
    interval?: Interval;
    // Exchange code (e.g. "NASDAQ", "Binance")
    exchange?: string;
    // Market Identifier Code (e.g. "XNAS" for NASDAQ)
    micCode?: string;
    // Country code (e.g. "US" or "United States")
    country?: string;
    // Number of periods for Average Volume. Default: 9
    volumeTimePeriod?: number;
    // The asset class to which the instrument belongs
    type?: AssetClassType;
    // Response format, either "JSON" or "CSV" (default is "JSON")
    format?: ResponseFormat;
    // Delimiter for CSV format (default is ";")
    delimiter?: string;
    // Include pre- / post-market data (default is false) (only for Pro and above plans)
    prePost?: boolean;
    // Whether to return data for closed day (default is false)
    eod?: boolean;
    // Number of hours for calculate rolling change at period. Default is 24. Supports integers in range [1,168]
    rollingPeriod?: number;
    // Number of decimal places for float values. Supports 0-11, default is 5
    dp?: DecimalPlaces;
    // Timezone for the response (e.g. "America/New_York", "UTC"). Defaults to "Exchange"
    timezone?: string;
}

export type QuoteRequest = AtLeastOne<QuoteRequestBase, 'symbol' | 'figi' | 'isin' | 'cusip'>;

export interface QuoteResponse {
    symbol: string;
    name: string;
    exchange: string;
    micCode?: string;
    currency?: string;
    dateTime: string;
    timestamp: number;
    lastQuoteAt?: number;
    open: string;
    high: string;
    low: string;
    close: string;
    volume: string;
    previousClose?: string;
    change?: string;
    percentChange?: string;
    averageVolume?: string;
    rollingOneDayChange?: string;
    rollingSevenDayChange?: string;
    rollingPeriodChange?: string;
    isMarketOpen: boolean;
    fiftyTwoWeek?: {
        low: string;
        high: string;
        lowChange: string;
        highChange: string;
        lowChangePercent: string;
        highChangePercent: string;
        range: string;
    };
    extendedChange?: string;
    extendedPercentChange?: string;
    extendedPrice?: string;
    extendedTimestamp?: string;
}

interface LatestPriceRequestBase {
    // Symbol of the asset (e.g. "AAPL", "BTC/USD")
    symbol?: string;
    // Financial Instrument Global Identifier
    figi?: string;
    // International Securities Identification Number
    isin?: string;
    // Committee on Uniform Securities Identification Procedures
    cusip?: string;
    // Exchange code (e.g. "NASDAQ", "Binance")
    exchange?: string;
    // Market Identifier Code (e.g. "XNAS" for NASDAQ)
    micCode?: string;
    // Country code (e.g. "US" or "United States")
    country?: string;
    // The asset class to which the instrument belongs
    type?: AssetClassType;
    // Response format, either "JSON" or "CSV" (default is "JSON")
    format?: ResponseFormat;
    // Delimiter for CSV format (default is ";")
    delimiter?: string;
    // Include pre- / post-market data (default is false) (only for Pro and above plans)
    prePost?: boolean;
    // Number of decimal places for float values. Supports 0-11, default is 5
    dp?: DecimalPlaces;
}

export type LatestPriceRequest = AtLeastOne<LatestPriceRequestBase, 'symbol' | 'figi' | 'isin' | 'cusip'>;

export interface LatestPriceResponse {
    price: string;
}

interface EndOfDayPriceRequestBase {
    // Symbol of the asset (e.g. "AAPL", "BTC/USD")
    symbol?: string;
    // Financial Instrument Global Identifier
    figi?: string;
    // International Securities Identification Number
    isin?: string;
    // Committee on Uniform Securities Identification Procedures
    cusip?: string;
    // Exchange code (e.g. "NASDAQ", "Binance")
    exchange?: string;
    // Market Identifier Code (e.g. "XNAS" for NASDAQ)
    micCode?: string;
    // Country code (e.g. "US" or "United States")
    country?: string;
    // The asset class to which the instrument belongs
    type?: AssetClassType;
    // Specific date to fetch data for (time is ignored)
    date?: Date;
    // Include pre- / post-market data (default is false) (only for Pro and above plans)
    prePost?: boolean;
    // Number of decimal places for float values. Supports 0-11, default is 5
    dp?: DecimalPlaces;
}

export type EndOfDayPriceRequest = AtLeastOne<EndOfDayPriceRequestBase, 'symbol' | 'figi' | 'isin' | 'cusip'>;

export interface EndOfDayPriceResponse {
    symbol: string;
    exchange: string;
    micCode?: string;
    currency?: string;
    dateTime: Date;
    timestamp: Date;
    close: string;
}

