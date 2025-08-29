/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { VendorPayout } from '../models/VendorPayout';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class VendorPayoutsService {
    /**
     * List Payouts
     * Retrieves a list of payouts for the authenticated vendor/seller.
     * @param offset The number of items to skip before starting to collect the result set.
     * @param limit The number of items to return.
     * @param fields Comma-separated fields to include in the response.
     * @returns any OK
     * @throws ApiError
     */
    public static vendorListPayouts(
        offset?: number,
        limit: number = 50,
        fields?: string,
    ): CancelablePromise<{
        payouts?: Array<VendorPayout>;
        /**
         * The total number of payouts available
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
            url: '/vendor/payouts',
            query: {
                'offset': offset,
                'limit': limit,
                'fields': fields,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }
}
