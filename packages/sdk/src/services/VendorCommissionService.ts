/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { VendorCommissionLine } from '../models/VendorCommissionLine';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class VendorCommissionService {
    /**
     * List Commission Lines
     * Retrieves a list of commission lines for the authenticated vendor/seller with optional filtering.
     * @param offset The number of items to skip before starting to collect the result set.
     * @param limit The number of items to return.
     * @param startDate Filter commission lines created on or after this date.
     * @param endDate Filter commission lines created on or before this date.
     * @returns any OK
     * @throws ApiError
     */
    public static vendorListCommissionLines(
        offset?: number,
        limit: number = 20,
        startDate?: string,
        endDate?: string,
    ): CancelablePromise<{
        commission_lines?: Array<VendorCommissionLine>;
        /**
         * The total number of commission lines available
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
            url: '/vendor/commission',
            query: {
                'offset': offset,
                'limit': limit,
                'start_date': startDate,
                'end_date': endDate,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
            },
        });
    }
}
