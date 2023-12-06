export * from "./active-gauges";
export * from "./base";
export * from "./coingecko-market-charts";
export * from "./concentrated-liquidity";
export * from "./ibc";
export * from "./pool-fees";
export * from "./pool-rewards";
export * from "./pools";
export * from "./store";
export * from "./token-data";
export * from "./token-historical-chart";
export * from "./token-pair-historical-chart";

export const IMPERATOR_TIMESERIES_DEFAULT_BASEURL =
  "https://api-osmosis.imperator.co";
export const IMPERATOR_INDEXER_DEFAULT_BASEURL =
  "https://api-osmosis-chain.imperator.co";

/**
 * This domain has a whitelist, so in local development an auth token is required
 */
// TODO: Use public coingecko API for demo
export const COINGECKO_API_DEFAULT_BASEURL = "https://api.coingecko.com/api";
