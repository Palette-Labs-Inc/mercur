/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AdminCreatePaymentCollection } from '../models/AdminCreatePaymentCollection';
import type { AdminDeletePaymentCollectionResponse } from '../models/AdminDeletePaymentCollectionResponse';
import type { AdminMarkPaymentCollectionPaid } from '../models/AdminMarkPaymentCollectionPaid';
import type { AdminPaymentCollectionResponse } from '../models/AdminPaymentCollectionResponse';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class AdminPaymentCollectionsService {
    /**
     * Create Payment Collection
     * Create a payment collection.
     * @param fields Comma-separated fields that should be included in the returned data. if a field is prefixed with `+` it will be added to the default fields, using `-` will remove it from the default fields. without prefix it will replace the entire default fields.
     * @param requestBody
     * @returns AdminPaymentCollectionResponse OK
     * @throws ApiError
     */
    public static adminPostPaymentCollections(
        fields?: string,
        requestBody?: AdminCreatePaymentCollection,
    ): CancelablePromise<AdminPaymentCollectionResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/admin/payment-collections',
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
     * Delete a Payment Collection
     * Delete a payment collection.
     * @param id The payment collection's ID.
     * @returns AdminDeletePaymentCollectionResponse OK
     * @throws ApiError
     */
    public static adminDeletePaymentCollectionsId(
        id: string,
    ): CancelablePromise<AdminDeletePaymentCollectionResponse> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/admin/payment-collections/{id}',
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
    /**
     * Mark a Payment Collection as Paid
     * Mark a payment collection as paid. This creates and authorizes a payment session, then capture its payment, using the manual payment provider.
     * @param id The payment collection's ID.
     * @param fields Comma-separated fields that should be included in the returned data. if a field is prefixed with `+` it will be added to the default fields, using `-` will remove it from the default fields. without prefix it will replace the entire default fields.
     * @param requestBody
     * @returns AdminPaymentCollectionResponse OK
     * @throws ApiError
     */
    public static adminPostPaymentCollectionsIdMarkAsPaid(
        id: string,
        fields?: string,
        requestBody?: AdminMarkPaymentCollectionPaid,
    ): CancelablePromise<AdminPaymentCollectionResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/admin/payment-collections/{id}/mark-as-paid',
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
