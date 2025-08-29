/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { StoreOrderSet } from '../models/StoreOrderSet';
import type { StoreReturn } from '../models/StoreReturn';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class StoreService {
    /**
     * List Returns
     * Retrieves a list of returns for the authenticated customer.
     * @param offset The number of items to skip before starting to collect the result set.
     * @param limit The number of items to return.
     * @param fields Comma-separated fields to include in the response.
     * @returns any OK
     * @throws ApiError
     */
    public static storeListReturns(
        offset?: number,
        limit: number = 50,
        fields?: string,
    ): CancelablePromise<{
        returns?: Array<StoreReturn>;
        /**
         * The total number of returns available
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
            url: '/store/returns',
            query: {
                'offset': offset,
                'limit': limit,
                'fields': fields,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
            },
        });
    }
    /**
     * List Order Sets
     * Retrieves a list of order sets for the authenticated customer.
     * @param offset The number of items to skip before starting to collect the result set.
     * @param limit The number of items to return.
     * @param fields Comma-separated fields to include in the response.
     * @returns any OK
     * @throws ApiError
     */
    public static storeListOrderSets(
        offset?: number,
        limit: number = 50,
        fields?: string,
    ): CancelablePromise<{
        order_sets?: Array<StoreOrderSet>;
        /**
         * The total number of order sets available
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
            url: '/store/order-set',
            query: {
                'offset': offset,
                'limit': limit,
                'fields': fields,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
            },
        });
    }
}
