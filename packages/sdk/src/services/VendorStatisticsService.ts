/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { VendorDateStatistics } from '../models/VendorDateStatistics';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class VendorStatisticsService {
    /**
     * GetStoreStatistics
     * Retrieves store statistics.
     * @param timeFrom
     * @param timeTo
     * @returns any OK
     * @throws ApiError
     */
    public static vendorGetStoreStatistics(
        timeFrom?: string,
        timeTo?: string,
    ): CancelablePromise<{
        orders?: Array<VendorDateStatistics>;
        customers?: Array<VendorDateStatistics>;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/vendor/statistics',
            query: {
                'time_from': timeFrom,
                'time_to': timeTo,
            },
        });
    }
}
