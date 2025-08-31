import { afterEach, beforeEach, describe, it } from "node:test";
import assert from "node:assert";
import nock from "nock";
import { TwelveData } from "../../src/twelveData";
import { getDefaultConfig } from "../../src/defaults";
import {
    CountriesResponse,
    InstrumentTypeResponse,
    TechnicalIndicatorsResponse
} from "../../src/endpoints/reference/supportingMetadata/supportingMetadata.interfaces";
import { Endpoints } from "../../src/endpoints/endpoints";

describe('Supporting Metadata API Endpoint response test', () => {
    beforeEach(() => {
        nock.cleanAll();
    })
    afterEach(() => {
        assert.strictEqual(nock.isDone(), true, 'Not all nocked requests were called');
    });

    it("Should return a valid CountriesResponse object", async () => {
        const countriesResponseMockData: CountriesResponse = {
            data: [{
                isoTwo: "US",
                isoThree: "USA",
                numeric: "840",
                name: "United States of America",
                officialName: "United States of America",
                capital: "Washington, D.C.",
                currency: "US Dollar"
            }]
        };
        const client = new TwelveData();
        nock(getDefaultConfig().baseUrl!)
            .get(`${Endpoints.Countries}?apikey=demo`)
            .reply(200, countriesResponseMockData);

        const result = await client.reference.supportingMetadata.getCountries();
        assert.deepEqual(result, countriesResponseMockData)
    });

    it("Should return a valid InstrumentTypeResponse object", async () => {
        const instrumentTypeResponseMockData: InstrumentTypeResponse = {
            result: [
                "Common Stock",
                "ETF",
                "Mutual Fund",
                "Index",
                "REIT"
            ]
        };
        const client = new TwelveData();
        nock(getDefaultConfig().baseUrl!)
            .get(`${Endpoints.InstrumentType}?apikey=demo`)
            .reply(200, instrumentTypeResponseMockData);

        const result = await client.reference.supportingMetadata.getInstrumentType();
        assert.deepEqual(result, instrumentTypeResponseMockData)
    });

    it("Should return a valid TechnicalIndicatorsResponse object", async () => {
        const technicalIndicatorsResponseMockData: TechnicalIndicatorsResponse = {
            data: {
                sma: {
                    enable: true,
                    fullName: "Simple Moving Average",
                    description: "Simple Moving Average (SMA) is the unweighted mean of the previous n data points.",
                    type: "overlay",
                    overlay: true,
                    outputValues: {
                        sma: {
                            defaultColor: "#2962FF",
                            display: "SMA",
                            minRange: 0,
                            maxRange: 100
                        }
                    },
                    parameters: {
                        timePeriod: {
                            default: 9,
                            maxRange: 100,
                            minRange: 2,
                            range: [],
                            type: "integer"
                        }
                    },
                    tinting: {
                        display: "SMA Tinting",
                        color: "#2962FF",
                        transparency: 90,
                        lowerBound: "sma",
                        upperBound: "sma"
                    }
                }
            }
        };
        const client = new TwelveData();
        nock(getDefaultConfig().baseUrl!)
            .get(`${Endpoints.TechnicalIndicators}?apikey=demo`)
            .reply(200, technicalIndicatorsResponseMockData);

        const result = await client.reference.supportingMetadata.getTechnicalIndicators();
        assert.deepEqual(result, technicalIndicatorsResponseMockData)
    });

});