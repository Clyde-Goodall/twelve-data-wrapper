import { TwelveData } from "./twelveData";
import { TwelveDataConfig } from "./twelveData.interfaces";

// Main wrapper class
export { TwelveData as default };
export { TwelveDataConfig };

export * from "./endpoints/advanced/advanced.interfaces";
export * from "./endpoints/analysis/analysis.interfaces";
export * from "./endpoints/core/core.interfaces";
export * from "./endpoints/currencies/currencies.interfaces";
export * from "./endpoints/etfs/etfs.interfaces";
export * from "./endpoints/fundamentals/fundamental.interfaces";
// mutualFunds go here when implemented
export * from "./endpoints/reference/assetCatalogs/assetCatalogs.interfaces";
export * from "./endpoints/reference/discovery/discovery.interfaces";
export * from "./endpoints/reference/markets/markets.interfaces";
export * from "./endpoints/reference/supportingMetadata/supportingMetadata.interfaces";
// regulatory goes here when implemented
// technicalIndicators go here when implemented
