# ✨ TwelveData in TypeScript ✨
### A modern library for the TwelveData financial API
---------
This is a TypeScript wrapper for the [TwelveData](https://www.twelvedata.com) API. Supported endpoints are well-typed.
The ultimate goal is 100% API coverage, that being said, this is still a work in progress.

BIG thanks to [@jonnotjohn](https://github.com/jonnotjohn) ❤️

Contributions welcome! 🥺👍

---
### Support
- (Partial)     Core
- (Partial)     Reference Data
  - (Supported) Asset Catalogs
  - (Supported) Discovery
  - (Partial)   Markets 
  - (Supported) Technical Indicators
- (Supported)   Fundamental 
- (Supported)   Currencies
- (Partial) ETFs 
- (Unsupported) Mutual Funds
- (Unsupported) Technical Indicators
- (Supported)   Analysis 
- (Unsupported) Regulatory
- (Partial)     Advanced
- (Unsupported) Websocket

Many of the partial categories have all of their endpoints mapped and typed, but have not been exhaustively tested, so until then, they are listed as "partial."

---
# Installation

```
npm install twelvedata-ts
```

## Getting Started
```typescript
import TwelveData from 'twelvedata-ts';

const client = new TwelveData({
  apiKey: "demo",
  creditsPerMinute: 1597, // Put your plan's credits per minute here for automatic rate limiting
});
```
If the creditsPerMinute option is provided, the client will rate limit requests to avoid exceeding your plan's per-minute limit. The client is also aware of each endpoint's credit cost and will intelligently attempt to maximize each minute's credit usage. Rate limiting is disabled by default.

Endpoints are organized by section as in the official TwelveData documentation. 
Endpoints are nested in the same hierarchy as they appear in the documentation.

```typescript
const timeSeriesReq: TimeSeriesRequest = {
            symbol: "AAPL",
            interval: Interval.FiveMin,
            outputSize: 30,
        };
const res = await client.core.getTimeSeries(timeSeriesReq);
```

```typescript
// Endpoints that have no required parameters can omit a request object.
const json: ETFsResponse = await client.reference.assetCatalogs.getEtfs();
// If an endpoint supports CSV format, a string will be returned.
const csv: string = await client.reference.assetCatalogs.getEtfs({}, "csv");

```
Each supported endpoint has a corresponding request and response interface defining the available request/response parameters.
Endpoint functions that support either CSV or JSON output also have an optional argument.


---
### Important Notes
- We currently don't have access to an ultra plan to test many of these endpoints.
  - If you do, and you find an issue, please open one! 🥹
- Technical Indicators will probably be the last to get support due to the sheer number of endpoints to account for.
- Some of the API documentation request/response descriptions and examples include options that aren't supported. This includes but is not limited to: 
  - fields that show up for crypto but not stocks (and not explicitly mentioned in the documentation)
  - typos/different spelling in the response objects versus what the documentation tells us to expect
  - certain time intervals being unsupported despite being explicitly listed in the request options
We will document every case of this that we come across simply because it may help developers down the line somewhere. These discrepancies are organized by endpoint URI in the next section

---

#### */time_series*
- 5h (five hour) interval is not supported

#### */quote*
- "rolling_1day/7_day_change" is actually "rolling_1d/7d_change" in the response object

### */commodities*
- "category" request parameter does not act as a filter

### */exchanges*
- Only supports "stock, etf, index," not the others in the "type" list. </br><sub>(American Depositary Receipt, Bond, Bond Fund, Closed-end Fund, Common Stock, Depositary Receipt, Digital Currency, ETF, Exchange-Traded Note, Global Depositary Receipt, Limited Partnership, Mutual Fund, Physical Currency, Preferred Stock, REIT, Right, Structured Product, Trust, Unit, Warrant)</sub>

