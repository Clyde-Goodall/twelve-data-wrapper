import { EndpointBase } from "../../../defaults";
import type { AxiosInstance } from "axios";

export default class SupportingMetadata extends EndpointBase {
    constructor(apiClient: AxiosInstance) {
        super(apiClient);
    }
}