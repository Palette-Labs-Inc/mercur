/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { StoreRegion } from '../models/StoreRegion';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class RegionsService {
    /**
     * List Regions
     * Retrieve a list of regions. The regions can be filtered by fields such as `id`. The regions can also be sorted or paginated.
     * @param xPublishableApiKey Publishable API Key created in the Medusa Admin.
     * @param fields Comma-separated fields that should be included in the returned data. if a field is prefixed with `+` it will be added to the default fields, using `-` will remove it from the default fields. without prefix it will replace the entire default fields.
     * @param offset The number of items to skip when retrieving a list.
     * @param limit Limit the number of items returned in the list.
     * @param order The field to sort the data by. By default, the sort order is ascending. To change the order to descending, prefix the field name with `-`.
     * @param q Search term to filter the region's searchable properties.
     * @param id
     * @param name
     * @param currencyCode
     * @param and Join query parameters with an AND condition. Each object's content is the same type as the expected query parameters.
     * @param or Join query parameters with an OR condition. Each object's content is the same type as the expected query parameters.
     * @param withDeleted Whether to include deleted records in the result.
     * @returns any OK
     * @throws ApiError
     */
    public static getRegions(
        xPublishableApiKey: string,
        fields?: string,
        offset?: number,
        limit?: number,
        order?: string,
        q?: string,
        id?: (string | Array<string>),
        name?: (string | Array<string>),
        currencyCode?: (string | Array<string>),
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
         * The list of regions.
         */
        regions: Array<StoreRegion>;
    })> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/store/regions',
            headers: {
                'x-publishable-api-key': xPublishableApiKey,
            },
            query: {
                'fields': fields,
                'offset': offset,
                'limit': limit,
                'order': order,
                'q': q,
                'id': id,
                'name': name,
                'currency_code': currencyCode,
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
     * Get a Region
     * Retrieve a region by its ID. You can expand the region's relations or select the fields that should be returned.
     * @param id The region's ID.
     * @param xPublishableApiKey Publishable API Key created in the Medusa Admin.
     * @param fields Comma-separated fields that should be included in the returned data. if a field is prefixed with `+` it will be added to the default fields, using `-` will remove it from the default fields. without prefix it will replace the entire default fields.
     * @returns any OK
     * @throws ApiError
     */
    public static getRegionsId(
        id: string,
        xPublishableApiKey: string,
        fields?: string,
    ): CancelablePromise<{
        region: StoreRegion;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/store/regions/{id}',
            path: {
                'id': id,
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
