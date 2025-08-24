import type { AxiosInstance } from "axios";
import { EndpointBase } from "../../defaults";
import {
    TimeSeriesCrossRequest,
    TimeSeriesCrossResponse,
    TimeSeriesRequest,
    TimeSeriesResponse
} from "./core.interfaces";
import { globalTransformationManager } from "../../serialization";
import { Endpoints } from "../endpoints";

export default class Core extends EndpointBase {
    constructor(apiClient: AxiosInstance) {
        super(apiClient);
        registerTimeSeriesTransformations();
        registerTimeSeriesCrossTransformations();
    }

    async getTimeSeries(req: TimeSeriesRequest): Promise<TimeSeriesResponse> {
        if (!req.symbol) {
            throw new Error('symbol is required');
        }

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