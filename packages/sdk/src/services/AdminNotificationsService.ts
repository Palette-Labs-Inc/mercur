/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AdminNotification } from '../models/AdminNotification';
import type { AdminNotificationResponse } from '../models/AdminNotificationResponse';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class AdminNotificationsService {
    /**
     * List Notifications
     * Retrieves a list of admin notifications from the feed channel.
     * @param offset The number of items to skip before starting to collect the result set.
     * @param limit The number of items to return.
     * @param fields Comma-separated fields to include in the response.
     * @returns any OK
     * @throws ApiError
     */
    public static adminListNotifications(
        offset?: number,
        limit?: number,
        fields?: string,
    ): CancelablePromise<{
        notifications?: Array<AdminNotification>;
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
            url: '/admin/notifications',
            query: {
                'offset': offset,
                'limit': limit,
                'fields': fields,
            },
        });
    }
    /**
     * Get a Notification
     * Retrieve a notification by its ID. You can expand the notification's relations or select the fields that should be returned.
     * @param id The notification's ID.
     * @param fields Comma-separated fields that should be included in the returned data. if a field is prefixed with `+` it will be added to the default fields, using `-` will remove it from the default fields. without prefix it will replace the entire default fields.
     * @returns AdminNotificationResponse OK
     * @throws ApiError
     */
    public static adminGetNotificationsId(
        id: string,
        fields?: string,
    ): CancelablePromise<AdminNotificationResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/admin/notifications/{id}',
            path: {
                'id': id,
            },
            query: {
                'fields': fields,
            },
            errors: {
                400: `Client Error`,
                401: `User is not authorized. Must log in first`,
                404: `Not Found Error`,
                409: `Invalid State Error`,
                422: `Invalid Request Error`,
                500: `Server Error`,
            },
        });
    }
}
