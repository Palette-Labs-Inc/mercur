/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AdminCreateTaxRegion } from '../models/AdminCreateTaxRegion';
import type { AdminTaxRegionDeleteResponse } from '../models/AdminTaxRegionDeleteResponse';
import type { AdminTaxRegionResponse } from '../models/AdminTaxRegionResponse';
import type { AdminUpdateTaxRegion } from '../models/AdminUpdateTaxRegion';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class AdminTaxRegionsService {
    /**
     * List Tax Regions
     * Retrieve a list of tax regions. The tax regions can be filtered by fields such as `id`. The tax regions can also be sorted or paginated.
     * @param fields Comma-separated fields that should be included in the returned data. if a field is prefixed with `+` it will be added to the default fields, using `-` will remove it from the default fields. without prefix it will replace the entire default fields.
     * @param offset The number of items to skip when retrieving a list.
     * @param limit Limit the number of items returned in the list.
     * @param order The field to sort the data by. By default, the sort order is ascending. To change the order to descending, prefix the field name with `-`.
     * @param q Search term to filter a tax region's searchable properties.
     * @param id
     * @param countryCode
     * @param provinceCode
     * @param parentId
     * @param createdBy
     * @param createdAt Filter by a tax region's creation date.
     * @param updatedAt Filter by a tax region's update date.
     * @param deletedAt Filter by a tax region's deletion date.
     * @param and
     * @param or
     * @param withDeleted Whether to include deleted records in the result.
     * @returns any OK
     * @throws ApiError
     */
    public static adminGetTaxRegions(
        fields?: string,
        offset?: number,
        limit?: number,
        order?: string,
        q?: string,
        id?: (string | Array<string>),
        countryCode?: (string | Array<string> | {
            /**
             * Filter by an exact match.
             */
            $eq?: string;
            /**
             * Filter by values not matching this parameter.
             */
            $ne?: string;
            /**
             * Filter by values in this array's items.
             */
            $in?: Array<string>;
            /**
             * Filter by values not in this array's items.
             */
            $nin?: Array<string>;
            /**
             * Apply a `like` filter. Useful for strings only.
             */
            $like?: string;
            /**
             * Apply a case-insensitive `like` filter. Useful for strings only.
             */
            $ilike?: string;
            /**
             * Apply a regex filter. Useful for strings only.
             */
            $re?: string;
            /**
             * Filter arrays that contain some of the values of this parameter.
             */
            $contains?: Array<string>;
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
        }),
        provinceCode?: (string | Array<string> | {
            /**
             * Filter by an exact match.
             */
            $eq?: string;
            /**
             * Filter by values not matching this parameter.
             */
            $ne?: string;
            /**
             * Filter by values in this array's items.
             */
            $in?: Array<string>;
            /**
             * Filter by values not in this array's items.
             */
            $nin?: Array<string>;
            /**
             * Apply a `like` filter. Useful for strings only.
             */
            $like?: string;
            /**
             * Apply a case-insensitive `like` filter. Useful for strings only.
             */
            $ilike?: string;
            /**
             * Apply a regex filter. Useful for strings only.
             */
            $re?: string;
            /**
             * Filter arrays that contain some of the values of this parameter.
             */
            $contains?: Array<string>;
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
        }),
        parentId?: (string | Array<string> | {
            /**
             * Filter by an exact match.
             */
            $eq?: string;
            /**
             * Filter by values not matching this parameter.
             */
            $ne?: string;
            /**
             * Filter by values in this array's items.
             */
            $in?: Array<string>;
            /**
             * Filter by values not in this array's items.
             */
            $nin?: Array<string>;
            /**
             * Apply a `like` filter. Useful for strings only.
             */
            $like?: string;
            /**
             * Apply a case-insensitive `like` filter. Useful for strings only.
             */
            $ilike?: string;
            /**
             * Apply a regex filter. Useful for strings only.
             */
            $re?: string;
            /**
             * Filter arrays that contain some of the values of this parameter.
             */
            $contains?: Array<string>;
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
        }),
        createdBy?: (string | Array<string>),
        createdAt?: (string | {
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
        }),
        updatedAt?: (string | {
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
        }),
        deletedAt?: (string | {
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
        }),
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
         * The list of tax regions.
         */
        tax_regions: Array<Record<string, any>>;
    })> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/admin/tax-regions',
            query: {
                'fields': fields,
                'offset': offset,
                'limit': limit,
                'order': order,
                'q': q,
                'id': id,
                'country_code': countryCode,
                'province_code': provinceCode,
                'parent_id': parentId,
                'created_by': createdBy,
                'created_at': createdAt,
                'updated_at': updatedAt,
                'deleted_at': deletedAt,
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
     * Create Tax Region
     * Create a tax region.
     * @param fields Comma-separated fields that should be included in the returned data. if a field is prefixed with `+` it will be added to the default fields, using `-` will remove it from the default fields. without prefix it will replace the entire default fields.
     * @param requestBody
     * @returns AdminTaxRegionResponse OK
     * @throws ApiError
     */
    public static adminPostTaxRegions(
        fields?: string,
        requestBody?: AdminCreateTaxRegion,
    ): CancelablePromise<AdminTaxRegionResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/admin/tax-regions',
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
     * Get a Tax Region
     * Retrieve a tax region by its ID. You can expand the tax region's relations or select the fields that should be returned.
     * @param id The tax region's ID.
     * @param fields Comma-separated fields that should be included in the returned data. if a field is prefixed with `+` it will be added to the default fields, using `-` will remove it from the default fields. without prefix it will replace the entire default fields.
     * @param provinceCode Filter by a tax region's province code.
     * @param providerId Filter by a tax provider ID to retrieve the tax regions using it.
     * @param metadata Filter by a tax region's metadata. Refer to the [Object Query Parameter](https://docs.medusajs.com/api/admin#object) section to learn how to filter by object fields.
     * @returns AdminTaxRegionResponse OK
     * @throws ApiError
     */
    public static adminGetTaxRegionsId(
        id: string,
        fields?: string,
        provinceCode?: string,
        providerId?: string,
        metadata?: Record<string, any>,
    ): CancelablePromise<AdminTaxRegionResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/admin/tax-regions/{id}',
            path: {
                'id': id,
            },
            query: {
                'fields': fields,
                'province_code': provinceCode,
                'provider_id': providerId,
                'metadata': metadata,
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
     * Update a Tax Region
     * Update a tax region's details.
     * @param id The tax region's ID.
     * @param fields Comma-separated fields that should be included in the returned data.
     * if a field is prefixed with `+` it will be added to the default fields, using `-` will remove it from the default fields.
     * without prefix it will replace the entire default fields.
     * @param requestBody
     * @returns AdminTaxRegionResponse OK
     * @throws ApiError
     */
    public static adminPostTaxRegionsId(
        id: string,
        fields?: string,
        requestBody?: AdminUpdateTaxRegion,
    ): CancelablePromise<AdminTaxRegionResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/admin/tax-regions/{id}',
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
     * Delete a Tax Region
     * Delete a tax region.
     * @param id The tax region's ID.
     * @returns AdminTaxRegionDeleteResponse OK
     * @throws ApiError
     */
    public static adminDeleteTaxRegionsId(
        id: string,
    ): CancelablePromise<AdminTaxRegionDeleteResponse> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/admin/tax-regions/{id}',
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
