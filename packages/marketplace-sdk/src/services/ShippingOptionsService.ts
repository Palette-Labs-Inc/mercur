/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { StoreShippingOptionListResponse } from '../models/StoreShippingOptionListResponse';
import type { StoreShippingOptionResponse } from '../models/StoreShippingOptionResponse';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class ShippingOptionsService {
    /**
     * List Shipping Options for Cart
     * Retrieve a list of shipping options for a cart. The cart's ID is set in the required `cart_id` query parameter.
     *
     * The shipping options also be sorted or paginated.
     *
     * @param xPublishableApiKey Publishable API Key created in the Medusa Admin.
     * @param cartId The ID of the cart to retrieve its shipping options.
     * @param fields Comma-separated fields that should be included in the returned data. if a field is prefixed with `+` it will be added to the default fields, using `-` will remove it from the default fields. without prefix it will replace the entire default fields.
     * @param offset The number of items to skip when retrieving a list.
     * @param limit Limit the number of items returned in the list.
     * @param order The field to sort the data by. By default, the sort order is ascending. To change the order to descending, prefix the field name with `-`.
     * @param and Join query parameters with an AND condition. Each object's content is the same type as the expected query parameters.
     * @param or Join query parameters with an OR condition. Each object's content is the same type as the expected query parameters.
     * @param isReturn Whether the shipping option can be used for returns.
     * @returns StoreShippingOptionListResponse OK
     * @throws ApiError
     */
    public static getShippingOptions(
        xPublishableApiKey: string,
        cartId: string,
        fields?: string,
        offset?: number,
        limit?: number,
        order?: string,
        and?: Array<Record<string, any>>,
        or?: Array<Record<string, any>>,
        isReturn?: boolean,
    ): CancelablePromise<StoreShippingOptionListResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/store/shipping-options',
            headers: {
                'x-publishable-api-key': xPublishableApiKey,
            },
            query: {
                'fields': fields,
                'offset': offset,
                'limit': limit,
                'order': order,
                'cart_id': cartId,
                '$and': and,
                '$or': or,
                'is_return': isReturn,
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
     * Calculate Shipping Option Price
     * Calculate the price of a shipping option in a cart.
     * @param id The shipping option's ID.
     * @param xPublishableApiKey Publishable API Key created in the Medusa Admin.
     * @param fields Comma-separated fields that should be included in the returned data.
     * if a field is prefixed with `+` it will be added to the default fields, using `-` will remove it from the default fields.
     * without prefix it will replace the entire default fields.
     * @param requestBody
     * @returns StoreShippingOptionResponse OK
     * @throws ApiError
     */
    public static postShippingOptionsIdCalculate(
        id: string,
        xPublishableApiKey: string,
        fields?: string,
        requestBody?: {
            /**
             * The ID of the cart the shipping option is used in.
             */
            cart_id: string;
            /**
             * Custom data that's useful for the fulfillment provider to calculate the price.
             */
            data?: Record<string, any>;
        },
    ): CancelablePromise<StoreShippingOptionResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/store/shipping-options/{id}/calculate',
            path: {
                'id': id,
            },
            headers: {
                'x-publishable-api-key': xPublishableApiKey,
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
