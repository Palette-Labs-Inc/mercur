/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AdminCreateShippingOption } from '../models/AdminCreateShippingOption';
import type { AdminCreateShippingOptionRule } from '../models/AdminCreateShippingOptionRule';
import type { AdminShippingOptionDeleteResponse } from '../models/AdminShippingOptionDeleteResponse';
import type { AdminShippingOptionResponse } from '../models/AdminShippingOptionResponse';
import type { AdminShippingOptionRule } from '../models/AdminShippingOptionRule';
import type { AdminUpdateShippingOption } from '../models/AdminUpdateShippingOption';
import type { AdminUpdateShippingOptionRule } from '../models/AdminUpdateShippingOptionRule';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class AdminShippingOptionsService {
    /**
     * List Shipping Options
     * Retrieve a list of shipping options. The shipping options can be filtered by fields such as `id`. The shipping options can also be sorted or paginated.
     * @param fields Comma-separated fields that should be included in the returned data. if a field is prefixed with `+` it will be added to the default fields, using `-` will remove it from the default fields. without prefix it will replace the entire default fields.
     * @param offset The number of items to skip when retrieving a list.
     * @param limit Limit the number of items returned in the list.
     * @param order The field to sort the data by. By default, the sort order is ascending. To change the order to descending, prefix the field name with `-`.
     * @param id
     * @param q Search term to filter the shipping option's searchable properties.
     * @param serviceZoneId
     * @param shippingProfileId
     * @param providerId
     * @param shippingOptionTypeId
     * @param createdAt Filter by a shipping option's creation date.
     * @param updatedAt Filter by a shipping option's update date.
     * @param deletedAt Filter by a shipping option's deletion date.
     * @param stockLocationId
     * @param isReturn Filter by whether the shipping option is used for returns.
     * @param adminOnly Filter by whether the shipping option is used by admin users only.
     * @param withDeleted Whether to include deleted records in the result.
     * @returns any OK
     * @throws ApiError
     */
    public static adminGetShippingOptions(
        fields?: string,
        offset?: number,
        limit?: number,
        order?: string,
        id?: (string | Array<string>),
        q?: string,
        serviceZoneId?: (string | Array<string>),
        shippingProfileId?: (string | Array<string>),
        providerId?: (string | Array<string>),
        shippingOptionTypeId?: (string | Array<string>),
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
        stockLocationId?: (string | Array<string>),
        isReturn?: boolean,
        adminOnly?: boolean,
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
         * The list of shipping options.
         */
        shipping_options: Array<Record<string, any>>;
    })> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/admin/shipping-options',
            query: {
                'fields': fields,
                'offset': offset,
                'limit': limit,
                'order': order,
                'id': id,
                'q': q,
                'service_zone_id': serviceZoneId,
                'shipping_profile_id': shippingProfileId,
                'provider_id': providerId,
                'shipping_option_type_id': shippingOptionTypeId,
                'created_at': createdAt,
                'updated_at': updatedAt,
                'deleted_at': deletedAt,
                'stock_location_id': stockLocationId,
                'is_return': isReturn,
                'admin_only': adminOnly,
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
     * Create Shipping Option
     * Create a shipping option.
     * @param fields Comma-separated fields that should be included in the returned data. if a field is prefixed with `+` it will be added to the default fields, using `-` will remove it from the default fields. without prefix it will replace the entire default fields.
     * @param requestBody
     * @returns AdminShippingOptionResponse OK
     * @throws ApiError
     */
    public static adminPostShippingOptions(
        fields?: string,
        requestBody?: AdminCreateShippingOption,
    ): CancelablePromise<AdminShippingOptionResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/admin/shipping-options',
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
     * Get a Shipping Option
     * Retrieve a shipping option by its ID. You can expand the shipping option's relations or select the fields that should be returned.
     * @param id The shipping option's ID.
     * @param fields Comma-separated fields that should be included in the returned data.
     * if a field is prefixed with `+` it will be added to the default fields, using `-` will remove it from the default fields.
     * without prefix it will replace the entire default fields.
     * @returns AdminShippingOptionResponse OK
     * @throws ApiError
     */
    public static adminGetShippingOptionsId(
        id: string,
        fields?: string,
    ): CancelablePromise<AdminShippingOptionResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/admin/shipping-options/{id}',
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
     * Update a Shipping Option
     * Update a shipping option's details.
     * @param id The shipping option's ID.
     * @param fields Comma-separated fields that should be included in the returned data. if a field is prefixed with `+` it will be added to the default fields, using `-` will remove it from the default fields. without prefix it will replace the entire default fields.
     * @param requestBody
     * @returns AdminShippingOptionResponse OK
     * @throws ApiError
     */
    public static adminPostShippingOptionsId(
        id: string,
        fields?: string,
        requestBody?: AdminUpdateShippingOption,
    ): CancelablePromise<AdminShippingOptionResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/admin/shipping-options/{id}',
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
     * Delete a Shipping Option
     * Delete a shipping option.
     * @param id The shipping option's ID.
     * @returns AdminShippingOptionDeleteResponse OK
     * @throws ApiError
     */
    public static adminDeleteShippingOptionsId(
        id: string,
    ): CancelablePromise<AdminShippingOptionDeleteResponse> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/admin/shipping-options/{id}',
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
     * Manage the Rules of a Shipping Option
     * Manage the rules of a shipping option to create, update, or delete them.
     * @param id The shipping option's ID.
     * @param fields Comma-separated fields that should be included in the returned data. if a field is prefixed with `+` it will be added to the default fields, using `-` will remove it from the default fields. without prefix it will replace the entire default fields.
     * @param requestBody
     * @returns any OK
     * @throws ApiError
     */
    public static adminPostShippingOptionsIdRulesBatch(
        id: string,
        fields?: string,
        requestBody?: {
            /**
             * The shipping option rules to create.
             */
            create?: Array<AdminCreateShippingOptionRule>;
            /**
             * The shipping option rules to update.
             */
            update?: Array<AdminUpdateShippingOptionRule>;
            /**
             * The shipping option rules to delete.
             */
            delete?: Array<string>;
        },
    ): CancelablePromise<{
        /**
         * The created shipping option rules.
         */
        created: Array<AdminShippingOptionRule>;
        /**
         * The updated shipping option rules.
         */
        updated: Array<AdminShippingOptionRule>;
        /**
         * The details of the deleted shipping option rules.
         */
        deleted: {
            /**
             * The IDs of the deleted shipping option rules.
             */
            ids: Array<string>;
            /**
             * The name of the deleted object.
             */
            object: string;
            /**
             * The deleted's details.
             */
            deleted: boolean;
        };
    }> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/admin/shipping-options/{id}/rules/batch',
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
