import {afterEach, beforeEach, describe, it} from "node:test";
import assert from "node:assert";
import nock from "nock";
import { TwelveData } from "../../src/twelveData";
import {getDefaultConfig} from "../../src/defaults";
import {
    ExchangesRequest,
    ExchangesResponse,
    ExchangeScheduleRequest,
    ExchangeScheduleResponse,
    CryptocurrencyExchangesRequest,
    CryptocurrencyExchangesResponse,
    MarketStateRequest,
    MarketStateResponse, ExchangeType
} from "../../src/endpoints/reference/markets/markets.interfaces";
import { Endpoints } from "../../src/endpoints/endpoints";
import { SecurityType } from "../../src/endpoints/shared.interfaces";

describe('Markets API Endpoint response test', () => {
    beforeEach(() => {
        nock.cleanAll();
    })
    afterEach(() => {
        assert.strictEqual(nock.isDone(), true, 'Not all nocked requests were called');
    });

    it("Should return a valid ExchangesResponse object", async () => {
        const exchangesResponseMockData: ExchangesResponse = {
            data: [{
                title: "New York Stock Exchange",
                name: "NYSE",
                code: "NYSE",
                country: "United States",
                timezone: "America/New_York",
                access: {
                    global: "Basic",
                    plan: "Basic"
                }
            }]
        };
        const exchangesRequestMockData: ExchangesRequest = {
            country: "United States",
            type: ExchangeType.Stock
        };
        const client = new TwelveData();
        nock(getDefaultConfig().baseUrl!)
            .get(`${Endpoints.Exchanges}?country=United+States&type=Bond&apikey=demo`)
            .reply(200, exchangesResponseMockData);

        const result = await client.reference.markets.getExchanges(exchangesRequestMockData);
        assert.deepEqual(result, exchangesResponseMockData)
    });

    it("Should return a valid ExchangeScheduleResponse object", async () => {
        const exchangeScheduleResponseMockData: ExchangeScheduleResponse = {
            data: [{
                title: "New York Stock Exchange",
                name: "NYSE",
                code: "XNYS",
                country: "United States",
                timeZone: "America/New_York",
                sessions: [{
                    openTime: "09:30:00",
                    closeTime: "16:00:00",
                    sessionName: "Regular Trading",
                    sessionType: "trading"
                }]
            }]
        };
        const exchangeScheduleRequestMockData: ExchangeScheduleRequest = {
            date: "2023-12-01",
            country: "United States"
        };
        const client = new TwelveData();
        nock(getDefaultConfig().baseUrl!)
            .get(`${Endpoints.ExchangeSchedule}?date=2023-12-01&country=United+States&apikey=demo`)
            .reply(200, exchangeScheduleResponseMockData);

        const result = await client.reference.markets.getExchangeSchedule(exchangeScheduleRequestMockData);
        assert.deepEqual(result, exchangeScheduleResponseMockData)
    });

    it("Should return a valid CryptocurrencyExchangeeResponse object", async () => {
        const cryptocurrencyExchangesResponseMockData: CryptocurrencyExchangesResponse = {
            data: [{
                name: "Binance"
            }, {
                name: "Coinbase Pro"
            }]
        };
        const cryptocurrencyExchangesRequestMockData: CryptocurrencyExchangesRequest = {
            format: "JSON"
        };
        const client = new TwelveData();
        nock(getDefaultConfig().baseUrl!)
            .get(`${Endpoints.CryptocurrencyExchanges}?format=JSON&apikey=demo`)
            .reply(200, cryptocurrencyExchangesResponseMockData);

        const result = await client.reference.markets.getCryptocurrencyExchanges(cryptocurrencyExchangesRequestMockData);
        assert.deepEqual(result, cryptocurrencyExchangesResponseMockData)
    });

    it("Should return a valid MarketStateResponse object", async () => {
        const marketStateResponseMockData: MarketStateResponse = [{
            name: "NYSE",
            code: "XNYS",
            country: "United States",
            isMarketOpen: true,
            timeAfterOpen: "02:30:00",
            timeToOpen: "00:00:00",
            timeToClose: "03:30:00"
        }];
        const marketStateRequestMockData: MarketStateRequest = {
            exchange: "NYSE",
            country: "United States"
        };
        const client = new TwelveData();
        nock(getDefaultConfig().baseUrl!)
            .get(`${Endpoints.MarketState}?exchange=NYSE&country=United+States&apikey=demo`)
            .reply(200, marketStateResponseMockData);

        const result = await client.reference.markets.getMarketState(marketStateRequestMockData);
        assert.deepEqual(result, marketStateResponseMockData)
    });

});