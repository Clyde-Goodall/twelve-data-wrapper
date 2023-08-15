// Types are defined here for each endpoint available as per https://twelvedata.com/docs
// If it's on there, it's in here.
// I am debating whether I should have individual websocket types or just have an option to specify an option in a fucntion to make it a websocket. 
// Or perhaps a wrapper function that yoou would call a function within.
// I guess I'll get there when I get there
// - CJ

declare global {

    interface AnyRequest {
        [key: string]: string | number | Object | Array<Object>
    }

    interface AnyResponse {
        [key: string]: string | number | Object | Array<Object>
    }

    // REFERENCE DATA

    /**
     * Config interface layout for all possible "/stock" endpoint options
     */
    interface StockRequest {
        symbol? : string	
        exchange? : string	
        mic_code? : string
        country? : string	
        type? : string
        format? : 'CSV' | 'JSON'
        delimiter? : string
        show_plan? : boolean
        include_delisted? : boolean
        apikey?: string
    }
    /**
     * "/stock" reponse object interface
     */
    interface StockResponse {
        readonly symbol : string	
        readonly name: string	
        readonly currency : string
        readonly exchange : string	
        readonly mic_code : string
        readonly country : string
        readonly type : string
        readonly access? : {
            global: string
            plan: string
        }
    }

    /**
     * Config interface layout for all possible "/forex_pairs" endpoint options
     */
    interface ForexPairRequest {
        symbol? : string	
        currency_base? : string	
        currency_quote? : string
        format? : string
        delimiter? : string
    }
    /**
     * "/stock" reponse object interface
     */
    interface ForexPairResponse {
        readonly symbol : string	
        readonly name : string	
        readonly currency : string
        readonly exchange : string	
        readonly mic_code : string
        readonly country : string
        readonly type : string
        readonly access? : {
            global: string
            plan: string
        }
    }

    /**
     * Config interface layout for all possible "/cryptocurrencies" endpoint options
     */
    interface CryptoRequest {
        symbol? : string	
        exchange? : string	
        currency_base? : string	
        currency_quote? : string
        format? : string
        delimiter? : string
    }
    /**
     * "/cryptocurrencies" reponse object interface
     */
    interface CryptoResponse {
        readonly symbol : string	
        readonly available_exchanges : string	
        readonly currency_base : string
        readonly currency_quote : string
        readonly access? : {
            global: string
            plan: string
        }
    }
        
    /**
     * Config interface layout for all possible "/etf" endpoint options
     */
    interface ETFRequest {
        symbol? : string	
        exchange? : string	
        mic_code? : string
        country? : string	
        type? : string
        format? : string
        delimiter? : string
        show_plan? : string
        include_delisted? : string
    }
    /**
     * "/etf" reponse object interface
     */
    interface ETFResponse {
        readonly symbol : string	
        readonly name: string	
        readonly currency : string
        readonly exchange : string	
        readonly mic_code : string
        readonly access? : {
            global: string
            plan: string
        }
    }
    /**
     * Config interface layout for all possible "/indices" endpoint options
     */
    interface ETFRequest {
        symbol? : string	
        exchange? : string	
        mic_code? : string
        country? : string	
        type? : string
        format? : string
        delimiter? : string
        show_plan? : string
        include_delisted? : string
    }
    /**
     * "/indeices" reponse object interface
     */
    interface ETFResponse {
        readonly symbol : string	
        readonly name: string	
        readonly country : string
        readonly currency : string
        readonly exchange : string	
        readonly mic_code : string
        readonly access? : {
            global: string
            plan: string
        }
    }
    /**
     * Config interface layout for all possible "/indices" endpoint options
     */
    interface ExchangesRequest {
        type? : string
        name? : string
        code? : string
        country? : string	
        format? : string
        delimiter? : string
        show_plan? : string
    }
    /**
     * "/indeices" reponse object interface
     */
    interface ExchangesResponse {
        readonly name: string	
        readonly code: string	
        readonly country : string
        readonly timezone : string	
        readonly access? : {
            global: string
            plan: string
        }
    }
    /**
     * Config interface layout for all possible "/cryptocurrency_exchanges" endpoint options
     */
    interface CryptoExchangeRequest {
        format? : string
        delimiter? : string
    }
    /**
     * "/cryptocurrency_exchanges" reponse object interface
     * Man, this is a pretty meager lil response lol
     */
    interface CryptoExchangeResponse {
        readonly name: string	
        readonly access? : {
            global: string
            plan: string
        }
    }
    /**
     * "/technical_indicators" response object interface. There are no input parameters.
     */
    interface TechnicalIndicatorResponse {
        readonly enable : boolean	
        readonly full_name : string	
        readonly description : string
        readonly type : string	
        readonly overlay : boolean
        readonly parameters : {
            readonly default? : number
            readonly range? : Array<string>
            readonly min_range? : number
            readonly max_range? : number
            readonly type? : string | number | Array<string | number>
        }
        readonly output_values: Object
        readonly tinting? : {
            readonly display? : string
            readonly color? : string
            readonly transparency? :  number
            readonly lower_bound? : string | number
            readonly upper_bound? : string | number
        }
        readonly access? : {
            global: string
            plan: string
        }
    }
    /**
     * Config interface layout for all possible "/symbol_search" endpoint options
     */
    interface SymbolSearchRequest {
        symbol? : string
        output_size? : string
        show_plan? : boolean
    }
    /**
     * "/symbol_search" reponse object interface
     */
    interface SymbolSearchResponse {
        readonly symbol: string	
        readonly instrument_name: string	
        readonly exchange : string
        readonly mic_code : string	
        readonly exchange_timezone : string	
        readonly instrument_type : string	
        readonly country : string	
        readonly access? : {
            global? : string
            plan? : string
        }
    }
    /**
     * Config interface layout for all possible "/earliest_timestamp" endpoint options
     */
    interface EarliestTimestampRequest {
        symbol? : string
        interval? : string
        exchange? : boolean
        mic_code? : string
        apikey: string
    }
    /**
     * "/earliest_timestamp" reponse object interface
     */
    interface EarliestTimestampResponse {
        readonly datetime: string	
        readonly unix_time: number
        readonly access? : {
            global: string
            plan: string
        }
    }
    /**
     * Config interface layout for all possible "/market_state" endpoint options
     */
    interface MarketStateRequest {
        exchange? : string
        code? : string
        country? : boolean
        apikey: string
    }
    /**
     * "/market_state" reponse object interface
     */
    interface MarketStateResponse {
        readonly name: string	
        readonly code: string	
        readonly country : string
        readonly is_market_open : boolean	
        // considering taking the dates and auto-formatting them to Date objects to save the end user time. Or at least have an option for it.
        readonly time_after_open : string	
        readonly time_to_open : string	
        readonly time_to_close : string
        readonly access? : {
            global: string
            plan: string
        }
    }

    // CORE DATA

    /**
     * Config interface layout for all possible "/time_series" endpoint options
     */
    interface TimeSeriesRequest {
        // important to note, this string can be any number of tickers separated by comma. 
        // Would making this an array and combining them before fetch be overkill?
        symbol? : string
        interval? : '1min' | '5min' | '15min' | '30min' | '45min' | '1h' | '2h' | '4h' | '1day' | '1week' |'1month'
        exchange? : string
        mic_code? : string
        country? : string
        type? : 'Stock' | 'Index' | 'ETF' | 'REIT'
        outputsize? : number
        format? : 'CSV' | 'JSON'
        delimiter? : string
        apikey : string
        prepost? : '1min' | '5min' | '15min' | '30min' | boolean
        dp? : string
        orde?: 'ASC' | 'DESC'
        timezone?: string
        date?: string
        start_date?: string
        end_date?: string
        previous_close?: boolean
    }
    /**
     * "/time_series" reponse object interface
     */
    interface TimeSeriesResponse {
        readonly meta: JSON	
        readonly datetime: string	
        readonly open : string
        readonly low: string	
        readonly close : string	
        readonly volume : string
        readonly access? : {
            global: string
            plan: string
        }
    }
    /**
     * Config interface layout for all possible "/exchange_rate" endpoint options
     */
    interface ExchangeRateRequest {
        // important to note, this string can be any number of tickers separated by comma. 
        // Would making this an array and combining them before fetch be overkill?
        symbol?: string
        date?: string
        format?: 'CSV' | 'JSON'
        delimiter?: string
        apikey: string
        dp?: string
        timezone?: string
    }
    /**
     * "/time_series" reponse object interface
     */
    interface ExchangeRateResponse {
        readonly symbol: JSON	
        readonly rate: string	
        readonly timestamp : string
        readonly access? : {
            global: string
            plan: string
        }
    }
    /**
     * Config interface layout for all possible "/currency_conversion" endpoint options
     */
    interface CurrencyConversionRequest {
        // important to note, this string can be any number of tickers separated by comma. 
        // Would making this an array and combining them before fetch be overkill?
        symbol: string
        amount: number
        date?: string
        format?: 'CSV' | 'JSON'
        delimiter?: string
        apikey: string
        dp?: string
        timezone?: string
    }
    /**
     * "/time_series" reponse object interface
     */
    interface CurrencyConversionResponse {
        readonly symbol: JSON	
        readonly rate: string	
        readonly amount : string
        readonly timestamp : string
        readonly access? : {
            global: string
            plan: string
        }
    }
    /**
     * Config interface layout for all possible "/quote" endpoint options
     */
    interface QuoteRequest {
        symbol: string
        interval?: number
        exchange?: string
        mic_code?: string
        country?: string
        volume_time_period?: string
        type?: string
        format?: 'CSV' | 'JSON'
        delimiter?: string
        apikey: string
        prepost? : '1min' | '5min' | '15min' | '30min' | boolean
        eod?: boolean
        rolling_period?: string
        dp?: string
        timezone?: string
    }
    /**
     * "/quote" reponse object interface
     */
    interface QuoteResponse {
        readonly symbol: string
        readonly name: number
        readonly exchange: string
        readonly mic_code: string
        readonly currency: string
        readonly timestamp: string
        readonly datetime: string
        readonly open: string
        readonly high: string
        readonly low: string
        readonly close: string
        readonly volume:string
        readonly previous_close: string
        readonly change: string
        readonly percent_change : string
        readonly average_volume: string
        readonly rolling_1d_change?: string
        readonly rolling_7d_change?: string
        readonly rolling_period_change?: string
        readonly is_market_open: boolean
        readonly fifty_two_week: Object // might need more detailed type structure
        // {
        //     low?: string
        //     high?: string
        //     low_change?: string
        //     high_change?: string
        //     low_change_percent?: string
        //     high_change_percent?: string
        //     range?: string
        // } 
        readonly exchange_change: string
        readonly extended_percent_change: string
        readonly extended_price: string
        readonly extended_timestamp: string
        readonly dp?: string
        readonly timezone?: string
    }
    /**
     * Config interface layout for all possible "/price" endpoint options
     */
    interface PriceRequest {
        symbol: string
        exchange?: string
        mic_code?: string
        country?: string
        volume_time_period?: string
        type?: string
        format?: 'CSV' | 'JSON'
        delimiter?: string
        apikey: string
        prepost? : '1min' | '5min' | '15min' | '30min' | boolean
        eod?: boolean
        rolling_period?: string
        dp?: string
    }
    /**
     * "/price" reponse object interface
     */
    interface PriceResponse {
        readonly price: string
    }
    /**
     * Config interface layout for all possible "/eod" endpoint options
     */ 
    interface EODRequest {
        symbol: string
        exchange?: string
        mic_code?: string
        country?: string
        type?: 'Stock' | 'Index' | 'ETF' | 'REIT'
        apikey: string
        prepost? : '1min' | '5min' | '15min' | '30min' | boolean
        dp?: string
    }
    /**
     * "/eod" reponse object interface
     */
    interface EODResponse {
        readonly symbol: string
        readonly exchange: string
        readonly mic_code: string
        readonly currency: string
        readonly datetime:string
        readonly close: string
    }
     /**
     * Config interface layout for all possible "/market_maker/:security" endpoint options
     */
    interface MMRequest {
        type: 'stocks' | 'etf' | 'mutual_funds' | 'forex' | 'crypto'
        direction?: 'gainers' | 'losers'
        outputsize?: string
        country?: string
        apikey: string
        dp?: string
    }
     /**
     * "/market_maker/:security" reponse object interface
     */
    interface MMResponse {
        readonly symbol: string
        readonly name: string
        readonly exchange: string
        readonly mic_code: string
        readonly datetime: string
        readonly last:string | number
        readonly high: string | number
        readonly low: string | number
        readonly volume: string | number
        readonly change: string | number
        readonly percent_change: string | number
    }

     /**
     * Config interface layout for all possible "/mutual_funds/list" endpoint options
     */
     interface MutualListRequest {
        symbol?: string
        country?: string
        fund_family?: string
        fund_type?: string
        performance_rating?: string
        risk_rating?: string | number
        page?: string
        output_size?: string | number
        apikey: string
    }
     /**
     * "/mutual_funds/list" reponse object interface
     */
    interface MutualListResponse {
        readonly count: string | number
        readonly symbol: string
        readonly name: string
        readonly country: string
        readonly fund_family: string
        readonly fund_type: string
        readonly performance_rating: string | number
        readonly risk_rating:string | number
    }
     /**
     * Config interface layout for all possible "/mutual_funds/list" endpoint options
     */
     interface MutualFamilyRequest {
        country?: string
        fund_family?: string
        apikey: string
    }
     /**
     * "/mutual_funds/list" reponse object interface
     */
    interface MutualFamilyResponse {
        readonly result: Object
    }
     /**
     * Config interface layout for all possible "/mutual_funds/list" endpoint options
     */
     interface MutualTypeRequest {
        country?: string
        fund_type?: string
        apikey: string
    }
     /**
     * "/mutual_funds/list" reponse object interface
     */
    interface MutualTypeResponse {
        readonly result: Object
    }
     /**
     * Config interface layout for all possible "/mutual_funds/list" endpoint options
     */
     interface MutualRequest {
        symbol?: string
        country?: string
        dp?: string | number
        apikey: string
    }
     /**
     * "/mutual_funds/list" reponse object interface
     */
    interface MutualResponse {
        readonly symbol: string
        readonly name: string
        readonly country: string
        readonly fund_family?: string
        readonly fund_type?: string
        readonly currency?: string | number
        readonly share_class_inception_date?:string
        readonly ytd_return?: string | number
        readonly expense_ratio_net?: string | number
        readonly yield?: string | number
        readonly nav?: string | number
        readonly min_investment?: string | number
        readonly turnover_rate?: string | number
        readonly net_assets?: string | number
        readonly overview?: string | number
        readonly people?: Array<Object>
        readonly trailing_returns?: Array<Object>
        readonly annual_total_returns?: Array<Object>
        readonly quarterly_total_returns?: Array<Object>
        readonly load_adjusted?: Array<Object>
        readonly volatility_measures?: Array<Object>
        readonly valuation_metrics?: Array<Object>
        readonly perforance_rating?: string | number
        readonly risk_rating?: string | number
        readonly return_rating?: string | number
        readonly major_market_sectors?: Object
        readonly asset_allocation?: Object
        readonly top_holdings?: Object
        readonly expenses?: Object
        readonly pricing?: Object
        readonly brokerages?: Array<string>
        readonly sustainability?: Object
        readonly corporate_aum?: string | number  
    }
}

export {}