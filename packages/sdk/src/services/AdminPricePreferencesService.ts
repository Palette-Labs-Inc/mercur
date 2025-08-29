/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AdminCreatePricePreference } from '../models/AdminCreatePricePreference';
import type { AdminPricePreferenceDeleteResponse } from '../models/AdminPricePreferenceDeleteResponse';
import type { AdminPricePreferenceListResponse } from '../models/AdminPricePreferenceListResponse';
import type { AdminPricePreferenceResponse } from '../models/AdminPricePreferenceResponse';
import type { AdminUpdatePricePreference } from '../models/AdminUpdatePricePreference';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class AdminPricePreferencesService {
    /**
     * List Price Preferences
     * Retrieve a list of price preferences. The price preferences can be filtered by fields such as `id`. The price preferences can also be sorted or paginated.
     * @param fields Comma-separated fields that should be included in the returned data. if a field is prefixed with `+` it will be added to the default fields, using `-` will remove it from the default fields. without prefix it will replace the entire default fields.
     * @param offset The number of items to skip when retrieving a list.
     * @param limit Limit the number of items returned in the list.
     * @param order The field to sort the data by. By default, the sort order is ascending. To change the order to descending, prefix the field name with `-`.
     * @param id
     * @param attribute
     * @param value
     * @param q Search term to apply on the price preference's searchable properties.
     * @param and Join query parameters with an AND condition. Each object's content is the same type as the expected query parameters.
     * @param or Join query parameters with an OR condition. Each object's content is the same type as the expected query parameters.
     * @param withDeleted Whether to include deleted records in the result.
     * @returns AdminPricePreferenceListResponse OK
     * @throws ApiError
     */
    public static adminGetPricePreferences(
        fields?: string,
        offset?: number,
        limit?: number,
        order?: string,
        id?: (string | Array<string>),
        attribute?: (string | Array<string>),
        value?: (string | Array<string>),
        q?: string,
        and?: Array<Record<string, any>>,
        or?: Array<Record<string, any>>,
        withDeleted?: boolean,
    ): CancelablePromise<AdminPricePreferenceListResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/admin/price-preferences',
            query: {
                'fields': fields,
                'offset': offset,
                'limit': limit,
                'order': order,
                'id': id,
                'attribute': attribute,
                'value': value,
                'q': q,
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
     * Create Price Preference
     * Create a price preference.
     * @param fields Comma-separated fields that should be included in the returned data. if a field is prefixed with `+` it will be added to the default fields, using `-` will remove it from the default fields. without prefix it will replace the entire default fields.
     * @param requestBody
     * @returns AdminPricePreferenceResponse OK
     * @throws ApiError
     */
    public static adminPostPricePreferences(
        fields?: string,
        requestBody?: AdminCreatePricePreference,
    ): CancelablePromise<AdminPricePreferenceResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/admin/price-preferences',
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
     * Get a Price Preference
     * Retrieve a price preference by its ID. You can expand the price preference's relations or select the fields that should be returned.
     * @param id The price preference's ID.
     * @param fields Comma-separated fields that should be included in the returned data. if a field is prefixed with `+` it will be added to the default fields, using `-` will remove it from the default fields. without prefix it will replace the entire default fields.
     * @returns AdminPricePreferenceResponse OK
     * @throws ApiError
     */
    public static adminGetPricePreferencesId(
        id: string,
        fields?: string,
    ): CancelablePromise<AdminPricePreferenceResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/admin/price-preferences/{id}',
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
     * Update a Price Preference
     * Update a price preference's details.
     * @param id The price preference's ID.
     * @param fields Comma-separated fields that should be included in the returned data. if a field is prefixed with `+` it will be added to the default fields, using `-` will remove it from the default fields. without prefix it will replace the entire default fields.
     * @param requestBody
     * @returns AdminPricePreferenceResponse OK
     * @throws ApiError
     */
    public static adminPostPricePreferencesId(
        id: string,
        fields?: string,
        requestBody?: AdminUpdatePricePreference,
    ): CancelablePromise<AdminPricePreferenceResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/admin/price-preferences/{id}',
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
     * Delete a Price Preference
     * Delete a price preference.
     * @param id The price preference's ID.
     * @returns AdminPricePreferenceDeleteResponse OK
     * @throws ApiError
     */
    public static adminDeletePricePreferencesId(
        id: string,
    ): CancelablePromise<AdminPricePreferenceDeleteResponse> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/admin/price-preferences/{id}',
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
