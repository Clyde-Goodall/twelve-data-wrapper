# TwelveData Typescript Wrapper
### A modern library for the TwelveData financial API
---------
This wrapper provides an option I felt was missing in the official/unofficial TwelveData libraries section for those who are more liable to use Typescript over vanilla Javascript. That being said, this is **very** much a work in progress, and is not ready to be an npm package just yet.

Contributions welcome!

---
### Support
- (Partial)     Core
- (Partial)     Reference Data
  - (Supported) Asset Catalogs
  - (Supported) Discovery
  - (Partial) Markets <sub>Only partial because we currently don't have an enterprise key to test it with</sub>
  - (Supported) Technical Indicators
- (Partial)     Fundamental
- (Supported)   Currencies
- (Unsupported) ETFs
- (Unsupported) Mutual Funds
- (Unsupported) Technical Indicators
- (Supported)     Analysis 
- (Unsupported) Regulatory
- (Partial)     Advanced
- (Unsupported) Websocket

Many of the partial categories have all of their endpoints mapped and typed, but have not been exhaustively tested, so until then, they are listed as "partial."


---
### Important Notes
- Currently CSV responses are unformatted.
- Technical Indicators will probably be the last to get support due to the sheer amount of endpoints to account for.
- Some of the API documentation request/response descriptions and examples include options that aren't supported. This includes anything from fields that show up for crypto but not stocks (and not explicitly mentioned in the documentation), typos/different spelling in the response objects versus what the documentation tells us to expect, or certain time intervals being unsupported despite being explicitly listed in the request options.
We will document every case of this that we come across simply because it may help developers down the line somewhere. These discrepancies are organized by endpoint URI in the next section

---

#### */time_series*
- 5h (five hour) interval is not supported

#### */quote*
- "rolling_1day/7_day_change" is actually "rolling_1d/7d_change" in the response object

### */commodities*
- "category" request parameter does not act as a filter

### */exchanges*
- Only supports "stock, etf, index", not the others in the "type" list. </br><sub>(American Depositary Receipt, Bond, Bond Fund, Closed-end Fund, Common Stock, Depositary Receipt, Digital Currency, ETF, Exchange-Traded Note, Global Depositary Receipt, Limited Partnership, Mutual Fund, Physical Currency, Preferred Stock, REIT, Right, Structured Product, Trust, Unit, Warrant)</sub>
