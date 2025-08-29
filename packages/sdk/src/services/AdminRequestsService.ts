/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AdminRequest } from '../models/AdminRequest';
import type { AdminReviewRequest } from '../models/AdminReviewRequest';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class AdminRequestsService {
    /**
     * List requests
     * Retrieves requests list
     * @param limit The number of items to return. Default 50.
     * @param offset The number of items to skip before starting the response. Default 0.
     * @param fields Comma-separated fields to include in the response.
     * @param type Filter by request type
     * @param status Filter by request status
     * @returns any OK
     * @throws ApiError
     */
    public static adminListRequests(
        limit?: number,
        offset?: number,
        fields?: string,
        type?: 'product' | 'product_collection' | 'product_category' | 'seller' | 'review_remove' | 'product_type' | 'product_tag' | 'product_update',
        status?: 'pending' | 'rejected' | 'accepted',
    ): CancelablePromise<{
        requests?: Array<AdminRequest>;
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
            url: '/admin/requests',
            query: {
                'limit': limit,
                'offset': offset,
                'fields': fields,
                'type': type,
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
    public static adminGetRequestById(
        id: string,
        fields?: string,
    ): CancelablePromise<{
        request?: AdminRequest;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/admin/requests/{id}',
            path: {
                'id': id,
            },
            query: {
                'fields': fields,
            },
        });
    }
    /**
     * Get return request by id
     * Retrieves a request by id.
     * @param id The ID of the Request.
     * @param requestBody
     * @returns any OK
     * @throws ApiError
     */
    public static adminReviewRequestById(
        id: string,
        requestBody?: AdminReviewRequest,
    ): CancelablePromise<{
        id?: string;
        status?: 'accepted' | 'rejected';
    }> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/admin/requests/{id}',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
}
