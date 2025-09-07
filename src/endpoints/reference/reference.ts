import type { AxiosInstance } from "axios";
import { EndpointBase } from "../../defaults";
import AssetCatalogs from "./assetCatalogs/assetCatalogs";
import Discovery from "./discovery/discovery";
import SupportingMetadata from "./supportingMetadata/supportingMetadata";
import Markets from "./markets/markets";
import { RateLimiter } from "../../rateLimiter";

export default class Reference extends EndpointBase {
    public readonly assetCatalogs: AssetCatalogs;
    public readonly discovery: Discovery;
    public readonly markets: Markets;
    public readonly supportingMetadata: SupportingMetadata;

    constructor(
        apiClient: AxiosInstance,
        rateLimiter: RateLimiter
    ) {
        super(apiClient, rateLimiter);
        this.assetCatalogs = new AssetCatalogs(apiClient, rateLimiter);
        this.discovery = new Discovery(apiClient, rateLimiter);
        this.markets = new Markets(apiClient, rateLimiter);
        this.supportingMetadata = new SupportingMetadata(apiClient, rateLimiter);
    }

    // Endpoint fetching functions starts here
}