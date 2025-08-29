/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AdminCreateFulfillment } from '../models/AdminCreateFulfillment';
import type { AdminCreateShipment } from '../models/AdminCreateShipment';
import type { AdminFulfillmentResponse } from '../models/AdminFulfillmentResponse';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class AdminFulfillmentsService {
    /**
     * Create Fulfillment
     * Create a fulfillment for an order, return, exchange, and more.
     * @param fields Comma-separated fields that should be included in the returned data. if a field is prefixed with `+` it will be added to the default fields, using `-` will remove it from the default fields. without prefix it will replace the entire default fields.
     * @param requestBody
     * @returns AdminFulfillmentResponse OK
     * @throws ApiError
     */
    public static adminPostFulfillments(
        fields?: string,
        requestBody?: AdminCreateFulfillment,
    ): CancelablePromise<AdminFulfillmentResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/admin/fulfillments',
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
     * Cancel a Fulfillment
     * Cancel a fulfillment. The fulfillment can't be shipped or delivered.
     *
     * To cancel the fulfillment, the `cancelFulfillment` method of the associated fulfillment provider is used.
     *
     * @param id The fulfillment's ID.
     * @param fields Comma-separated fields that should be included in the returned data. if a field is prefixed with `+` it will be added to the default fields, using `-` will remove it from the default fields. without prefix it will replace the entire default fields.
     * @returns AdminFulfillmentResponse OK
     * @throws ApiError
     */
    public static adminPostFulfillmentsIdCancel(
        id: string,
        fields?: string,
    ): CancelablePromise<AdminFulfillmentResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/admin/fulfillments/{id}/cancel',
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
     * Create a Shipment for a Fulfillment
     * Create a shipment for a fulfillment. The fulfillment must not be shipped or canceled.
     * @param id The fulfillment's ID.
     * @param fields Comma-separated fields that should be included in the returned data. if a field is prefixed with `+` it will be added to the default fields, using `-` will remove it from the default fields. without prefix it will replace the entire default fields.
     * @param requestBody
     * @returns AdminFulfillmentResponse OK
     * @throws ApiError
     */
    public static adminPostFulfillmentsIdShipment(
        id: string,
        fields?: string,
        requestBody?: AdminCreateShipment,
    ): CancelablePromise<AdminFulfillmentResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/admin/fulfillments/{id}/shipment',
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
