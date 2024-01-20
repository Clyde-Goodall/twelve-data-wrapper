// testing out commonly used endpoints because it will be a grueling task to do all of them. Might cheat n use chatgpt :)
export class StockData {
    body: StockData;
    type: string;
    constructor(data: StockData) {
        this.type = 'StockData';
        this.body = data
    }
}

export class TimeSeries {
    _body: TimeSeriesRequest;
    _type: string;
    constructor(data: TimeSeriesRequest) {
        // this.type = 'TimeSeriesRequest';
        this._body = data;
        this._type = 'TimeSeriesRequest';
        this.body();
    }
    body(): TimeSeriesRequest {
        return this._body;
    }
    type(): string {
        return this._type
    }
}