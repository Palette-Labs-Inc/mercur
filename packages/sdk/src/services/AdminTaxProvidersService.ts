/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AdminTaxProvider } from '../models/AdminTaxProvider';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class AdminTaxProvidersService {
    /**
     * List Tax Providers
     * Retrieve a list of tax providers installed in the Medusa application through Tax Module Providers. The tax providers can be filtered by fields such as `id`. The tax providers can also be sorted or paginated.
     * @param fields Comma-separated fields that should be included in the returned data.
     * if a field is prefixed with `+` it will be added to the default fields, using `-` will remove it from the default fields.
     * without prefix it will replace the entire default fields.
     * @param offset The number of items to skip when retrieving a list.
     * @param limit Limit the number of items returned in the list.
     * @param order The field to sort the data by. By default, the sort order is ascending. To change the order to descending, prefix the field name with `-`.
     * @param id
     * @param isEnabled Filter by whether the tax provider is enabled.
     * @param and Join query parameters with an AND condition. Each object's content is the same type as the expected query parameters.
     * @param or Join query parameters with an OR condition. Each object's content is the same type as the expected query parameters.
     * @param withDeleted Whether to include deleted records in the result.
     * @returns any OK
     * @throws ApiError
     */
    public static adminGetTaxProviders(
        fields?: string,
        offset?: number,
        limit?: number,
        order?: string,
        id?: (string | Array<string>),
        isEnabled?: boolean,
        and?: Array<Record<string, any>>,
        or?: Array<Record<string, any>>,
        withDeleted?: boolean,
    ): CancelablePromise<({
        /**
         * The maximum number of items retrieved.
         */
        limit: number;
        /**
         * The number of items skipped before retrieving the returned items.
         */
        offset: number;
        /**
         * The total number of items available.
         */
        count: number;
        /**
         * The estimated count retrieved from the PostgreSQL query planner, which may be inaccurate.
         */
        estimate_count?: number;
    } & {
        /**
         * The list of tax providers.
         */
        tax_providers: Array<AdminTaxProvider>;
    })> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/admin/tax-providers',
            query: {
                'fields': fields,
                'offset': offset,
                'limit': limit,
                'order': order,
                'id': id,
                'is_enabled': isEnabled,
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
}
