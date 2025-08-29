/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { StoreCurrencyListResponse } from '../models/StoreCurrencyListResponse';
import type { StoreCurrencyResponse } from '../models/StoreCurrencyResponse';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class StoreCurrenciesService {
    /**
     * List Currencies
     * Retrieve a list of currencies. The currencies can be filtered by fields such as `code`. The currencies can also be sorted or paginated.
     * @param xPublishableApiKey Publishable API Key created in the Medusa Admin.
     * @param fields Comma-separated fields that should be included in the returned data. if a field is prefixed with `+` it will be added to the default fields, using `-` will remove it from the default fields. without prefix it will replace the entire default fields.
     * @param offset The number of items to skip when retrieving a list.
     * @param limit Limit the number of items returned in the list.
     * @param order The field to sort the data by. By default, the sort order is ascending. To change the order to descending, prefix the field name with `-`.
     * @param q Search term to filter the currency's searchable properties.
     * @param code
     * @param and Join query parameters with an AND condition. Each object's content is the same type as the expected query parameters.
     * @param or Join query parameters with an OR condition. Each object's content is the same type as the expected query parameters.
     * @param withDeleted Whether to include deleted records in the result.
     * @returns StoreCurrencyListResponse OK
     * @throws ApiError
     */
    public static storeGetCurrencies(
        xPublishableApiKey: string,
        fields?: string,
        offset?: number,
        limit?: number,
        order?: string,
        q?: string,
        code?: (string | Array<string>),
        and?: Array<Record<string, any>>,
        or?: Array<Record<string, any>>,
        withDeleted?: boolean,
    ): CancelablePromise<StoreCurrencyListResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/store/currencies',
            headers: {
                'x-publishable-api-key': xPublishableApiKey,
            },
            query: {
                'fields': fields,
                'offset': offset,
                'limit': limit,
                'order': order,
                'q': q,
                'code': code,
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
     * Get a Currency
     * Retrieve a currency by its code. You can expand the currency's relations or select the fields that should be returned.
     * @param code The currency's code.
     * @param xPublishableApiKey Publishable API Key created in the Medusa Admin.
     * @param fields Comma-separated fields that should be included in the returned data. if a field is prefixed with `+` it will be added to the default fields, using `-` will remove it from the default fields. without prefix it will replace the entire default fields.
     * @returns StoreCurrencyResponse OK
     * @throws ApiError
     */
    public static storeGetCurrenciesCode(
        code: string,
        xPublishableApiKey: string,
        fields?: string,
    ): CancelablePromise<StoreCurrencyResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/store/currencies/{code}',
            path: {
                'code': code,
            },
            headers: {
                'x-publishable-api-key': xPublishableApiKey,
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
