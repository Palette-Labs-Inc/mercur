/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AdminCreateOrderCreditLines } from '../models/AdminCreateOrderCreditLines';
import type { AdminOrder } from '../models/AdminOrder';
import type { AdminOrderChangesResponse } from '../models/AdminOrderChangesResponse';
import type { AdminOrderItem } from '../models/AdminOrderItem';
import type { AdminOrderPreviewResponse } from '../models/AdminOrderPreviewResponse';
import type { AdminOrderResponse } from '../models/AdminOrderResponse';
import type { AdminTransferOrder } from '../models/AdminTransferOrder';
import type { AdminUpdateOrder } from '../models/AdminUpdateOrder';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class AdminOrdersService {
    /**
     * List Orders
     * Retrieve a list of orders. The orders can be filtered by fields such as `id`. The orders can also be sorted or paginated.
     * @param fields Comma-separated fields that should be included in the returned data. if a field is prefixed with `+` it will be added to the default fields, using `-` will remove it from the default fields. without prefix it will replace the entire default fields.
     * @param offset The number of items to skip when retrieving a list.
     * @param limit Limit the number of items returned in the list.
     * @param order The field to sort the data by. By default, the sort order is ascending. To change the order to descending, prefix the field name with `-`.
     * @param id
     * @param status
     * @param and Join query parameters with an AND condition. Each object's content is the same type as the expected query parameters.
     * @param or Join query parameters with an OR condition. Each object's content is the same type as the expected query parameters.
     * @param salesChannelId Filter by sales channel IDs to retrieve the orders associated with them.
     * @param regionId Filter by region IDs to retrieve their associated orders.
     * @param q Search term to filter the order's searchable properties.
     * @param createdAt Filter by the order's creation date.
     * @param updatedAt Filter by the order's update date.
     * @param customerId
     * @param withDeleted Whether to include deleted records in the result.
     * @returns any OK
     * @throws ApiError
     */
    public static adminGetOrders(
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
         * The number of items skipped before the returned items.
         */
        offset: number;
        /**
         * The total count of items.
         */
        count: number;
    } & {
        /**
         * The list of orders.
         */
        orders: Array<AdminOrder>;
    })> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/admin/orders',
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
     * Get an Order
     * Retrieve an order by its ID. You can expand the order's relations or select the fields that should be returned.
     * @param id The order's ID.
     * @param fields Comma-separated fields that should be included in the returned data. if a field is prefixed with `+` it will be added to the default fields, using `-` will remove it from the default fields. without prefix it will replace the entire default fields.
     * @param id
     * @param status
     * @param version The order's version.
     * @param createdAt
     * @param updatedAt
     * @param deletedAt
     * @returns AdminOrderResponse OK
     * @throws ApiError
     */
    public static adminGetOrdersId(
        id: string,
        fields?: string,
        id?: (string | Array<string>),
        status?: (string | Array<string>),
        version?: number,
        createdAt?: any,
        updatedAt?: any,
        deletedAt?: any,
    ): CancelablePromise<AdminOrderResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/admin/orders/{id}',
            path: {
                'id': id,
            },
            query: {
                'fields': fields,
                'id': id,
                'status': status,
                'version': version,
                'created_at': createdAt,
                'updated_at': updatedAt,
                'deleted_at': deletedAt,
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
     * Update Order
     * Update an order's details.
     * @param id The order's ID.
     * @param fields Comma-separated fields that should be included in the returned data.
     * if a field is prefixed with `+` it will be added to the default fields, using `-` will remove it from the default fields.
     * without prefix it will replace the entire default fields.
     * @param requestBody
     * @returns AdminOrderResponse OK
     * @throws ApiError
     */
    public static adminPostOrdersId(
        id: string,
        fields?: string,
        requestBody?: AdminUpdateOrder,
    ): CancelablePromise<AdminOrderResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/admin/orders/{id}',
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
     * Archive an Order
     * Change the status of an order to archived.
     * @param id The order's ID.
     * @param fields Comma-separated fields that should be included in the returned data. if a field is prefixed with `+` it will be added to the default fields, using `-` will remove it from the default fields. without prefix it will replace the entire default fields.
     * @returns AdminOrderResponse OK
     * @throws ApiError
     */
    public static adminPostOrdersIdArchive(
        id: string,
        fields?: string,
    ): CancelablePromise<AdminOrderResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/admin/orders/{id}/archive',
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
     * Cancel Order
     * Cancel an order. The cancelation fails if:
     * - The order has captured payments.
     *
     *
     * - The order has refund payments.
     *
     *
     * - The order has fulfillments that aren't canceled.
     *
     * @param id The order's ID.
     * @param fields Comma-separated fields that should be included in the returned data. if a field is prefixed with `+` it will be added to the default fields, using `-` will remove it from the default fields. without prefix it will replace the entire default fields.
     * @returns AdminOrderResponse OK
     * @throws ApiError
     */
    public static adminPostOrdersIdCancel(
        id: string,
        fields?: string,
    ): CancelablePromise<AdminOrderResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/admin/orders/{id}/cancel',
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
     * List Changes on an Order
     * Retrieve a list of changes made on an order, including returns, exchanges, etc...
     *
     * The changes can be filtered by fields like FILTER FIELDS. The changes can also be paginated.
     *
     * @param id The order's ID.
     * @param fields Comma-separated fields that should be included in the returned data.
     * if a field is prefixed with `+` it will be added to the default fields, using `-` will remove it from the default fields.
     * without prefix it will replace the entire default fields.
     * @returns AdminOrderChangesResponse OK
     * @throws ApiError
     */
    public static adminGetOrdersIdChanges(
        id: string,
        fields?: string,
    ): CancelablePromise<AdminOrderChangesResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/admin/orders/{id}/changes',
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
     * Complete Order
     * Mark an order as completed.
     * @param id The order's ID.
     * @param fields Comma-separated fields that should be included in the returned data. if a field is prefixed with `+` it will be added to the default fields, using `-` will remove it from the default fields. without prefix it will replace the entire default fields.
     * @param requestBody
     * @returns AdminOrderResponse OK
     * @throws ApiError
     */
    public static adminPostOrdersIdComplete(
        id: string,
        fields?: string,
        requestBody?: {
            /**
             * Pass additional custom data to the API route. This data is passed to the underlying workflow under the `additional_data` parameter.
             */
            additional_data?: Record<string, any>;
        },
    ): CancelablePromise<AdminOrderResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/admin/orders/{id}/complete',
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
     * Create Credit Line for Order
     * Create a credit line for an order.
     * @param id The order's ID.
     * @param fields Comma-separated fields that should be included in the returned data.
     * if a field is prefixed with `+` it will be added to the default fields, using `-` will remove it from the default fields.
     * without prefix it will replace the entire default fields.
     * @param requestBody
     * @returns AdminOrderResponse OK
     * @throws ApiError
     */
    public static adminPostOrdersIdCreditLines(
        id: string,
        fields?: string,
        requestBody?: AdminCreateOrderCreditLines,
    ): CancelablePromise<AdminOrderResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/admin/orders/{id}/credit-lines',
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
     * Create an Order Fulfillment
     * Create a fulfillment for an order. The creation fails if the order is canceled.
     * @param id The order's ID.
     * @param fields Comma-separated fields that should be included in the returned data. if a field is prefixed with `+` it will be added to the default fields, using `-` will remove it from the default fields. without prefix it will replace the entire default fields.
     * @param requestBody
     * @returns AdminOrderResponse OK
     * @throws ApiError
     */
    public static adminPostOrdersIdFulfillments(
        id: string,
        fields?: string,
        requestBody?: ({
            /**
             * The items to fulfill.
             */
            items: Array<{
                /**
                 * The item's ID.
                 */
                id: string;
                /**
                 * The item's quantity to fulfill.
                 */
                quantity: number;
            }>;
            /**
             * The ID of the location to fulfill the items from. If not provided, the location associated with the shipping option of the order's shipping method is used.
             */
            location_id: string;
            /**
             * Whether to send the customer a notification about the created fulfillment.
             */
            no_notification?: boolean;
            /**
             * The order's metadata. Can hold custom key-value pairs.
             */
            metadata: Record<string, any>;
        } & {
            /**
             * Pass additional custom data to the API route. This data is passed to the underlying workflow under the `additional_data` parameter.
             */
            additional_data?: Record<string, any>;
        }),
    ): CancelablePromise<AdminOrderResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/admin/orders/{id}/fulfillments',
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
     * Cancel Fulfillment
     * Cancel an order's fulfillment. The fulfillment can't be canceled if it's shipped.
     * @param id The order's ID.
     * @param fulfillmentId The order's fulfillment id.
     * @param fields Comma-separated fields that should be included in the returned data. if a field is prefixed with `+` it will be added to the default fields, using `-` will remove it from the default fields. without prefix it will replace the entire default fields.
     * @param requestBody
     * @returns AdminOrderResponse OK
     * @throws ApiError
     */
    public static adminPostOrdersIdFulfillmentsFulfillmentIdCancel(
        id: string,
        fulfillmentId: string,
        fields?: string,
        requestBody?: ({
            /**
             * Whether the customer should receive a notification about this change.
             */
            no_notification?: boolean;
        } & {
            /**
             * Pass additional custom data to the API route. This data is passed to the underlying workflow under the `additional_data` parameter.
             */
            additional_data?: Record<string, any>;
        }),
    ): CancelablePromise<AdminOrderResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/admin/orders/{id}/fulfillments/{fulfillment_id}/cancel',
            path: {
                'id': id,
                'fulfillment_id': fulfillmentId,
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
     * Mark a Fulfillment as Delivered.
     * Mark an order's fulfillment as delivered.
     * @param id The order's ID.
     * @param fulfillmentId The fulfillment's ID.
     * @param fields Comma-separated fields that should be included in the returned data.
     * If a field is prefixed with `+` it will be added to the default fields, using `-` will remove it from the default fields.
     * Without prefix it will replace the entire default fields.
     * @returns AdminOrderResponse OK
     * @throws ApiError
     */
    public static adminPostOrdersIdFulfillmentsFulfillmentIdMarkAsDelivered(
        id: string,
        fulfillmentId: string,
        fields?: string,
    ): CancelablePromise<AdminOrderResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/admin/orders/{id}/fulfillments/{fulfillment_id}/mark-as-delivered',
            path: {
                'id': id,
                'fulfillment_id': fulfillmentId,
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
     * Create Shipment for an Order's Fulfillment
     * Create a shipment for an order's fulfillment.
     * @param id The order's ID.
     * @param fulfillmentId The fulfillment's ID.
     * @param fields Comma-separated fields that should be included in the returned data. if a field is prefixed with `+` it will be added to the default fields, using `-` will remove it from the default fields. without prefix it will replace the entire default fields.
     * @param requestBody
     * @returns AdminOrderResponse OK
     * @throws ApiError
     */
    public static adminPostOrdersIdFulfillmentsFulfillmentIdShipments(
        id: string,
        fulfillmentId: string,
        fields?: string,
        requestBody?: ({
            /**
             * The items to create shipment for.
             */
            items: Array<{
                /**
                 * The item's ID.
                 */
                id: string;
                /**
                 * The item's quantity to ship.
                 */
                quantity: number;
            }>;
            /**
             * The labels to create for the shipment.
             */
            labels?: Array<{
                /**
                 * The label's tracking number.
                 */
                tracking_number: string;
                /**
                 * The label's tracking url.
                 */
                tracking_url: string;
                /**
                 * The label's url.
                 */
                label_url: string;
            }>;
            /**
             * Whether to send the customer a notification about the created shipment.
             */
            no_notification?: boolean;
            /**
             * The shipment's metadata. Can hold custom key-value pairs.
             */
            metadata: Record<string, any>;
        } & {
            /**
             * Pass additional custom data to the API route. This data is passed to the underlying workflow under the `additional_data` parameter.
             */
            additional_data?: Record<string, any>;
        }),
    ): CancelablePromise<AdminOrderResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/admin/orders/{id}/fulfillments/{fulfillment_id}/shipments',
            path: {
                'id': id,
                'fulfillment_id': fulfillmentId,
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
     * List Line Items
     * Retrieve a list of line items in a order. The line items can be filtered by fields like FILTER FIELDS. The line items can also be paginated.
     * @param id The order's ID.
     * @param fields Comma-separated fields that should be included in the returned data.
     * if a field is prefixed with `+` it will be added to the default fields, using `-` will remove it from the default fields.
     * without prefix it will replace the entire default fields.
     * @param id
     * @param itemId
     * @param version
     * @param limit Limit the number of items returned in the list.
     * @param offset The number of items to skip when retrieving a list.
     * @param order The field to sort the data by. By default, the sort order is ascending. To change the order to descending, prefix the field name with `-`.
     * @returns any OK
     * @throws ApiError
     */
    public static adminGetOrdersIdLineItems(
        id: string,
        fields?: string,
        id?: (string | Array<string>),
        itemId?: (string | Array<string>),
        version?: (number | Array<number>),
        limit?: number,
        offset?: number,
        order?: string,
    ): CancelablePromise<{
        /**
         * The order's order items.
         */
        order_items: Array<AdminOrderItem>;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/admin/orders/{id}/line-items',
            path: {
                'id': id,
            },
            query: {
                'fields': fields,
                'id': id,
                'item_id': itemId,
                'version': version,
                'limit': limit,
                'offset': offset,
                'order': order,
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
     * Get Preview
     * Retrieve a preview of an order using its associated change, such as an edit.
     * @param id The order's ID.
     * @returns AdminOrderPreviewResponse OK
     * @throws ApiError
     */
    public static adminGetOrdersIdPreview(
        id: string,
    ): CancelablePromise<AdminOrderPreviewResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/admin/orders/{id}/preview',
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
     * List Shipping Options for Order
     * Retrieve a list of shipping options that can be used for outbound shipping in an order. This is especially useful when adding outbound shipping to order exchanges or claims.
     * @param id The order's ID.
     * @returns any OK
     * @throws ApiError
     */
    public static adminGetOrdersIdShippingOptions(
        id: string,
    ): CancelablePromise<{
        /**
         * The list of shipping options.
         */
        shipping_options: Array<Record<string, any>>;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/admin/orders/{id}/shipping-options',
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
     * Request Order Transfer
     * Request an order to be transfered to another customer. The transfer is confirmed by sending a request to the [Accept Order Transfer](https://docs.medusajs.com/api/store#orders_postordersidtransferaccept) Store API route.
     * @param id The order's ID.
     * @param fields Comma-separated fields that should be included in the returned data.
     * if a field is prefixed with `+` it will be added to the default fields, using `-` will remove it from the default fields.
     * without prefix it will replace the entire default fields.
     * @param requestBody
     * @returns AdminOrderResponse OK
     * @throws ApiError
     */
    public static adminPostOrdersIdTransfer(
        id: string,
        fields?: string,
        requestBody?: AdminTransferOrder,
    ): CancelablePromise<AdminOrderResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/admin/orders/{id}/transfer',
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
     * Cancel Transfer Request
     * Cancel a request to transfer an order to another customer.
     * @param id The order's ID.
     * @param fields Comma-separated fields that should be included in the returned data.
     * if a field is prefixed with `+` it will be added to the default fields, using `-` will remove it from the default fields.
     * without prefix it will replace the entire default fields.
     * @returns AdminOrderResponse OK
     * @throws ApiError
     */
    public static adminPostOrdersIdTransferCancel(
        id: string,
        fields?: string,
    ): CancelablePromise<AdminOrderResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/admin/orders/{id}/transfer/cancel',
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
