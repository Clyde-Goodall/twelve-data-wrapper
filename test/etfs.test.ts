import {afterEach, beforeEach, describe, it} from "node:test";
import assert from "node:assert";
import nock from "nock";
import { TwelveDataWrapper } from "../src/twelveData";
import {getDefaultConfig} from "../src/defaults";
import {
    EtfsDirectoryRequest,
    EtfsDirectoryResponse,
    EtfFullDataRequest,
    EtfFullDataResponse,
    EtfSummaryRequest,
    EtfSummaryResponse,
    EtfPerformanceRequest,
    EtfPerformanceResponse,
    EtfRiskRequest,
    EtfRiskResponse,
    EtfCompositionRequest,
    EtfCompositionResponse,
    EtfsFamilyRequest,
    EtfsFamilyResponse,
    EtfsTypeRequest,
    EtfsTypeResponse
} from "../src/endpoints/etfs/etfs.interfaces";
import { Endpoints } from "../src/endpoints/endpoints";

describe('ETFs API Endpoint response test', () => {
    beforeEach(() => {
        nock.cleanAll();
    })
    afterEach(() => {
        // Verify that all expected HTTP calls were made
        assert.strictEqual(nock.isDone(), true, 'Not all nocked requests were called');
    });

    it("Should return a valid EtfsDirectoryResponse object", async () => {
        const etfsDirectoryResponseMockData: EtfsDirectoryResponse = {
            result: {
                length: 2,
                list: [
                    {
                        symbol: "SPY",
                        name: "SPDR S&P 500 ETF Trust",
                        country: "US",
                        micCode: "XNYS",
                        fundFamily: "State Street Global Advisors",
                        fundType: "Equity ETF"
                    },
                    {
                        symbol: "QQQ",
                        name: "Invesco QQQ Trust",
                        country: "US",
                        micCode: "XNGS",
                        fundFamily: "Invesco",
                        fundType: "Equity ETF"
                    }
                ]
            }
        };
        const etfsDirectoryRequestMockData: EtfsDirectoryRequest = {
            country: "US",
            page: 1,
            outputSize: 5000
        };
        const client = new TwelveDataWrapper();
        nock(getDefaultConfig().baseUrl!)
            .get(`${Endpoints.EtfsDirectory}?country=US&page=1&output_size=5000&apikey=demo`)
            .reply(200, etfsDirectoryResponseMockData);

        const result = await client.etfs.getEtfsDirectory(etfsDirectoryRequestMockData);
        assert.deepEqual(result, etfsDirectoryResponseMockData)
    });

    it("Should return a valid EtfFullDataResponse object", async () => {
        const etfFullDataResponseMockData: EtfFullDataResponse = {
            etf: {
                summary: {
                    symbol: "SPY",
                    name: "SPDR S&P 500 ETF Trust",
                    fundFamily: "State Street Global Advisors",
                    fundType: "Equity ETF",
                    currency: "USD",
                    shareClassInceptionDate: "1993-01-22",
                    ytdReturn: 0.18,
                    expenseRatioNet: 0.0945,
                    yield: 1.63,
                    nav: 445.23,
                    lastPrice: 445.50,
                    turnoverRate: 3.5,
                    netAssets: 400000000000,
                    overview: "The SPDR S&P 500 ETF Trust seeks to provide investment results that correspond to the price and yield performance of the S&P 500 Index."
                },
                performance: {
                    trailingReturns: [
                        {
                            period: "1Y",
                            shareClassReturn: 0.24,
                            categoryReturn: 0.22
                        }
                    ],
                    annualTotalReturns: [
                        {
                            year: 2023,
                            shareClassReturn: 0.24,
                            categoryReturn: 0.22
                        }
                    ]
                },
                risk: {
                    volatilityMeasures: [
                        {
                            period: "3Y",
                            alpha: 0.02,
                            alphaCategory: 0.01,
                            beta: 1.0,
                            betaCategory: 0.98,
                            meanAnnualReturn: 0.12,
                            meanAnnualReturnCategory: 0.11,
                            rSquared: 0.99,
                            rSquaredCategory: 0.98,
                            std: 0.18,
                            stdCategory: 0.19,
                            sharpeRatio: 0.65,
                            sharpeRatioCategory: 0.60,
                            treynorRatio: 0.12,
                            treynorRatioCategory: 0.11
                        }
                    ],
                    valuationMetrics: {
                        priceToEarnings: 22.5,
                        priceToBook: 4.2,
                        priceToSales: 2.8,
                        priceToCashflow: 15.6
                    }
                },
                composition: {
                    majorMarketSectors: [
                        {
                            sector: "Technology",
                            weight: 28.5
                        }
                    ],
                    countryAllocation: [
                        {
                            country: "United States",
                            allocation: 100.0
                        }
                    ],
                    assetAllocation: {
                        cash: 0.5,
                        stocks: 99.5,
                        preferredStocks: 0.0,
                        convertables: 0.0,
                        bonds: 0.0,
                        others: 0.0
                    },
                    topHoldings: [
                        {
                            symbol: "AAPL",
                            name: "Apple Inc.",
                            exchange: "NASDAQ",
                            micCode: "XNGS",
                            weight: 7.2
                        }
                    ],
                    bondBreakdown: {
                        averageMaturity: {
                            fund: 0,
                            category: 0
                        },
                        averageDuration: {
                            fund: 0,
                            category: 0
                        },
                        creditQuality: []
                    }
                }
            }
        };
        const etfFullDataRequestMockData: EtfFullDataRequest = {
            symbol: "SPY"
        };
        const client = new TwelveDataWrapper();
        nock(getDefaultConfig().baseUrl!)
            .get(`${Endpoints.EtfsFullData}?symbol=SPY&apikey=demo`)
            .reply(200, etfFullDataResponseMockData);

        const result = await client.etfs.getEtfsFullData(etfFullDataRequestMockData);
        assert.deepEqual(result, etfFullDataResponseMockData)
    });

    it("Should return a valid EtfSummaryResponse object", async () => {
        const etfSummaryResponseMockData: EtfSummaryResponse = {
            etf: {
                summary: {
                    symbol: "SPY",
                    name: "SPDR S&P 500 ETF Trust",
                    fundFamily: "State Street Global Advisors",
                    fundType: "Equity ETF",
                    currency: "USD",
                    shareClassInceptionDate: "1993-01-22",
                    ytdReturn: 0.18,
                    expenseRatioNet: 0.0945,
                    yield: 1.63,
                    nav: 445.23,
                    lastPrice: 445.50,
                    turnoverRate: 3.5,
                    netAssets: 400000000000,
                    overview: "The SPDR S&P 500 ETF Trust seeks to provide investment results that correspond to the price and yield performance of the S&P 500 Index."
                }
            }
        };
        const etfSummaryRequestMockData: EtfSummaryRequest = {
            symbol: "SPY"
        };
        const client = new TwelveDataWrapper();
        nock(getDefaultConfig().baseUrl!)
            .get(`${Endpoints.EtfsSummary}?symbol=SPY&apikey=demo`)
            .reply(200, etfSummaryResponseMockData);

        const result = await client.etfs.getEtfsSummary(etfSummaryRequestMockData);
        assert.deepEqual(result, etfSummaryResponseMockData)
    });

    it("Should return a valid EtfPerformanceResponse object", async () => {
        const etfPerformanceResponseMockData: EtfPerformanceResponse = {
            etf: {
                performance: {
                    trailingReturns: [
                        {
                            period: "1M",
                            shareClassReturn: 0.02,
                            categoryReturn: 0.015
                        },
                        {
                            period: "3M",
                            shareClassReturn: 0.08,
                            categoryReturn: 0.075
                        },
                        {
                            period: "1Y",
                            shareClassReturn: 0.24,
                            categoryReturn: 0.22
                        }
                    ],
                    annualTotalReturns: [
                        {
                            year: 2023,
                            shareClassReturn: 0.24,
                            categoryReturn: 0.22
                        },
                        {
                            year: 2022,
                            shareClassReturn: -0.18,
                            categoryReturn: -0.20
                        }
                    ]
                }
            }
        };
        const etfPerformanceRequestMockData: EtfPerformanceRequest = {
            symbol: "SPY"
        };
        const client = new TwelveDataWrapper();
        nock(getDefaultConfig().baseUrl!)
            .get(`${Endpoints.ETfsPerformance}?symbol=SPY&apikey=demo`)
            .reply(200, etfPerformanceResponseMockData);

        const result = await client.etfs.getEtfsPerformance(etfPerformanceRequestMockData);
        assert.deepEqual(result, etfPerformanceResponseMockData)
    });

    it("Should return a valid EtfRiskResponse object", async () => {
        const etfRiskResponseMockData: EtfRiskResponse = {
            etf: {
                risk: {
                    volatilityMeasures: [
                        {
                            period: "3Y",
                            alpha: 0.02,
                            alphaCategory: 0.01,
                            beta: 1.0,
                            betaCategory: 0.98,
                            meanAnnualReturn: 0.12,
                            meanAnnualReturnCategory: 0.11,
                            rSquared: 0.99,
                            rSquaredCategory: 0.98,
                            std: 0.18,
                            stdCategory: 0.19,
                            sharpeRatio: 0.65,
                            sharpeRatioCategory: 0.60,
                            treynorRatio: 0.12,
                            treynorRatioCategory: 0.11
                        }
                    ],
                    valuationMetrics: {
                        priceToEarnings: 22.5,
                        priceToBook: 4.2,
                        priceToSales: 2.8,
                        priceToCashflow: 15.6
                    }
                }
            }
        };
        const etfRiskRequestMockData: EtfRiskRequest = {
            symbol: "SPY"
        };
        const client = new TwelveDataWrapper();
        nock(getDefaultConfig().baseUrl!)
            .get(`${Endpoints.EtfsRisk}?symbol=SPY&apikey=demo`)
            .reply(200, etfRiskResponseMockData);

        const result = await client.etfs.getEtfsRisk(etfRiskRequestMockData);
        assert.deepEqual(result, etfRiskResponseMockData)
    });

    it("Should return a valid EtfCompositionResponse object", async () => {
        const etfCompositionResponseMockData: EtfCompositionResponse = {
            composition: {
                majorMarketSectors: [
                    {
                        sector: "Technology",
                        weight: 28.5
                    },
                    {
                        sector: "Healthcare",
                        weight: 13.2
                    },
                    {
                        sector: "Financial Services",
                        weight: 12.8
                    }
                ],
                countryAllocation: [
                    {
                        country: "United States",
                        allocation: 100.0
                    }
                ],
                assetAllocation: {
                    cash: 0.5,
                    stocks: 99.5,
                    preferredStocks: 0.0,
                    convertables: 0.0,
                    bonds: 0.0,
                    others: 0.0
                },
                topHoldings: [
                    {
                        symbol: "AAPL",
                        name: "Apple Inc.",
                        exchange: "NASDAQ",
                        micCode: "XNGS",
                        weight: 7.2
                    },
                    {
                        symbol: "MSFT",
                        name: "Microsoft Corporation",
                        exchange: "NASDAQ",
                        micCode: "XNGS",
                        weight: 6.8
                    }
                ],
                bondBreakdown: {
                    averageMaturity: {
                        fund: 0,
                        category: 0
                    },
                    averageDuration: {
                        fund: 0,
                        category: 0
                    },
                    creditQuality: []
                }
            }
        };
        const etfCompositionRequestMockData: EtfCompositionRequest = {
            symbol: "SPY"
        };
        const client = new TwelveDataWrapper();
        nock(getDefaultConfig().baseUrl!)
            .get(`${Endpoints.EtfsComposition}?symbol=SPY&apikey=demo`)
            .reply(200, etfCompositionResponseMockData);

        const result = await client.etfs.getEtfsComposition(etfCompositionRequestMockData);
        assert.deepEqual(result, etfCompositionResponseMockData)
    });

    it("Should return a valid EtfsFamilyResponse object", async () => {
        const etfsFamilyResponseMockData: EtfsFamilyResponse = {
            result: {
                "State Street Global Advisors": ["SPY", "MDY", "SLY"],
                "Invesco": ["QQQ", "QQQM", "PSQ"],
                "Vanguard": ["VTI", "VOO", "VEA"]
            }
        };
        const etfsFamilyRequestMockData: EtfsFamilyRequest = {
            country: "US"
        };
        const client = new TwelveDataWrapper();
        nock(getDefaultConfig().baseUrl!)
            .get(`${Endpoints.EtfsFamilies}?country=US&apikey=demo`)
            .reply(200, etfsFamilyResponseMockData);

        const result = await client.etfs.getEtfsFamilies(etfsFamilyRequestMockData);
        assert.deepEqual(result, etfsFamilyResponseMockData)
    });

    it("Should return a valid EtfsTypeResponse object", async () => {
        const etfsTypeResponseMockData: EtfsTypeResponse = {
            result: {
                "Equity ETF": ["SPY", "QQQ", "VTI"],
                "Bond ETF": ["AGG", "TLT", "LQD"],
                "Commodity ETF": ["GLD", "SLV", "USO"]
            }
        };
        const etfsTypeRequestMockData: EtfsTypeRequest = {
            country: "US"
        };
        const client = new TwelveDataWrapper();
        nock(getDefaultConfig().baseUrl!)
            .get(`${Endpoints.EtfsTypes}?country=US&apikey=demo`)
            .reply(200, etfsTypeResponseMockData);

        const result = await client.etfs.getEtfsTypes(etfsTypeRequestMockData);
        assert.deepEqual(result, etfsTypeResponseMockData)
    });

});