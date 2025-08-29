/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AdminAddDraftOrderItems } from '../models/AdminAddDraftOrderItems';
import type { AdminAddDraftOrderPromotions } from '../models/AdminAddDraftOrderPromotions';
import type { AdminAddDraftOrderShippingMethod } from '../models/AdminAddDraftOrderShippingMethod';
import type { AdminDraftOrderListResponse } from '../models/AdminDraftOrderListResponse';
import type { AdminDraftOrderPreviewResponse } from '../models/AdminDraftOrderPreviewResponse';
import type { AdminDraftOrderResponse } from '../models/AdminDraftOrderResponse';
import type { AdminRemoveDraftOrderPromotions } from '../models/AdminRemoveDraftOrderPromotions';
import type { AdminUpdateDraftOrder } from '../models/AdminUpdateDraftOrder';
import type { AdminUpdateDraftOrderActionShippingMethod } from '../models/AdminUpdateDraftOrderActionShippingMethod';
import type { AdminUpdateDraftOrderItem } from '../models/AdminUpdateDraftOrderItem';
import type { AdminUpdateDraftOrderShippingMethod } from '../models/AdminUpdateDraftOrderShippingMethod';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class AdminDraftOrdersService {
    /**
     * List Draft Orders
     * Retrieve a list of draft orders. The draft orders can be filtered by fields such as `id`. The draft orders can also be sorted or paginated.
     * @param fields Comma-separated fields that should be included in the returned data. if a field is prefixed with `+` it will be added to the default fields, using `-` will remove it from the default fields. without prefix it will replace the entire default fields.
     * @param offset The number of items to skip when retrieving a list.
     * @param limit Limit the number of items returned in the list.
     * @param order The field to sort the data by. By default, the sort order is ascending. To change the order to descending, prefix the field name with `-`.
     * @param id
     * @param status
     * @param and Join query parameters with an AND condition. Each object's content is the same type as the expected query parameters.
     * @param or Join query parameters with an OR condition. Each object's content is the same type as the expected query parameters.
     * @param salesChannelId Filter by the associated sales channels to retrieve its draft orders.
     * @param regionId Filter by region IDs to retrieve their associated draft orders.
     * @param q Search term to filter the order's searchable properties.
     * @param createdAt Filter by the draft order's creation date.
     * @param updatedAt Filter by the draft order's update date.
     * @param customerId
     * @param withDeleted Whether to include deleted records in the result.
     * @returns AdminDraftOrderListResponse OK
     * @throws ApiError
     */
    public static adminGetDraftOrders(
        fields?: string,
        offset?: number,
        limit?: number,
        order?: string,
        id?: (string | Array<string> | {
            /**
             * Join query parameters with an AND condition. Each object's content is the same type as the expected query parameters.
             */
            $and?: Array<Record<string, any>>;
            /**
             * Join query parameters with an OR condition. Each object's content is the same type as the expected query parameters.
             */
            $or?: Array<Record<string, any>>;
            $eq?: (string | Array<string>);
            $ne?: (string | Array<string>);
            /**
             * Filter by values in this array.
             */
            $in?: Array<(string | Array<string>)>;
            /**
             * Filter by values not in this array.
             */
            $nin?: Array<(string | Array<string>)>;
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
            $gt?: (string | Array<string>);
            $gte?: (string | Array<string>);
            $lt?: (string | Array<string>);
            $lte?: (string | Array<string>);
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
        }),
        status?: (string | Array<string> | {
            /**
             * Join query parameters with an AND condition. Each object's content is the same type as the expected query parameters.
             */
            $and?: Array<Record<string, any>>;
            /**
             * Join query parameters with an OR condition. Each object's content is the same type as the expected query parameters.
             */
            $or?: Array<Record<string, any>>;
            $eq?: (string | Array<string>);
            $ne?: (string | Array<string>);
            /**
             * Filter by values in this array.
             */
            $in?: Array<(string | Array<string>)>;
            /**
             * Filter by values not in this array.
             */
            $nin?: Array<(string | Array<string>)>;
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
            $gt?: (string | Array<string>);
            $gte?: (string | Array<string>);
            $lt?: (string | Array<string>);
            $lte?: (string | Array<string>);
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
        }),
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
    ): CancelablePromise<AdminDraftOrderListResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/admin/draft-orders',
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
     * Create Draft Order
     * Create a draft order. This creates an order with the `is_draft_order` property enabled. You can later convert the draft order to an order.
     * @param fields Comma-separated fields that should be included in the returned data. if a field is prefixed with `+` it will be added to the default fields, using `-` will remove it from the default fields. without prefix it will replace the entire default fields.
     * @param requestBody
     * @returns AdminDraftOrderResponse OK
     * @throws ApiError
     */
    public static adminPostDraftOrders(
        fields?: string,
        requestBody?: ({
            /**
             * The draft order's status.
             */
            status?: 'completed';
            /**
             * The ID of the associated sales channel.
             */
            sales_channel_id: string;
            /**
             * The email of the draft order's customer.
             */
            email: string;
            /**
             * The ID of the draft order's customer.
             */
            customer_id: string;
            /**
             * The billing address's details.
             */
            billing_address?: {
                /**
                 * The billing address's first name.
                 */
                first_name: string;
                /**
                 * The billing address's last name.
                 */
                last_name: string;
                /**
                 * The billing address's phone.
                 */
                phone: string;
                /**
                 * The billing address's company.
                 */
                company: string;
                /**
                 * The billing address's first line.
                 */
                address_1: string;
                /**
                 * The billing address's second line.
                 */
                address_2: string;
                /**
                 * The billing address's city.
                 */
                city: string;
                /**
                 * The billing address's country code.
                 */
                country_code: string;
                /**
                 * The billing address's ISO 3166-2 province code. Must be lower-case.
                 */
                province: string;
                /**
                 * The billing address's postal code.
                 */
                postal_code: string;
                /**
                 * The billing address's metadata.
                 */
                metadata: Record<string, any>;
            };
            /**
             * The draft order's shipping address.
             */
            shipping_address?: {
                /**
                 * The shipping address's first name.
                 */
                first_name: string;
                /**
                 * The shipping address's last name.
                 */
                last_name: string;
                /**
                 * The shipping address's phone.
                 */
                phone: string;
                /**
                 * The shipping address's company.
                 */
                company: string;
                /**
                 * The shipping address's first line.
                 */
                address_1: string;
                /**
                 * The shipping address's second line.
                 */
                address_2: string;
                /**
                 * The shipping address's city.
                 */
                city: string;
                /**
                 * The shipping address's country code.
                 */
                country_code: string;
                /**
                 * The shipping address's ISO 3166-2 province code. Must be lower-case.
                 */
                province: string;
                /**
                 * The shipping address's postal code.
                 */
                postal_code: string;
                /**
                 * The shipping address's metadata.
                 */
                metadata: Record<string, any>;
            };
            /**
             * The draft order's items.
             */
            items?: Array<{
                /**
                 * The item's title.
                 */
                title: string;
                /**
                 * The item's SKU.
                 */
                sku: string;
                /**
                 * The item's barcode.
                 */
                barcode: string;
                /**
                 * The ID of the associated product variant.
                 */
                variant_id: string;
                unit_price: (string | number | {
                    /**
                     * The unit price's value.
                     */
                    value: string;
                    /**
                     * The unit price's rounding precision.
                     */
                    precision: number;
                });
                /**
                 * The item's ordered quantity.
                 */
                quantity: number;
                /**
                 * The item's metadata.
                 */
                metadata: Record<string, any>;
            }>;
            /**
             * The ID of the associated region.
             */
            region_id: string;
            /**
             * The promotion codes applied on the draft order.
             */
            promo_codes?: Array<string>;
            /**
             * The draft order's currency code.
             */
            currency_code: string;
            /**
             * Whether to send the customer notifications on order changes.
             */
            no_notification_order?: boolean;
            /**
             * The draft order's shipping methods.
             */
            shipping_methods: Array<{
                /**
                 * The ID of an existing shipping method.
                 */
                shipping_method_id?: string;
                /**
                 * The shipping method's name.
                 */
                name: string;
                /**
                 * The ID of the shipping option this method is created from.
                 */
                option_id: string;
                /**
                 * The shipping method's data, useful for fulfillment providers.
                 */
                data?: Record<string, any>;
                amount: (string | number | {
                    /**
                     * The amount's value.
                     */
                    value: string;
                    /**
                     * The amount's rounding precision.
                     */
                    precision: number;
                });
            }>;
            /**
             * The draft order's metadata.
             */
            metadata: Record<string, any>;
        } & {
            /**
             * Pass additional custom data to the API route. This data is passed to the underlying workflow under the `additional_data` parameter.
             */
            additional_data?: Record<string, any>;
        }),
    ): CancelablePromise<AdminDraftOrderResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/admin/draft-orders',
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
     * Get a Draft Order
     * Retrieve a draft order by its ID. You can expand the draft order's relations or select the fields that should be returned using the query parameters.
     * @param id The draft order's ID.
     * @param fields Comma-separated fields that should be included in the returned data.
     * if a field is prefixed with `+` it will be added to the default fields, using `-` will remove it from the default fields.
     * without prefix it will replace the entire default fields.
     * @returns AdminDraftOrderResponse OK
     * @throws ApiError
     */
    public static adminGetDraftOrdersId(
        id: string,
        fields?: string,
    ): CancelablePromise<AdminDraftOrderResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/admin/draft-orders/{id}',
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
     * Update a Draft Order
     * Update a draft order's details. This doesn't include updating the draft order's items, shipping methods, or promotions. To update those, you need to create an edit that you can later request or confirm.
     * @param id The draft order's ID.
     * @param fields Comma-separated fields that should be included in the returned data.
     * if a field is prefixed with `+` it will be added to the default fields, using `-` will remove it from the default fields.
     * without prefix it will replace the entire default fields.
     * @param requestBody
     * @returns AdminDraftOrderResponse OK
     * @throws ApiError
     */
    public static adminPostDraftOrdersId(
        id: string,
        fields?: string,
        requestBody?: AdminUpdateDraftOrder,
    ): CancelablePromise<AdminDraftOrderResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/admin/draft-orders/{id}',
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
     * Delete a Draft Order
     * Delete a draft order.
     * @param id The draft order's ID.
     * @returns any OK
     * @throws ApiError
     */
    public static adminDeleteDraftOrdersId(
        id: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/admin/draft-orders/{id}',
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
     * Convert a Draft Order to an Order
     * Convert a draft order to an order. This will finalize the draft order and create a new order with the same details.
     * @param id The draft order's ID.
     * @param fields Comma-separated fields that should be included in the returned data.
     * if a field is prefixed with `+` it will be added to the default fields, using `-` will remove it from the default fields.
     * without prefix it will replace the entire default fields.
     * @returns any OK
     * @throws ApiError
     */
    public static adminPostDraftOrdersIdConvertToOrder(
        id: string,
        fields?: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/admin/draft-orders/{id}/convert-to-order',
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
     * Create a Draft Order Edit
     * Create an edit on a draft order. This will allow you to make changes to the draft order's items, shipping methods, or promotions. Once you've made the necessar changes, you can later either request the edit (which requires a confirmation from the customer), or force-confirm the edit.
     * @param id The draft order's ID.
     * @returns any OK
     * @throws ApiError
     */
    public static adminPostDraftOrdersIdEdit(
        id: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/admin/draft-orders/{id}/edit',
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
     * Cancel Edit on Draft Order
     * Cancel an unconfirmed edit on a draft order.
     * @param id The draft order's ID.
     * @returns any OK
     * @throws ApiError
     */
    public static adminDeleteDraftOrdersIdEdit(
        id: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/admin/draft-orders/{id}/edit',
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
     * Confirm an Edit on a Draft Order
     * Confirm an edit on a draft order. This will apply the changes made to the draft order.
     * @param id The draft order's ID.
     * @returns any OK
     * @throws ApiError
     */
    public static adminPostDraftOrdersIdEditConfirm(
        id: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/admin/draft-orders/{id}/edit/confirm',
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
     * Add Item to Draft Order Edit
     * Add an item to a draft order edit.
     * @param id The draft order's ID.
     * @param requestBody
     * @returns any OK
     * @throws ApiError
     */
    public static adminPostDraftOrdersIdEditItems(
        id: string,
        requestBody?: AdminAddDraftOrderItems,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/admin/draft-orders/{id}/edit/items',
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
     * Update Existing Item in Draft Order Edit
     * Update an existing item in a draft order edit.
     * @param id The draft order's ID.
     * @param itemId The item's ID.
     * @param requestBody
     * @returns any OK
     * @throws ApiError
     */
    public static adminPostDraftOrdersIdEditItemsItemItemId(
        id: string,
        itemId: string,
        requestBody?: AdminUpdateDraftOrderItem,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/admin/draft-orders/{id}/edit/items/item/{item_id}',
            path: {
                'id': id,
                'item_id': itemId,
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
     * Update New Item in Draft Order Edit
     * Update a new item that was added to a draft order edit by the ID of the item's `ITEM_ADD` action.
     *
     * Every item has an `actions` property, whose value is an array of actions. You can check the action's name using its `action` property, and use the value of the `id` property.
     *
     * @param id The draft order's ID.
     * @param actionId The ID of the item's `ITEM_ADD` action.
     * @param requestBody
     * @returns any OK
     * @throws ApiError
     */
    public static adminPostDraftOrdersIdEditItemsActionId(
        id: string,
        actionId: string,
        requestBody?: AdminUpdateDraftOrderItem,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/admin/draft-orders/{id}/edit/items/{action_id}',
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
     * Remove Item from Draft Order Edit
     * Remove an order item from a draft order edit by the ID of the item's `ITEM_ADD` or `ITEM_UPDATE` action.
     *
     * Every item has an `actions` property, whose value is an array of actions. You can check the action's name using its `action` property, and use the value of the `id` property.
     *
     * @param id The draft order's ID.
     * @param actionId The ID of the order item's `ITEM_ADD` or `ITEM_UPDATE` action.
     * @returns any OK
     * @throws ApiError
     */
    public static adminDeleteDraftOrdersIdEditItemsActionId(
        id: string,
        actionId: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/admin/draft-orders/{id}/edit/items/{action_id}',
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
     * Add Promotions to Draft Order Edit
     * Add promotions to a draft order edit.
     * @param id The draft order's ID.
     * @param requestBody
     * @returns AdminDraftOrderPreviewResponse OK
     * @throws ApiError
     */
    public static adminPostDraftOrdersIdEditPromotions(
        id: string,
        requestBody?: AdminAddDraftOrderPromotions,
    ): CancelablePromise<AdminDraftOrderPreviewResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/admin/draft-orders/{id}/edit/promotions',
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
     * Remove Promotions from Draft Order Edit
     * Remove specified promotions from a draft order edit.
     * @param id The draft order's ID.
     * @param requestBody
     * @returns AdminDraftOrderPreviewResponse OK
     * @throws ApiError
     */
    public static adminDeleteDraftOrdersIdEditPromotions(
        id: string,
        requestBody?: AdminRemoveDraftOrderPromotions,
    ): CancelablePromise<AdminDraftOrderPreviewResponse> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/admin/draft-orders/{id}/edit/promotions',
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
     * Request Edit on Draft Order
     * Change the status of a draft order's edit to be requested. Later, the edit can be confirmed or canceled.
     * @param id The draft order's ID.
     * @returns any OK
     * @throws ApiError
     */
    public static adminPostDraftOrdersIdEditRequest(
        id: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/admin/draft-orders/{id}/edit/request',
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
     * Add Shipping Method to Draft Order Edit
     * Add a shipping method to a draft order edit.
     * @param id The draft order's ID.
     * @param requestBody
     * @returns any OK
     * @throws ApiError
     */
    public static adminPostDraftOrdersIdEditShippingMethods(
        id: string,
        requestBody?: AdminAddDraftOrderShippingMethod,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/admin/draft-orders/{id}/edit/shipping-methods',
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
     * Update Existing Shipping Method in Draft Order Edit
     * Update an existing shipping method in a draft order edit.
     * @param id The draft order's ID.
     * @param methodId The ID of the shipping method.
     * @param requestBody
     * @returns any OK
     * @throws ApiError
     */
    public static adminPostDraftOrdersIdEditShippingMethodsMethodMethodId(
        id: string,
        methodId: string,
        requestBody?: AdminUpdateDraftOrderShippingMethod,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/admin/draft-orders/{id}/edit/shipping-methods/method/{method_id}',
            path: {
                'id': id,
                'method_id': methodId,
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
     * Remove Shipping Method from Draft Order Edit
     * Remove an existing shipping method from a draft order edit.
     * @param id The draft order's ID.
     * @param methodId The shipping method's ID.
     * @returns any OK
     * @throws ApiError
     */
    public static adminDeleteDraftOrdersIdEditShippingMethodsMethodMethodId(
        id: string,
        methodId: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/admin/draft-orders/{id}/edit/shipping-methods/method/{method_id}',
            path: {
                'id': id,
                'method_id': methodId,
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
     * Update New Shipping Method in Draft Order Edit
     * Update a new shipping method that was added to a draft order edit using the `ID` of the method's `SHIPPING_ADD` action.
     *
     * Every shipping method has an `actions` property, whose value is an array of actions. You can check the action's name using its `action` property, and use the value of the `id` property.
     *
     * @param id The draft order's ID.
     * @param actionId The ID of the shipping method's `SHIPPING_ADD` action.
     * @param requestBody
     * @returns any OK
     * @throws ApiError
     */
    public static adminPostDraftOrdersIdEditShippingMethodsActionId(
        id: string,
        actionId: string,
        requestBody?: AdminUpdateDraftOrderActionShippingMethod,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/admin/draft-orders/{id}/edit/shipping-methods/{action_id}',
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
     * Remove New Shipping Method from Draft Order
     * Remove a shipping method that was added to a draft order edit using the `ID` of the method's `SHIPPING_ADD` action.
     *
     * Every shipping method has an `actions` property, whose value is an array of actions. You can check the action's name using its `action` property, and use the value of the `id` property.
     *
     * @param id The draft order's ID.
     * @param actionId The ID of the shipping method's `SHIPPING_ADD` action.
     * @returns any OK
     * @throws ApiError
     */
    public static adminDeleteDraftOrdersIdEditShippingMethodsActionId(
        id: string,
        actionId: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/admin/draft-orders/{id}/edit/shipping-methods/{action_id}',
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
}
