import {afterEach, beforeEach, describe, it} from "node:test";
import assert from "node:assert";
import nock from "nock";
import { TwelveData } from "../../src/twelveData";
import {getDefaultConfig} from "../../src/defaults";
import { 
    SymbolSearchRequest, 
    SymbolSearchResponse,
    CrossListingsRequest,
    CrossListingsResponse,
    EarliestTimestampRequest,
    EarliestTimestampResponse
} from "../../src/endpoints/reference/discovery/discovery.interfaces";
import { Interval } from "../../src/endpoints/shared.interfaces";
import { Endpoints } from "../../src/endpoints/endpoints";

describe('Discovery API Endpoint response test', () => {
    beforeEach(() => {
        nock.cleanAll();
    })
    afterEach(() => {
        assert.strictEqual(nock.isDone(), true, 'Not all nocked requests were called');
    });

    it("Should return a valid SymbolSearchResponse object", async () => {
        const symbolSearchResponseMockData: SymbolSearchResponse = {
            data: [{
                symbol: "AAPL",
                instrumentName: "Apple Inc",
                exchange: "NASDAQ",
                micCode: "XNGS",
                exchangeTimezone: "America/New_York",
                instrumentType: "Common Stock",
                country: "United States",
                currency: "USD",
                access: {
                    global: "Basic",
                    plan: "Basic"
                }
            }]
        };
        const symbolSearchRequestMockData: SymbolSearchRequest = {
            symbol: "AAPL",
            outputSize: 10
        };
        const client = new TwelveData();
        nock(getDefaultConfig().baseUrl!)
            .get(`${Endpoints.SymbolSearch}?symbol=AAPL&output_size=10&apikey=demo`)
            .reply(200, symbolSearchResponseMockData);

        const result = await client.reference.discovery.getSymbolSearch(symbolSearchRequestMockData);
        assert.deepEqual(result, symbolSearchResponseMockData)
    });

    it("Should return a valid CrossListingsResponse object", async () => {
        const crossListingsResponseMockData: CrossListingsResponse = {
            result: {
                count: 1,
                list: [{
                    exchange: "LSE",
                    micCode: "XLON",
                    name: "Apple Inc",
                    symbol: "ACP"
                }]
            }
        };
        const crossListingsRequestMockData: CrossListingsRequest = {
            symbol: "AAPL",
            country: "United Kingdom"
        };
        const client = new TwelveData();
        nock(getDefaultConfig().baseUrl!)
            .get(`${Endpoints.CrossListings}?symbol=AAPL&country=United+Kingdom&apikey=demo`)
            .reply(200, crossListingsResponseMockData);

        const result = await client.reference.discovery.getCrossListings(crossListingsRequestMockData);
        assert.deepEqual(result, crossListingsResponseMockData)
    });

    it("Should return a valid EarliestTimestampResponse object", async () => {
        const earliestTimestampResponseMockData: EarliestTimestampResponse = {
            datetime: "2010-06-09 09:30:00",
            unixTime: 1276079400
        };
        const earliestTimestampRequestMockData: EarliestTimestampRequest = {
            symbol: "AAPL",
            interval: Interval.OneMin,
        };
        const client = new TwelveData();
        nock(getDefaultConfig().baseUrl!)
            .get(`${Endpoints.EarliestTimestamp}?symbol=AAPL&interval=1min&apikey=demo`)
            .reply(200, earliestTimestampResponseMockData);

        const result = await client.reference.discovery.getEarliestTimestamp(earliestTimestampRequestMockData);
        assert.deepEqual(result, earliestTimestampResponseMockData)
    });

});