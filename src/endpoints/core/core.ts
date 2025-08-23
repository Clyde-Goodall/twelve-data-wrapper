import type { AxiosInstance } from "axios";
import { EndpointBase } from "../../defaults";
import { TimeSeriesRequest, TimeSeriesResponse } from "./core.interfaces";
import { globalTransformationManager } from "../../serialization";
import { Endpoints } from "../endpoints";

export default class Core extends EndpointBase {
    private readonly TIME_SERIES_ENDPOINT = '/time_series';
    constructor(apiClient: AxiosInstance) {
        super(apiClient);
        registerTimeSeriesTransformations();
    }
    
    async getTimeSeries(req: TimeSeriesRequest): Promise<TimeSeriesResponse> {
        if (!req.symbol) {
            throw new Error('symbol is required');
        }
        
        if (!req.interval) {
            throw new Error('interval is required');
        }
        
        const params = this.constructUrlParams(req, this.TIME_SERIES_ENDPOINT);
        return this.request<TimeSeriesResponse>(this.TIME_SERIES_ENDPOINT, params);
    }
}

function registerTimeSeriesTransformations() {
    globalTransformationManager.addEndpointConfig(Endpoints.TimeSeries, {
        requestMappings: {
            outputSize: 'outputsize',
            prePost: 'prepost',
            previousClose: 'previous_close'
        },
        responseMappings: {
            datetime: 'dateTime',
        },
        dateFields: ['date', 'dateTime'],
        dateTimeFields: ['startDate', 'endDate']
    });
}