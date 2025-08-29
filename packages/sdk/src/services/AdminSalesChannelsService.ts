/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AdminCreateSalesChannel } from '../models/AdminCreateSalesChannel';
import type { AdminSalesChannel } from '../models/AdminSalesChannel';
import type { AdminSalesChannelDeleteResponse } from '../models/AdminSalesChannelDeleteResponse';
import type { AdminSalesChannelResponse } from '../models/AdminSalesChannelResponse';
import type { AdminUpdateSalesChannel } from '../models/AdminUpdateSalesChannel';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class AdminSalesChannelsService {
    /**
     * List Sales Channels
     * Retrieve a list of sales channels. The sales channels can be filtered by fields such as `id`. The sales channels can also be sorted or paginated.
     * @param fields Comma-separated fields that should be included in the returned data. if a field is prefixed with `+` it will be added to the default fields, using `-` will remove it from the default fields. without prefix it will replace the entire default fields.
     * @param offset The number of items to skip when retrieving a list.
     * @param limit Limit the number of items returned in the list.
     * @param order The field to sort the data by. By default, the sort order is ascending. To change the order to descending, prefix the field name with `-`.
     * @param q Search term to filter the sales channel's searchable properties.
     * @param id
     * @param name
     * @param description The sales channel's description.
     * @param isDisabled Filter by whether the sales channel is disabled.
     * @param createdAt Filter by a sales channel's creation date.
     * @param updatedAt Filter by a sales channel's update date.
     * @param deletedAt Filter by a sales channel's deletion date.
     * @param locationId
     * @param publishableKeyId
     * @param and
     * @param or
     * @param withDeleted Whether to include deleted records in the result.
     * @returns any OK
     * @throws ApiError
     */
    public static adminGetSalesChannels(
        fields?: string,
        offset?: number,
        limit?: number,
        order?: string,
        q?: string,
        id?: (string | Array<string>),
        name?: (string | Array<string>),
        description?: string,
        isDisabled?: boolean,
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
        locationId?: (string | Array<string>),
        publishableKeyId?: (string | Array<string>),
        and?: Array<Record<string, any>>,
        or?: Array<Record<string, any>>,
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
         * The list of sales channels.
         */
        sales_channels: Array<AdminSalesChannel>;
    })> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/admin/sales-channels',
            query: {
                'fields': fields,
                'offset': offset,
                'limit': limit,
                'order': order,
                'q': q,
                'id': id,
                'name': name,
                'description': description,
                'is_disabled': isDisabled,
                'created_at': createdAt,
                'updated_at': updatedAt,
                'deleted_at': deletedAt,
                'location_id': locationId,
                'publishable_key_id': publishableKeyId,
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
     * Create Sales Channel
     * Create a sales channel.
     * @param fields Comma-separated fields that should be included in the returned data. if a field is prefixed with `+` it will be added to the default fields, using `-` will remove it from the default fields. without prefix it will replace the entire default fields.
     * @param requestBody
     * @returns AdminSalesChannelResponse OK
     * @throws ApiError
     */
    public static adminPostSalesChannels(
        fields?: string,
        requestBody?: AdminCreateSalesChannel,
    ): CancelablePromise<AdminSalesChannelResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/admin/sales-channels',
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
     * Get a Sales Channel
     * Retrieve a sales channel by its ID. You can expand the sales channel's relations or select the fields that should be returned.
     * @param id The sales channel's ID.
     * @param fields Comma-separated fields that should be included in the returned data. if a field is prefixed with `+` it will be added to the default fields, using `-` will remove it from the default fields. without prefix it will replace the entire default fields.
     * @returns AdminSalesChannelResponse OK
     * @throws ApiError
     */
    public static adminGetSalesChannelsId(
        id: string,
        fields?: string,
    ): CancelablePromise<AdminSalesChannelResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/admin/sales-channels/{id}',
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
     * Update a Sales Channel
     * Update a sales channel's details.
     * @param id The sales channel's ID.
     * @param fields Comma-separated fields that should be included in the returned data. if a field is prefixed with `+` it will be added to the default fields, using `-` will remove it from the default fields. without prefix it will replace the entire default fields.
     * @param requestBody
     * @returns AdminSalesChannelResponse OK
     * @throws ApiError
     */
    public static adminPostSalesChannelsId(
        id: string,
        fields?: string,
        requestBody?: AdminUpdateSalesChannel,
    ): CancelablePromise<AdminSalesChannelResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/admin/sales-channels/{id}',
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
     * Delete a Sales Channel
     * Delete a sales channel.
     * @param id The sales channel's ID.
     * @returns AdminSalesChannelDeleteResponse OK
     * @throws ApiError
     */
    public static adminDeleteSalesChannelsId(
        id: string,
    ): CancelablePromise<AdminSalesChannelDeleteResponse> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/admin/sales-channels/{id}',
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
     * Manage Products in Sales Channel
     * Manage products in a sales channel to add or remove them from the channel.
     * @param id The sales channel's ID.
     * @param fields Comma-separated fields that should be included in the returned data. if a field is prefixed with `+` it will be added to the default fields, using `-` will remove it from the default fields. without prefix it will replace the entire default fields.
     * @param requestBody
     * @returns AdminSalesChannelResponse OK
     * @throws ApiError
     */
    public static adminPostSalesChannelsIdProducts(
        id: string,
        fields?: string,
        requestBody?: {
            /**
             * The products to add to the sales channel.
             */
            add?: Array<string>;
            /**
             * The products to remove from the sales channel.
             */
            remove?: Array<string>;
        },
    ): CancelablePromise<AdminSalesChannelResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/admin/sales-channels/{id}/products',
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
