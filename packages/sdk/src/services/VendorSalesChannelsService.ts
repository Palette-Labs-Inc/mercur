/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { VendorSalesChannel } from '../models/VendorSalesChannel';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class VendorSalesChannelsService {
    /**
     * List Sales Channels
     * Retrieves a list of Sales Channels for authenticated vendor.
     * @returns any OK
     * @throws ApiError
     */
    public static vendorListSalesChannels(): CancelablePromise<{
        sales_channels?: Array<VendorSalesChannel>;
        /**
         * The total number of items available
         */
        count?: number;
        /**
         * The number of items skipped before these items
         */
        offset?: number;
        /**
         * The number of items per page
         */
        limit?: number;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/vendor/sales-channels',
        });
    }
}
