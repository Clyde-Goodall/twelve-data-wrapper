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

    async getTimeSeries(req: TimeSeriesRequest, format: "csv"): Promise<string>;
    async getTimeSeries(req: TimeSeriesRequest, format?: "json"): Promise<TimeSeriesResponse>;
    async getTimeSeries(req: TimeSeriesRequest, format?: "json" | "csv"): Promise<TimeSeriesResponse | string> {
        this.validateRequiredIdentifiers(req);

        this.validateInterval(req);

        const params = this.constructUrlParams(req, Endpoints.TimeSeries);
        return this.requestWithFormat(Endpoints.TimeSeries, params, format);
    }

    async getTimeSeriesCross(req: TimeSeriesCrossRequest, format: "csv"): Promise<string>;
    async getTimeSeriesCross(req: TimeSeriesCrossRequest, format?: "json"): Promise<TimeSeriesCrossResponse>;
    async getTimeSeriesCross(req: TimeSeriesCrossRequest, format?: "json" | "csv"): Promise<TimeSeriesCrossResponse | string> {
        this.validateBase(req);

        if (!req.quote) {
            throw new Error("quote is required");
        }

        this.validateInterval(req);

        const params: string = this.constructUrlParams(req, Endpoints.TimeSeriesCross);
        return this.requestWithFormat(Endpoints.TimeSeriesCross, params, format);
    }

    async getQuote(req: QuoteRequest, format: "csv"): Promise<string>;
    async getQuote(req: QuoteRequest, format?: "json"): Promise<QuoteResponse>;
    async getQuote(req: QuoteRequest, format?: "json" | "csv"): Promise<QuoteResponse | string> {
        this.validateRequiredIdentifiers(req);

        const params: string = this.constructUrlParams(req, Endpoints.Quote);
        return this.requestWithFormat(Endpoints.Quote, params, format);
    }

    async getLatestPrice(req: LatestPriceRequest, format: "csv"): Promise<string>;
    async getLatestPrice(req: LatestPriceRequest, format?: "json"): Promise<LatestPriceResponse>;
    async getLatestPrice(req: LatestPriceRequest, format?: "json" | "csv"): Promise<LatestPriceResponse | string> {
        this.validateRequiredIdentifiers(req);

        const params: string = this.constructUrlParams(req, Endpoints.LatestPrice);
        return this.requestWithFormat(Endpoints.LatestPrice, params, format);
    }

    async getEndOfDayPrice(req: EndOfDayPriceRequest, format: "csv"): Promise<string>;
    async getEndOfDayPrice(req: EndOfDayPriceRequest, format?: "json"): Promise<EndOfDayPriceResponse>;
    async getEndOfDayPrice(req: EndOfDayPriceRequest, format?: "json" | "csv"): Promise<EndOfDayPriceResponse | string> {
        this.validateRequiredIdentifiers(req);

        const params: string = this.constructUrlParams(req, Endpoints.EndOfDayPrice);
        return this.requestWithFormat(Endpoints.EndOfDayPrice, params, format);
    }
}

function registerTimeSeriesTransformations() {
    globalTransformationManager.addEndpointConfig(Endpoints.TimeSeries, {
        requestMappings: {
            outputSize: "outputsize",
            prePost: "prepost",
        },
        responseMappings: {
            datetime: "dateTime",
        }
    });
}

function registerTimeSeriesCrossTransformations() {
    globalTransformationManager.addEndpointConfig(Endpoints.TimeSeriesCross, {
        requestMappings: {
            outputSize: "outputsize",
            prePost: "prepost",
        },
        responseMappings: {
            datetime: "dateTime",
        }
    });
}

function registerQuoteTransformations() {
    globalTransformationManager.addEndpointConfig(Endpoints.Quote, {
        requestMappings: {
            outputSize: "outputsize",
            prePost: "prepost",
        },
        responseMappings: {
            datetime: "dateTime",
            rolling_1d_change: "rollingOneDayChange",
            rolling_7d_change: "rollingSevenDayChange"
        },
    });
}

function registerLatestPriceTransformations() {
    globalTransformationManager.addEndpointConfig(Endpoints.LatestPrice, {
        requestMappings: { prePost: "prepost" },
    });
}

function registerEndOfDayPriceTransformations() {
    globalTransformationManager.addEndpointConfig(Endpoints.EndOfDayPrice, {
        requestMappings: {
            prePost: "prepost",
        },
        responseMappings: {
            datetime: "dateTime",
        }
    });
}