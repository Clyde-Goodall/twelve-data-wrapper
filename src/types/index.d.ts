// Types are defined here for each endpoint available as per https://twelvedata.com/docs
// If it's on there, it's in here. At least it should be.
// I am debating whether I should have individual websocket types or just have an option to specify an option in a function to make it a websocket. 
// Or perhaps a wrapper function that you would call a function within.
// I guess I'll get there when I get there
// - CJ

declare module 'twelve-data-wrapper' {
    export class TwelveDataWrapper {
        constructor(key?: string, options?: Object);
        setConfig(options: Object): void;
        setApiKey(key: string): void;
        getUnformattedEndpoint(endpoint: string): Promise<JSON | unknown>;
        get(type: string, query: Object): Promise<Array<any>>;
        // stocks(parameters: StockRequest | AnyRequest): Promise<StockResponse | AnyResponse | unknown>
    }
}

declare global {
    ///////////////////////////////////////////////////
    //
    //          CLASSES
    //
    ///////////////////////////////////////////////////
    class TimeSeries {
        _type: string;
        _body: TimeSeriesRequest;
        constructor(body: TimeSeriesRequest);
        body(): TimeSeriesRequest;
        type(): string;
    }
    ///////////////////////////////////////////////////
    //
    //          INTERFACES/TYPES
    //
    ///////////////////////////////////////////////////

    // For the individual stock data
    interface StockData {
        symbol: string;
        name: string;
        currency: string;
        exchange: string;
        mic_code: string;
        country: string;
        type: string;
        access?: {
            global: string;
            plan: string;
        };
    }

    // For the response with &show_plan=true
    interface StockListResponseWithPlan {
        data: StockData[];
        status: string;
    }

    // For the HTTP route and API parameters
    interface StockListRequest {
        symbol?: string; // Optional
        exchange?: string; // Optional
        mic_code?: string; // Optional
        country?: string; // Optional
        type?: string; // Optional
        format?: 'JSON' | 'CSV'; // Optional
        delimiter?: string; // Optional
        show_plan?: boolean; // Optional
        include_delisted?: boolean; // Optional
    }

    // For the response keys description
    interface StockListResponseKeys {
        symbol: string;
        name: string;
        currency: string;
        exchange: string;
        mic_code: string;
        country: string;
        type: string;
    }

    // For the individual forex pair data and response keys
    interface ForexPair {
        symbol: string;
        currency_group: "Major" | "Minor" | "Exotic" | "Exotic-Cross";
        currency_base: string;
        currency_quote: string;
    }

    // For the HTTP route and API parameters
    interface ForexPairsRequest {
        symbol?: string; // Optional
        currency_base?: string; // Optional
        currency_quote?: string; // Optional
        format?: 'JSON' | 'CSV'; // Optional
        delimiter?: string; // Optional
    }

    // For the individual cryptocurrency pair data and response keys
    interface CryptocurrencyPair {
        symbol: string;
        available_exchanges: string[];
        currency_base: string;
        currency_quote: string;
    }

    // For the HTTP route and API parameters
    interface CryptocurrenciesRequest {
        symbol?: string; // Optional
        exchange?: string; // Optional
        currency_base?: string; // Optional
        currency_quote?: string; // Optional
        format?: 'JSON' | 'CSV'; // Optional
        delimiter?: string; // Optional
    }
    // For the individual ETF data and response keys
    interface ETFData {
        symbol: string;
        name: string;
        currency: string;
        exchange: string;
        mic_code: string;
        country: string;
        access?: {
            global: string;
            plan: string;
        };
    }

    // For the HTTP route and API parameters
    interface ETFListRequest {
        symbol?: string; // Optional
        exchange?: string; // Optional
        mic_code?: string; // Optional
        country?: string; // Optional
        format?: 'JSON' | 'CSV'; // Optional
        delimiter?: string; // Optional
        show_plan?: boolean; // Optional
        include_delisted?: boolean; // Optional
    }
    // For the individual Index data
    interface IndexData {
        symbol: string;
        name: string;
        country: string;
        currency: string;
        exchange: string;
        mic_code: string;
        access?: {
            global: string;
            plan: string;
        };
    }

    // For the HTTP route and API parameters
    interface IndicesListRequest {
        symbol?: string; // Optional
        exchange?: string; // Optional
        mic_code?: string; // Optional
        country?: string; // Optional
        format?: 'JSON' | 'CSV'; // Optional
        delimiter?: string; // Optional
        show_plan?: boolean; // Optional
        include_delisted?: boolean; // Optional
    }
    // For the individual Exchange data
    interface ExchangeData {
        name: string;
        code: string;
        country: string;
        timezone: string;
        access?: {
            global: string;
            plan: string;
        };
    }

    // For the HTTP route and API parameters
    interface ExchangesRequest {
        type: 'American Depositary Receipt' | 'Bond' | 'Bond Fund' | 'Closed-end Fund' | 'Common Stock' | 'Depositary Receipt' | 'Digital Currency' | 'ETF' | 'Exchange-Traded Note' | 'Global Depositary Receipt' | 'Index' | 'Limited Partnership' | 'Mutual Fund' | 'Physical Currency' | 'Preferred Stock' | 'REIT' | 'Right' | 'Structured Product' | 'Trust' | 'Unit' | 'Warrant';
        name?: string; // Optional
        code?: string; // Optional
        country?: string; // Optional
        format?: 'JSON' | 'CSV'; // Optional
        delimiter?: string; // Optional
        show_plan?: boolean; // Optional
    }

    // For the individual Cryptocurrency Exchange data
    interface CryptocurrencyExchangeData {
        name: string;
    }

    // For the HTTP route and API parameters
    interface CryptocurrencyExchangesRequest {
        format?: 'JSON' | 'CSV'; // Optional
        delimiter?: string; // Optional
    }
    // For individual parameter details
    interface ParameterDetails {
        default: string | number;
        range?: string[] | number[];
        min_range?: number;
        max_range?: number;
        type: 'string' | 'int' | 'float' | 'array';
    }

    // For individual output values
    interface OutputValues {
        default_color: string;
        display: 'line' | 'histogram' | 'candle' | 'points';
        min_range?: number;
        max_range?: number;
    }

    // For tinting values
    interface TintingValues {
        display: string;
        color: string;
        transparency: number;
        lower_bound: string | number;
        upper_bound: string | number;
    }

    // For individual technical indicator
    interface TechnicalIndicator {
        enable: boolean;
        full_name: string;
        description: string;
        type: string;
        overlay: boolean;
        parameters: Record<string, ParameterDetails>;
        output_values: Record<string, OutputValues>;
        tinting?: TintingValues[];
    }

    // For the HTTP route and API parameters
    interface TechnicalIndicatorsRequest {
        // No input parameters
    }

    // The main interface for the API response
    type TechnicalIndicatorsResponse = TechnicalIndicator[];

    // For individual search result
    interface SymbolSearchResult {
        symbol: string;
        instrument_name: string;
        exchange: string;
        mic_code: string;
        exchange_timezone: string;
        instrument_type: string;
        country: string;
        currency: string;
        access?: {
            global: string;
            plan: string;
        };
    }

    // For the HTTP route and API parameters
    interface SymbolSearchRequest {
        symbol: string; // Required parameter
        outputsize?: number; // Optional, default 30, max 120
        show_plan?: boolean; // Optional, default false
    }

    // The main interface for the API response
    interface SymbolSearchResponse {
        data: SymbolSearchResult[];
        status: string;
    }

    // For the API parameters
    interface EarliestTimestampRequest {
        symbol: string; // Required parameter
        interval: string; // Required parameter, supports various time intervals like 1min, 5min, etc.
        exchange?: string; // Optional parameter
        mic_code?: string; // Optional parameter
         // Required parameter
    }

    // The main interface for the API response
    interface EarliestTimestampResponse {
        datetime: string; // Earliest datetime, format depends on interval
        unix_time: number; // Datetime converted to UNIX timestamp
    }
    // For the API parameters
    interface MarketStateRequest {
        exchange?: string; // Optional parameter, takes exchange name or alpha code
        code?: string; // Optional parameter, takes MIC code of exchange
        country?: string; // Optional parameter, takes country name or alpha code
         // Required parameter
    }

    // The main interface for the API response
    interface MarketStateResponse {
        name: string; // The full name of the exchange
        code: string; // Market Identifier Codes (MIC) under ISO 10383 standard
        country: string; // Country where the exchange is located
        is_market_open: boolean; // True if the market is open, false if closed
        time_after_open: string; // Time after market opening in HH:MM:SS format; if currently closed - returns 00:00:00
        time_to_open: string; // Time to market opening in HH:MM:SS format; if currently open - returns 00:00:00
        time_to_close: string; // Time to market closing in HH:MM:SS format; if currently closed - returns 00:00:00
    }

    // The API response could be an array of MarketStateResponse
    type MarketStateAPIResponse = MarketStateResponse[];

    // For the API parameters
    interface TimeSeriesRequest {
        symbol: string; // Required parameter, Symbol ticker of the instrument
        interval: string; // Required parameter, Interval between two consecutive points in time series
        exchange?: string; // Optional parameter, Exchange where instrument is traded
        mic_code?: string; // Optional parameter, Market Identifier Code (MIC) under ISO 10383 standard
        country?: string; // Optional parameter, Country where instrument is traded
        type?: string; // Optional parameter, The asset class to which the instrument belongs
        outputsize?: number; // Optional parameter, Number of data points to retrieve
        format?: string; // Optional parameter, Value can be JSON or CSV
        delimiter?: string; // Optional parameter, Specify the delimiter used when downloading the CSV file
         // Required parameter, Your API key
        prepost?: string; // Optional parameter, Only for Pro and above plans
        // ... other advanced parameters
    }

    // For the meta object in the API response
    interface TimeSeriesMeta {
        symbol: string;
        interval: string;
        currency: string;
        exchange_timezone: string;
        exchange: string;
        mic_code: string;
        type: string;
    }

    // For the values array in the API response
    interface TimeSeriesValue {
        datetime: string;
        open: string;
        high: string;
        low: string;
        close: string;
        volume: string;
    }

    // The main interface for the API response
    interface TimeSeriesAPIResponse {
        meta: TimeSeriesMeta;
        values: TimeSeriesValue[];
        status: string;
    }
    // For the API parameters
    interface ExchangeRateRequest {
        symbol: string; // Required parameter, The currency pair (forex or cryptocurrency)
        date?: string; // Optional parameter, Specific date or time for the exchange rate
        format?: string; // Optional parameter, Value can be JSON or CSV
        delimiter?: string; // Optional parameter, Delimiter for CSV file
         // Required parameter, Your API key
        dp?: string; // Optional parameter, Number of decimal places for floating values
        timezone?: string; // Optional parameter, Timezone for output datetime
    }

    // For the API response
    interface ExchangeRateAPIResponse {
        symbol: string; // Requested currency symbol
        rate: number; // Real-time exchange rate
        timestamp: number; // Unix timestamp of the rate
    }
    interface QuoteRequest {
        symbol: string;
        interval?: string;
        exchange?: string;
        mic_code?: string;
        country?: string;
        volume_time_period?: string;
        type?: string;
        format?: string;
        delimiter?: string;
        
        prepost?: boolean;
        eod?: boolean;
        rolling_period?: number;
        dp?: number;
        timezone?: string;
    }

    interface FiftyTwoWeekMetrics {
        low: string;
        high: string;
        low_change: string;
        high_change: string;
        low_change_percent: string;
        high_change_percent: string;
        range: string;
    }

    interface QuoteAPIResponse {
        symbol: string;
        name: string;
        exchange: string;
        mic_code: string;
        currency: string;
        datetime: string;
        timestamp: number;
        open: string;
        high: string;
        low: string;
        close: string;
        volume: string;
        previous_close: string;
        change: string;
        percent_change: string;
        average_volume: string;
        rolling_1d_change: string;
        rolling_7d_change: string;
        rolling_period_change: string;
        is_market_open: boolean;
        fifty_two_week: FiftyTwoWeekMetrics;
        extended_change: string;
        extended_percent_change: string;
        extended_price: string;
        extended_timestamp: number;
    }

    interface CurrencyConversionRequest {
        symbol: string;
        amount: number;
        date?: string;
        format?: string;
        delimiter?: string;
        
        dp?: number;
        timezone?: string;
    }

    interface CurrencyConversionAPIResponse {
        symbol: string;
        rate: number;
        amount: number;
        timestamp: number;
    }
    interface RealTimePriceRequest {
        symbol: string;
        exchange?: string;
        mic_code?: string;
        country?: string;
        type?: string;
        format?: string;
        delimiter?: string;
        
        prepost?: boolean;
        dp?: number;
    }

    interface RealTimePriceAPIResponse {
        price: string;
    }
    interface EndOfDayPriceRequest {
        symbol: string;
        exchange?: string;
        mic_code?: string;
        country?: string;
        type?: string;
        
        prepost?: boolean;
        dp?: number;
    }

    interface EndOfDayPriceAPIResponse {
        symbol: string;
        exchange: string;
        mic_code: string;
        currency: string;
        datetime: string;
        close: string;
    }
    interface MarketMoversRequest {
        direction?: 'gainers' | 'losers';
        outputsize?: number;
        country?: string;
        
        dp?: number;
    }

    // Enum for different types of market movers
    enum MarketMoversType {
        Stocks = '/market_movers/stocks',
        ETF = '/market_movers/etf',
        MutualFunds = '/market_movers/mutual_funds',
        Forex = '/market_movers/forex',
        Crypto = '/market_movers/crypto',
    }
    interface MarketMoversAPIResponse {
        symbol: string;
        name: string;
        exchange: string;
        mic_code: string;
        datetime: string;
        last: string;
        high: string;
        low: string;
        volume: string;
        change: string;
        percent_change: string;
    }
    interface MutualFundsListRequest {
        symbol?: string;
        country?: string;
        fund_family?: string;
        fund_type?: string;
        performance_rating?: number;
        risk_rating?: number;
        page?: number;
        outputsize?: number;
        
    }
    interface MutualFundsListAPIResponse {
        count: number;
        list: {
            symbol: string;
            name: string;
            country: string;
            fund_family: string;
            fund_type: string;
            performance_rating: number;
            risk_rating: number;
        }[];
        status: string;
    }
    interface MutualFundsFamilyRequest {
        country?: string;
        fund_family?: string;
        
    }
    interface MutualFundsFamilyAPIResponse {
        result: Record<string, string[]>;
        status: string;
    }
    interface MutualFundsTypeRequest {
        country?: string;
        fund_type?: string;
        
    }
    interface MutualFundsTypeAPIResponse {
        result: Record<string, string[]>;
        status: string;
    }
    // Input Interface
    interface MutualFundAPIRequest {
        symbol: string; // Required parameter: Symbol ticker of mutual fund
        country?: string; // Optional parameter: Filter by country name or alpha code
        dp?: number; // Optional parameter: Number of decimal places for floating values
    }

    // Output Interface
    interface MutualFundAPIResponse {
        status: string;
        mutual_fund: {
            summary: {
                symbol: string;
                name: string;
                fund_family: string;
                fund_type: string;
                currency: string;
                share_class_inception_date: string;
                ytd_return: number;
                expense_ratio_net: number;
                yield: number;
                nav: number;
                min_investment: number;
                turnover_rate: number;
                net_assets: number;
                overview: string;
                people: { name: string; tenure_since: string }[];
            };
            performance: {
                trailing_returns: {
                    period: string;
                    share_class_return: number;
                    category_return: number;
                    rank_in_category: number;
                }[];
                annual_total_returns: {
                    year: number;
                    share_class_return: number;
                    category_return: number | null;
                }[];
                quarterly_total_returns: {
                    year: number;
                    q1: number;
                    q2: number;
                    q3: number;
                    q4: number;
                }[];
                load_adjusted_return: {
                    period: string;
                    return: number;
                }[];
            };
            risk: {
                volatility_measures: {
                    period: string;
                    alpha: number;
                    alpha_category: number;
                    beta: number;
                    beta_category: number;
                    mean_annual_return: number;
                    mean_annual_return_category: number;
                    r_squared: number;
                    r_squared_category: number;
                    std: number;
                    std_category: number;
                    sharpe_ratio: number;
                    sharpe_ratio_category: number;
                    treynor_ratio: number;
                    treynor_ratio_category: number;
                }[];
                valuation_metrics: {
                    price_to_earnings: number;
                    price_to_earnings_category: number;
                    price_to_book: number;
                    price_to_book_category: number;
                    price_to_sales: number;
                    price_to_sales_category: number;
                    price_to_cashflow: number;
                    price_to_cashflow_category: number;
                    median_market_capitalization: number;
                    median_market_capitalization_category: number;
                    three_year_earnings_growth: number;
                    three_year_earnings_growths_category: number;
                };
            };
            ratings: {
                performance_rating: number;
                risk_rating: number;
                return_rating: number;
            };
            composition: {
                major_market_sectors: {
                    sector: string;
                    weight: number;
                }[];
                asset_allocation: {
                    cash: number;
                    stocks: number;
                    preferred_stocks: number;
                    convertables: number;
                    bonds: number;
                    others: number;
                };
                top_holdings: {
                    symbol: string;
                    name: string;
                    weight: number;
                }[];
                bond_breakdown: {
                    average_maturity: {
                        fund: number | null;
                        category: number | null;
                    };
                    average_duration: {
                        fund: number | null;
                        category: number;
                    };
                    credit_quality: {
                        grade: string;
                        weight: number;
                    }[];
                };
            };
            purchase_info: {
                expenses: {
                    expense_ratio_gross: number;
                    expense_ratio_net: number;
                };
                minimums: {
                    initial_investment: number;
                    additional_investment: number;
                    initial_ira_investment: number | null;
                    additional_ira_investment: number | null;
                };
                pricing: {
                    nav: number;
                    twelve_month_low: number;
                    twelve_month_high: number;
                    last_month: number;
                };
                brokerages: string[];
            };
            sustainability: {
                score: number;
                corporate_esg_pillars: {
                    environmental: number;
                    social: number;
                    governance: number;
                };
                sustainable_investment: boolean;
                corporate_aum: number;
            };
        };
    }
    // Interface for Summary API Response
    interface SummaryApiResponse {
        mutual_fund: {
            summary: {
                symbol: string;
                name: string;
                fund_family: string;
                fund_type: string;
                currency: string;
                share_class_inception_date: string;
                ytd_return: number;
                expense_ratio_net: number;
                yield: number;
                nav: number;
                min_investment: number;
                turnover_rate: number;
                net_assets: number;
                overview: string;
                people: {
                    name: string;
                    tenure_since: string;
                }[];
            };
        };
        status: string;
    }

    // Interface for PerformanceHighDemand API Response
    interface PerformanceHighDemandApiResponse {
        mutual_fund: {
            performance: {
                trailing_returns: {
                    period: string;
                    share_class_return: number;
                    category_return: number;
                    rank_in_category: number;
                }[];
                annual_total_returns: {
                    year: number;
                    share_class_return: number;
                    category_return: number | null;
                }[];
                quarterly_total_returns: {
                    year: number;
                    q1: number;
                    q2: number;
                    q3: number;
                    q4: number;
                }[];
                load_adjusted_return: {
                    period: string;
                    return: number;
                }[];
            };
        };
        status: string;
    }
    // Interface for Risk API Response
    interface RiskApiResponse {
        mutual_fund: {
            risk: {
                volatility_measures: {
                    period: string;
                    alpha: number;
                    alpha_category: number;
                    beta: number;
                    beta_category: number;
                    mean_annual_return: number;
                    mean_annual_return_category: number;
                    r_squared: number;
                    r_squared_category: number;
                    std: number;
                    std_category: number;
                    sharpe_ratio: number;
                    sharpe_ratio_category: number;
                    treynor_ratio: number;
                    treynor_ratio_category: number;
                }[];
                valuation_metrics: {
                    price_to_earnings: number;
                    price_to_earnings_category: number;
                    price_to_book: number;
                    price_to_book_category: number;
                    price_to_sales: number;
                    price_to_sales_category: number;
                    price_to_cashflow: number;
                    price_to_cashflow_category: number;
                    median_market_capitalization: number;
                    median_market_capitalization_category: number;
                    '3_year_earnings_growth': number;
                    '3_year_earnings_growth_category': number;
                };
            };
        };
        status: string;
    }

    // Interface for Ratings API Response
    interface RatingsApiResponse {
        mutual_fund: {
            ratings: {
                performance_rating: number;
                risk_rating: number;
                return_rating: number;
            };
        };
        status: string;
    }

    // Interface for CompositionHighDemand API Response
    interface CompositionHighDemandApiResponse {
        mutual_fund: {
            composition: {
                major_market_sectors: {
                    sector: string;
                    weight: number;
                }[];
                asset_allocation: {
                    cash: number;
                    stocks: number;
                    preferred_stocks: number;
                    convertables: number;
                    bonds: number;
                    others: number;
                };
                top_holdings: {
                    symbol: string;
                    name: string;
                    weight: number;
                }[];
                bond_breakdown: {
                    average_maturity: {
                        fund: number | null;
                        category: number | null;
                    };
                    average_duration: {
                        fund: number | null;
                        category: number;
                    };
                    credit_quality: {
                        grade: string;
                        weight: number;
                    }[];
                };
            };
        };
        status: string;
    }
    interface PurchaseInfoResponse {
        mutual_fund: {
            purchase_info: {
                expenses: {
                    expense_ratio_gross: number;
                    expense_ratio_net: number;
                };
                minimums: {
                    initial_investment: number;
                    additional_investment: number;
                    initial_ira_investment: number | null;
                    additional_ira_investment: number | null;
                };
                pricing: {
                    nav: number;
                    "12_month_low": number;
                    "12_month_high": number;
                    last_month: number;
                };
                brokerages: string[];
            };
        };
        status: string;
    }
    interface PurchaseInfoRequest {
        symbol: string;
        country?: string;
        dp?: number;
        
    }
    interface PurchaseInfoResponse {
        mutual_fund: {
            purchase_info: {
                expenses: {
                    expense_ratio_gross: number;
                    expense_ratio_net: number;
                };
                minimums: {
                    initial_investment: number;
                    additional_investment: number;
                    initial_ira_investment: number | null;
                    additional_ira_investment: number | null;
                };
                pricing: {
                    nav: number;
                    "12_month_low": number;
                    "12_month_high": number;
                    last_month: number;
                };
                brokerages: string[];
            };
        };
        status: string;
    }
    interface SustainabilityRequest {
        symbol: string;
        country?: string;
        dp?: number;
        
    }
    interface SustainabilityResponse {
        mutual_fund: {
            sustainability: {
                score: number;
                corporate_esg_pillars: {
                    environmental: number;
                    social: number;
                    governance: number;
                };
                sustainable_investment: boolean;
                corporate_aum: number;
            };
        };
        status: string;
    }
    interface LogoRequest {
        symbol: string;
        exchange?: string;
        mic_code?: string;
        country?: string;
        
    }
    interface LogoResponse {
        meta: {
            symbol: string;
            name?: string;
            currency?: string;
            exchange?: string;
            mic_code?: string;
            exchange_timezone?: string;
        };
        url?: string;
        logo_base?: string;
        logo_quote?: string;
    }
    interface ProfileUsefulRequest {
        symbol: string;
        exchange?: string;
        mic_code?: string;
        country?: string;
        
    }
    interface ProfileUsefulResponse {
        symbol: string;
        name: string;
        exchange: string;
        mic_code: string;
        sector: string;
        industry: string;
        employees: number;
        website: string;
        description: string;
        type: string;
        CEO: string;
        address: string;
        city: string;
        zip: string;
        state: string;
        country: string;
        phone: string;
    }
    interface DividendsRequest {
        symbol: string;
        exchange?: string;
        mic_code?: string;
        country?: string;
        range?: string;
        start_date?: string;
        end_date?: string;
        
    }
    interface DividendsResponse {
        meta: {
            symbol: string;
            name: string;
            currency: string;
            exchange: string;
            mic_code: string;
            exchange_timezone: string;
        };
        dividends: {
            ex_date: string;
            amount: number;
        }[];
    }
    interface SplitsRequest {
        symbol: string;
        exchange?: string;
        mic_code?: string;
        country?: string;
        range?: string;
        start_date?: string;
        end_date?: string;
        
    }
    interface SplitsResponse {
        meta: {
            symbol: string;
            name: string;
            currency: string;
            exchange: string;
            mic_code: string;
            exchange_timezone: string;
        };
        splits: {
            date: string;
            description: string;
            ratio: number;
            from_factor: number;
            to_factor: number;
        }[];
    }
    interface EarningsRequest {
        symbol: string;
        exchange?: string;
        mic_code?: string;
        country?: string;
        type?: string;
        period?: string;
        outputsize?: number;
        format?: string;
        delimiter?: string;
        
        dp?: number;
        start_date?: string;
        end_date?: string;
    }
    interface EarningsResponse {
        meta: {
            symbol: string;
            name: string;
            currency: string;
            exchange: string;
            mic_code: string;
            exchange_timezone: string;
        };
        earnings: {
            date: string;
            time: string;
            eps_estimate: number;
            eps_actual: number;
            difference: number;
            surprise_prc: number;
        }[];
        status: string;
    }
    interface EarningsCalendarRequest {
        exchange?: string;
        mic_code?: string;
        country?: string;
        format?: string;
        delimiter?: string;
        
        dp?: number;
        start_date?: string;
        end_date?: string;
    }
    interface EarningsCalendarResponse {
        earnings: {
            [date: string]: {
                symbol: string;
                name: string;
                currency: string;
                exchange: string;
                mic_code: string;
                country: string;
                time: string;
                eps_estimate: number;
                eps_actual: number;
                difference: number;
                surprise_prc: number;
            }[];
        };
        status: string;
    }
    interface InsiderTransactionsResponse {
        meta: {
            symbol: string;
            name: string;
            currency: string;
            exchange: string;
            mic_code: string;
            exchange_timezone: string;
        };
        insider_transactions: {
            full_name: string;
            position: string;
            date_reported: string;
            is_direct: boolean;
            shares: number;
            value: number;
            description: string;
        }[];
    }

    interface InsiderTransactionsRequest {
        symbol: string;
        exchange?: string;
        mic_code?: string;
        country?: string;
        
    }
    interface IncomeStatementResponse {
        meta: {
            symbol: string;
            name: string;
            currency: string;
            exchange: string;
            mic_code: string;
            exchange_timezone: string;
            period: string;
        };
        income_statement: {
            fiscal_date: string;
            quarter: string;
            sales: number;
            cost_of_goods: number;
            gross_profit: number;
            operating_expense: {
                research_and_development: number;
                selling_general_and_administrative: number;
                other_operating_expenses: number | null;
            };
            operating_income: number;
            non_operating_interest: {
                income: number;
                expense: number;
            };
            other_income_expense: number;
            pretax_income: number;
            income_tax: number;
            net_income: number;
            eps_basic: number;
            eps_diluted: number;
            basic_shares_outstanding: number;
            diluted_shares_outstanding: number;
            ebitda: number;
            net_income_continuous_operations: number | null;
            minority_interests: number | null;
            preferred_stock_dividends: number | null;
        }[];
    }

    interface IncomeStatementRequest {
        symbol: string;
        exchange?: string;
        mic_code?: string;
        country?: string;
        period?: string;
        start_date?: string;
        end_date?: string;
        
    }
    interface BalanceSheetResponse {
        meta: {
            symbol: string;
            name: string;
            currency: string;
            exchange: string;
            mic_code: string;
            exchange_timezone: string;
            period: string;
        };
        balance_sheet: {
            fiscal_date: string;
            assets: {
                current_assets: {
                    cash: number;
                    cash_equivalents: number;
                    cash_and_cash_equivalents: number;
                    other_short_term_investments: number;
                    accounts_receivable: number;
                    other_receivables: number;
                    inventory: number;
                    prepaid_assets: number | null;
                    restricted_cash: number | null;
                    assets_held_for_sale: number | null;
                    hedging_assets: number | null;
                    other_current_assets: number;
                    total_current_assets: number;
                };
                non_current_assets: {
                    properties: number;
                    land_and_improvements: number;
                    machinery_furniture_equipment: number;
                    construction_in_progress: number | null;
                    leases: number;
                    accumulated_depreciation: number;
                    goodwill: number | null;
                    investment_properties: number | null;
                    financial_assets: number | null;
                    intangible_assets: number | null;
                    investments_and_advances: number;
                    other_non_current_assets: number;
                    total_non_current_assets: number;
                };
                total_assets: number;
            };
            liabilities: {
                current_liabilities: {
                    accounts_payable: number;
                    accrued_expenses: number | null;
                    short_term_debt: number;
                    deferred_revenue: number;
                    tax_payable: number | null;
                    pensions: number | null;
                    other_current_liabilities: number;
                    total_current_liabilities: number;
                };
                non_current_liabilities: {
                    long_term_provisions: number | null;
                    long_term_debt: number;
                    provision_for_risks_and_charges: number;
                    deferred_liabilities: number | null;
                    derivative_product_liabilities: number | null;
                    other_non_current_liabilities: number;
                    total_non_current_liabilities: number;
                };
                total_liabilities: number;
            };
            shareholders_equity: {
                common_stock: number;
                retained_earnings: number;
                other_shareholders_equity: number;
                total_shareholders_equity: number;
                additional_paid_in_capital: number | null;
                treasury_stock: number | null;
                minority_interest: number | null;
            };
        }[];
    }

    interface BalanceSheetRequest {
        symbol: string;
        exchange?: string;
        mic_code?: string;
        country?: string;
        period?: string;
        start_date?: string;
        end_date?: string;
        
    }
    interface CashFlowResponse {
        meta: {
            symbol: string;
            name: string;
            currency: string;
            exchange: string;
            mic_code: string;
            exchange_timezone: string;
            period: string;
        };
        cash_flow: {
            fiscal_date: string;
            quarter: number;
            operating_activities: {
                net_income: number;
                depreciation: number;
                deferred_taxes: number;
                stock_based_compensation: number;
                other_non_cash_items: number;
                accounts_receivable: number;
                accounts_payable: number;
                other_assets_liabilities: number;
                operating_cash_flow: number;
            };
            investing_activities: {
                capital_expenditures: number;
                net_intangibles: number | null;
                net_acquisitions: number | null;
                purchase_of_investments: number;
                sale_of_investments: number;
                other_investing_activity: number;
                investing_cash_flow: number;
            };
            financing_activities: {
                long_term_debt_issuance: number | null;
                long_term_debt_payments: number;
                short_term_debt_issuance: number;
                common_stock_issuance: number | null;
                common_stock_repurchase: number;
                common_dividends: number;
                other_financing_charges: number;
                financing_cash_flow: number;
            };
            end_cash_position: number;
            income_tax_paid: number;
            interest_paid: number;
            free_cash_flow: number;
        }[];
    }

    interface CashFlowRequest {
        symbol: string;
        exchange?: string;
        mic_code?: string;
        country?: string;
        period?: string;
        start_date?: string;
        end_date?: string;
        
    }
    interface OptionsExpirationResponse {
        meta: {
            symbol: string;
            name: string;
            currency: string;
            exchange: string;
            mic_code: string;
            exchange_timezone: string;
        };
        dates: string[];
    }

    interface OptionsExpirationRequest {
        symbol: string;
        exchange?: string;
        mic_code?: string;
        country?: string;
        
    }
    interface OptionsChainResponse {
        meta: {
            symbol: string;
            name: string;
            currency: string;
            exchange: string;
            mic_code: string;
            exchange_timezone: string;
        };
        calls: OptionContract[];
        puts: OptionContract[];
    }

    interface OptionContract {
        contract_name: string;
        option_id: string;
        last_trade_date: string;
        strike: number;
        last_price: number;
        bid: number;
        ask: number;
        change: number;
        percent_change: number;
        volume: number;
        open_interest: number;
        implied_volatility: number;
        in_the_money: boolean;
    }

    interface OptionsChainRequest {
        symbol: string;
        exchange?: string;
        mic_code?: string;
        country?: string;
        expiration_date?: string;
        option_id?: string;
        side?: string;
        
    }
    interface KeyExecutivesResponse {
        meta: {
            symbol: string;
            name: string;
            currency: string;
            exchange: string;
            mic_code: string;
            exchange_timezone: string;
        };
        key_executives: KeyExecutive[];
    }

    interface KeyExecutive {
        name: string;
        title: string;
        age: number;
        year_born: number;
        pay: number;
    }

    interface KeyExecutivesRequest {
        symbol: string;
        exchange?: string;
        mic_code?: string;
        country?: string;
        
    }
    interface InstitutionalHoldersResponse {
        meta: {
            symbol: string;
            name: string;
            currency: string;
            exchange: string;
            mic_code: string;
            exchange_timezone: string;
        };
        institutional_holders: InstitutionalHolder[];
    }

    interface InstitutionalHolder {
        entity_name: string;
        date_reported: string;
        shares: number;
        value: number;
        percent_held: number;
    }

    interface InstitutionalHoldersRequest {
        symbol: string;
        exchange?: string;
        mic_code?: string;
        country?: string;
        
    }
    interface InstitutionalHoldersResponse {
        meta: Meta;
        institutional_holders: Holder[];
    }

    interface Holder {
        entity_name: string;
        date_reported: string;
        shares: number;
        value: number;
        percent_held: number;
    }

    interface Meta {
        symbol: string;
        name: string;
        currency: string;
        exchange: string;
        mic_code: string;
        exchange_timezone: string;
    }

    interface InstitutionalHoldersRequest {
        symbol: string;
        exchange?: string;
        mic_code?: string;
        country?: string;
        
    }
    interface FundHoldersResponse {
        meta: Meta;
        fund_holders: Holder[];
    }

    interface FundHoldersRequest {
        symbol: string;
        exchange?: string;
        mic_code?: string;
        country?: string;
        
    }
    interface DirectHoldersResponse {
        meta: Meta;
        direct_holders: Holder[];
    }

    interface DirectHoldersRequest {
        symbol: string;
        exchange?: string;
        mic_code?: string;
        country?: string;
        
    }
    interface EarningsEstimateResponse {
        earnings_estimate: EarningsEstimate[];
        status: string;
    }

    interface EarningsEstimate {
        date: string;
        period: string;
        number_of_analysts: number;
        avg_estimate: number;
        low_estimate: number;
        high_estimate: number;
        year_ago_eps: number;
    }

    interface EarningsEstimateRequest {
        symbol: string;
        country?: string;
        exchange?: string;
        
    }
    interface RevenueEstimateResponse {
        revenue_estimate: RevenueEstimate[];
        status: string;
    }

    interface RevenueEstimate {
        date: string;
        period: string;
        number_of_analysts: number;
        avg_estimate: number;
        low_estimate: number;
        high_estimate: number;
        year_ago_sales: number | null;
        sales_growth: number | null;
    }

    interface RevenueEstimateRequest {
        symbol: string;
        country?: string;
        exchange?: string;
        dp?: number;
        
    }
    interface EPSTrendResponse {
        eps_trend: EPSTrend[];
        status: string;
    }

    interface EPSTrend {
        date: string;
        period: string;
        current_estimate: number;
        seven_days_ago: number;
        thirty_days_ago: number;
        sixty_days_ago: number;
        ninety_days_ago: number;
    }

    interface EPSTrendRequest {
        symbol: string;
        country?: string;
        exchange?: string;
        
    }
    interface EPSRevisionsResponse {
        eps_revision: EPSRevision[];
        status: string;
    }

    interface EPSRevision {
        date: string;
        period: string;
        up_last_week: number;
        up_last_month: number;
        down_last_week: number;
        down_last_month: number;
    }

    interface EPSRevisionsRequest {
        symbol: string;
        country?: string;
        exchange?: string;
        
    }
    interface GrowthEstimatesResponse {
        growth_estimates: GrowthEstimates;
        status: string;
    }

    interface GrowthEstimates {
        current_quarter: number;
        next_quarter: number;
        current_year: number;
        next_year: number;
        next_5_years_pa: number;
        past_5_years_pa: number;
    }

    interface GrowthEstimatesRequest {
        symbol: string;
        country?: string;
        exchange?: string;
        
    }
    interface RecommendationsResponse {
        trends: Trends;
        rating: number;
        status: string;
    }

    interface Trends {
        current_month: Recommendation;
        previous_month: Recommendation;
        [key: string]: Recommendation;
    }

    interface Recommendation {
        strong_buy: number;
        buy: number;
        hold: number;
        sell: number;
        strong_sell: number;
    }

    interface RecommendationsRequest {
        symbol: string;
        country?: string;
        exchange?: string;
        
    }
    interface PriceTargetResponse {
        price_target: PriceTarget;
        status: string;
    }

    interface PriceTarget {
        high: number;
        median: number;
        low: number;
        average: number;
        current: number;
    }

    interface PriceTargetRequest {
        symbol: string;
        country?: string;
        exchange?: string;
        
    }
    interface AnalystRatingsLightResponse {
        ratings: AnalystRatingLight[];
        status: string;
    }

    interface AnalystRatingLight {
        date: string;
        firm: string;
        rating_change: string;
        rating_current: string;
        rating_prior: string;
    }

    interface AnalystRatingsLightRequest {
        symbol: string;
        country?: string;
        exchange?: string;
        rating_change?: string;
        outputsize?: number;
        
    }
    interface AnalystRatingsUSEquitiesResponse {
        ratings: AnalystRatingUSEquities[];
        status: string;
    }

    interface AnalystRatingUSEquities {
        date: string;
        firm: string;
        analyst_name: string;
        rating_change: string;
        rating_current: string;
        rating_prior: string;
        time: string;
        action_price_target: string;
        price_target_current: number;
        price_target_prior: number | null;
    }

    interface AnalystRatingsUSEquitiesRequest {
        symbol: string;
        exchange?: string;
        rating_change?: string;
        outputsize?: number;
        
    }

}



export { }