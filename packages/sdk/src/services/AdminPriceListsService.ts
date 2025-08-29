/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AdminCreatePriceList } from '../models/AdminCreatePriceList';
import type { AdminLinkPriceListProducts } from '../models/AdminLinkPriceListProducts';
import type { AdminPriceListBatchResponse } from '../models/AdminPriceListBatchResponse';
import type { AdminPriceListDeleteResponse } from '../models/AdminPriceListDeleteResponse';
import type { AdminPriceListListResponse } from '../models/AdminPriceListListResponse';
import type { AdminPriceListResponse } from '../models/AdminPriceListResponse';
import type { AdminUpdatePriceList } from '../models/AdminUpdatePriceList';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class AdminPriceListsService {
    /**
     * List Price Lists
     * Retrieve a list of price lists. The price lists can be filtered by fields such as `id`. The price lists can also be sorted or paginated.
     * @param fields Comma-separated fields that should be included in the returned data. if a field is prefixed with `+` it will be added to the default fields, using `-` will remove it from the default fields. without prefix it will replace the entire default fields.
     * @param offset The number of items to skip when retrieving a list.
     * @param limit Limit the number of items returned in the list.
     * @param order The field to sort the data by. By default, the sort order is ascending. To change the order to descending, prefix the field name with `-`.
     * @param q Search term to filter the price list's searchable properties.
     * @param id
     * @param startsAt Filter by a price list's start date.
     * @param endsAt Filter by the price list's end date.
     * @param status Filter by the price list's status.
     * @param rulesCount Filter by the price list's rules count.
     * @param and Join query parameters with an AND condition. Each object's content is the same type as the expected query parameters.
     * @param or Join query parameters with an OR condition. Each object's content is the same type as the expected query parameters.
     * @param withDeleted Whether to include deleted records in the result.
     * @returns AdminPriceListListResponse OK
     * @throws ApiError
     */
    public static adminGetPriceLists(
        fields?: string,
        offset?: number,
        limit?: number,
        order?: string,
        q?: string,
        id?: (string | Array<string>),
        startsAt?: {
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
        },
        endsAt?: {
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
        },
        status?: Array<'active' | 'draft'>,
        rulesCount?: Array<number>,
        and?: Array<Record<string, any>>,
        or?: Array<Record<string, any>>,
        withDeleted?: boolean,
    ): CancelablePromise<AdminPriceListListResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/admin/price-lists',
            query: {
                'fields': fields,
                'offset': offset,
                'limit': limit,
                'order': order,
                'q': q,
                'id': id,
                'starts_at': startsAt,
                'ends_at': endsAt,
                'status': status,
                'rules_count': rulesCount,
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
     * Create Price List
     * Create a price list.
     * @param fields Comma-separated fields that should be included in the returned data. if a field is prefixed with `+` it will be added to the default fields, using `-` will remove it from the default fields. without prefix it will replace the entire default fields.
     * @param requestBody
     * @returns AdminPriceListResponse OK
     * @throws ApiError
     */
    public static adminPostPriceLists(
        fields?: string,
        requestBody?: AdminCreatePriceList,
    ): CancelablePromise<AdminPriceListResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/admin/price-lists',
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
     * Get a Price List
     * Retrieve a price list by its ID. You can expand the price list's relations or select the fields that should be returned.
     * @param id The price list's ID.
     * @param fields Comma-separated fields that should be included in the returned data. if a field is prefixed with `+` it will be added to the default fields, using `-` will remove it from the default fields. without prefix it will replace the entire default fields.
     * @returns AdminPriceListResponse OK
     * @throws ApiError
     */
    public static adminGetPriceListsId(
        id: string,
        fields?: string,
    ): CancelablePromise<AdminPriceListResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/admin/price-lists/{id}',
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
     * Update a Price List
     * Update a price list's details.
     * @param id The price list's ID.
     * @param fields Comma-separated fields that should be included in the returned data. if a field is prefixed with `+` it will be added to the default fields, using `-` will remove it from the default fields. without prefix it will replace the entire default fields.
     * @param requestBody
     * @returns AdminPriceListResponse OK
     * @throws ApiError
     */
    public static adminPostPriceListsId(
        id: string,
        fields?: string,
        requestBody?: AdminUpdatePriceList,
    ): CancelablePromise<AdminPriceListResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/admin/price-lists/{id}',
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
     * Delete a Price List
     * Delete a price list.
     * @param id The price list's ID.
     * @returns AdminPriceListDeleteResponse OK
     * @throws ApiError
     */
    public static adminDeletePriceListsId(
        id: string,
    ): CancelablePromise<AdminPriceListDeleteResponse> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/admin/price-lists/{id}',
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
     * Manage Prices in Price List
     * Manage the prices of a price list to create, update, or delete them.
     * @param id The price list's ID.
     * @param requestBody
     * @returns AdminPriceListBatchResponse OK
     * @throws ApiError
     */
    public static adminPostPriceListsIdPricesBatch(
        id: string,
        requestBody?: {
            /**
             * The prices to create.
             */
            create?: Array<{
                /**
                 * The price's currency code.
                 */
                currency_code: string;
                /**
                 * The price's amount.
                 */
                amount: number;
                /**
                 * The ID of the variant this price is for.
                 */
                variant_id: string;
                /**
                 * The minimum quantity that must be available of the associated variant in the cart for this price to apply.
                 */
                min_quantity?: number;
                /**
                 * The maximum quantity that must be available of the associated variant in the cart for this price list to apply.
                 */
                max_quantity?: number;
                /**
                 * Key-value pair rules to apply on the price.
                 */
                rules?: Record<string, any>;
            }>;
            /**
             * The prices to update.
             */
            update?: Array<{
                /**
                 * The price's ID.
                 */
                id: string;
                /**
                 * The price's currency code.
                 */
                currency_code?: string;
                /**
                 * The price's amount.
                 */
                amount?: number;
                /**
                 * The ID of the variant this price is for.
                 */
                variant_id: string;
                /**
                 * The minimum quantity that must be available of the associated variant in the cart for this price to apply.
                 */
                min_quantity?: number;
                /**
                 * The maximum quantity that must be available of the associated variant in the cart for this price list to apply.
                 */
                max_quantity?: number;
                /**
                 * Key-value pair rules to apply on the price.
                 */
                rules?: Record<string, any>;
            }>;
            /**
             * The prices to delete.
             */
            delete?: Array<string>;
        },
    ): CancelablePromise<AdminPriceListBatchResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/admin/price-lists/{id}/prices/batch',
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
     * Remove Products from Price List
     * Remove products from a price list.
     * @param id The price list's ID.
     * @param fields Comma-separated fields that should be included in the returned data. if a field is prefixed with `+` it will be added to the default fields, using `-` will remove it from the default fields. without prefix it will replace the entire default fields.
     * @param requestBody
     * @returns AdminPriceListResponse OK
     * @throws ApiError
     */
    public static adminPostPriceListsIdProducts(
        id: string,
        fields?: string,
        requestBody?: AdminLinkPriceListProducts,
    ): CancelablePromise<AdminPriceListResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/admin/price-lists/{id}/products',
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
}
