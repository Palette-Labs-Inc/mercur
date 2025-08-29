/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { VendorStore } from '../models/VendorStore';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class VendorStoresService {
    /**
     * List Stores
     * Retrieves a list of stores.
     * @param fields The comma-separated fields to include in the response
     * @param offset The number of items to skip before starting to collect the result set.
     * @param limit The number of items to return.
     * @returns any OK
     * @throws ApiError
     */
    public static vendorListStores(
        fields?: string,
        offset?: number,
        limit?: number,
    ): CancelablePromise<{
        stores?: Array<VendorStore>;
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
            url: '/vendor/stores',
            query: {
                'fields': fields,
                'offset': offset,
                'limit': limit,
            },
        });
    }
    /**
     * Get store
     * Retrieves a Store by id.
     * @param id The ID of the store
     * @param fields The comma-separated fields to include in the response
     * @returns any OK
     * @throws ApiError
     */
    public static vendorGetStoreById(
        id: string,
        fields?: string,
    ): CancelablePromise<{
        store?: VendorStore;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/vendor/stores/{id}',
            path: {
                'id': id,
            },
            query: {
                'fields': fields,
            },
        });
    }
}
