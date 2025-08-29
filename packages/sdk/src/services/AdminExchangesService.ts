/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AdminExchange } from '../models/AdminExchange';
import type { AdminExchangeDeleteResponse } from '../models/AdminExchangeDeleteResponse';
import type { AdminExchangeOrderResponse } from '../models/AdminExchangeOrderResponse';
import type { AdminExchangePreviewResponse } from '../models/AdminExchangePreviewResponse';
import type { AdminExchangeRequestResponse } from '../models/AdminExchangeRequestResponse';
import type { AdminExchangeResponse } from '../models/AdminExchangeResponse';
import type { AdminExchangeReturnResponse } from '../models/AdminExchangeReturnResponse';
import type { AdminPostCancelExchangeReqSchema } from '../models/AdminPostCancelExchangeReqSchema';
import type { AdminPostExchangesAddItemsReqSchema } from '../models/AdminPostExchangesAddItemsReqSchema';
import type { AdminPostExchangesItemsActionReqSchema } from '../models/AdminPostExchangesItemsActionReqSchema';
import type { AdminPostExchangesRequestItemsReturnActionReqSchema } from '../models/AdminPostExchangesRequestItemsReturnActionReqSchema';
import type { AdminPostExchangesReturnRequestItemsReqSchema } from '../models/AdminPostExchangesReturnRequestItemsReqSchema';
import type { AdminPostExchangesShippingActionReqSchema } from '../models/AdminPostExchangesShippingActionReqSchema';
import type { AdminPostExchangesShippingReqSchema } from '../models/AdminPostExchangesShippingReqSchema';
import type { AdminPostOrderExchangesReqSchema } from '../models/AdminPostOrderExchangesReqSchema';
import type { AdminPostReturnsShippingReqSchema } from '../models/AdminPostReturnsShippingReqSchema';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class AdminExchangesService {
    /**
     * List Exchanges
     * Retrieve a list of exchanges. The exchanges can be filtered by fields such as `id`. The exchanges can also be sorted or paginated.
     * @param fields Comma-separated fields that should be included in the returned data. if a field is prefixed with `+` it will be added to the default fields, using `-` will remove it from the default fields. without prefix it will replace the entire default fields.
     * @param offset The number of items to skip when retrieving a list.
     * @param limit Limit the number of items returned in the list.
     * @param order The field to sort the data by. By default, the sort order is ascending. To change the order to descending, prefix the field name with `-`.
     * @param deletedAt Filter by an exchange's deletion date.
     * @param id
     * @param orderId
     * @param status
     * @param createdAt Filter by the exchange's creation date.
     * @param updatedAt Filter by the exchange's update date.
     * @param withDeleted Whether to include deleted records in the result.
     * @returns any OK
     * @throws ApiError
     */
    public static adminGetExchanges(
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
         * The exchange's exchanges.
         */
        exchanges: Array<AdminExchange>;
    })> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/admin/exchanges',
            query: {
                'fields': fields,
                'offset': offset,
                'limit': limit,
                'order': order,
                'deleted_at': deletedAt,
                'id': id,
                'order_id': orderId,
                'status': status,
                'created_at': createdAt,
                'updated_at': updatedAt,
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
     * Create Exchange
     * Create an exchange request. Its changes aren't applied on the order until the exchange is confirmed.
     * @param fields Comma-separated fields that should be included in the returned data. if a field is prefixed with `+` it will be added to the default fields, using `-` will remove it from the default fields. without prefix it will replace the entire default fields.
     * @param requestBody
     * @returns AdminExchangeOrderResponse OK
     * @throws ApiError
     */
    public static adminPostExchanges(
        fields?: string,
        requestBody?: AdminPostOrderExchangesReqSchema,
    ): CancelablePromise<AdminExchangeOrderResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/admin/exchanges',
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
     * Get an Exchange
     * Retrieve an exchange by its ID. You can expand the exchange's relations or select the fields that should be returned using query parameters.
     * @param id The exchange's ID.
     * @param fields Comma-separated fields that should be included in the returned data. if a field is prefixed with `+` it will be added to the default fields, using `-` will remove it from the default fields. without prefix it will replace the entire default fields.
     * @returns AdminExchangeResponse OK
     * @throws ApiError
     */
    public static adminGetExchangesId(
        id: string,
        fields?: string,
    ): CancelablePromise<AdminExchangeResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/admin/exchanges/{id}',
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
     * Cancel an Exchange
     * Cancel an exchange and its associated return.
     * @param id The exchange's ID.
     * @param requestBody
     * @returns AdminExchangeResponse OK
     * @throws ApiError
     */
    public static adminPostExchangesIdCancel(
        id: string,
        requestBody?: AdminPostCancelExchangeReqSchema,
    ): CancelablePromise<AdminExchangeResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/admin/exchanges/{id}/cancel',
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
     * Add Inbound Items to an Exchange
     * Add inbound (or return) items to an exchange. These inbound items will have the action `RETURN_ITEM`.
     * @param id The exchange's ID.
     * @param requestBody
     * @returns AdminExchangeReturnResponse OK
     * @throws ApiError
     */
    public static adminPostExchangesIdInboundItems(
        id: string,
        requestBody?: AdminPostExchangesReturnRequestItemsReqSchema,
    ): CancelablePromise<AdminExchangeReturnResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/admin/exchanges/{id}/inbound/items',
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
     * Update an Inbount Item of an Exchange
     * Update an inbound (or return) item from an exchange using the `ID` of the item's `RETURN_ITEM` action.
     *
     * Every item has an `actions` property, whose value is an array of actions. You can check the action's name using its `action` property, and use the value of the `id` property.
     *
     * @param id The exchange's ID.
     * @param actionId The ID of the return item's `RETURN_ITEM` action.
     * @param requestBody
     * @returns AdminExchangeReturnResponse OK
     * @throws ApiError
     */
    public static adminPostExchangesIdInboundItemsActionId(
        id: string,
        actionId: string,
        requestBody?: AdminPostExchangesRequestItemsReturnActionReqSchema,
    ): CancelablePromise<AdminExchangeReturnResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/admin/exchanges/{id}/inbound/items/{action_id}',
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
     * Remove Inbound Item from Exchange
     * Remove an inbound (or return) item from an exchange using the `ID` of the item's `RETURN_ITEM` action.
     *
     * Every item has an `actions` property, whose value is an array of actions. You can check the action's name using its `action` property, and use the value of the `id` property.
     *
     * @param id The exchange's ID.
     * @param actionId The ID of the return item's `RETURN_ITEM` action.
     * @returns AdminExchangeReturnResponse OK
     * @throws ApiError
     */
    public static adminDeleteExchangesIdInboundItemsActionId(
        id: string,
        actionId: string,
    ): CancelablePromise<AdminExchangeReturnResponse> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/admin/exchanges/{id}/inbound/items/{action_id}',
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
     * Add an Inbound Shipping Method to an Exchange
     * Add an inbound (or return) shipping method to an exchange. The inbound shipping method will have a `SHIPPING_ADD` action.
     * @param id The exchange's ID.
     * @param requestBody
     * @returns AdminExchangeReturnResponse OK
     * @throws ApiError
     */
    public static adminPostExchangesIdInboundShippingMethod(
        id: string,
        requestBody?: AdminPostReturnsShippingReqSchema,
    ): CancelablePromise<AdminExchangeReturnResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/admin/exchanges/{id}/inbound/shipping-method',
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
     * Update Inbound Shipping Method of an Exchange
     * Update the shipping method for returning items in the exchange using the `ID` of the method's `SHIPPING_ADD` action.
     *
     * Every shipping method has an `actions` property, whose value is an array of actions. You can check the action's name using its `action` property, and use the value of the `id` property.
     *
     * @param id The exchange's ID.
     * @param actionId The ID of the shipping method's `SHIPPING_ADD` action.
     * @param fields Comma-separated fields that should be included in the returned data. if a field is prefixed with `+` it will be added to the default fields, using `-` will remove it from the default fields. without prefix it will replace the entire default fields.
     * @param requestBody
     * @returns AdminExchangePreviewResponse OK
     * @throws ApiError
     */
    public static adminPostExchangesIdInboundShippingMethodActionId(
        id: string,
        actionId: string,
        fields?: string,
        requestBody?: AdminPostExchangesShippingActionReqSchema,
    ): CancelablePromise<AdminExchangePreviewResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/admin/exchanges/{id}/inbound/shipping-method/{action_id}',
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
     * Remove Inbound Shipping Method from Exchange
     * Remove the shipping method for returning items in the exchange using the `ID` of the method's `SHIPPING_ADD` action.
     *
     * Every shipping method has an `actions` property, whose value is an array of actions. You can check the action's name using its `action` property, and use the value of the `id` property.
     *
     * @param id The exchange's ID.
     * @param actionId The ID of the shipping method's `SHIPPING_ADD` action.
     * @returns AdminExchangeReturnResponse OK
     * @throws ApiError
     */
    public static adminDeleteExchangesIdInboundShippingMethodActionId(
        id: string,
        actionId: string,
    ): CancelablePromise<AdminExchangeReturnResponse> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/admin/exchanges/{id}/inbound/shipping-method/{action_id}',
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
     * Add Outbound Items to Exchange
     * Add outbound (or new) items to an exchange. These outbound items will have the action `ITEM_ADD`.
     * @param id The exchange's ID.
     * @param fields Comma-separated fields that should be included in the returned data. if a field is prefixed with `+` it will be added to the default fields, using `-` will remove it from the default fields. without prefix it will replace the entire default fields.
     * @param requestBody
     * @returns AdminExchangePreviewResponse OK
     * @throws ApiError
     */
    public static adminPostExchangesIdOutboundItems(
        id: string,
        fields?: string,
        requestBody?: AdminPostExchangesAddItemsReqSchema,
    ): CancelablePromise<AdminExchangePreviewResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/admin/exchanges/{id}/outbound/items',
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
     * Update Outbound Item of an Exchange
     * Update an outbound (or new) item from an exchange using the `ID` of the item's `ITEM_ADD` action.
     *
     * Every item has an `actions` property, whose value is an array of actions. You can check the action's name using its `action` property, and use the value of the `id` property.
     *
     * @param id The exchange's ID.
     * @param actionId The ID of the new exchange item's `ITEM_ADD` action.
     * @param fields Comma-separated fields that should be included in the returned data. if a field is prefixed with `+` it will be added to the default fields, using `-` will remove it from the default fields. without prefix it will replace the entire default fields.
     * @param requestBody
     * @returns AdminExchangePreviewResponse OK
     * @throws ApiError
     */
    public static adminPostExchangesIdOutboundItemsActionId(
        id: string,
        actionId: string,
        fields?: string,
        requestBody?: AdminPostExchangesItemsActionReqSchema,
    ): CancelablePromise<AdminExchangePreviewResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/admin/exchanges/{id}/outbound/items/{action_id}',
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
     * Remove Outbound Item from Exchange
     * Remove an outbound (or new) item from an exchange using the `ID` of the item's `ITEM_ADD` action.
     *
     * Every item has an `actions` property, whose value is an array of actions. You can check the action's name using its `action` property, and use the value of the `id` property.
     *
     * @param id The exchange's ID.
     * @param actionId The ID of the new exchange item's `ITEM_ADD` action.
     * @param fields Comma-separated fields that should be included in the returned data. if a field is prefixed with `+` it will be added to the default fields, using `-` will remove it from the default fields. without prefix it will replace the entire default fields.
     * @returns AdminExchangePreviewResponse OK
     * @throws ApiError
     */
    public static adminDeleteExchangesIdOutboundItemsActionId(
        id: string,
        actionId: string,
        fields?: string,
    ): CancelablePromise<AdminExchangePreviewResponse> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/admin/exchanges/{id}/outbound/items/{action_id}',
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
     * Add Outbound Shipping Method to Exchange
     * Add an outbound shipping method to an exchange. The outbound shipping method will have a `SHIPPING_ADD` action.
     * @param id The exchange's ID.
     * @param fields Comma-separated fields that should be included in the returned data. if a field is prefixed with `+` it will be added to the default fields, using `-` will remove it from the default fields. without prefix it will replace the entire default fields.
     * @param requestBody
     * @returns AdminExchangePreviewResponse OK
     * @throws ApiError
     */
    public static adminPostExchangesIdOutboundShippingMethod(
        id: string,
        fields?: string,
        requestBody?: AdminPostExchangesShippingReqSchema,
    ): CancelablePromise<AdminExchangePreviewResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/admin/exchanges/{id}/outbound/shipping-method',
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
     * Update Outbound Shipping Method of Exchange
     * Update the shipping method for delivering outbound items in the exchange using the `ID` of the method's `SHIPPING_ADD` action.
     *
     * Every shipping method has an `actions` property, whose value is an array of actions. You can check the action's name using its `action` property, and use the value of the `id` property.
     *
     * @param id The exchange's ID.
     * @param actionId The ID of the shipping method's `SHIPPING_ADD` action.
     * @param fields Comma-separated fields that should be included in the returned data. if a field is prefixed with `+` it will be added to the default fields, using `-` will remove it from the default fields. without prefix it will replace the entire default fields.
     * @param requestBody
     * @returns AdminExchangePreviewResponse OK
     * @throws ApiError
     */
    public static adminPostExchangesIdOutboundShippingMethodActionId(
        id: string,
        actionId: string,
        fields?: string,
        requestBody?: AdminPostExchangesShippingActionReqSchema,
    ): CancelablePromise<AdminExchangePreviewResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/admin/exchanges/{id}/outbound/shipping-method/{action_id}',
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
     * Remove Outbound Shipping Method from Exchange
     * Remove the shipping method for delivering outbound items in the exchange using the `ID` of the method's `SHIPPING_ADD` action.
     *
     * Every shipping method has an `actions` property, whose value is an array of actions. You can check the action's name using its `action` property, and use the value of the `id` property.
     *
     * @param id The exchange's ID.
     * @param actionId The ID of the shipping method's `SHIPPING_ADD` action.
     * @param fields Comma-separated fields that should be included in the returned data. if a field is prefixed with `+` it will be added to the default fields, using `-` will remove it from the default fields. without prefix it will replace the entire default fields.
     * @returns AdminExchangePreviewResponse OK
     * @throws ApiError
     */
    public static adminDeleteExchangesIdOutboundShippingMethodActionId(
        id: string,
        actionId: string,
        fields?: string,
    ): CancelablePromise<AdminExchangePreviewResponse> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/admin/exchanges/{id}/outbound/shipping-method/{action_id}',
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
     * Confirm an Exchange
     * Confirm an exchange request, applying its changes on the associated order.
     * @param id The exchange's ID.
     * @param fields Comma-separated fields that should be included in the returned data. if a field is prefixed with `+` it will be added to the default fields, using `-` will remove it from the default fields. without prefix it will replace the entire default fields.
     * @returns AdminExchangeRequestResponse OK
     * @throws ApiError
     */
    public static adminPostExchangesIdRequest(
        id: string,
        fields?: string,
    ): CancelablePromise<AdminExchangeRequestResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/admin/exchanges/{id}/request',
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
     * Cancel Exchange Request
     * Cancel a requested exchange.
     * @param id The exchange's ID.
     * @returns AdminExchangeDeleteResponse OK
     * @throws ApiError
     */
    public static adminDeleteExchangesIdRequest(
        id: string,
    ): CancelablePromise<AdminExchangeDeleteResponse> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/admin/exchanges/{id}/request',
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
