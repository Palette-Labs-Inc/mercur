/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { StoreAddCartLineItem } from '../models/StoreAddCartLineItem';
import type { StoreAddCartShippingMethods } from '../models/StoreAddCartShippingMethods';
import type { StoreAddGiftCardToCart } from '../models/StoreAddGiftCardToCart';
import type { StoreAddStoreCreditsToCart } from '../models/StoreAddStoreCreditsToCart';
import type { StoreCart } from '../models/StoreCart';
import type { StoreCartAddPromotion } from '../models/StoreCartAddPromotion';
import type { StoreCartRemovePromotion } from '../models/StoreCartRemovePromotion';
import type { StoreCartResponse } from '../models/StoreCartResponse';
import type { StoreCreateCart } from '../models/StoreCreateCart';
import type { StoreOrder } from '../models/StoreOrder';
import type { StoreRemoveGiftCardFromCart } from '../models/StoreRemoveGiftCardFromCart';
import type { StoreUpdateCartLineItem } from '../models/StoreUpdateCartLineItem';
import type { UpdateCartData } from '../models/UpdateCartData';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class StoreCartsService {
    /**
     * Create Cart
     * Create a cart.
     * @param xPublishableApiKey Publishable API Key created in the Medusa Admin.
     * @param fields Comma-separated fields that should be included in the returned data. if a field is prefixed with `+` it will be added to the default fields, using `-` will remove it from the default fields. without prefix it will replace the entire default fields.
     * @param requestBody
     * @returns StoreCartResponse OK
     * @throws ApiError
     */
    public static storePostCarts(
        xPublishableApiKey: string,
        fields?: string,
        requestBody?: (StoreCreateCart & {
            /**
             * Pass additional custom data to the API route. This data is passed to the underlying workflow under the `additional_data` parameter.
             */
            additional_data?: Record<string, any>;
        }),
    ): CancelablePromise<StoreCartResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/store/carts',
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
     * Get a Cart
     * Retrieve a cart by its ID. You can expand the cart's relations or select the fields that should be returned.
     * @param id The cart's ID.
     * @param xPublishableApiKey Publishable API Key created in the Medusa Admin.
     * @param fields Comma-separated fields that should be included in the returned data. if a field is prefixed with `+` it will be added to the default fields, using `-` will remove it from the default fields. without prefix it will replace the entire default fields.
     * @returns StoreCartResponse OK
     * @throws ApiError
     */
    public static storeGetCartsId(
        id: string,
        xPublishableApiKey: string,
        fields?: string,
    ): CancelablePromise<StoreCartResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/store/carts/{id}',
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
     * Update a Cart
     * Update a cart's details. This unsets the payment methods chosen before, and the customer would have to choose them again. Also, if the customer has chosen a shipping method whose option isn't valid for the cart's shipping address anymore, the shipping method will be unset. For example, if the shipping option is valid only in the US geo zone, and the shipping address's country code is `DE`, the shipping method will be unset.
     * @param id The cart's ID.
     * @param xPublishableApiKey Publishable API Key created in the Medusa Admin.
     * @param fields Comma-separated fields that should be included in the returned data. if a field is prefixed with `+` it will be added to the default fields, using `-` will remove it from the default fields. without prefix it will replace the entire default fields.
     * @param requestBody
     * @returns any OK
     * @throws ApiError
     */
    public static storePostCartsId(
        id: string,
        xPublishableApiKey: string,
        fields?: string,
        requestBody?: (UpdateCartData & {
            /**
             * Pass additional custom data to the API route. This data is passed to the underlying workflow under the `additional_data` parameter.
             */
            additional_data?: Record<string, any>;
        }),
    ): CancelablePromise<{
        cart: StoreCart;
    }> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/store/carts/{id}',
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
     * Complete Cart
     * Complete a cart and place an order.
     * @param id The cart's ID.
     * @param xPublishableApiKey Publishable API Key created in the Medusa Admin.
     * @param fields Comma-separated fields that should be included in the returned data. if a field is prefixed with `+` it will be added to the default fields, using `-` will remove it from the default fields. without prefix it will replace the entire default fields.
     * @returns any OK
     * @throws ApiError
     */
    public static storePostCartsIdComplete(
        id: string,
        xPublishableApiKey: string,
        fields?: string,
    ): CancelablePromise<({
        /**
         * The type of the returned object. In this case, the order is returned because the cart was completed successfully.
         */
        type: string;
        order: StoreOrder;
    } | {
        /**
         * The type of the returned object. In this case, the cart is returned because an error has occurred.
         */
        type: string;
        cart: StoreCart;
        /**
         * The error's details.
         */
        error: {
            /**
             * The error's message.
             */
            message: string;
            /**
             * The error's name.
             */
            name: string;
            /**
             * The error's type. Can be a [MedusaError type](https://docs.medusajs.com/v2/advanced-development/api-routes/errors#medusaerror-types) or `payment_authorization_error` or `payment_requires_more_error` for payment-related errors.
             *
             */
            type: string;
        };
    })> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/store/carts/{id}/complete',
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
     * Set Cart's Customer
     * Set the customer of the cart. This is useful when you create the cart for a guest customer, then they log in with their account.
     * @param id The cart's ID.
     * @param xPublishableApiKey Publishable API Key created in the Medusa Admin.
     * @param fields Comma-separated fields that should be included in the returned data.
     * if a field is prefixed with `+` it will be added to the default fields, using `-` will remove it from the default fields.
     * without prefix it will replace the entire default fields.
     * @returns StoreCartResponse OK
     * @throws ApiError
     */
    public static storePostCartsIdCustomer(
        id: string,
        xPublishableApiKey: string,
        fields?: string,
    ): CancelablePromise<StoreCartResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/store/carts/{id}/customer',
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
     * Add Gift Card to Cart
     * Add a Gift Card to a cart
     * @param id The cart's ID.
     * @param xPublishableApiKey Publishable API Key created in the Medusa Admin.
     * @param fields Comma-separated fields that should be included in the returned data.
     * if a field is prefixed with `+` it will be added to the default fields, using `-` will remove it from the default fields.
     * without prefix it will replace the entire default fields.
     * @param requestBody
     * @returns StoreCartResponse OK
     * @throws ApiError
     */
    public static storePostCartsIdGiftCards(
        id: string,
        xPublishableApiKey: string,
        fields?: string,
        requestBody?: StoreAddGiftCardToCart,
    ): CancelablePromise<StoreCartResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/store/carts/{id}/gift-cards',
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
     * Remove Gift Card from Cart
     * Remove a Gift Card from a cart.
     * @param id The cart's ID.
     * @param xPublishableApiKey Publishable API Key created in the Medusa Admin.
     * @param fields Comma-separated fields that should be included in the returned data.
     * if a field is prefixed with `+` it will be added to the default fields, using `-` will remove it from the default fields.
     * without prefix it will replace the entire default fields.
     * @param requestBody
     * @returns StoreCartResponse OK
     * @throws ApiError
     */
    public static storeDeleteCartsIdGiftCards(
        id: string,
        xPublishableApiKey: string,
        fields?: string,
        requestBody?: StoreRemoveGiftCardFromCart,
    ): CancelablePromise<StoreCartResponse> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/store/carts/{id}/gift-cards',
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
     * Add Line Item to Cart
     * Add a product variant as a line item in the cart.
     * @param id The cart's ID.
     * @param xPublishableApiKey Publishable API Key created in the Medusa Admin.
     * @param fields Comma-separated fields that should be included in the returned data. if a field is prefixed with `+` it will be added to the default fields, using `-` will remove it from the default fields. without prefix it will replace the entire default fields.
     * @param requestBody
     * @returns StoreCartResponse OK
     * @throws ApiError
     */
    public static storePostCartsIdLineItems(
        id: string,
        xPublishableApiKey: string,
        fields?: string,
        requestBody?: StoreAddCartLineItem,
    ): CancelablePromise<StoreCartResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/store/carts/{id}/line-items',
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
     * Update a Line Item in a Cart
     * Update a line item's details in the cart.
     * @param id The cart's ID.
     * @param lineId The line item's ID.
     * @param xPublishableApiKey Publishable API Key created in the Medusa Admin.
     * @param fields Comma-separated fields that should be included in the returned data. if a field is prefixed with `+` it will be added to the default fields, using `-` will remove it from the default fields. without prefix it will replace the entire default fields.
     * @param requestBody
     * @returns StoreCartResponse OK
     * @throws ApiError
     */
    public static storePostCartsIdLineItemsLineId(
        id: string,
        lineId: string,
        xPublishableApiKey: string,
        fields?: string,
        requestBody?: StoreUpdateCartLineItem,
    ): CancelablePromise<StoreCartResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/store/carts/{id}/line-items/{line_id}',
            path: {
                'id': id,
                'line_id': lineId,
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
     * Remove Line Item from Cart
     * Remove a line item from a cart.
     * @param id The cart's ID.
     * @param lineId The line item's ID.
     * @param xPublishableApiKey Publishable API Key created in the Medusa Admin.
     * @param fields Comma-separated fields that should be included in the returned data. if a field is prefixed with `+` it will be added to the default fields, using `-` will remove it from the default fields. without prefix it will replace the entire default fields.
     * @returns any OK
     * @throws ApiError
     */
    public static storeDeleteCartsIdLineItemsLineId(
        id: string,
        lineId: string,
        xPublishableApiKey: string,
        fields?: string,
    ): CancelablePromise<({
        /**
         * The ID of the deleted line item.
         */
        id: string;
        /**
         * The name of the deleted object.
         */
        object: string;
        /**
         * Whether the item was deleted.
         */
        deleted: boolean;
    } & {
        /**
         * The cart that the item belonged to.
         */
        parent?: StoreCart;
    })> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/store/carts/{id}/line-items/{line_id}',
            path: {
                'id': id,
                'line_id': lineId,
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
     * Add Promotions to Cart
     * Add a list of promotions to a cart.
     * @param id The cart's ID.
     * @param xPublishableApiKey Publishable API Key created in the Medusa Admin.
     * @param fields Comma-separated fields that should be included in the returned data. if a field is prefixed with `+` it will be added to the default fields, using `-` will remove it from the default fields. without prefix it will replace the entire default fields.
     * @param requestBody
     * @returns StoreCartResponse OK
     * @throws ApiError
     */
    public static storePostCartsIdPromotions(
        id: string,
        xPublishableApiKey: string,
        fields?: string,
        requestBody?: StoreCartAddPromotion,
    ): CancelablePromise<StoreCartResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/store/carts/{id}/promotions',
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
     * Remove Promotions from Cart
     * Remove a list of promotions from a cart.
     * @param id The cart's ID.
     * @param xPublishableApiKey Publishable API Key created in the Medusa Admin.
     * @param fields Comma-separated fields that should be included in the returned data. if a field is prefixed with `+` it will be added to the default fields, using `-` will remove it from the default fields. without prefix it will replace the entire default fields.
     * @param requestBody
     * @returns any OK
     * @throws ApiError
     */
    public static storeDeleteCartsIdPromotions(
        id: string,
        xPublishableApiKey: string,
        fields?: string,
        requestBody?: StoreCartRemovePromotion,
    ): CancelablePromise<{
        cart: StoreCart;
    }> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/store/carts/{id}/promotions',
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
     * Add Shipping Method to Cart
     * Add a shipping method to a cart. Use this API route when the customer chooses their preferred shipping option.
     * @param id The cart's ID.
     * @param xPublishableApiKey Publishable API Key created in the Medusa Admin.
     * @param fields Comma-separated fields that should be included in the returned data. if a field is prefixed with `+` it will be added to the default fields, using `-` will remove it from the default fields. without prefix it will replace the entire default fields.
     * @param requestBody
     * @returns StoreCartResponse OK
     * @throws ApiError
     */
    public static storePostCartsIdShippingMethods(
        id: string,
        xPublishableApiKey: string,
        fields?: string,
        requestBody?: StoreAddCartShippingMethods,
    ): CancelablePromise<StoreCartResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/store/carts/{id}/shipping-methods',
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
     * Add Store Credit to Cart
     * Add a Store Credit to a cart
     * @param id The cart's ID.
     * @param xPublishableApiKey Publishable API Key created in the Medusa Admin.
     * @param fields Comma-separated fields that should be included in the returned data.
     * if a field is prefixed with `+` it will be added to the default fields, using `-` will remove it from the default fields.
     * without prefix it will replace the entire default fields.
     * @param requestBody
     * @returns StoreCartResponse OK
     * @throws ApiError
     */
    public static storePostCartsIdStoreCredits(
        id: string,
        xPublishableApiKey: string,
        fields?: string,
        requestBody?: StoreAddStoreCreditsToCart,
    ): CancelablePromise<StoreCartResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/store/carts/{id}/store-credits',
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
     * Calculate Cart Taxes
     * Calculate the cart's tax lines and amounts.
     * @param id The cart's ID.
     * @param xPublishableApiKey Publishable API Key created in the Medusa Admin.
     * @param fields Comma-separated fields that should be included in the returned data. if a field is prefixed with `+` it will be added to the default fields, using `-` will remove it from the default fields. without prefix it will replace the entire default fields.
     * @returns StoreCartResponse OK
     * @throws ApiError
     */
    public static storePostCartsIdTaxes(
        id: string,
        xPublishableApiKey: string,
        fields?: string,
    ): CancelablePromise<StoreCartResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/store/carts/{id}/taxes',
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
}
