/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AdminClaimDeleteResponse } from '../models/AdminClaimDeleteResponse';
import type { AdminClaimListResponse } from '../models/AdminClaimListResponse';
import type { AdminClaimOrderResponse } from '../models/AdminClaimOrderResponse';
import type { AdminClaimPreviewResponse } from '../models/AdminClaimPreviewResponse';
import type { AdminClaimRequestResponse } from '../models/AdminClaimRequestResponse';
import type { AdminClaimResponse } from '../models/AdminClaimResponse';
import type { AdminClaimReturnPreviewResponse } from '../models/AdminClaimReturnPreviewResponse';
import type { AdminPostCancelClaimReqSchema } from '../models/AdminPostCancelClaimReqSchema';
import type { AdminPostClaimItemsReqSchema } from '../models/AdminPostClaimItemsReqSchema';
import type { AdminPostClaimsAddItemsReqSchema } from '../models/AdminPostClaimsAddItemsReqSchema';
import type { AdminPostClaimsItemsActionReqSchema } from '../models/AdminPostClaimsItemsActionReqSchema';
import type { AdminPostClaimsShippingActionReqSchema } from '../models/AdminPostClaimsShippingActionReqSchema';
import type { AdminPostClaimsShippingReqSchema } from '../models/AdminPostClaimsShippingReqSchema';
import type { AdminPostOrderClaimsReqSchema } from '../models/AdminPostOrderClaimsReqSchema';
import type { AdminPostReturnsRequestItemsActionReqSchema } from '../models/AdminPostReturnsRequestItemsActionReqSchema';
import type { AdminPostReturnsRequestItemsReqSchema } from '../models/AdminPostReturnsRequestItemsReqSchema';
import type { AdminPostReturnsShippingReqSchema } from '../models/AdminPostReturnsShippingReqSchema';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class AdminClaimsService {
    /**
     * List Claims
     * Retrieve a list of claims. The claims can be filtered by fields such as `id`. The claims can also be sorted or paginated.
     * @param fields Comma-separated fields that should be included in the returned data. if a field is prefixed with `+` it will be added to the default fields, using `-` will remove it from the default fields. without prefix it will replace the entire default fields.
     * @param offset The number of items to skip when retrieving a list.
     * @param limit Limit the number of items returned in the list.
     * @param order The field to sort the data by. By default, the sort order is ascending. To change the order to descending, prefix the field name with `-`.
     * @param deletedAt The claim's deleted at.
     * @param q The claim's q.
     * @param id
     * @param orderId
     * @param status
     * @param createdAt The claim's created at.
     * @param updatedAt The claim's updated at.
     * @param and Join query parameters with an AND condition. Each object's content is the same type as the expected query parameters.
     * @param or Join query parameters with an OR condition. Each object's content is the same type as the expected query parameters.
     * @param withDeleted Whether to include deleted records in the result.
     * @returns AdminClaimListResponse OK
     * @throws ApiError
     */
    public static adminGetClaims(
        fields?: string,
        offset?: number,
        limit?: number,
        order?: string,
        deletedAt?: {
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
        q?: string,
        id?: (string | Array<string>),
        orderId?: (string | Array<string>),
        status?: (string | Array<string>),
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
        and?: Array<Record<string, any>>,
        or?: Array<Record<string, any>>,
        withDeleted?: boolean,
    ): CancelablePromise<AdminClaimListResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/admin/claims',
            query: {
                'fields': fields,
                'offset': offset,
                'limit': limit,
                'order': order,
                'deleted_at': deletedAt,
                'q': q,
                'id': id,
                'order_id': orderId,
                'status': status,
                'created_at': createdAt,
                'updated_at': updatedAt,
                '$and': and,
                '$or': or,
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
     * Create a Claim
     * Create a claim. The claim is still in the request state, and the changes are only applied on the order once the claim is confirmed.
     * @param fields Comma-separated fields that should be included in the returned data. if a field is prefixed with `+` it will be added to the default fields, using `-` will remove it from the default fields. without prefix it will replace the entire default fields.
     * @param requestBody
     * @returns AdminClaimOrderResponse OK
     * @throws ApiError
     */
    public static adminPostClaims(
        fields?: string,
        requestBody?: AdminPostOrderClaimsReqSchema,
    ): CancelablePromise<AdminClaimOrderResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/admin/claims',
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
     * Get a Claim
     * Retrieve a claim by its ID. You can expand the claim's relations or select the fields that should be returned using the query parameters.
     * @param id The claim's ID.
     * @param fields Comma-separated fields that should be included in the returned data. if a field is prefixed with `+` it will be added to the default fields, using `-` will remove it from the default fields. without prefix it will replace the entire default fields.
     * @returns AdminClaimResponse OK
     * @throws ApiError
     */
    public static adminGetClaimsId(
        id: string,
        fields?: string,
    ): CancelablePromise<AdminClaimResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/admin/claims/{id}',
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
     * Cancel a Claim
     * Cancel a claim and its associated return.
     * @param id The claim's ID.
     * @param requestBody
     * @returns AdminClaimResponse OK
     * @throws ApiError
     */
    public static adminPostClaimsIdCancel(
        id: string,
        requestBody?: AdminPostCancelClaimReqSchema,
    ): CancelablePromise<AdminClaimResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/admin/claims/{id}/cancel',
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
     * Add Claim Items to a Claim
     * Add order items to a claim as claim items. These claim items will have the action `WRITE_OFF_ITEM`.
     * @param id The claim's ID.
     * @param fields Comma-separated fields that should be included in the returned data. if a field is prefixed with `+` it will be added to the default fields, using `-` will remove it from the default fields. without prefix it will replace the entire default fields.
     * @param requestBody
     * @returns AdminClaimPreviewResponse OK
     * @throws ApiError
     */
    public static adminPostClaimsIdClaimItems(
        id: string,
        fields?: string,
        requestBody?: AdminPostClaimItemsReqSchema,
    ): CancelablePromise<AdminClaimPreviewResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/admin/claims/{id}/claim-items',
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
     * Update a Claim Item
     * Update an order item in a claim by the ID of the item's `WRITE_OFF_ITEM` action.
     *
     * Every item has an `actions` property, whose value is an array of actions. You can check the action's name using its `action` property, and use the value of the `id` property.
     *
     * @param id The claim's ID.
     * @param actionId The ID of the order item's `WRITE_OFF_ITEM` action.
     * @param fields Comma-separated fields that should be included in the returned data. if a field is prefixed with `+` it will be added to the default fields, using `-` will remove it from the default fields. without prefix it will replace the entire default fields.
     * @param requestBody
     * @returns AdminClaimPreviewResponse OK
     * @throws ApiError
     */
    public static adminPostClaimsIdClaimItemsActionId(
        id: string,
        actionId: string,
        fields?: string,
        requestBody?: AdminPostClaimsItemsActionReqSchema,
    ): CancelablePromise<AdminClaimPreviewResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/admin/claims/{id}/claim-items/{action_id}',
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
     * Remove a Claim Item from a Claim
     * Remove an order item from a claim by the ID of the item's `WRITE_OFF_ITEM` action.
     *
     * Every item has an `actions` property, whose value is an array of actions. You can check the action's name using its `action` property, and use the value of the `id` property.
     *
     * @param id The claim's ID.
     * @param actionId The ID of the order item's `WRITE_OFF_ITEM` action.
     * @param fields Comma-separated fields that should be included in the returned data. if a field is prefixed with `+` it will be added to the default fields, using `-` will remove it from the default fields. without prefix it will replace the entire default fields.
     * @returns AdminClaimPreviewResponse OK
     * @throws ApiError
     */
    public static adminDeleteClaimsIdClaimItemsActionId(
        id: string,
        actionId: string,
        fields?: string,
    ): CancelablePromise<AdminClaimPreviewResponse> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/admin/claims/{id}/claim-items/{action_id}',
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
     * Add Inbound Items to a Claim
     * Add inbound (or return) items to a claim. These inbound items will have a `RETURN_ITEM` action.
     *
     * @param id The claim's ID.
     * @param requestBody
     * @returns AdminClaimReturnPreviewResponse OK
     * @throws ApiError
     */
    public static adminPostClaimsIdInboundItems(
        id: string,
        requestBody?: AdminPostReturnsRequestItemsReqSchema,
    ): CancelablePromise<AdminClaimReturnPreviewResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/admin/claims/{id}/inbound/items',
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
     * Update Inbound Items of a Claim
     * Update an inbound (or return) item of a claim using the `ID` of the item's `RETURN_ITEM` action.
     *
     * Every item has an `actions` property, whose value is an array of actions. You can check the action's name using its `action` property, and use the value of the `id` property.
     *
     * @param id The claim's ID.
     * @param actionId The ID of the return item's `RETURN_ITEM` action.
     * @param requestBody
     * @returns AdminClaimReturnPreviewResponse OK
     * @throws ApiError
     */
    public static adminPostClaimsIdInboundItemsActionId(
        id: string,
        actionId: string,
        requestBody?: AdminPostReturnsRequestItemsActionReqSchema,
    ): CancelablePromise<AdminClaimReturnPreviewResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/admin/claims/{id}/inbound/items/{action_id}',
            path: {
                'id': id,
                'action_id': actionId,
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
     * Remove an Inbound Item from Claim
     * Remove an inbound (or return) item from a claim using the `ID` of the item's `RETURN_ITEM` action.
     *
     * Every item has an `actions` property, whose value is an array of actions. You can check the action's name using its `action` property, and use the value of the `id` property.
     *
     * @param id The claim's ID.
     * @param actionId The ID of the return item's `RETURN_ITEM` action.
     * @returns AdminClaimReturnPreviewResponse OK
     * @throws ApiError
     */
    public static adminDeleteClaimsIdInboundItemsActionId(
        id: string,
        actionId: string,
    ): CancelablePromise<AdminClaimReturnPreviewResponse> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/admin/claims/{id}/inbound/items/{action_id}',
            path: {
                'id': id,
                'action_id': actionId,
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
     * Add an Inbound Shipping Method to a Claim
     * Add an inbound (or return) shipping method to a claim. The inbound shipping method will have a `SHIPPING_ADD` action.
     *
     * @param id The claim's ID.
     * @param requestBody
     * @returns AdminClaimReturnPreviewResponse OK
     * @throws ApiError
     */
    public static adminPostClaimsIdInboundShippingMethod(
        id: string,
        requestBody?: AdminPostReturnsShippingReqSchema,
    ): CancelablePromise<AdminClaimReturnPreviewResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/admin/claims/{id}/inbound/shipping-method',
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
     * Update Inbound Shipping Method of a Claim
     * Update the shipping method for returning items in the claim using the `ID` of the method's `SHIPPING_ADD` action.
     *
     * Every shipping method has an `actions` property, whose value is an array of actions. You can check the action's name using its `action` property, and use the value of the `id` property.
     *
     * @param id The claim's ID.
     * @param actionId The ID of the shipping method's `SHIPPING_ADD` action.
     * @param fields Comma-separated fields that should be included in the returned data. if a field is prefixed with `+` it will be added to the default fields, using `-` will remove it from the default fields. without prefix it will replace the entire default fields.
     * @param requestBody
     * @returns AdminClaimPreviewResponse OK
     * @throws ApiError
     */
    public static adminPostClaimsIdInboundShippingMethodActionId(
        id: string,
        actionId: string,
        fields?: string,
        requestBody?: AdminPostClaimsShippingActionReqSchema,
    ): CancelablePromise<AdminClaimPreviewResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/admin/claims/{id}/inbound/shipping-method/{action_id}',
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
     * Remove Inbound Shipping Method from Claim
     * Remove the shipping method for returning items in the claim using the `ID` of the method's `SHIPPING_ADD` action.
     *
     * Every shipping method has an `actions` property, whose value is an array of actions. You can check the action's name using its `action` property, and use the value of the `id` property.
     *
     * @param id The claim's ID.
     * @param actionId The ID of the shipping method's `SHIPPING_ADD` action.
     * @returns AdminClaimReturnPreviewResponse OK
     * @throws ApiError
     */
    public static adminDeleteClaimsIdInboundShippingMethodActionId(
        id: string,
        actionId: string,
    ): CancelablePromise<AdminClaimReturnPreviewResponse> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/admin/claims/{id}/inbound/shipping-method/{action_id}',
            path: {
                'id': id,
                'action_id': actionId,
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
     * Add Outbound Items to a Claim
     * Add outbound (or new) items to a claim. These outbound items will have an `ITEM_ADD` action.
     *
     * @param id The claim's ID.
     * @param fields Comma-separated fields that should be included in the returned data. if a field is prefixed with `+` it will be added to the default fields, using `-` will remove it from the default fields. without prefix it will replace the entire default fields.
     * @param requestBody
     * @returns AdminClaimPreviewResponse OK
     * @throws ApiError
     */
    public static adminPostClaimsIdOutboundItems(
        id: string,
        fields?: string,
        requestBody?: AdminPostClaimsAddItemsReqSchema,
    ): CancelablePromise<AdminClaimPreviewResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/admin/claims/{id}/outbound/items',
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
     * Update Outbound Item of a Claim
     * Update an outbound (or new) item of a claim using the `ID` of the item's `ITEM_ADD` action.
     *
     * Every item has an `actions` property, whose value is an array of actions. You can check the action's name using its `action` property, and use the value of the `id` property.
     *
     * @param id The claim's ID.
     * @param actionId The ID of the new claim item's `ITEM_ADD` action.
     * @param fields Comma-separated fields that should be included in the returned data. if a field is prefixed with `+` it will be added to the default fields, using `-` will remove it from the default fields. without prefix it will replace the entire default fields.
     * @param requestBody
     * @returns AdminClaimPreviewResponse OK
     * @throws ApiError
     */
    public static adminPostClaimsIdOutboundItemsActionId(
        id: string,
        actionId: string,
        fields?: string,
        requestBody?: AdminPostClaimsItemsActionReqSchema,
    ): CancelablePromise<AdminClaimPreviewResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/admin/claims/{id}/outbound/items/{action_id}',
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
     * Remove an Outbound Item from Claim
     * Remove an outbound (or new) item from a claim using the `ID` of the item's `ITEM_ADD` action.
     *
     * Every item has an `actions` property, whose value is an array of actions. You can check the action's name using its `action` property, and use the value of the `id` property.
     *
     * @param id The claim's ID.
     * @param actionId The ID of the new claim item's `ITEM_ADD` action.
     * @param fields Comma-separated fields that should be included in the returned data. if a field is prefixed with `+` it will be added to the default fields, using `-` will remove it from the default fields. without prefix it will replace the entire default fields.
     * @returns AdminClaimPreviewResponse OK
     * @throws ApiError
     */
    public static adminDeleteClaimsIdOutboundItemsActionId(
        id: string,
        actionId: string,
        fields?: string,
    ): CancelablePromise<AdminClaimPreviewResponse> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/admin/claims/{id}/outbound/items/{action_id}',
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
     * Add Outbound Shipping Methods to a Claim
     * Add an outbound shipping method to a claim. The outbound shipping method will have a `SHIPPING_ADD` action.
     *
     * @param id The claim's ID.
     * @param fields Comma-separated fields that should be included in the returned data. if a field is prefixed with `+` it will be added to the default fields, using `-` will remove it from the default fields. without prefix it will replace the entire default fields.
     * @param requestBody
     * @returns AdminClaimPreviewResponse OK
     * @throws ApiError
     */
    public static adminPostClaimsIdOutboundShippingMethod(
        id: string,
        fields?: string,
        requestBody?: AdminPostClaimsShippingReqSchema,
    ): CancelablePromise<AdminClaimPreviewResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/admin/claims/{id}/outbound/shipping-method',
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
     * Update Outbound Shipping Method of a Claim
     * Update the shipping method for delivering outbound items in a claim using the `ID` of the method's `SHIPPING_ADD` action.
     *
     * Every shipping method has an `actions` property, whose value is an array of actions. You can check the action's name using its `action` property, and use the value of the `id` property.
     *
     * @param id The claim's ID.
     * @param actionId The ID of the shipping method's `SHIPPING_ADD` action.
     * @param fields Comma-separated fields that should be included in the returned data. if a field is prefixed with `+` it will be added to the default fields, using `-` will remove it from the default fields. without prefix it will replace the entire default fields.
     * @param requestBody
     * @returns AdminClaimPreviewResponse OK
     * @throws ApiError
     */
    public static adminPostClaimsIdOutboundShippingMethodActionId(
        id: string,
        actionId: string,
        fields?: string,
        requestBody?: AdminPostClaimsShippingActionReqSchema,
    ): CancelablePromise<AdminClaimPreviewResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/admin/claims/{id}/outbound/shipping-method/{action_id}',
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
     * Remove Outbound Shipping Method from Claim
     * Remove the shipping method for delivering outbound items in the claim using the `ID` of the method's `SHIPPING_ADD` action.
     *
     * Every shipping method has an `actions` property, whose value is an array of actions. You can check the action's name using its `action` property, and use the value of the `id` property.
     *
     * @param id The claim's ID.
     * @param actionId The ID of the shipping method's `SHIPPING_ADD` action.
     * @param fields Comma-separated fields that should be included in the returned data. if a field is prefixed with `+` it will be added to the default fields, using `-` will remove it from the default fields. without prefix it will replace the entire default fields.
     * @returns AdminClaimPreviewResponse OK
     * @throws ApiError
     */
    public static adminDeleteClaimsIdOutboundShippingMethodActionId(
        id: string,
        actionId: string,
        fields?: string,
    ): CancelablePromise<AdminClaimPreviewResponse> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/admin/claims/{id}/outbound/shipping-method/{action_id}',
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
     * Confirm a Claim Request
     * Confirm a claim request, applying its changes on the associated order.
     * @param id The claim's ID.
     * @param fields Comma-separated fields that should be included in the returned data. if a field is prefixed with `+` it will be added to the default fields, using `-` will remove it from the default fields. without prefix it will replace the entire default fields.
     * @returns AdminClaimRequestResponse OK
     * @throws ApiError
     */
    public static adminPostClaimsIdRequest(
        id: string,
        fields?: string,
    ): CancelablePromise<AdminClaimRequestResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/admin/claims/{id}/request',
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
     * Cancel Claim Request
     * Cancel a requested claim.
     * @param id The claim's ID.
     * @returns AdminClaimDeleteResponse OK
     * @throws ApiError
     */
    public static adminDeleteClaimsIdRequest(
        id: string,
    ): CancelablePromise<AdminClaimDeleteResponse> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/admin/claims/{id}/request',
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
}
