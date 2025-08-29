/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { VendorRegion } from '../models/VendorRegion';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class VendorRegionsService {
    /**
     * List regions
     * Retrieves a list of regions.
     * @param fields The comma-separated fields to include in the response
     * @param offset The number of items to skip before starting to collect the result set.
     * @param limit The number of items to return.
     * @returns any OK
     * @throws ApiError
     */
    public static vendorListRegions(
        fields?: string,
        offset?: number,
        limit?: number,
    ): CancelablePromise<{
        regions?: Array<VendorRegion>;
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
            url: '/vendor/regions',
            query: {
                'fields': fields,
                'offset': offset,
                'limit': limit,
            },
        });
    }
    /**
     * Get region
     * Retrieves region by id.
     * @param id The ID of the region
     * @param fields The comma-separated fields to include in the response
     * @returns any OK
     * @throws ApiError
     */
    public static vendorGetRegionById(
        id: string,
        fields?: string,
    ): CancelablePromise<{
        region?: VendorRegion;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/vendor/regions/{id}',
            path: {
                'id': id,
            },
            query: {
                'fields': fields,
            },
        });
    }
}
