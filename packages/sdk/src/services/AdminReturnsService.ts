/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AdminOrderReturnResponse } from '../models/AdminOrderReturnResponse';
import type { AdminPostCancelReturnReqSchema } from '../models/AdminPostCancelReturnReqSchema';
import type { AdminPostReceiveReturnsReqSchema } from '../models/AdminPostReceiveReturnsReqSchema';
import type { AdminPostReturnsConfirmRequestReqSchema } from '../models/AdminPostReturnsConfirmRequestReqSchema';
import type { AdminPostReturnsDismissItemsActionReqSchema } from '../models/AdminPostReturnsDismissItemsActionReqSchema';
import type { AdminPostReturnsReceiveItemsActionReqSchema } from '../models/AdminPostReturnsReceiveItemsActionReqSchema';
import type { AdminPostReturnsReceiveItemsReqSchema } from '../models/AdminPostReturnsReceiveItemsReqSchema';
import type { AdminPostReturnsReqSchema } from '../models/AdminPostReturnsReqSchema';
import type { AdminPostReturnsRequestItemsActionReqSchema } from '../models/AdminPostReturnsRequestItemsActionReqSchema';
import type { AdminPostReturnsRequestItemsReqSchema } from '../models/AdminPostReturnsRequestItemsReqSchema';
import type { AdminPostReturnsReturnReqSchema } from '../models/AdminPostReturnsReturnReqSchema';
import type { AdminPostReturnsShippingActionReqSchema } from '../models/AdminPostReturnsShippingActionReqSchema';
import type { AdminPostReturnsShippingReqSchema } from '../models/AdminPostReturnsShippingReqSchema';
import type { AdminReturn } from '../models/AdminReturn';
import type { AdminReturnPreviewResponse } from '../models/AdminReturnPreviewResponse';
import type { AdminReturnResponse } from '../models/AdminReturnResponse';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class AdminReturnsService {
    /**
     * List Returns
     * Retrieve a list of returns. The returns can be filtered by fields such as `id`. The returns can also be sorted or paginated.
     * @param fields Comma-separated fields that should be included in the returned data. if a field is prefixed with `+` it will be added to the default fields, using `-` will remove it from the default fields. without prefix it will replace the entire default fields.
     * @param offset The number of items to skip when retrieving a list.
     * @param limit Limit the number of items returned in the list.
     * @param order The field to sort the data by. By default, the sort order is ascending. To change the order to descending, prefix the field name with `-`.
     * @param id
     * @param status
     * @param and Join query parameters with an AND condition. Each object's content is the same type as the expected query parameters.
     * @param or Join query parameters with an OR condition. Each object's content is the same type as the expected query parameters.
     * @param salesChannelId Filter by sales channel IDs to retrieve their associated returns.
     * @param regionId Filter by region IDs to retrieve their associated returns.
     * @param q Search term to filter the return's searchable properties.
     * @param createdAt Filter by the return's creation date.
     * @param updatedAt Filter by the return's update date.
     * @param customerId
     * @param withDeleted Whether to include deleted records in the result.
     * @returns any OK
     * @throws ApiError
     */
    public static adminGetReturns(
        fields?: string,
        offset?: number,
        limit?: number,
        order?: string,
        id?: (string | Array<string>),
        status?: (string | Array<string>),
        and?: Array<Record<string, any>>,
        or?: Array<Record<string, any>>,
        salesChannelId?: Array<string>,
        regionId?: (string | Array<string>),
        q?: string,
        createdAt?: {
            /**
             * Join query parameters with an AND condition. Each object's content is the same type as the expected query parameters.
             */
            $and?: Array<Record<string, any>>;
            /**
             * Join query parameters with an OR condition. Each object's content is the same type as the expected query parameters.
             */
            $or?: Array<Record<string, any>>;
            $eq?: (string | Array<string>);
            /**
             * Filter by values not equal to this parameter.
             */
            $ne?: string;
            /**
             * Filter by values in this array.
             */
            $in?: Array<string>;
            /**
             * Filter by values not in this array.
             */
            $nin?: Array<string>;
            $not?: (string | {
                /**
                 * Join query parameters with an AND condition. Each object's content is the same type as the expected query parameters.
                 */
                $and?: Array<Record<string, any>>;
                /**
                 * Join query parameters with an OR condition. Each object's content is the same type as the expected query parameters.
                 */
                $or?: Array<Record<string, any>>;
                $eq?: (string | Array<string>);
                /**
                 * Filter by values not matching this parameter.
                 */
                $ne?: string;
                /**
                 * Filter by values in this array.
                 */
                $in?: Array<string>;
                /**
                 * Filter by values not in this array.
                 */
                $nin?: Array<string>;
                $not?: (string | Record<string, any> | Array<string>);
                /**
                 * Filter by values greater than this parameter. Useful for numbers and dates only.
                 */
                $gt?: string;
                /**
                 * Filter by values greater than or equal to this parameter. Useful for numbers and dates only.
                 */
                $gte?: string;
                /**
                 * Filter by values less than this parameter. Useful for numbers and dates only.
                 */
                $lt?: string;
                /**
                 * Filter by values less than or equal to this parameter. Useful for numbers and dates only.
                 */
                $lte?: string;
                /**
                 * Apply a `like` filter. Useful for strings only.
                 */
                $like?: string;
                /**
                 * Apply a regex filter. Useful for strings only.
                 */
                $re?: string;
                /**
                 * Apply a case-insensitive `like` filter. Useful for strings only.
                 */
                $ilike?: string;
                /**
                 * Filter to apply on full-text properties.
                 */
                $fulltext?: string;
                /**
                 * Filter arrays that have overlapping values with this parameter.
                 */
                $overlap?: Array<string>;
                /**
                 * Filter arrays that contain some of the values of this parameter.
                 */
                $contains?: Array<string>;
                /**
                 * Filter arrays that contain all values of this parameter.
                 */
                $contained?: Array<string>;
                /**
                 * Filter by whether a value for this parameter exists (not `null`).
                 */
                $exists?: boolean;
            } | Array<string>);
            /**
             * Filter by values greater than this parameter. Useful for numbers and dates only.
             */
            $gt?: string;
            /**
             * Filter by values greater than or equal to this parameter. Useful for numbers and dates only.
             */
            $gte?: string;
            /**
             * Filter by values less than this parameter. Useful for numbers and dates only.
             */
            $lt?: string;
            /**
             * Filter by values less than or equal to this parameter. Useful for numbers and dates only.
             */
            $lte?: string;
            /**
             * Apply a `like` filter. Useful for strings only.
             */
            $like?: string;
            /**
             * Apply a regex filter. Useful for strings only.
             */
            $re?: string;
            /**
             * Apply a case-insensitive `like` filter. Useful for strings only.
             */
            $ilike?: string;
            /**
             * Filter to apply on full-text properties.
             */
            $fulltext?: string;
            /**
             * Filter arrays that have overlapping values with this parameter.
             */
            $overlap?: Array<string>;
            /**
             * Filter arrays that contain some of the values of this parameter.
             */
            $contains?: Array<string>;
            /**
             * Filter arrays that contain all values of this parameter.
             */
            $contained?: Array<string>;
            /**
             * Filter by whether a value for this parameter exists (not `null`).
             */
            $exists?: boolean;
        },
        updatedAt?: {
            /**
             * Join query parameters with an AND condition. Each object's content is the same type as the expected query parameters.
             */
            $and?: Array<Record<string, any>>;
            /**
             * Join query parameters with an OR condition. Each object's content is the same type as the expected query parameters.
             */
            $or?: Array<Record<string, any>>;
            $eq?: (string | Array<string>);
            /**
             * Filter by values not equal to this parameter.
             */
            $ne?: string;
            /**
             * Filter by values in this array.
             */
            $in?: Array<string>;
            /**
             * Filter by values not in this array.
             */
            $nin?: Array<string>;
            $not?: (string | {
                /**
                 * Join query parameters with an AND condition. Each object's content is the same type as the expected query parameters.
                 */
                $and?: Array<Record<string, any>>;
                /**
                 * Join query parameters with an OR condition. Each object's content is the same type as the expected query parameters.
                 */
                $or?: Array<Record<string, any>>;
                $eq?: (string | Array<string>);
                /**
                 * Filter by values not matching this parameter.
                 */
                $ne?: string;
                /**
                 * Filter by values in this array.
                 */
                $in?: Array<string>;
                /**
                 * Filter by values not in this array.
                 */
                $nin?: Array<string>;
                $not?: (string | Record<string, any> | Array<string>);
                /**
                 * Filter by values greater than this parameter. Useful for numbers and dates only.
                 */
                $gt?: string;
                /**
                 * Filter by values greater than or equal to this parameter. Useful for numbers and dates only.
                 */
                $gte?: string;
                /**
                 * Filter by values less than this parameter. Useful for numbers and dates only.
                 */
                $lt?: string;
                /**
                 * Filter by values less than or equal to this parameter. Useful for numbers and dates only.
                 */
                $lte?: string;
                /**
                 * Apply a `like` filter. Useful for strings only.
                 */
                $like?: string;
                /**
                 * Apply a regex filter. Useful for strings only.
                 */
                $re?: string;
                /**
                 * Apply a case-insensitive `like` filter. Useful for strings only.
                 */
                $ilike?: string;
                /**
                 * Filter to apply on full-text properties.
                 */
                $fulltext?: string;
                /**
                 * Filter arrays that have overlapping values with this parameter.
                 */
                $overlap?: Array<string>;
                /**
                 * Filter arrays that contain some of the values of this parameter.
                 */
                $contains?: Array<string>;
                /**
                 * Filter arrays that contain all values of this parameter.
                 */
                $contained?: Array<string>;
                /**
                 * Filter by whether a value for this parameter exists (not `null`).
                 */
                $exists?: boolean;
            } | Array<string>);
            /**
             * Filter by values greater than this parameter. Useful for numbers and dates only.
             */
            $gt?: string;
            /**
             * Filter by values greater than or equal to this parameter. Useful for numbers and dates only.
             */
            $gte?: string;
            /**
             * Filter by values less than this parameter. Useful for numbers and dates only.
             */
            $lt?: string;
            /**
             * Filter by values less than or equal to this parameter. Useful for numbers and dates only.
             */
            $lte?: string;
            /**
             * Apply a `like` filter. Useful for strings only.
             */
            $like?: string;
            /**
             * Apply a regex filter. Useful for strings only.
             */
            $re?: string;
            /**
             * Apply a case-insensitive `like` filter. Useful for strings only.
             */
            $ilike?: string;
            /**
             * Filter to apply on full-text properties.
             */
            $fulltext?: string;
            /**
             * Filter arrays that have overlapping values with this parameter.
             */
            $overlap?: Array<string>;
            /**
             * Filter arrays that contain some of the values of this parameter.
             */
            $contains?: Array<string>;
            /**
             * Filter arrays that contain all values of this parameter.
             */
            $contained?: Array<string>;
            /**
             * Filter by whether a value for this parameter exists (not `null`).
             */
            $exists?: boolean;
        },
        customerId?: (string | Array<string>),
        withDeleted?: boolean,
    ): CancelablePromise<({
        /**
         * The maximum number of items returned.
         */
        limit: number;
        /**
         * The number of items skipped before retrieving the returned items.
         */
        offset: number;
        /**
         * The total number of items.
         */
        count: number;
    } & {
        /**
         * The return's returns.
         */
        returns: Array<AdminReturn>;
    })> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/admin/returns',
            query: {
                'fields': fields,
                'offset': offset,
                'limit': limit,
                'order': order,
                'id': id,
                'status': status,
                '$and': and,
                '$or': or,
                'sales_channel_id': salesChannelId,
                'region_id': regionId,
                'q': q,
                'created_at': createdAt,
                'updated_at': updatedAt,
                'customer_id': customerId,
                'with_deleted': withDeleted,
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
    /**
     * Create Return
     * Create a return. The return can later be requested or confirmed.
     * @param fields Comma-separated fields that should be included in the returned data. if a field is prefixed with `+` it will be added to the default fields, using `-` will remove it from the default fields. without prefix it will replace the entire default fields.
     * @param requestBody
     * @returns AdminOrderReturnResponse OK
     * @throws ApiError
     */
    public static adminPostReturns(
        fields?: string,
        requestBody?: AdminPostReturnsReqSchema,
    ): CancelablePromise<AdminOrderReturnResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/admin/returns',
            query: {
                'fields': fields,
            },
            body: requestBody,
            mediaType: 'application/json',
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
    /**
     * Get a Return
     * Retrieve a return by its ID. You can expand the return's relations or select the fields that should be returned.
     * @param id The return's ID.
     * @param fields Comma-separated fields that should be included in the returned data. if a field is prefixed with `+` it will be added to the default fields, using `-` will remove it from the default fields. without prefix it will replace the entire default fields.
     * @returns AdminReturnResponse OK
     * @throws ApiError
     */
    public static adminGetReturnsId(
        id: string,
        fields?: string,
    ): CancelablePromise<AdminReturnResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/admin/returns/{id}',
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
    /**
     * Update a Return
     * Update a return's details.
     * @param id The return's ID.
     * @param fields Comma-separated fields that should be included in the returned data. if a field is prefixed with `+` it will be added to the default fields, using `-` will remove it from the default fields. without prefix it will replace the entire default fields.
     * @param requestBody
     * @returns AdminReturnPreviewResponse OK
     * @throws ApiError
     */
    public static adminPostReturnsId(
        id: string,
        fields?: string,
        requestBody?: AdminPostReturnsReturnReqSchema,
    ): CancelablePromise<AdminReturnPreviewResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/admin/returns/{id}',
            path: {
                'id': id,
            },
            query: {
                'fields': fields,
            },
            body: requestBody,
            mediaType: 'application/json',
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
    /**
     * Cancel a return.
     * Cancel a return.
     * @param id The return's ID.
     * @param requestBody
     * @returns AdminReturnResponse OK
     * @throws ApiError
     */
    public static adminPostReturnsIdCancel(
        id: string,
        requestBody?: AdminPostCancelReturnReqSchema,
    ): CancelablePromise<AdminReturnResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/admin/returns/{id}/cancel',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
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
    /**
     * Add Damaged Items to Return
     * Add damaged items, whose quantity is to be dismissed, to a return. These items will have the action `RECEIVE_DAMAGED_RETURN_ITEM`.
     * @param id The return's ID.
     * @param fields Comma-separated fields that should be included in the returned data. if a field is prefixed with `+` it will be added to the default fields, using `-` will remove it from the default fields. without prefix it will replace the entire default fields.
     * @param requestBody
     * @returns AdminReturnPreviewResponse OK
     * @throws ApiError
     */
    public static adminPostReturnsIdDismissItems(
        id: string,
        fields?: string,
        requestBody?: AdminPostReturnsReceiveItemsReqSchema,
    ): CancelablePromise<AdminReturnPreviewResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/admin/returns/{id}/dismiss-items',
            path: {
                'id': id,
            },
            query: {
                'fields': fields,
            },
            body: requestBody,
            mediaType: 'application/json',
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
    /**
     * Update Damaged Item of Return
     * Update a damaged item, whose quantity is to be dismissed, in the return by the ID of the  item's `RECEIVE_DAMAGED_RETURN_ITEM` action.
     *
     * Every item has an `actions` property, whose value is an array of actions. You can check the action's name using its `action` property, and use the value of the `id` property. return.
     *
     * @param id The return's ID.
     * @param actionId The ID of the damaged item's `RECEIVE_DAMAGED_RETURN_ITEM` action.
     * @param fields Comma-separated fields that should be included in the returned data. if a field is prefixed with `+` it will be added to the default fields, using `-` will remove it from the default fields. without prefix it will replace the entire default fields.
     * @param requestBody
     * @returns AdminReturnPreviewResponse OK
     * @throws ApiError
     */
    public static adminPostReturnsIdDismissItemsActionId(
        id: string,
        actionId: string,
        fields?: string,
        requestBody?: AdminPostReturnsDismissItemsActionReqSchema,
    ): CancelablePromise<AdminReturnPreviewResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/admin/returns/{id}/dismiss-items/{action_id}',
            path: {
                'id': id,
                'action_id': actionId,
            },
            query: {
                'fields': fields,
            },
            body: requestBody,
            mediaType: 'application/json',
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
    /**
     * Remove Damaged Item from Return
     * Remove a damaged item, whose quantity is to be dismissed, in the return by the ID of the  item's `RECEIVE_DAMAGED_RETURN_ITEM` action.
     *
     * Every item has an `actions` property, whose value is an array of actions. You can check the action's name using its `action` property, and use the value of the `id` property. return.
     *
     * @param id The return's ID.
     * @param actionId The ID of the damaged item's `RECEIVE_DAMAGED_RETURN_ITEM` action.
     * @param fields Comma-separated fields that should be included in the returned data. if a field is prefixed with `+` it will be added to the default fields, using `-` will remove it from the default fields. without prefix it will replace the entire default fields.
     * @returns AdminReturnPreviewResponse OK
     * @throws ApiError
     */
    public static adminDeleteReturnsIdDismissItemsActionId(
        id: string,
        actionId: string,
        fields?: string,
    ): CancelablePromise<AdminReturnPreviewResponse> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/admin/returns/{id}/dismiss-items/{action_id}',
            path: {
                'id': id,
                'action_id': actionId,
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
    /**
     * Start Return Receival
     * Start a return receival process to be later confirmed using the `/admin/returns/:id/receive/confirm` API route.
     * @param id The return's ID.
     * @param fields Comma-separated fields that should be included in the returned data. if a field is prefixed with `+` it will be added to the default fields, using `-` will remove it from the default fields. without prefix it will replace the entire default fields.
     * @param requestBody
     * @returns AdminOrderReturnResponse OK
     * @throws ApiError
     */
    public static adminPostReturnsIdReceive(
        id: string,
        fields?: string,
        requestBody?: AdminPostReceiveReturnsReqSchema,
    ): CancelablePromise<AdminOrderReturnResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/admin/returns/{id}/receive',
            path: {
                'id': id,
            },
            query: {
                'fields': fields,
            },
            body: requestBody,
            mediaType: 'application/json',
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
    /**
     * Cancel Return Receival
     * Cancel the receival process previously started, and hasn't been confirmed, of a return.
     * @param id The return's ID.
     * @returns any OK
     * @throws ApiError
     */
    public static adminDeleteReturnsIdReceive(
        id: string,
    ): CancelablePromise<{
        /**
         * The return's ID.
         */
        id: string;
        /**
         * The name of the returned object.
         */
        object: string;
        /**
         * Whether the return was deleted.
         */
        deleted: boolean;
    }> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/admin/returns/{id}/receive',
            path: {
                'id': id,
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
    /**
     * Add Received Items to Return
     * Add received items in a return. These items will have the action `RECEIVE_RETURN_ITEM`.
     * @param id The return's ID.
     * @param fields Comma-separated fields that should be included in the returned data. if a field is prefixed with `+` it will be added to the default fields, using `-` will remove it from the default fields. without prefix it will replace the entire default fields.
     * @param requestBody
     * @returns AdminReturnPreviewResponse OK
     * @throws ApiError
     */
    public static adminPostReturnsIdReceiveItems(
        id: string,
        fields?: string,
        requestBody?: AdminPostReturnsReceiveItemsReqSchema,
    ): CancelablePromise<AdminReturnPreviewResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/admin/returns/{id}/receive-items',
            path: {
                'id': id,
            },
            query: {
                'fields': fields,
            },
            body: requestBody,
            mediaType: 'application/json',
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
    /**
     * Update a Received Item in a Return
     * Update a received item in the return by the ID of the  item's `RECEIVE_RETURN_ITEM` action.
     *
     * Every item has an `actions` property, whose value is an array of actions. You can check the action's name using its `action` property, and use the value of the `id` property. return.
     *
     * @param id The return's ID.
     * @param actionId The ID of the received item's `RECEIVE_RETURN_ITEM` action.
     * @param fields Comma-separated fields that should be included in the returned data. if a field is prefixed with `+` it will be added to the default fields, using `-` will remove it from the default fields. without prefix it will replace the entire default fields.
     * @param requestBody
     * @returns AdminReturnPreviewResponse OK
     * @throws ApiError
     */
    public static adminPostReturnsIdReceiveItemsActionId(
        id: string,
        actionId: string,
        fields?: string,
        requestBody?: AdminPostReturnsReceiveItemsActionReqSchema,
    ): CancelablePromise<AdminReturnPreviewResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/admin/returns/{id}/receive-items/{action_id}',
            path: {
                'id': id,
                'action_id': actionId,
            },
            query: {
                'fields': fields,
            },
            body: requestBody,
            mediaType: 'application/json',
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
    /**
     * Remove a Received Item from Return
     * Remove a received item in the return by the ID of the  item's `RECEIVE_RETURN_ITEM` action.
     *
     * Every item has an `actions` property, whose value is an array of actions. You can check the action's name using its `action` property, and use the value of the `id` property. return.
     *
     * @param id The return's ID.
     * @param actionId The ID of the received item's `RECEIVE_RETURN_ITEM` action.
     * @param fields Comma-separated fields that should be included in the returned data. if a field is prefixed with `+` it will be added to the default fields, using `-` will remove it from the default fields. without prefix it will replace the entire default fields.
     * @returns AdminReturnPreviewResponse OK
     * @throws ApiError
     */
    public static adminDeleteReturnsIdReceiveItemsActionId(
        id: string,
        actionId: string,
        fields?: string,
    ): CancelablePromise<AdminReturnPreviewResponse> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/admin/returns/{id}/receive-items/{action_id}',
            path: {
                'id': id,
                'action_id': actionId,
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
    /**
     * Confirm Return Receival
     * Confirm that a return has been received. This updates the quantity of the items received, if not damaged, and  reflects the changes on the order.
     *
     * @param id The return's ID.
     * @param fields Comma-separated fields that should be included in the returned data. if a field is prefixed with `+` it will be added to the default fields, using `-` will remove it from the default fields. without prefix it will replace the entire default fields.
     * @param requestBody
     * @returns AdminReturnPreviewResponse OK
     * @throws ApiError
     */
    public static adminPostReturnsIdReceiveConfirm(
        id: string,
        fields?: string,
        requestBody?: AdminPostReturnsConfirmRequestReqSchema,
    ): CancelablePromise<AdminReturnPreviewResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/admin/returns/{id}/receive/confirm',
            path: {
                'id': id,
            },
            query: {
                'fields': fields,
            },
            body: requestBody,
            mediaType: 'application/json',
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
    /**
     * Confirm Return Request
     * Confirm a requested return. The changes are applied on the inventory quantity and the order only after the return has been confirmed as received using the `/admin/returns/:id/received/confirm`.
     *
     * @param id The return's ID.
     * @param fields Comma-separated fields that should be included in the returned data. if a field is prefixed with `+` it will be added to the default fields, using `-` will remove it from the default fields. without prefix it will replace the entire default fields.
     * @param requestBody
     * @returns AdminReturnPreviewResponse OK
     * @throws ApiError
     */
    public static adminPostReturnsIdRequest(
        id: string,
        fields?: string,
        requestBody?: AdminPostReturnsConfirmRequestReqSchema,
    ): CancelablePromise<AdminReturnPreviewResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/admin/returns/{id}/request',
            path: {
                'id': id,
            },
            query: {
                'fields': fields,
            },
            body: requestBody,
            mediaType: 'application/json',
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
    /**
     * Cancel Return Request
     * Cancel a requested return.
     * @param id The return's ID.
     * @returns any OK
     * @throws ApiError
     */
    public static adminDeleteReturnsIdRequest(
        id: string,
    ): CancelablePromise<{
        /**
         * The return's ID.
         */
        id: string;
        /**
         * The name of the deleted object.
         */
        object: string;
        /**
         * Whether the return was deleted.
         */
        deleted: boolean;
    }> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/admin/returns/{id}/request',
            path: {
                'id': id,
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
    /**
     * Add Requested Items to Return
     * Add items that are requested to be returned. These items will have the action `RETURN_ITEM`.
     * @param id The return's ID.
     * @param fields Comma-separated fields that should be included in the returned data. if a field is prefixed with `+` it will be added to the default fields, using `-` will remove it from the default fields. without prefix it will replace the entire default fields.
     * @param requestBody
     * @returns AdminReturnPreviewResponse OK
     * @throws ApiError
     */
    public static adminPostReturnsIdRequestItems(
        id: string,
        fields?: string,
        requestBody?: AdminPostReturnsRequestItemsReqSchema,
    ): CancelablePromise<AdminReturnPreviewResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/admin/returns/{id}/request-items',
            path: {
                'id': id,
            },
            query: {
                'fields': fields,
            },
            body: requestBody,
            mediaType: 'application/json',
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
    /**
     * Update Requested Item in Return
     * Update a requested item to be returned by the ID of the  item's `RETURN_ITEM` action.
     *
     * Every item has an `actions` property, whose value is an array of actions. You can check the action's name using its `action` property, and use the value of the `id` property. return.
     *
     * @param id The return's ID.
     * @param actionId The ID of the item's `RETURN_ITEM` action.
     * @param fields Comma-separated fields that should be included in the returned data. if a field is prefixed with `+` it will be added to the default fields, using `-` will remove it from the default fields. without prefix it will replace the entire default fields.
     * @param requestBody
     * @returns AdminReturnPreviewResponse OK
     * @throws ApiError
     */
    public static adminPostReturnsIdRequestItemsActionId(
        id: string,
        actionId: string,
        fields?: string,
        requestBody?: AdminPostReturnsRequestItemsActionReqSchema,
    ): CancelablePromise<AdminReturnPreviewResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/admin/returns/{id}/request-items/{action_id}',
            path: {
                'id': id,
                'action_id': actionId,
            },
            query: {
                'fields': fields,
            },
            body: requestBody,
            mediaType: 'application/json',
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
    /**
     * Remove Item from Return
     * Remove a requested item to be returned by the ID of the item's `RETURN_ITEM` action.
     *
     * Every item has an `actions` property, whose value is an array of actions. You can check the action's name using its `action` property, and use the value of the `id` property. return.
     *
     * @param id The return's ID.
     * @param actionId The ID of the item's `RETURN_ITEM` action.
     * @param fields Comma-separated fields that should be included in the returned data. if a field is prefixed with `+` it will be added to the default fields, using `-` will remove it from the default fields. without prefix it will replace the entire default fields.
     * @returns AdminReturnPreviewResponse OK
     * @throws ApiError
     */
    public static adminDeleteReturnsIdRequestItemsActionId(
        id: string,
        actionId: string,
        fields?: string,
    ): CancelablePromise<AdminReturnPreviewResponse> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/admin/returns/{id}/request-items/{action_id}',
            path: {
                'id': id,
                'action_id': actionId,
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
    /**
     * Add a Shipping Method to a Return
     * Add a shipping method to a return. The shipping method will have a `SHIPPING_ADD` action.
     * @param id The return's ID.
     * @param fields Comma-separated fields that should be included in the returned data. if a field is prefixed with `+` it will be added to the default fields, using `-` will remove it from the default fields. without prefix it will replace the entire default fields.
     * @param requestBody
     * @returns AdminReturnPreviewResponse OK
     * @throws ApiError
     */
    public static adminPostReturnsIdShippingMethod(
        id: string,
        fields?: string,
        requestBody?: AdminPostReturnsShippingReqSchema,
    ): CancelablePromise<AdminReturnPreviewResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/admin/returns/{id}/shipping-method',
            path: {
                'id': id,
            },
            query: {
                'fields': fields,
            },
            body: requestBody,
            mediaType: 'application/json',
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
    /**
     * Update a Shipping Method of a Return
     * Update a shipping method of the return by the ID of the item's `SHIPPING_ADD` action.
     *
     * Every item has an `actions` property, whose value is an array of actions. You can check the action's name using its `action` property, and use the value of the `id` property.
     *
     * @param id The return's ID.
     * @param actionId The ID of the shipping method's `SHIPPING_ADD` action.
     * @param fields Comma-separated fields that should be included in the returned data. if a field is prefixed with `+` it will be added to the default fields, using `-` will remove it from the default fields. without prefix it will replace the entire default fields.
     * @param requestBody
     * @returns AdminReturnPreviewResponse OK
     * @throws ApiError
     */
    public static adminPostReturnsIdShippingMethodActionId(
        id: string,
        actionId: string,
        fields?: string,
        requestBody?: AdminPostReturnsShippingActionReqSchema,
    ): CancelablePromise<AdminReturnPreviewResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/admin/returns/{id}/shipping-method/{action_id}',
            path: {
                'id': id,
                'action_id': actionId,
            },
            query: {
                'fields': fields,
            },
            body: requestBody,
            mediaType: 'application/json',
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
    /**
     * Remove Shipping Method from Return
     * Remove a shipping method of the return by the ID of the item's `SHIPPING_ADD` action.
     *
     * Every item has an `actions` property, whose value is an array of actions. You can check the action's name using its `action` property, and use the value of the `id` property.
     *
     * @param id The return's ID.
     * @param actionId The ID of the shipping method's `SHIPPING_ADD` action.
     * @param fields Comma-separated fields that should be included in the returned data. if a field is prefixed with `+` it will be added to the default fields, using `-` will remove it from the default fields. without prefix it will replace the entire default fields.
     * @returns AdminReturnPreviewResponse OK
     * @throws ApiError
     */
    public static adminDeleteReturnsIdShippingMethodActionId(
        id: string,
        actionId: string,
        fields?: string,
    ): CancelablePromise<AdminReturnPreviewResponse> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/admin/returns/{id}/shipping-method/{action_id}',
            path: {
                'id': id,
                'action_id': actionId,
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
