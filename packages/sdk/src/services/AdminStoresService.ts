/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AdminStoreListResponse } from '../models/AdminStoreListResponse';
import type { AdminStoreResponse } from '../models/AdminStoreResponse';
import type { AdminUpdateStore } from '../models/AdminUpdateStore';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class AdminStoresService {
    /**
     * List Stores
     * Retrieve a list of stores. The stores can be filtered by fields such as `id`. The stores can also be sorted or paginated.
     * @param fields Comma-separated fields that should be included in the returned data. if a field is prefixed with `+` it will be added to the default fields, using `-` will remove it from the default fields. without prefix it will replace the entire default fields.
     * @param offset The number of items to skip when retrieving a list.
     * @param limit Limit the number of items returned in the list.
     * @param order The field to sort the data by. By default, the sort order is ascending. To change the order to descending, prefix the field name with `-`.
     * @param q Search term to filter the store's searchable properties.
     * @param id
     * @param name
     * @param and
     * @param or
     * @param withDeleted Whether to include deleted records in the result.
     * @returns AdminStoreListResponse OK
     * @throws ApiError
     */
    public static adminGetStores(
        fields?: string,
        offset?: number,
        limit?: number,
        order?: string,
        q?: string,
        id?: (string | Array<string>),
        name?: (string | Array<string>),
        and?: Array<Record<string, any>>,
        or?: Array<Record<string, any>>,
        withDeleted?: boolean,
    ): CancelablePromise<AdminStoreListResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/admin/stores',
            query: {
                'fields': fields,
                'offset': offset,
                'limit': limit,
                'order': order,
                'q': q,
                'id': id,
                'name': name,
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
     * Get a Store
     * Retrieve a store by its ID. You can expand the store's relations or select the fields that should be returned.
     * @param id The store's ID.
     * @param fields Comma-separated fields that should be included in the returned data. if a field is prefixed with `+` it will be added to the default fields, using `-` will remove it from the default fields. without prefix it will replace the entire default fields.
     * @returns AdminStoreResponse OK
     * @throws ApiError
     */
    public static adminGetStoresId(
        id: string,
        fields?: string,
    ): CancelablePromise<AdminStoreResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/admin/stores/{id}',
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
     * Update a Store
     * Update a store's details.
     * @param id The store's ID.
     * @param fields Comma-separated fields that should be included in the returned data. if a field is prefixed with `+` it will be added to the default fields, using `-` will remove it from the default fields. without prefix it will replace the entire default fields.
     * @param requestBody
     * @returns AdminStoreResponse OK
     * @throws ApiError
     */
    public static adminPostStoresId(
        id: string,
        fields?: string,
        requestBody?: AdminUpdateStore,
    ): CancelablePromise<AdminStoreResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/admin/stores/{id}',
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
