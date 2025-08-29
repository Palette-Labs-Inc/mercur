/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { VendorNotification } from '../models/VendorNotification';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class VendorNotificationsService {
    /**
     * List Notifications
     * Retrieves a list of notifications for the authenticated vendor/seller.
     * @param offset The number of items to skip before starting to collect the result set.
     * @param limit The number of items to return.
     * @param order The order in which to sort the results.
     * @param fields Comma-separated fields to include in the response.
     * @returns any OK
     * @throws ApiError
     */
    public static vendorListNotifications(
        offset?: number,
        limit: number = 50,
        order: string = '-created_at',
        fields?: string,
    ): CancelablePromise<{
        notifications?: Array<VendorNotification>;
        /**
         * The total number of notifications available
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
            url: '/vendor/notifications',
            query: {
                'offset': offset,
                'limit': limit,
                'order': order,
                'fields': fields,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
            },
        });
    }
}
