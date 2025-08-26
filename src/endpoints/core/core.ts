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

export default class Core extends EndpointBase {
    constructor(apiClient: AxiosInstance) {
        super(apiClient);
        registerTimeSeriesTransformations();
        registerTimeSeriesCrossTransformations();
        registerQuoteTransformations();
        registerLatestPriceTransformations();
        registerEndOfDayPriceTransformations();
    }

    async getTimeSeries(req: TimeSeriesRequest): Promise<TimeSeriesResponse> {
        if (!req.interval) {
            throw new Error('interval is required');
        }

        const params = this.constructUrlParams(req, Endpoints.TimeSeries);
        return this.request<TimeSeriesResponse>(Endpoints.TimeSeries, params);
    }

    async getTimeSeriesCross(req: TimeSeriesCrossRequest): Promise<TimeSeriesCrossResponse> {
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
        return this.request<TimeSeriesCrossResponse>(Endpoints.TimeSeriesCross, params);
    }
    
    async getQuote(req: QuoteRequest): Promise<QuoteResponse> {
        const params: string = this.constructUrlParams(req, Endpoints.Quote);
        return this.request<QuoteResponse>(Endpoints.Quote, params);
    }
    
    async getLatestPrice(req: LatestPriceRequest): Promise<LatestPriceResponse> {
        const params: string = this.constructUrlParams(req, Endpoints.LatestPrice);
        return this.request<LatestPriceResponse>(Endpoints.LatestPrice, params);
    }
    
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