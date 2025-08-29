/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AdminCreateTaxRate } from '../models/AdminCreateTaxRate';
import type { AdminCreateTaxRateRule } from '../models/AdminCreateTaxRateRule';
import type { AdminTaxRate } from '../models/AdminTaxRate';
import type { AdminTaxRateDeleteResponse } from '../models/AdminTaxRateDeleteResponse';
import type { AdminTaxRateResponse } from '../models/AdminTaxRateResponse';
import type { AdminUpdateTaxRate } from '../models/AdminUpdateTaxRate';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class AdminTaxRatesService {
    /**
     * List Tax Rates
     * Retrieve a list of tax rates. The tax rates can be filtered by fields such as `id`. The tax rates can also be sorted or paginated.
     * @param fields Comma-separated fields that should be included in the returned data. if a field is prefixed with `+` it will be added to the default fields, using `-` will remove it from the default fields. without prefix it will replace the entire default fields.
     * @param offset The number of items to skip when retrieving a list.
     * @param limit Limit the number of items returned in the list.
     * @param order The field to sort the data by. By default, the sort order is ascending. To change the order to descending, prefix the field name with `-`.
     * @param q Search terms to filter the tax rate's searchable properties.
     * @param taxRegionId
     * @param isDefault Filter by whether the tax rate is a default in its tax region.
     * @param createdAt Filter by a tax rate's creation date.
     * @param updatedAt Filter by a tax rate's update date.
     * @param deletedAt Filter by a tax rate's deletion date.
     * @param and
     * @param or
     * @param serviceZoneId Filter by a service zone's ID to retrieve its associated tax rates.
     * @param shippingProfileId Filter by a shipping profile's ID to retrieve its associated tax rates.
     * @param providerId Filter by a fulfillment provider's ID to retrieve its associated tax rates.
     * @param shippingOptionTypeId Filter by a shipping option type's ID to retrieve its associated tax rates.
     * @param withDeleted Whether to include deleted records in the result.
     * @returns any OK
     * @throws ApiError
     */
    public static adminGetTaxRates(
        fields?: string,
        offset?: number,
        limit?: number,
        order?: string,
        q?: string,
        taxRegionId?: (string | Array<string> | {
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
        isDefault?: 'true' | 'false',
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
        and?: Array<Record<string, any>>,
        or?: Array<Record<string, any>>,
        serviceZoneId?: string,
        shippingProfileId?: string,
        providerId?: string,
        shippingOptionTypeId?: string,
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
         * The tax rate's tax rates.
         */
        tax_rates: Array<AdminTaxRate>;
    })> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/admin/tax-rates',
            query: {
                'fields': fields,
                'offset': offset,
                'limit': limit,
                'order': order,
                'q': q,
                'tax_region_id': taxRegionId,
                'is_default': isDefault,
                'created_at': createdAt,
                'updated_at': updatedAt,
                'deleted_at': deletedAt,
                '$and': and,
                '$or': or,
                'service_zone_id': serviceZoneId,
                'shipping_profile_id': shippingProfileId,
                'provider_id': providerId,
                'shipping_option_type_id': shippingOptionTypeId,
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
     * Create Tax Rate
     * Create a tax rate.
     * @param fields Comma-separated fields that should be included in the returned data. if a field is prefixed with `+` it will be added to the default fields, using `-` will remove it from the default fields. without prefix it will replace the entire default fields.
     * @param requestBody
     * @returns AdminTaxRateResponse OK
     * @throws ApiError
     */
    public static adminPostTaxRates(
        fields?: string,
        requestBody?: AdminCreateTaxRate,
    ): CancelablePromise<AdminTaxRateResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/admin/tax-rates',
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
     * Get a Tax Rate
     * Retrieve a tax rate by its ID. You can expand the tax rate's relations or select the fields that should be returned.
     * @param id The tax rate's ID.
     * @param fields Comma-separated fields that should be included in the returned data. if a field is prefixed with `+` it will be added to the default fields, using `-` will remove it from the default fields. without prefix it will replace the entire default fields.
     * @returns AdminTaxRateResponse OK
     * @throws ApiError
     */
    public static adminGetTaxRatesId(
        id: string,
        fields?: string,
    ): CancelablePromise<AdminTaxRateResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/admin/tax-rates/{id}',
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
     * Update a Tax Rate
     * Update a tax rate's details.
     * @param id The tax rate's ID.
     * @param fields Comma-separated fields that should be included in the returned data. if a field is prefixed with `+` it will be added to the default fields, using `-` will remove it from the default fields. without prefix it will replace the entire default fields.
     * @param requestBody
     * @returns AdminTaxRateResponse OK
     * @throws ApiError
     */
    public static adminPostTaxRatesId(
        id: string,
        fields?: string,
        requestBody?: AdminUpdateTaxRate,
    ): CancelablePromise<AdminTaxRateResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/admin/tax-rates/{id}',
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
     * Delete a Tax Rate
     * Delete a tax rate.
     * @param id The tax rate's ID.
     * @returns AdminTaxRateDeleteResponse OK
     * @throws ApiError
     */
    public static adminDeleteTaxRatesId(
        id: string,
    ): CancelablePromise<AdminTaxRateDeleteResponse> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/admin/tax-rates/{id}',
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
     * Create Tax Rule for a Rate
     * Create a tax rule for a rate.
     * @param id The tax rate's ID.
     * @param fields Comma-separated fields that should be included in the returned data. if a field is prefixed with `+` it will be added to the default fields, using `-` will remove it from the default fields. without prefix it will replace the entire default fields.
     * @param requestBody
     * @returns AdminTaxRateResponse OK
     * @throws ApiError
     */
    public static adminPostTaxRatesIdRules(
        id: string,
        fields?: string,
        requestBody?: AdminCreateTaxRateRule,
    ): CancelablePromise<AdminTaxRateResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/admin/tax-rates/{id}/rules',
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
     * Remove Rule of Tax Rate
     * Remove a tax rate's rule.
     * @param id The tax rate's ID.
     * @param ruleId The tax rate rule's ID.
     * @param fields Comma-separated fields that should be included in the returned data. if a field is prefixed with `+` it will be added to the default fields, using `-` will remove it from the default fields. without prefix it will replace the entire default fields.
     * @returns any OK
     * @throws ApiError
     */
    public static adminDeleteTaxRatesIdRulesRuleId(
        id: string,
        ruleId: string,
        fields?: string,
    ): CancelablePromise<({
        /**
         * The tax rate's ID.
         */
        id: string;
        /**
         * The name of the deleted object.
         */
        object: string;
        /**
         * Whether the Tax Rate was deleted.
         */
        deleted: boolean;
    } & {
        parent?: AdminTaxRate;
    })> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/admin/tax-rates/{id}/rules/{rule_id}',
            path: {
                'id': id,
                'rule_id': ruleId,
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
