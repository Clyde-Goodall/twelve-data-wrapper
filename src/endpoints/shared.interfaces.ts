
export interface Meta {
    symbol: string;
    name?: string;
    interval?: string;
    currency?: string;
    currencyBase?: string;
    currencyQuote?: string;
    exchangeTimezone?: string;
    exchange?: string;
    period?: "Annual" | "Quarterly";
    micCode?: string;
    type?: string;
}

export enum Interval {
    OneMin = "1min",
    FiveMin = "5min",
    FifteenMin = "15min",
    ThirtyMin = "30min",
    FortyFiveMin = "45min",
    OneHour = "1h",
    TwoHour = "2h",
    FourHour = "4h",
    FiveHour = "5h",
    OneDay = "1day",
    OneWeek = "1week",
    OneMonth = "1month"
}

export enum SecurityType {
    AmericanDepositaryReceipt = "American Depositary Receipt",
    Bond = "Bond",
    BondFund = "Bond Fund",
    ClosedEndFund = "Closed-end Fund",
    CommonStock = "Common Stock",
    DepositaryReceipt = "Depositary Receipt",
    DigitalCurrency = "Digital Currency",
    ETF = "ETF",
    ExchangeTradedNote = "Exchange-Traded Note",
    GlobalDepositaryReceipt = "Global Depositary Receipt",
    Index = "Index",
    LimitedPartnership = "Limited Partnership",
    MutualFund = "Mutual Fund",
    PhysicalCurrency = "Physical Currency",
    PreferredStock = "Preferred Stock",
    REIT = "REIT",
    Right = "Right",
    StructuredProduct = "Structured Product",
    Trust = "Trust",
    Unit = "Unit",
    Warrant = "Warrant"
}

export const enum TimeRange {
    Last = "last",
    Next = "next",
    OneMonth = "1m",
    ThreeMonths = "3m",
    SixMonths = "6m",
    YearToDate = "ytd",
    OneYear = "1y",
    TwoYears = "2y",
    FiveYears = "5y",
    Full = "full"
}