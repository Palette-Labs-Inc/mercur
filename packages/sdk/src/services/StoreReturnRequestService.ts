/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { OrderReturnRequest } from '../models/OrderReturnRequest';
import type { StoreCreateOrderReturnRequest } from '../models/StoreCreateOrderReturnRequest';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class StoreReturnRequestService {
    /**
     * List return requests
     * Retrieves a list of return requests for the authenticated customer
     * @param fields Comma-separated fields to include in the response
     * @param limit The number of requests to return
     * @param offset The number of requests to skip
     * @returns any OK
     * @throws ApiError
     */
    public static storeListOrderReturnRequests(
        fields?: string,
        limit?: number,
        offset?: number,
    ): CancelablePromise<{
        order_return_requests?: Array<OrderReturnRequest>;
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
            url: '/store/return-request',
            query: {
                'fields': fields,
                'limit': limit,
                'offset': offset,
            },
        });
    }
    /**
     * Create an order return request
     * Creates a new order return request for the authenticated customer
     * @param requestBody
     * @returns any Created
     * @throws ApiError
     */
    public static storeCreateOrderReturnRequest(
        requestBody?: StoreCreateOrderReturnRequest,
    ): CancelablePromise<{
        order_return_request?: OrderReturnRequest;
    }> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/store/return-request',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Get return request by id
     * Retrieves a request by id for the authenticated customer.
     * @param id The ID of the Request.
     * @param fields Comma-separated fields to include in the response.
     * @returns any OK
     * @throws ApiError
     */
    public static storeGetOrderReturnRequestById(
        id: string,
        fields?: string,
    ): CancelablePromise<{
        orderReturnRequest?: OrderReturnRequest;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/store/return-request/{id}',
            path: {
                'id': id,
            },
            query: {
                'fields': fields,
            },
        });
    }
}
