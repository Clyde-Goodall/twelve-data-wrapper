

export interface APIUsageRequest {
    format: 'JSON', // they also support CSV but not sure how to handle that just yet
    delimiter: string,
    // https://en.wikipedia.org/wiki/List_of_tz_database_time_zones
    // (we should check against a list before request execution to save time)
    timezone: string,
}