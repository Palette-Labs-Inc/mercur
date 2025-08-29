/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { VendorCreateFulfillment } from '../models/VendorCreateFulfillment';
import type { VendorOrderChange } from '../models/VendorOrderChange';
import type { VendorOrderCreateShipment } from '../models/VendorOrderCreateShipment';
import type { VendorOrderDetails } from '../models/VendorOrderDetails';
import type { VendorOrderFulfillment } from '../models/VendorOrderFulfillment';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class VendorOrdersService {
    /**
     * List Orders
     * Retrieves a list of orders for the authenticated vendor.
     * @param offset The number of items to skip before starting to collect the result set.
     * @param limit The number of items to return.
     * @param fields Comma-separated fields to include in the response.
     * @param order The order of the returned items.
     * @param createdAt Filter by created at date range
     * @param status Filter by order status
     * @param fulfillmentStatus Filter by fulfillment status
     * @param paymentStatus Filter by payment status
     * @param q Search query for filtering orders
     * @returns any OK
     * @throws ApiError
     */
    public static vendorListOrders(
        offset?: number,
        limit?: number,
        fields?: string,
        order?: string,
        createdAt?: Record<string, any>,
        status?: (string | Array<string> | Record<string, any>),
        fulfillmentStatus?: string,
        paymentStatus?: string,
        q?: string,
    ): CancelablePromise<{
        orders?: Array<VendorOrderDetails>;
        /**
         * The total number of items available
         */
        count?: number;
        /**
         * The number of items skipped before these items
         */
        offset?: number;
        /**
         * The number of items per page
         */
        limit?: number;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/vendor/orders',
            query: {
                'offset': offset,
                'limit': limit,
                'fields': fields,
                'order': order,
                'created_at': createdAt,
                'status': status,
                'fulfillment_status': fulfillmentStatus,
                'payment_status': paymentStatus,
                'q': q,
            },
        });
    }
    /**
     * Get Order details
     * Retrieves the details of specified order.
     * @param id The ID of the Order.
     * @returns any OK
     * @throws ApiError
     */
    public static vendorGetOrder(
        id: string,
    ): CancelablePromise<{
        order?: VendorOrderDetails;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/vendor/orders/{id}',
            path: {
                'id': id,
            },
        });
    }
    /**
     * Mark order as cancelled
     * Mark order as cancelled.
     * @param id The ID of the Order.
     * @returns any OK
     * @throws ApiError
     */
    public static vendorCancelOrder(
        id: string,
    ): CancelablePromise<{
        member?: VendorOrderDetails;
    }> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/vendor/orders/{id}/cancel',
            path: {
                'id': id,
            },
        });
    }
    /**
     * List Order Changes
     * Retrieves a list of order changes for the authenticated vendor.
     * @param id The ID of the Order.
     * @param fields Comma-separated fields to include in the response.
     * @returns any OK
     * @throws ApiError
     */
    public static vendorListOrderChanges(
        id: string,
        fields?: string,
    ): CancelablePromise<{
        order_changes?: Array<VendorOrderChange>;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/vendor/orders/{id}/changes',
            path: {
                'id': id,
            },
            query: {
                'fields': fields,
            },
        });
    }
    /**
     * Mark order as complete
     * Mark order as complete.
     * @param id The ID of the Order.
     * @returns any OK
     * @throws ApiError
     */
    public static vendorCompleteOrder(
        id: string,
    ): CancelablePromise<{
        member?: VendorOrderDetails;
    }> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/vendor/orders/{id}/complete',
            path: {
                'id': id,
            },
        });
    }
    /**
     * Cancel order fulfillment.
     * Cancel order fulfillment.
     * @param id The ID of the Order.
     * @param fulfillmentId The ID of the fulfillment.
     * @returns any OK
     * @throws ApiError
     */
    public static vendorCancelOrderFulfillment(
        id: string,
        fulfillmentId: string,
    ): CancelablePromise<{
        member?: VendorOrderDetails;
    }> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/vendor/orders/{id}/fulfillments/{fulfillment_id}/cancel',
            path: {
                'id': id,
                'fulfillment_id': fulfillmentId,
            },
        });
    }
    /**
     * Mark order fulfillment shipment as delivered.
     * Mark order fulfillment shipment as delivered.
     * @param id The ID of the Order.
     * @param fulfillmentId The ID of the fulfillment.
     * @returns any OK
     * @throws ApiError
     */
    public static vendorOrderFulfillmentMarkDelivered(
        id: string,
        fulfillmentId: string,
    ): CancelablePromise<{
        member?: VendorOrderDetails;
    }> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/vendor/orders/{id}/fulfillments/{fulfillment_id}/mark-as-delivered',
            path: {
                'id': id,
                'fulfillment_id': fulfillmentId,
            },
        });
    }
    /**
     * Update order fulfillment shipment.
     * Update order fulfillment shipment.
     * @param id The ID of the Order.
     * @param fulfillmentId The ID of the fulfillment.
     * @param requestBody
     * @returns any OK
     * @throws ApiError
     */
    public static vendorUpdateOrderFulfillmentShipment(
        id: string,
        fulfillmentId: string,
        requestBody?: VendorOrderCreateShipment,
    ): CancelablePromise<{
        member?: VendorOrderDetails;
    }> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/vendor/orders/{id}/fulfillments/{fulfillment_id}/shipments',
            path: {
                'id': id,
                'fulfillment_id': fulfillmentId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Update a Product
     * Updates an existing product for the authenticated vendor.
     * @param id The ID of the Product.
     * @param requestBody
     * @returns any OK
     * @throws ApiError
     */
    public static vendorCreateFulfillment(
        id: string,
        requestBody?: VendorCreateFulfillment,
    ): CancelablePromise<{
        fulfillment?: VendorOrderFulfillment;
    }> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/vendor/products/{id}/fulfillments',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
}
