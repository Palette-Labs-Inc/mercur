/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { StorePaymentProvider } from '../models/StorePaymentProvider';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class PaymentProvidersService {
    /**
     * List Payment Providers
     * Retrieve a list of payment providers. You must provide the `region_id` query parameter to retrieve the payment providers enabled in that region.
     * @param xPublishableApiKey Publishable API Key created in the Medusa Admin.
     * @param regionId Filter by a region ID to get the payment providers enabled in that region.
     * @param fields Comma-separated fields that should be included in the returned data. if a field is prefixed with `+` it will be added to the default fields, using `-` will remove it from the default fields. without prefix it will replace the entire default fields.
     * @param offset The number of items to skip when retrieving a list.
     * @param limit Limit the number of items returned in the list.
     * @param order The field to sort the data by. By default, the sort order is ascending. To change the order to descending, prefix the field name with `-`.
     * @param withDeleted Whether to include deleted records in the result.
     * @returns any OK
     * @throws ApiError
     */
    public static getPaymentProviders(
        xPublishableApiKey: string,
        regionId: string,
        fields?: string,
        offset?: number,
        limit?: number,
        order?: string,
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
         * The list of payment providers.
         */
        payment_providers: Array<StorePaymentProvider>;
    })> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/store/payment-providers',
            headers: {
                'x-publishable-api-key': xPublishableApiKey,
            },
            query: {
                'fields': fields,
                'offset': offset,
                'limit': limit,
                'order': order,
                'region_id': regionId,
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
