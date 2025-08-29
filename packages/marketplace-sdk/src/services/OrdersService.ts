/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { StoreAcceptOrderTransfer } from '../models/StoreAcceptOrderTransfer';
import type { StoreDeclineOrderTransferRequest } from '../models/StoreDeclineOrderTransferRequest';
import type { StoreOrder } from '../models/StoreOrder';
import type { StoreOrderResponse } from '../models/StoreOrderResponse';
import type { StoreRequestOrderTransfer } from '../models/StoreRequestOrderTransfer';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class OrdersService {
    /**
     * List Logged-in Customer's Orders
     * Retrieve the orders of the logged-in customer. The orders can be filtered by fields such as `id`. The orders can also be sorted or paginated.
     * @param xPublishableApiKey Publishable API Key created in the Medusa Admin.
     * @param fields Comma-separated fields that should be included in the returned data. if a field is prefixed with `+` it will be added to the default fields, using `-` will remove it from the default fields. without prefix it will replace the entire default fields.
     * @param offset The number of items to skip when retrieving a list.
     * @param limit Limit the number of items returned in the list.
     * @param order The field to sort the data by. By default, the sort order is ascending. To change the order to descending, prefix the field name with `-`.
     * @param id
     * @param and
     * @param or
     * @param status
     * @param withDeleted Whether to include deleted records in the result.
     * @returns any OK
     * @throws ApiError
     */
    public static getOrders(
        xPublishableApiKey: string,
        fields?: string,
        offset?: number,
        limit?: number,
        order?: string,
        id?: (string | Array<string>),
        and?: Array<Record<string, any>>,
        or?: Array<Record<string, any>>,
        status?: (string | Array<'canceled' | 'requires_action' | 'pending' | 'completed' | 'draft' | 'archived'>),
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
         * The order's orders.
         */
        orders: Array<StoreOrder>;
    })> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/store/orders',
            headers: {
                'x-publishable-api-key': xPublishableApiKey,
            },
            query: {
                'fields': fields,
                'offset': offset,
                'limit': limit,
                'order': order,
                'id': id,
                '$and': and,
                '$or': or,
                'status': status,
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
     * Get an Order
     * Retrieve an order by its ID. You can expand the order's relations or select the fields that should be returned.
     * @param id The order's ID.
     * @param xPublishableApiKey Publishable API Key created in the Medusa Admin.
     * @param fields Comma-separated fields that should be included in the returned data. if a field is prefixed with `+` it will be added to the default fields, using `-` will remove it from the default fields. without prefix it will replace the entire default fields.
     * @returns StoreOrderResponse OK
     * @throws ApiError
     */
    public static getOrdersId(
        id: string,
        xPublishableApiKey: string,
        fields?: string,
    ): CancelablePromise<StoreOrderResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/store/orders/{id}',
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
    /**
     * Accept Order Transfer
     * Accept an order to be transfered to a customer's account, which was specified when the transfer request was created. The transfer is requested previously either by the customer using the [Request Order Transfer Store API route](https://docs.medusajs.com/api/store#orders_postordersidtransferrequest), or by the admin using the [Request Order Transfer Admin API route](https://docs.medusajs.com/api/admin#orders_postordersidtransferrequest).
     * @param id The order's ID.
     * @param xPublishableApiKey Publishable API Key created in the Medusa Admin.
     * @param fields Comma-separated fields that should be included in the returned data.
     * if a field is prefixed with `+` it will be added to the default fields, using `-` will remove it from the default fields.
     * without prefix it will replace the entire default fields.
     * @param requestBody
     * @returns StoreOrderResponse OK
     * @throws ApiError
     */
    public static postOrdersIdTransferAccept(
        id: string,
        xPublishableApiKey: string,
        fields?: string,
        requestBody?: StoreAcceptOrderTransfer,
    ): CancelablePromise<StoreOrderResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/store/orders/{id}/transfer/accept',
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
    /**
     * Cancel Order Transfer
     * Cancel an order transfer that the logged-in customer previously requested using the [Request Order Transfer](https://docs.medusajs.com/api/store#orders_postordersidtransferrequest) API route.
     * @param id The order's ID.
     * @param xPublishableApiKey Publishable API Key created in the Medusa Admin.
     * @param fields Comma-separated fields that should be included in the returned data.
     * if a field is prefixed with `+` it will be added to the default fields, using `-` will remove it from the default fields.
     * without prefix it will replace the entire default fields.
     * @returns StoreOrderResponse OK
     * @throws ApiError
     */
    public static postOrdersIdTransferCancel(
        id: string,
        xPublishableApiKey: string,
        fields?: string,
    ): CancelablePromise<StoreOrderResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/store/orders/{id}/transfer/cancel',
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
    /**
     * Decline Order Transfer
     * Decline an order transfer previously requested, typically by the admin user using the [Request Order Transfer Admin API route](https://docs.medusajs.com/api/admin#orders_postordersidtransferrequest).
     * @param id The order's ID.
     * @param xPublishableApiKey Publishable API Key created in the Medusa Admin.
     * @param fields Comma-separated fields that should be included in the returned data.
     * if a field is prefixed with `+` it will be added to the default fields, using `-` will remove it from the default fields.
     * without prefix it will replace the entire default fields.
     * @param requestBody
     * @returns StoreOrderResponse OK
     * @throws ApiError
     */
    public static postOrdersIdTransferDecline(
        id: string,
        xPublishableApiKey: string,
        fields?: string,
        requestBody?: StoreDeclineOrderTransferRequest,
    ): CancelablePromise<StoreOrderResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/store/orders/{id}/transfer/decline',
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
    /**
     * Request Order Transfer
     * Request an order to be transfered to the logged-in customer's account. The transfer is confirmed using the [Accept Order Transfer](https://docs.medusajs.com/api/store#orders_postordersidtransferaccept) API route.
     * @param id The order's ID.
     * @param xPublishableApiKey Publishable API Key created in the Medusa Admin.
     * @param fields Comma-separated fields that should be included in the returned data.
     * if a field is prefixed with `+` it will be added to the default fields, using `-` will remove it from the default fields.
     * without prefix it will replace the entire default fields.
     * @param requestBody
     * @returns StoreOrderResponse OK
     * @throws ApiError
     */
    public static postOrdersIdTransferRequest(
        id: string,
        xPublishableApiKey: string,
        fields?: string,
        requestBody?: StoreRequestOrderTransfer,
    ): CancelablePromise<StoreOrderResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/store/orders/{id}/transfer/request',
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
