import type { AxiosInstance } from "axios";
import { EndpointBase } from "../../defaults";
import {
    EndOfDayPriceRequest,
    EndOfDayPriceResponse,
    LatestPriceRequest,
    LatestPriceResponse,
    QuoteRequest,
    QuoteResponse,
    TimeSeriesCrossRequest,
    TimeSeriesCrossResponse,
    TimeSeriesRequest,
    TimeSeriesResponse
} from "./core.interfaces";
import { globalTransformationManager } from "../../serialization";
import { Endpoints } from "../endpoints";

// TODO: Implement /market_movers/{market} endpoint when we have a Pro plan
//       Get rid of AtLeastOne<> utility type and add runtime checks for required fields (it makes the intellisense HIDEOUS)

export default class Core extends EndpointBase {
    constructor(apiClient: AxiosInstance) {
        super(apiClient);
        registerTimeSeriesTransformations();
        registerTimeSeriesCrossTransformations();
        registerQuoteTransformations();
        registerLatestPriceTransformations();
        registerEndOfDayPriceTransformations();
    }

    // todo: runtime atleastone for 'symbol' | 'figi' | 'isin' | 'cusip'
    async getTimeSeries(req: TimeSeriesRequest, format: 'csv'): Promise<string>;
    async getTimeSeries(req: TimeSeriesRequest, format?: 'json'): Promise<TimeSeriesResponse>;
    async getTimeSeries(req: TimeSeriesRequest, format?: 'json' | 'csv'): Promise<TimeSeriesResponse | string> {
        if (!req.interval) {
            throw new Error('interval is required');
        }

        const params = this.constructUrlParams(req, Endpoints.TimeSeries);
        return this.requestWithFormat(Endpoints.TimeSeries, params, format);
    }

    async getTimeSeriesCross(req: TimeSeriesCrossRequest, format: 'csv'): Promise<string>;
    async getTimeSeriesCross(req: TimeSeriesCrossRequest, format?: 'json'): Promise<TimeSeriesCrossResponse>;
    async getTimeSeriesCross(req: TimeSeriesCrossRequest, format?: 'json' | 'csv'): Promise<TimeSeriesCrossResponse | string> {
        if (!req.base) {
            throw new Error('base is required');
        }

        if (!req.quote) {
            throw new Error('quote is required');
        }

        if (!req.interval) {
            throw new Error('interval is required');
        }

        const params: string = this.constructUrlParams(req, Endpoints.TimeSeriesCross);
        return this.requestWithFormat(Endpoints.TimeSeriesCross, params, format);
    }

    // TODO: runtime atleastone for 'symbol' | 'figi' | 'isin' | 'cusip'
    async getQuote(req: QuoteRequest, format: 'csv'): Promise<string>;
    async getQuote(req: QuoteRequest, format?: 'json'): Promise<QuoteResponse>;
    async getQuote(req: QuoteRequest, format?: 'json' | 'csv'): Promise<QuoteResponse | string> {
        const params: string = this.constructUrlParams(req, Endpoints.Quote);
        return this.requestWithFormat(Endpoints.Quote, params, format);
    }

    // TODO: runtime atleastone for 'symbol' | 'figi' | 'isin' | 'cusip'
    async getLatestPrice(req: LatestPriceRequest, format: 'csv'): Promise<string>;
    async getLatestPrice(req: LatestPriceRequest, format?: 'json'): Promise<LatestPriceResponse>;
    async getLatestPrice(req: LatestPriceRequest, format?: 'json' | 'csv'): Promise<LatestPriceResponse | string> {
        const params: string = this.constructUrlParams(req, Endpoints.LatestPrice);
        return this.requestWithFormat(Endpoints.LatestPrice, params, format);
    }

    // TODO: runtime atleastone for 'symbol' | 'figi' | 'isin' | 'cusip'
    async getEndOfDayPrice(req: EndOfDayPriceRequest): Promise<EndOfDayPriceResponse> {
        const params: string = this.constructUrlParams(req, Endpoints.EndOfDayPrice);
        return this.request<EndOfDayPriceResponse>(Endpoints.EndOfDayPrice, params);
    }
}

function registerTimeSeriesTransformations() {
    globalTransformationManager.addEndpointConfig(Endpoints.TimeSeries, {
        requestMappings: {
            outputSize: 'outputsize',
            prePost: 'prepost',
        },
        responseMappings: {
            datetime: 'dateTime',
        },
        dateFields: ['date'],
        dateTimeFields: ['startDate', 'endDate', 'dateTime']
    });
}

function registerTimeSeriesCrossTransformations() {
    globalTransformationManager.addEndpointConfig(Endpoints.TimeSeriesCross, {
        requestMappings: {
            outputSize: 'outputsize',
            prePost: 'prepost',
        },
        responseMappings: {
            datetime: 'dateTime',
        },
        dateFields: ['date'],
        dateTimeFields: ['startDate', 'endDate', 'dateTime']
    });
}

function registerQuoteTransformations() {
    globalTransformationManager.addEndpointConfig(Endpoints.Quote, {
        requestMappings: {
            outputSize: 'outputsize',
            prePost: 'prepost',
        },
        responseMappings: {
            datetime: 'dateTime',
            rolling_1d_change: 'rollingOneDayChange',
            rolling_7d_change: 'rollingSevenDayChange'
        },
        dateTimeFields: ['dateTime', 'timestamp', 'lastQuoteAt', 'extendedTimestamp'],
    });
}

function registerLatestPriceTransformations() {
    globalTransformationManager.addEndpointConfig(Endpoints.LatestPrice, {
        requestMappings: { prePost: 'prepost' },
    });
}

function registerEndOfDayPriceTransformations() {
    globalTransformationManager.addEndpointConfig(Endpoints.EndOfDayPrice, {
        requestMappings: {
            prePost: 'prepost',
        },
        responseMappings: {
            datetime: 'dateTime',
        },
        dateFields: ['date'],
        dateTimeFields: ['dateTime', 'timestamp'],
    });
}