/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { StoreGiftCardResponse } from '../models/StoreGiftCardResponse';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class GiftCardsService {
    /**
     * Get a Gift Card
     * Retrieve a gift card by its ID or code. You can expand the gift card's relations or select the fields that should be returned.
     * @param idOrCode The gift card's ID or code.
     * @param xPublishableApiKey Publishable API Key created in the Medusa Admin.
     * @param fields Comma-separated fields that should be included in the returned data.
     * if a field is prefixed with `+` it will be added to the default fields, using `-` will remove it from the default fields.
     * without prefix it will replace the entire default fields.
     * @returns any OK
     * @throws ApiError
     */
    public static getGiftCardsIdorcode(
        idOrCode: string,
        xPublishableApiKey: string,
        fields?: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/store/gift-cards/{idOrCode}',
            path: {
                'idOrCode': idOrCode,
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
     * Redeem a Gift Card
     * Redeem a gift card by its ID or code. The gift card will be added to the logged-in customer's store credit account.
     * @param idOrCode The gift card's ID or code.
     * @param xPublishableApiKey Publishable API Key created in the Medusa Admin.
     * @param fields Comma-separated fields that should be included in the returned data.
     * if a field is prefixed with `+` it will be added to the default fields, using `-` will remove it from the default fields.
     * without prefix it will replace the entire default fields.
     * @returns StoreGiftCardResponse OK
     * @throws ApiError
     */
    public static postGiftCardsIdorcodeRedeem(
        idOrCode: string,
        xPublishableApiKey: string,
        fields?: string,
    ): CancelablePromise<StoreGiftCardResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/store/gift-cards/{idOrCode}/redeem',
            path: {
                'idOrCode': idOrCode,
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
}
