/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AdminFulfillmentProviderListResponse } from '../models/AdminFulfillmentProviderListResponse';
import type { AdminFulfillmentProviderOptionsListResponse } from '../models/AdminFulfillmentProviderOptionsListResponse';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class AdminFulfillmentProvidersService {
    /**
     * List Fulfillment Providers
     * Retrieve a list of fulfillment providers. The fulfillment providers can be filtered by fields such as `id`. The fulfillment providers can also be sorted or paginated.
     * @param fields Comma-separated fields that should be included in the returned data. if a field is prefixed with `+` it will be added to the default fields, using `-` will remove it from the default fields. without prefix it will replace the entire default fields.
     * @param offset The number of items to skip when retrieving a list.
     * @param limit Limit the number of items returned in the list.
     * @param order The field to sort the data by. By default, the sort order is ascending. To change the order to descending, prefix the field name with `-`.
     * @param id
     * @param isEnabled Filter by whether the fulfillment provider is enabled.
     * @param q Search term to filter a fulfillment provider's searchable properties.
     * @param stockLocationId
     * @param withDeleted Whether to include deleted records in the result.
     * @returns AdminFulfillmentProviderListResponse OK
     * @throws ApiError
     */
    public static adminGetFulfillmentProviders(
        fields?: string,
        offset?: number,
        limit?: number,
        order?: string,
        id?: (string | Array<string>),
        isEnabled?: boolean,
        q?: string,
        stockLocationId?: (string | Array<string>),
        withDeleted?: boolean,
    ): CancelablePromise<AdminFulfillmentProviderListResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/admin/fulfillment-providers',
            query: {
                'fields': fields,
                'offset': offset,
                'limit': limit,
                'order': order,
                'id': id,
                'is_enabled': isEnabled,
                'q': q,
                'stock_location_id': stockLocationId,
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
     * List Fulfillment Options
     * Retrieve the list of fulfillment options of a fulfillment provider. These options may be retrieved from an integrated third-party service.
     * @param id The fulfillment provider's ID.
     * @returns AdminFulfillmentProviderOptionsListResponse OK
     * @throws ApiError
     */
    public static adminGetFulfillmentProvidersIdOptions(
        id: string,
    ): CancelablePromise<AdminFulfillmentProviderOptionsListResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/admin/fulfillment-providers/{id}/options',
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
