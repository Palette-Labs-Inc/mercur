/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { StoreSeller } from '../models/StoreSeller';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class StoreSellersService {
    /**
     * Get sellers
     * Retrieves the seller list.
     * @param offset The number of items to skip before starting to collect the result set.
     * @param limit The number of items to return.
     * @param fields Comma-separated fields to include in the response.
     * @returns any OK
     * @throws ApiError
     */
    public static storeGetSellers(
        offset?: number,
        limit?: number,
        fields?: string,
    ): CancelablePromise<{
        products?: Array<StoreSeller>;
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
            url: '/store/seller',
            query: {
                'offset': offset,
                'limit': limit,
                'fields': fields,
            },
        });
    }
    /**
     * Get seller
     * Retrieves seller of specified handle
     * @param handle The handle of the seller
     * @param fields Comma-separated fields to include in the response.
     * @returns any OK
     * @throws ApiError
     */
    public static storeGetSellerByHandle(
        handle: string,
        fields?: string,
    ): CancelablePromise<{
        product?: StoreSeller;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/store/seller/{handle}',
            path: {
                'handle': handle,
            },
            query: {
                'fields': fields,
            },
        });
    }
}
