/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { StoreCreatePaymentCollection } from '../models/StoreCreatePaymentCollection';
import type { StoreInitializePaymentSession } from '../models/StoreInitializePaymentSession';
import type { StorePaymentCollectionResponse } from '../models/StorePaymentCollectionResponse';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class PaymentCollectionsService {
    /**
     * Create Payment Collection
     * Create a payment collection for a cart. This is used during checkout, where the payment collection holds the cart's payment sessions.
     * @param xPublishableApiKey Publishable API Key created in the Medusa Admin.
     * @param fields Comma-separated fields that should be included in the returned data. if a field is prefixed with `+` it will be added to the default fields, using `-` will remove it from the default fields. without prefix it will replace the entire default fields.
     * @param requestBody
     * @returns StorePaymentCollectionResponse OK
     * @throws ApiError
     */
    public static postPaymentCollections(
        xPublishableApiKey: string,
        fields?: string,
        requestBody?: StoreCreatePaymentCollection,
    ): CancelablePromise<StorePaymentCollectionResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/store/payment-collections',
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
     * Initialize Payment Session of a Payment Collection
     * Initialize and add a payment session to a payment collection. This is used during checkout, where you create a payment collection for the cart, then initialize a payment session for the payment provider that the customer chooses.
     * It's highly recommended to have an amount greater than `0` in the payment collection, as some payment providers, such as Stripe, require a non-zero amount to create a payment session. Otherwise, an error will be thrown on the payment provider's side.
     * In cases where you want to create a payment session for a payment collection with an amount of `0`, you can use the Manual System Payment Provider instead of third-party payment providers. The Manual System Payment Provider is built into Medusa and allows you to create payment sessions without interacting with an external payment provider.
     * Make sure to configure the Manual System Payment Provider in your store's region. Learn more in the [Manage Region](https://docs.medusajs.com/user-guide/settings/regions#edit-region-details) user guide.
     *
     * @param id The payment collection's ID.
     * @param xPublishableApiKey Publishable API Key created in the Medusa Admin.
     * @param fields Comma-separated fields that should be included in the returned data. if a field is prefixed with `+` it will be added to the default fields, using `-` will remove it from the default fields. without prefix it will replace the entire default fields.
     * @param requestBody
     * @returns StorePaymentCollectionResponse OK
     * @throws ApiError
     */
    public static postPaymentCollectionsIdPaymentSessions(
        id: string,
        xPublishableApiKey: string,
        fields?: string,
        requestBody?: StoreInitializePaymentSession,
    ): CancelablePromise<StorePaymentCollectionResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/store/payment-collections/{id}/payment-sessions',
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
