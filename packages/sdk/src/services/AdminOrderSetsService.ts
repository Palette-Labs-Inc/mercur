/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AdminOrderSet } from '../models/AdminOrderSet';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class AdminOrderSetsService {
    /**
     * List Order Sets
     * Retrieves a list of order sets with optional filtering.
     * @param offset The number of items to skip before starting to collect the result set.
     * @param limit The number of items to return.
     * @param fields Comma-separated fields to include in the response.
     * @param orderId Filter order sets by a specific order ID.
     * @returns any OK
     * @throws ApiError
     */
    public static adminListOrderSets(
        offset?: number,
        limit?: number,
        fields?: string,
        orderId?: string,
    ): CancelablePromise<{
        order_sets?: Array<AdminOrderSet>;
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
            url: '/admin/order-sets',
            query: {
                'offset': offset,
                'limit': limit,
                'fields': fields,
                'order_id': orderId,
            },
        });
    }
    /**
     * Get Order Set
     * Retrieves a specific order set by its ID.
     * @param id The ID of the order set to retrieve.
     * @param fields Comma-separated fields to include in the response.
     * @returns any OK
     * @throws ApiError
     */
    public static adminGetOrderSet(
        id: string,
        fields?: string,
    ): CancelablePromise<{
        order_set?: AdminOrderSet;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/admin/order-sets/{id}',
            path: {
                'id': id,
            },
            query: {
                'fields': fields,
            },
            errors: {
                404: `Not Found`,
            },
        });
    }
}
