/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AdminOrderReturnRequest } from '../models/AdminOrderReturnRequest';
import type { AdminUpdateOrderReturnRequest } from '../models/AdminUpdateOrderReturnRequest';
import type { OrderReturnRequest } from '../models/OrderReturnRequest';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class AdminReturnRequestService {
    /**
     * List return requests
     * Retrieves requests list
     * @param limit The number of items to return. Default 50.
     * @param offset The number of items to skip before starting the response. Default 0.
     * @param fields Comma-separated fields to include in the response.
     * @param status Filter by request status
     * @returns any OK
     * @throws ApiError
     */
    public static adminListOrderReturnRequests(
        limit?: number,
        offset?: number,
        fields?: string,
        status?: 'pending' | 'refunded' | 'withdrawn' | 'escalated' | 'canceled',
    ): CancelablePromise<{
        order_return_request?: Array<AdminOrderReturnRequest>;
        /**
         * The total number of requests
         */
        count?: number;
        /**
         * The number of requests skipped
         */
        offset?: number;
        /**
         * The number of requests per page
         */
        limit?: number;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/admin/return-request',
            query: {
                'limit': limit,
                'offset': offset,
                'fields': fields,
                'status': status,
            },
        });
    }
    /**
     * Get return request by id
     * Retrieves a request by id.
     * @param id The ID of the Request.
     * @param fields Comma-separated fields to include in the response.
     * @returns any OK
     * @throws ApiError
     */
    public static adminGetOrderReturnRequestById(
        id: string,
        fields?: string,
    ): CancelablePromise<{
        orderReturnRequest?: OrderReturnRequest;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/admin/return-request/{id}',
            path: {
                'id': id,
            },
            query: {
                'fields': fields,
            },
        });
    }
    /**
     * Update return request by id
     * Updates a request by id.
     * @param id The ID of the Request.
     * @param requestBody
     * @returns any OK
     * @throws ApiError
     */
    public static adminUpdateOrderReturnRequestById(
        id: string,
        requestBody?: AdminUpdateOrderReturnRequest,
    ): CancelablePromise<{
        orderReturnRequest?: OrderReturnRequest;
    }> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/admin/return-request/{id}',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
}
