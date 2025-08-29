/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { OrderReturnRequest } from '../models/OrderReturnRequest';
import type { VendorUpdateOrderReturnRequest } from '../models/VendorUpdateOrderReturnRequest';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class VendorReturnRequestsService {
    /**
     * List return requests
     * Retrieves requests list
     * @param fields Comma-separated fields to include in the response.
     * @returns any OK
     * @throws ApiError
     */
    public static vendorListOrderReturnRequests(
        fields?: string,
    ): CancelablePromise<{
        order_return_request?: Array<OrderReturnRequest>;
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
            url: '/vendor/return-request',
            query: {
                'fields': fields,
            },
        });
    }
    /**
     * Get return request by id
     * Retrieves a request by id for the authenticated vendor.
     * @param id The ID of the Request.
     * @param fields Comma-separated fields to include in the response.
     * @returns any OK
     * @throws ApiError
     */
    public static vendorGetOrderReturnRequestById(
        id: string,
        fields?: string,
    ): CancelablePromise<{
        orderReturnRequest?: OrderReturnRequest;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/vendor/return-request/{id}',
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
     * Updates a request by id for the authenticated vendor.
     * @param id The ID of the Request.
     * @param requestBody
     * @returns any OK
     * @throws ApiError
     */
    public static vendorUpdateOrderReturnRequestById(
        id: string,
        requestBody?: VendorUpdateOrderReturnRequest,
    ): CancelablePromise<{
        orderReturnRequest?: OrderReturnRequest;
    }> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/vendor/return-request/{id}',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
}
