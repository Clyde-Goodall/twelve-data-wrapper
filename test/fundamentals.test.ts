import {afterEach, beforeEach, describe, it} from "node:test";
import assert from "node:assert";
import nock from "nock";
import TwelveDataWrapper from "../src/twelveData";
import {getDefaultConfig} from "../src/defaults";
import {
    LogoRequest,
    LogoResponse,
    ProfileRequest,
    ProfileResponse,
    DividendsRequest,
    DividendsResponse,
    DividendsCalendarRequest,
    DividendsCalendarResponse,
    SplitsRequest,
    SplitsResponse,
    SplitsCalendarRequest,
    SplitsCalendarResponse,
    EarningsRequest,
    EarningsResponse,
    EarningsCalendarRequest,
    EarningsCalendarResponse,
    IPOCalendarRequest,
    IPOCalendarResponse,
    StatisticsRequest,
    StatisticsResponse,
    IncomeStatementRequest,
    IncomeStatementResponse,
    IncomeStatementConsolidatedRequest,
    IncomeStatementConsolidatedResponse,
    BalanceSheetRequest,
    BalanceSheetResponse,
    CashFlowRequest,
    CashFlowResponse,
    CashFlowConsolidatedRequest,
    CashFlowConsolidatedResponse,
    MarketCapRequest,
    MarketCapResponse,
    KeyExecutivesRequest,
    KeyExecutivesResponse
} from "../src/endpoints/fundamentals/fundamental.interfaces";
import { Endpoints } from "../src/endpoints/endpoints";
import { TimeRange } from "../src/endpoints/shared.interfaces";

describe('Fundamentals API Endpoint response test', () => {
    beforeEach(() => {
        nock.cleanAll();
    })
    afterEach(() => {
        // Verify that all expected HTTP calls were made
        assert.strictEqual(nock.isDone(), true, 'Not all nocked requests were called');
    });

    it("Should return a valid LogoResponse object", async () => {
        const logoResponseMockData: LogoResponse = {
            meta: {
                symbol: "AAPL",
                exchange: "NASDAQ"
            },
            url: "https://example.com/logo.png",
            logoBase: "AAPL",
            logoQuote: "USD"
        };
        const logoRequestMockData: LogoRequest = {
            symbol: "AAPL",
            exchange: "NASDAQ",
            micCode: "XNGS",
            country: "US"
        };
        const client = new TwelveDataWrapper();
        nock(getDefaultConfig().baseUrl!)
            .get(`${Endpoints.Logo}?apikey=demo`)
            .reply(200, logoResponseMockData);

        const result = await client.fundamentals.logo(logoRequestMockData);
        assert.deepEqual(result, logoResponseMockData)
    });

    it("Should return a valid ProfileResponse object", async () => {
        const profileResponseMockData: ProfileResponse = {
            symbol: "AAPL",
            name: "Apple Inc.",
            exchange: "NASDAQ",
            mic_code: "XNGS",
            sector: "Technology",
            industry: "Consumer Electronics",
            employees: 164000,
            website: "https://www.apple.com",
            description: "Apple Inc. designs and manufactures consumer electronics",
            type: "Common Stock",
            CEO: "Tim Cook",
            address: "One Apple Park Way",
            address2: "",
            city: "Cupertino",
            zip: "95014",
            state: "CA",
            country: "US",
            phone: "+1-408-996-1010"
        };
        const profileRequestMockData: ProfileRequest = {
            symbol: "AAPL",
            figi: "BBG000B9XRY4",
            isin: "US0378331005",
            cusip: "037833100"
        };
        const client = new TwelveDataWrapper();
        nock(getDefaultConfig().baseUrl!)
            .get(`${Endpoints.Profile}?apikey=demo`)
            .reply(200, profileResponseMockData);

        const result = await client.fundamentals.profile(profileRequestMockData);
        assert.deepEqual(result, profileResponseMockData)
    });

    it("Should return a valid DividendsResponse object", async () => {
        const dividendsResponseMockData: DividendsResponse = {
            meta: {
                symbol: "AAPL",
                name: "Apple Inc.",
                currency: "USD",
                exchange: "NASDAQ",
                micCode: "XNGS",
                exchangeTimezone: "America/New_York"
            },
            dividends: [{
                exDate: "2023-11-10",
                amount: 0.24
            }]
        };
        const dividendsRequestMockData: DividendsRequest = {
            meta: {},
            symbol: "AAPL",
            adjust: true
        };
        const client = new TwelveDataWrapper();
        nock(getDefaultConfig().baseUrl!)
            .get(`${Endpoints.Dividends}?apikey=demo`)
            .reply(200, dividendsResponseMockData);

        const result = await client.fundamentals.dividends(dividendsRequestMockData);
        assert.deepEqual(result, dividendsResponseMockData)
    });

    it("Should return a valid DividendsCalendarResponse object", async () => {
        const dividendsCalendarResponseMockData: DividendsCalendarResponse = {
            dividends: [{
                symbol: "AAPL",
                micCode: "XNGS",
                exchange: "NASDAQ",
                exDate: "2023-11-10",
                amount: 0.24
            }]
        };
        const dividendsCalendarRequestMockData: DividendsCalendarRequest = {
            startDate: "2023-01-01",
            endDate: "2023-12-31"
        };
        const client = new TwelveDataWrapper();
        nock(getDefaultConfig().baseUrl!)
            .get(`${Endpoints.DividendsCalendar}?apikey=demo`)
            .reply(200, dividendsCalendarResponseMockData);

        const result = await client.fundamentals.dividendsCalendar(dividendsCalendarRequestMockData);
        assert.deepEqual(result, dividendsCalendarResponseMockData)
    });

    it("Should return a valid SplitsResponse object", async () => {
        const splitsResponseMockData: SplitsResponse = {
            meta: {
                symbol: "AAPL",
                name: "Apple Inc.",
                currency: "USD",
                exchange: "NASDAQ",
                micCode: "XNGS",
                exchangeTimezone: "America/New_York"
            },
            splits: [{
                date: "2020-08-31",
                description: "4:1 Stock Split",
                ratio: 4.0,
                fromFactor: 1,
                toFactor: 4
            }]
        };
        const splitsRequestMockData: SplitsRequest = {
            symbol: "AAPL",
            range: TimeRange.Full
        };
        const client = new TwelveDataWrapper();
        nock(getDefaultConfig().baseUrl!)
            .get(`${Endpoints.Splits}?apikey=demo`)
            .reply(200, splitsResponseMockData);

        const result = await client.fundamentals.splits(splitsRequestMockData);
        assert.deepEqual(result, splitsResponseMockData)
    });

    it("Should return a valid SplitsCalendarResponse object", async () => {
        const splitsCalendarResponseMockData: SplitsCalendarResponse = {
            splits: [{
                date: "2020-08-31",
                symbol: "AAPL",
                micCode: "XNGS",
                exchange: "NASDAQ",
                description: "4:1 Stock Split",
                ratio: 4.0,
                fromFactor: 1,
                toFactor: 4
            }]
        };
        const splitsCalendarRequestMockData: SplitsCalendarRequest = {
            startDate: "2020-01-01",
            endDate: "2020-12-31"
        };
        const client = new TwelveDataWrapper();
        nock(getDefaultConfig().baseUrl!)
            .get(`${Endpoints.SplitsCalendar}?apikey=demo`)
            .reply(200, splitsCalendarResponseMockData);

        const result = await client.fundamentals.splitsCalendar(splitsCalendarRequestMockData);
        assert.deepEqual(result, splitsCalendarResponseMockData)
    });

    it("Should return a valid EarningsResponse object", async () => {
        const earningsResponseMockData: EarningsResponse = {
            meta: {
                symbol: "AAPL",
                name: "Apple Inc.",
                currency: "USD",
                exchange: "NASDAQ",
                mic_code: "XNGS",
                exchangeTimezone: "America/New_York"
            },
            earnings: [{
                date: "2023-11-02",
                time: "16:00",
                epsEstimate: 1.39,
                epsActual: 1.46,
                difference: 0.07,
                surprisePrc: 5.04
            }]
        };
        const earningsRequestMockData: EarningsRequest = {
            symbol: "AAPL",
            period: "latest"
        };
        const client = new TwelveDataWrapper();
        nock(getDefaultConfig().baseUrl!)
            .get(`${Endpoints.Earnings}?apikey=demo`)
            .reply(200, earningsResponseMockData);

        const result = await client.fundamentals.earnings(earningsRequestMockData);
        assert.deepEqual(result, earningsResponseMockData)
    });

    it("Should return a valid EarningsCalendarResponse object", async () => {
        const earningsCalendarResponseMockData: EarningsCalendarResponse = {
            earnings: {
                "2023-11-02": [{
                    symbol: "AAPL",
                    name: "Apple Inc.",
                    currency: "USD",
                    exchange: "NASDAQ",
                    micCode: "XNGS",
                    country: "US",
                    time: "16:00",
                    epsEstimate: 1.39,
                    epsActual: 1.46,
                    difference: 0.07,
                    surprisePrc: 5.04
                }]
            }
        };
        const earningsCalendarRequestMockData: EarningsCalendarRequest = {
            startDate: "2023-11-01",
            endDate: "2023-11-30"
        };
        const client = new TwelveDataWrapper();
        nock(getDefaultConfig().baseUrl!)
            .get(`${Endpoints.EarningsCalendar}?apikey=demo`)
            .reply(200, earningsCalendarResponseMockData);

        const result = await client.fundamentals.earningsCalendar(earningsCalendarRequestMockData);
        assert.deepEqual(result, earningsCalendarResponseMockData)
    });

    it("Should return a valid IPOCalendarResponse object", async () => {
        const ipoCalendarResponseMockData: IPOCalendarResponse = {
            "2023-11-01": [{
                symbol: "TEST",
                name: "Test Company Inc.",
                exchange: "NASDAQ",
                micCode: "XNGS",
                priceRangeLow: 15.0,
                priceRangeHigh: 17.0,
                offerPrice: 16.0,
                currency: "USD",
                shares: 10000000
            }]
        };
        const ipoCalendarRequestMockData: IPOCalendarRequest = {
            startDate: "2023-11-01",
            endDate: "2023-11-30"
        };
        const client = new TwelveDataWrapper();
        nock(getDefaultConfig().baseUrl!)
            .get(`${Endpoints.IpoCalendar}?apikey=demo`)
            .reply(200, ipoCalendarResponseMockData);

        const result = await client.fundamentals.ipoCalendar(ipoCalendarRequestMockData);
        assert.deepEqual(result, ipoCalendarResponseMockData)
    });

    it("Should return a valid StatisticsResponse object", async () => {
        const statisticsResponseMockData: StatisticsResponse = {
            meta: {
                symbol: "AAPL",
                name: "Apple Inc.",
                currency: "USD",
                exchange: "NASDAQ",
                micCode: "XNGS",
                exchangeTimezone: "America/New_York"
            },
            statistics: {
                valuationMetrics: {
                    marketCapitalization: 3000000000000,
                    enterpriseValue: 2950000000000,
                    trailingPE: 29.5,
                    forwardPE: 26.8,
                    pegRatio: 2.1,
                    priceToSalesTTM: 7.8,
                    priceToBookMRQ: 45.2,
                    enterpriseToRevenue: 7.6,
                    enterpriseToEBITDA: 22.3
                },
                financials: {
                    fiscalYearEnds: "September",
                    mostRecentQuarter: "2023-09-30",
                    grossMargin: 0.451,
                    profitMargin: 0.256,
                    operatingMargin: 0.298,
                    returnOnAssetsTTM: 0.223,
                    returnOnEquityTTM: 1.479,
                    incomeStatement: {
                        revenueTTM: 383285000000,
                        revenuePerShareTTM: 24.32,
                        quarterlyRevenueGrowth: -0.013,
                        grossProfitTTM: 172949000000,
                        ebitda: 123136000000,
                        netIncomeToCommonTTM: 97000000000,
                        dilutedEpsTTM: 6.16,
                        quarterlyEarningsGrowthYoY: -0.133
                    },
                    balanceSheet: {
                        totalCashMRQ: 62639000000,
                        totalCashPerShareMRQ: 3.98,
                        totalDebtMRQ: 111088000000,
                        totalDebtToEquityMRQ: 1.815,
                        currentRatioMRQ: 1.06,
                        bookValuePerShareMRQ: 3.85
                    },
                    cashFlow: {
                        operatingCashFlowTTM: 110543000000,
                        leveredFreeCashFlowTTM: 80674000000
                    }
                },
                stockStatistics: {
                    sharesOutstanding: 15728700000,
                    floatShares: 15728700000,
                    avgTenVolume: 46820000,
                    avgNinetyVolume: 52350000,
                    sharesShort: 115676000,
                    shortRatio: 2.47,
                    shortPercentOfSharesOutstanding: 0.74,
                    percentHeldByInsiders: 0.07,
                    percentHeldByInstitutions: 59.75
                },
                stockPriceSummary: {
                    fiftyTwoWeekLow: 124.17,
                    fiftyTwoWeekHigh: 199.62,
                    fiftyTwoWeekChange: 0.35,
                    beta: 1.29,
                    dayFiftyMA: 180.24,
                    dayTwoHundredMA: 171.89
                },
                dividendsAndSplits: {
                    forwardAnnualDividendRate: 0.96,
                    forwardAnnualDividendYield: 0.0050,
                    trailingAnnualDividendRate: 0.96,
                    trailingAnnualDividendYield: 0.0051,
                    fiveYearAverageDividendYield: 1.17,
                    payoutRatio: 0.16,
                    dividendFrequency: "Quarterly",
                    dividendDate: "2023-11-16",
                    exDividendDate: "2023-11-10",
                    lastSplitFactor: "4:1",
                    lastSplitDate: "2020-08-31"
                }
            }
        };
        const statisticsRequestMockData: StatisticsRequest = {
            symbol: "AAPL"
        };
        const client = new TwelveDataWrapper();
        nock(getDefaultConfig().baseUrl!)
            .get(`${Endpoints.Statistics}?apikey=demo`)
            .reply(200, statisticsResponseMockData);

        const result = await client.fundamentals.statistics(statisticsRequestMockData);
        assert.deepEqual(result, statisticsResponseMockData)
    });

    it("Should return a valid IncomeStatementResponse object", async () => {
        const incomeStatementResponseMockData: IncomeStatementResponse = {
            meta: {
                symbol: "AAPL",
                name: "Apple Inc.",
                currency: "USD",
                exchange: "NASDAQ",
                micCode: "XNGS",
                exchangeTimezone: "America/New_York",
                period: "annual"
            },
            incomeStatement: [{
                fiscalDate: "2023-09-30",
                quarter: 4,
                year: 2023,
                sales: 383285000000,
                costOfGoods: 210352000000,
                grossProfit: 172933000000,
                operatingExpense: {
                    researchAndDevelopment: 29915000000,
                    sellingGeneralAndAdministrative: 24932000000,
                    otherOperatingExpenses: 0
                },
                operatingIncome: 114301000000,
                nonOperatingInterest: {
                    income: 3750000000,
                    expense: 3933000000
                },
                otherIncomeExpense: -565000000,
                pretaxIncome: 113949000000,
                incomeTax: 16741000000,
                netIncome: 97000000000,
                epsBasic: 6.16,
                epsDiluted: 6.16,
                basicSharesOutstanding: 15744231000,
                dilutedSharesOutstanding: 15744231000,
                ebit: 114301000000,
                ebitda: 123136000000,
                netIncomeContinuousOperations: 97000000000,
                minorityInterests: 0,
                preferredStockDividends: 0
            }]
        };
        const incomeStatementRequestMockData: IncomeStatementRequest = {
            symbol: "AAPL",
            period: "annually",
        };
        const client = new TwelveDataWrapper();
        nock(getDefaultConfig().baseUrl!)
            .get(`${Endpoints.IncomeStatement}?apikey=demo`)
            .reply(200, incomeStatementResponseMockData);

        const result = await client.fundamentals.incomeStatement(incomeStatementRequestMockData);
        assert.deepEqual(result, incomeStatementResponseMockData)
    });

    it("Should return a valid IncomeStatementConsolidatedResponse object", async () => {
        const incomeStatementConsolidatedResponseMockData: IncomeStatementConsolidatedResponse = {
            incomeStatement: [{
                fiscalDate: "2023-09-30",
                year: 2023,
                revenue: {
                    totalRevenue: 383285000000,
                    operatingRevenue: 383285000000
                },
                grossProfit: {
                    grossProfitValue: 172933000000,
                    costOfRevenue: {
                        costOfRevenueValue: 210352000000,
                        exciseTaxes: 0,
                        reconciledCostOfRevenue: 210352000000
                    }
                },
                operatingIncome: {
                    operatingIncomeValue: 114301000000,
                    totalOperatingIncomeAsReported: 114301000000,
                    operatingExpense: 58632000000,
                    otherOperatingExpenses: 0,
                    totalExpenses: 268984000000
                },
                netIncome: {
                    netIncomeValue: 97000000000,
                    netIncomeCommonStockholders: 97000000000,
                    netIncomeIncludingNoncontrollingInterests: 97000000000,
                    netIncomeFromTaxLossCarryforward: 0,
                    netIncomeExtraordinary: 0,
                    netIncomeDiscontinuousOperations: 0,
                    netIncomeContinuousOperations: 97000000000,
                    netIncomeFromContinuingOperationNetMinorityInterest: 97000000000,
                    netIncomeFromContinuingAndDiscontinuedOperation: 97000000000,
                    normalizedIncome: 97000000000,
                    minorityInterests: 0
                },
                earningsPerShare: {
                    dilutedEps: 6.16,
                    basicEps: 6.16,
                    continuingAndDiscontinuedDilutedEps: 6.16,
                    continuingAndDiscontinuedBasicEps: 6.16,
                    normalizedDilutedEps: 6.16,
                    normalizedBasicEps: 6.16,
                    reportedNormalizedDilutedEps: 6.16,
                    reportedNormalizedBasicEps: 6.16,
                    dilutedEpsOtherGainsLosses: 0,
                    taxLossCarryforwardDilutedEps: 0,
                    dilutedAccountingChange: 0,
                    dilutedExtraordinary: 0,
                    dilutedDiscontinuousOperations: 0,
                    dilutedContinuousOperations: 6.16,
                    basicEpsOtherGainsLosses: 0,
                    taxLossCarryforwardBasicEps: 0,
                    basicAccountingChange: 0,
                    basicExtraordinary: 0,
                    basicDiscontinuousOperations: 0,
                    basicContinuousOperations: 6.16,
                    dilutedNiAvailToCommonStockholders: 97000000000,
                    averageDilutionEarnings: 15744231000
                },
                expenses: {
                    totalExpenses: 268984000000,
                    sellingGeneralAndAdministrationExpense: 24932000000,
                    sellingAndMarketingExpense: 0,
                    generalAndAdministrativeExpense: 0,
                    otherGeneralAndAdministrativeExpense: 0,
                    depreciationAmortizationDepletionIncomeStatement: 11519000000,
                    researchAndDevelopmentExpense: 29915000000,
                    insuranceAndClaimsExpense: 0,
                    rentAndLandingFees: 0,
                    salariesAndWagesExpense: 0,
                    rentExpenseSupplemental: 0,
                    provisionForDoubtfulAccounts: 0
                },
                interestIncomeAndExpense: {
                    interestIncome: 3750000000,
                    interestExpense: 3933000000,
                    netInterestIncome: -183000000,
                    netNonOperatingInterestIncomeExpense: -183000000,
                    interestExpenseNonOperating: 3933000000,
                    interestIncomeNonOperating: 3750000000
                },
                otherIncomeAndExpenses: {
                    otherIncomeExpense: -565000000,
                    otherNonOperatingIncomeExpenses: -565000000,
                    specialIncomeCharges: 0,
                    gainOnSaleOfPpe: 0,
                    gainOnSaleOfBusiness: 0,
                    gainOnSaleOfSecurity: 0,
                    otherSpecialCharges: 0,
                    writeOff: 0,
                    impairmentOfCapitalAssets: 0,
                    restructuringAndMergerAcquisition: 0,
                    securitiesAmortization: 0,
                    earningsFromEquityInterest: 0,
                    earningsFromEquityInterestNetOfTax: 0,
                    totalOtherFinanceCost: 0
                },
                taxes: {
                    taxProvision: 16741000000,
                    taxEffectOfUnusualItems: 0,
                    taxRateForCalculations: 0.147,
                    otherTaxes: 0
                },
                depreciationAndAmortization: {
                    depreciationAmortizationDepletion: 11519000000,
                    amortizationOfIntangibles: 0,
                    depreciation: 11519000000,
                    amortization: 0,
                    depletion: 0,
                    depreciationAndAmortizationInIncomeStatement: 11519000000
                },
                ebitda: {
                    ebitdaValue: 123136000000,
                    normalizedEbitdaValue: 123136000000,
                    ebitValue: 114301000000
                },
                dividendsAndShares: {
                    dividendPerShare: 0.96,
                    dilutedAverageShares: 15744231000,
                    basicAverageShares: 15744231000,
                    preferredStockDividends: 0,
                    otherUnderPreferredStockDividend: 0
                },
                unusualItems: {
                    totalUnusualItems: 0,
                    totalUnusualItemsExcludingGoodwill: 0
                },
                depreciation: {
                    reconciledDepreciation: 11519000000
                },
                pretaxIncome: {
                    pretaxIncomeValue: 113949000000
                },
                specialIncomeCharges: {
                    specialIncomeChargesValue: 0
                }
            }]
        };
        const incomeStatementConsolidatedRequestMockData: IncomeStatementConsolidatedRequest = {
            symbol: "AAPL",
            period: "annually",
        };
        const client = new TwelveDataWrapper();
        nock(getDefaultConfig().baseUrl!)
            .get(`${Endpoints.IncomeStatementConsolidated}?apikey=demo`)
            .reply(200, incomeStatementConsolidatedResponseMockData);

        const result = await client.fundamentals.incomeStatementConsolidated(incomeStatementConsolidatedRequestMockData);
        assert.deepEqual(result, incomeStatementConsolidatedResponseMockData)
    });

    it("Should return a valid BalanceSheetResponse object", async () => {
        const balanceSheetResponseMockData: BalanceSheetResponse = {
            meta: {
                symbol: "AAPL",
                name: "Apple Inc.",
                currency: "USD",
                exchange: "NASDAQ",
                micCode: "XNGS",
                exchangeTimezone: "America/New_York",
                period: "annual"
            },
            balanceSheet: [{
                fiscalDate: "2023-09-30",
                year: 2023,
                assets: {
                    currentAssets: {
                        cash: 29965000000,
                        cashEquivalents: 32674000000,
                        cashAndCashEquivalents: 62639000000,
                        otherShortTermInvestments: 31590000000,
                        accountsReceivable: 29508000000,
                        otherReceivables: 31477000000,
                        inventory: 6331000000,
                        prepaidAssets: 0,
                        restrictedCash: 0,
                        assetsHeldForSale: 0,
                        hedgingAssets: 0,
                        otherCurrentAssets: 0,
                        totalCurrentAssets: 143566000000
                    },
                    nonCurrentAssets: {
                        properties: 43715000000,
                        landAndImprovements: 0,
                        machineryFurnitureEquipment: 0,
                        constructionInProgress: 0,
                        leases: 0,
                        accumulatedDepreciation: -70283000000,
                        goodwill: 0,
                        investmentProperties: 0,
                        financialAssets: 100544000000,
                        intangibleAssets: 0,
                        investmentsAndAdvances: 0,
                        otherNonCurrentAssets: 64758000000,
                        totalNonCurrentAssets: 238734000000
                    },
                    totalAssets: 352755000000
                },
                liabilities: {
                    currentLiabilities: {
                        accountsPayable: 62611000000,
                        accruedExpenses: 0,
                        shortTermDebt: 9822000000,
                        deferredRevenue: 8061000000,
                        taxPayable: 0,
                        pensions: 0,
                        otherCurrentLiabilities: 54563000000,
                        totalCurrentLiabilities: 145308000000
                    },
                    nonCurrentLiabilities: {
                        longTermProvisions: 0,
                        longTermDebt: 106550000000,
                        provisionForRisksAndCharges: 0,
                        deferredLiabilities: 0,
                        derivativeProductLiabilities: 0,
                        otherNonCurrentLiabilities: 39441000000,
                        totalNonCurrentLiabilities: 145991000000
                    },
                    totalLiabilities: 290437000000
                },
                shareholdersEquity: {
                    commonStock: 73812000000,
                    retainedEarnings: -214000000000,
                    otherShareholdersEquity: 302506000000,
                    totalShareholdersEquity: 62318000000,
                    additionalPaidInCapital: 0,
                    treasuryStock: 0,
                    minorityInterest: 0
                }
            }]
        };
        const balanceSheetRequestMockData: BalanceSheetRequest = {
            symbol: "AAPL",
            period: "annually",
        };
        const client = new TwelveDataWrapper();
        nock(getDefaultConfig().baseUrl!)
            .get(`${Endpoints.BalanceSheet}?apikey=demo`)
            .reply(200, balanceSheetResponseMockData);

        const result = await client.fundamentals.balanceSheet(balanceSheetRequestMockData);
        assert.deepEqual(result, balanceSheetResponseMockData)
    });

    it("Should return a valid CashFlowResponse object", async () => {
        const cashFlowResponseMockData: CashFlowResponse = {
            meta: {
                symbol: "AAPL",
                name: "Apple Inc.",
                currency: "USD",
                exchange: "NASDAQ",
                micCode: "XNGS",
                exchangeTimezone: "America/New_York",
                period: "annual"
            },
            cashFlow: [{
                fiscalDate: "2023-09-30",
                quarter: "Q4",
                year: 2023,
                operatingActivities: {
                    netIncome: 97000000000,
                    depreciation: 11519000000,
                    deferredTaxes: 0,
                    stockBasedCompensation: 10833000000,
                    otherNonCashItems: 0,
                    accountsReceivable: -1688000000,
                    accountsPayable: 1889000000,
                    otherAssetsLiabilities: -5618000000,
                    operatingCashFlow: 110543000000
                },
                investingActivities: {
                    capitalExpenditures: -10959000000,
                    netIntangibles: 0,
                    netAcquisitions: 0,
                    purchaseOfInvestments: -29513000000,
                    saleOfInvestments: 39686000000,
                    otherInvestingActivity: 0,
                    investingCashFlow: -786000000
                },
                financingActivities: {
                    longTermDebtIssuance: 5228000000,
                    longTermDebtPayments: -11151000000,
                    shortTermDebtIssuance: 0,
                    commonStockIssuance: 1567000000,
                    commonStockRepurchase: -77550000000,
                    commonDividends: -14841000000,
                    otherFinancingCharges: 0,
                    financingCashFlow: -96747000000
                },
                endCashPosition: 62639000000,
                incomeTaxPaid: 19300000000,
                interestPaid: 3803000000,
                freeCashFlow: 99584000000
            }]
        };
        const cashFlowRequestMockData: CashFlowRequest = {
            symbol: "AAPL",
            period: "annually",
        };
        const client = new TwelveDataWrapper();
        nock(getDefaultConfig().baseUrl!)
            .get(`${Endpoints.CashFlow}?apikey=demo`)
            .reply(200, cashFlowResponseMockData);

        const result = await client.fundamentals.cashFlow(cashFlowRequestMockData);
        assert.deepEqual(result, cashFlowResponseMockData)
    });

    it("Should return a valid CashFlowConsolidatedResponse object", async () => {
        const cashFlowConsolidatedResponseMockData: CashFlowConsolidatedResponse = {
            cashFlow: [{
                fiscalDate: "2023-09-30",
                cashFlowFromOperatingActivities: {
                    netIncomeFromContinuingOperations: 97000000000,
                    operatingCashFlow: 110543000000,
                    cashFlowFromContinuingOperatingActivities: 110543000000,
                    cashFromDiscontinuedOperatingActivities: 0,
                    cashFlowFromDiscontinuedOperation: 0,
                    freeCashFlow: 99584000000,
                    cashFlowsFromUsedInOperatingActivitiesDirect: 0,
                    taxesRefundPaid: 19300000000,
                    taxesRefundPaidDirect: 0,
                    interestReceived: 0,
                    interestReceivedDirect: 0,
                    interestPaid: 3803000000,
                    interestPaidDirect: 0,
                    dividendReceived: 0,
                    dividendReceivedDirect: 0,
                    dividendPaid: 14841000000,
                    dividendPaidDirect: 0,
                    changeInWorkingCapital: -5618000000,
                    changeInOtherWorkingCapital: 0,
                    changeInReceivables: -1688000000,
                    changesInAccountReceivables: -1688000000,
                    changeInPayablesAndAccruedExpense: 1889000000,
                    changeInAccruedExpense: 0,
                    changeInPayable: 1889000000,
                    changeInDividendPayable: 0,
                    changeInAccountPayable: 1889000000,
                    changeInTaxPayable: 0,
                    changeInIncomeTaxPayable: 0,
                    changeInInterestPayable: 0,
                    changeInOtherCurrentLiabilities: 0,
                    changeInOtherCurrentAssets: 0,
                    changeInInventory: 0,
                    changeInPrepaidAssets: 0,
                    otherNonCashItems: 0,
                    excessTaxBenefitFromStockBasedCompensation: 0,
                    stockBasedCompensation: 10833000000,
                    unrealizedGainLossOnInvestmentSecurities: 0,
                    provisionAndWriteOffOfAssets: 0,
                    assetImpairmentCharge: 0,
                    amortizationOfSecurities: 0,
                    deferredTax: 0,
                    deferredIncomeTax: 0,
                    depreciationAmortizationDepletion: 11519000000,
                    depletion: 0,
                    depreciationAndAmortization: 11519000000,
                    amortizationCashFlow: 0,
                    amortizationOfIntangibles: 0,
                    depreciation: 11519000000,
                    operatingGainsLosses: 0,
                    pensionAndEmployeeBenefitExpense: 0,
                    earningsLossesFromEquityInvestments: 0,
                    gainLossOnInvestmentSecurities: 0,
                    netForeignCurrencyExchangeGainLoss: 0,
                    gainLossOnSaleOfPpe: 0,
                    gainLossOnSaleOfBusiness: 0
                },
                cashFlowFromInvestingActivities: {
                    investingCashFlow: -786000000,
                    cashFlowFromContinuingInvestingActivities: -786000000,
                    cashFromDiscontinuedInvestingActivities: 0,
                    netOtherInvestingChanges: 0,
                    interestReceivedCfi: 0,
                    dividendsReceivedCfi: 0,
                    netInvestmentPurchaseAndSale: 10173000000,
                    saleOfInvestment: 39686000000,
                    purchaseOfInvestment: -29513000000,
                    netInvestmentPropertiesPurchaseAndSale: 0,
                    saleOfInvestmentProperties: 0,
                    purchaseOfInvestmentProperties: 0,
                    netBusinessPurchaseAndSale: 0,
                    saleOfBusiness: 0,
                    purchaseOfBusiness: 0,
                    netIntangiblesPurchaseAndSale: 0,
                    saleOfIntangibles: 0,
                    purchaseOfIntangibles: 0,
                    netPpePurchaseAndSale: -10959000000,
                    saleOfPpe: 0,
                    purchaseOfPpe: -10959000000,
                    capitalExpenditureReported: -10959000000,
                    capitalExpenditure: -10959000000
                },
                cashFlowFromFinancingActivities: {
                    financingCashFlow: -96747000000,
                    cashFlowFromContinuingFinancingActivities: -96747000000,
                    cashFromDiscontinuedFinancingActivities: 0,
                    netOtherFinancingCharges: 0,
                    interestPaidCff: 0,
                    proceedsFromStockOptionExercised: 1567000000,
                    cashDividendsPaid: -14841000000,
                    preferredStockDividendPaid: 0,
                    commonStockDividendPaid: -14841000000,
                    netPreferredStockIssuance: 0,
                    preferredStockPayments: 0,
                    preferredStockIssuance: 0,
                    netCommonStockIssuance: -76983000000,
                    commonStockPayments: -77550000000,
                    commonStockIssuance: 567000000,
                    repurchaseOfCapitalStock: -77550000000,
                    netIssuancePaymentsOfDebt: -5923000000,
                    netShortTermDebtIssuance: 0,
                    shortTermDebtPayments: 0,
                    shortTermDebtIssuance: 0,
                    netLongTermDebtIssuance: -5923000000,
                    longTermDebtPayments: -11151000000,
                    longTermDebtIssuance: 5228000000,
                    issuanceOfDebt: 5228000000,
                    repaymentOfDebt: -11151000000,
                    issuanceOfCapitalStock: 567000000
                },
                supplementalData: {
                    interestPaidSupplementalData: 3803000000,
                    incomeTaxPaidSupplementalData: 19300000000
                },
                foreignAndDomesticSales: {
                    foreignSales: 0,
                    domesticSales: 0,
                    adjustedGeographySegmentData: 0
                },
                cashPosition: {
                    beginningCashPosition: 49246000000,
                    endCashPosition: 62639000000,
                    changesInCash: 13010000000,
                    otherCashAdjustmentOutsideChangeInCash: 0,
                    otherCashAdjustmentInsideChangeInCash: 0,
                    effectOfExchangeRateChanges: 383000000
                },
                directMethodCashFlow: {
                    classesOfCashReceiptsFromOperatingActivities: 0,
                    otherCashReceiptsFromOperatingActivities: 0,
                    receiptsFromGovernmentGrants: 0,
                    receiptsFromCustomers: 0,
                    classesOfCashPayments: 0,
                    otherCashPaymentsFromOperatingActivities: 0,
                    paymentsOnBehalfOfEmployees: 0,
                    paymentsToSuppliersForGoodsAndServices: 0
                }
            }]
        };
        const cashFlowConsolidatedRequestMockData: CashFlowConsolidatedRequest = {
            symbol: "AAPL",
            period: "annually",
        };
        const client = new TwelveDataWrapper();
        nock(getDefaultConfig().baseUrl!)
            .get(`${Endpoints.CashFlowConsolidated}?apikey=demo`)
            .reply(200, cashFlowConsolidatedResponseMockData);

        const result = await client.fundamentals.cashFlowConsolidated(cashFlowConsolidatedRequestMockData);
        assert.deepEqual(result, cashFlowConsolidatedResponseMockData)
    });

    it("Should return a valid MarketCapResponse object", async () => {
        const marketCapResponseMockData: MarketCapResponse = {
            meta: {
                symbol: "AAPL",
                name: "Apple Inc.",
                currency: "USD",
                exchange: "NASDAQ",
                micCode: "XNGS",
                exchangeTimezone: "America/New_York"
            },
            marketCap: [{
                date: "2023-11-03",
                value: 3000000000000
            }]
        };
        const marketCapRequestMockData: MarketCapRequest = {
            symbol: "AAPL"
        };
        const client = new TwelveDataWrapper();
        nock(getDefaultConfig().baseUrl!)
            .get(`${Endpoints.MarketCap}?apikey=demo`)
            .reply(200, marketCapResponseMockData);

        const result = await client.fundamentals.marketCap(marketCapRequestMockData);
        assert.deepEqual(result, marketCapResponseMockData)
    });

    it("Should return a valid KeyExecutivesResponse object", async () => {
        const keyExecutivesResponseMockData: KeyExecutivesResponse = {
            meta: {
                symbol: "AAPL",
                name: "Apple Inc.",
                currency: "USD",
                exchange: "NASDAQ",
                micCode: "XNGS",
                exchangeTimezone: "America/New_York"
            },
            keyExecutives: [{
                name: "Timothy Donald Cook",
                title: "Chief Executive Officer",
                age: 63,
                yearBorn: 1960,
                pay: 99420097
            }]
        };
        const keyExecutivesRequestMockData: KeyExecutivesRequest = {
            symbol: "AAPL"
        };
        const client = new TwelveDataWrapper();
        nock(getDefaultConfig().baseUrl!)
            .get(`${Endpoints.KeyExecutives}?apikey=demo`)
            .reply(200, keyExecutivesResponseMockData);

        const result = await client.fundamentals.keyExecutives(keyExecutivesRequestMockData);
        assert.deepEqual(result, keyExecutivesResponseMockData)
    });

})