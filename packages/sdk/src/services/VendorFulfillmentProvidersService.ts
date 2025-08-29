/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { VendorFulfillmentSet } from '../models/VendorFulfillmentSet';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class VendorFulfillmentProvidersService {
    /**
     * List Fulfillment Providers
     * Retrieves a list of Fulfillment Providers.
     * @param fields The comma-separated fields to include in the response
     * @param offset The number of items to skip before starting to collect the result set.
     * @param limit The number of items to return.
     * @returns any OK
     * @throws ApiError
     */
    public static vendorListFulfillmentProviders(
        fields?: string,
        offset?: number,
        limit?: number,
    ): CancelablePromise<{
        fulfillment_providers?: Array<VendorFulfillmentSet>;
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
            url: '/vendor/fulfillment-providers',
            query: {
                'fields': fields,
                'offset': offset,
                'limit': limit,
            },
        });
    }
    /**
     * List Fulfillment Provider Options
     * Retrieves a list of available Fulfillment Provider Options.
     * @param id The ID of the fulfillment provider.
     * @returns any OK
     * @throws ApiError
     */
    public static vendorListFulfillmentProviderOptions(
        id: string,
    ): CancelablePromise<{
        fulfillment_options?: Array<{
            id?: string;
            is_return?: boolean;
        }>;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/vendor/fulfillment-providers/{id}/options',
            path: {
                'id': id,
            },
        });
    }
}
