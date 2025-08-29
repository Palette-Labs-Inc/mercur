/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { VendorCreateRequest } from '../models/VendorCreateRequest';
import type { VendorRequest } from '../models/VendorRequest';
import type { VendorUpdateRequestData } from '../models/VendorUpdateRequestData';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class VendorRequestsService {
    /**
     * List requests
     * Retrieves submited requests list
     * @param fields Comma-separated fields to include in the response.
     * @returns any OK
     * @throws ApiError
     */
    public static vendorListRequests(
        fields?: string,
    ): CancelablePromise<{
        requests?: Array<VendorRequest>;
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
            url: '/vendor/requests',
            query: {
                'fields': fields,
            },
        });
    }
    /**
     * Create a request to admin
     * Creates a request to admin to accept new resource
     * @param requestBody
     * @returns any Created
     * @throws ApiError
     */
    public static vendorCreateRequest(
        requestBody?: VendorCreateRequest,
    ): CancelablePromise<{
        request?: VendorRequest;
    }> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/vendor/requests',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Get request by id
     * Retrieves a request by id for the authenticated vendor.
     * @param id The ID of the Request.
     * @param fields Comma-separated fields to include in the response.
     * @returns any OK
     * @throws ApiError
     */
    public static vendorGetRequestById(
        id: string,
        fields?: string,
    ): CancelablePromise<{
        request?: VendorRequest;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/vendor/requests/{id}',
            path: {
                'id': id,
            },
            query: {
                'fields': fields,
            },
        });
    }
    /**
     * Update request data
     * Updates specified request payload.
     * @param id The ID of the Request
     * @param fields The comma-separated fields to include in the response
     * @param requestBody
     * @returns any OK
     * @throws ApiError
     */
    public static vendorUpdateRequestData(
        id: string,
        fields?: string,
        requestBody?: VendorUpdateRequestData,
    ): CancelablePromise<{
        request?: VendorRequest;
    }> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/vendor/requests/{id}',
            path: {
                'id': id,
            },
            query: {
                'fields': fields,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
}
