import type { AxiosInstance } from "axios";
import { EndpointBase } from "../../defaults";
import AssetCatalogs from "./assetCatalogs/assetCatalogs";
import Discovery from "./discovery/discovery";
import SupportingMetadata from "./supportingMetadata/supportingMetadata";
import Markets from "./markets/markets";

export default class Reference extends EndpointBase {
    public readonly assetCatalogs: AssetCatalogs;
    public readonly discovery: Discovery;
    public readonly markets: Markets;
    public readonly supportingMetadata: SupportingMetadata;

    constructor(apiClient: AxiosInstance) {
        super(apiClient);
        this.assetCatalogs = new AssetCatalogs(apiClient);
        this.discovery = new Discovery(apiClient);
        this.markets = new Markets(apiClient);
        this.supportingMetadata = new SupportingMetadata(apiClient);
    }

    // Endpoint fetching functions starts here
}