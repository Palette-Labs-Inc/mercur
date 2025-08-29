/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AdminOrderEditPreviewResponse } from '../models/AdminOrderEditPreviewResponse';
import type { AdminOrderEditResponse } from '../models/AdminOrderEditResponse';
import type { AdminPostOrderEditsAddItemsReqSchema } from '../models/AdminPostOrderEditsAddItemsReqSchema';
import type { AdminPostOrderEditsItemsActionReqSchema } from '../models/AdminPostOrderEditsItemsActionReqSchema';
import type { AdminPostOrderEditsReqSchema } from '../models/AdminPostOrderEditsReqSchema';
import type { AdminPostOrderEditsShippingActionReqSchema } from '../models/AdminPostOrderEditsShippingActionReqSchema';
import type { AdminPostOrderEditsShippingReqSchema } from '../models/AdminPostOrderEditsShippingReqSchema';
import type { AdminPostOrderEditsUpdateItemQuantityReqSchema } from '../models/AdminPostOrderEditsUpdateItemQuantityReqSchema';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class AdminOrderEditsService {
    /**
     * Create Order Edit
     * Create an order edit.
     * @param requestBody
     * @returns AdminOrderEditResponse OK
     * @throws ApiError
     */
    public static adminPostOrderEdits(
        requestBody?: AdminPostOrderEditsReqSchema,
    ): CancelablePromise<AdminOrderEditResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/admin/order-edits',
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
     * Cancel Order Edit
     * Cancel a requested order edit.
     * @param id The order edit's ID.
     * @returns any OK
     * @throws ApiError
     */
    public static adminDeleteOrderEditsId(
        id: string,
    ): CancelablePromise<{
        /**
         * The order edit's ID.
         */
        id: string;
        /**
         * The name of the deleted object.
         */
        object: string;
        /**
         * Whether the order edit was deleted.
         */
        deleted: boolean;
    }> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/admin/order-edits/{id}',
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
     * Confirm Order Edit
     * Confirm an order edit request and apply the changes on the order.
     * @param id The order edit's ID.
     * @returns AdminOrderEditPreviewResponse OK
     * @throws ApiError
     */
    public static adminPostOrderEditsIdConfirm(
        id: string,
    ): CancelablePromise<AdminOrderEditPreviewResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/admin/order-edits/{id}/confirm',
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
     * Add Items to Order Edit
     * Add new items to an order edit. These items will have the action `ITEM_ADD`.
     * @param id The order edit's ID.
     * @param requestBody
     * @returns AdminOrderEditPreviewResponse OK
     * @throws ApiError
     */
    public static adminPostOrderEditsIdItems(
        id: string,
        requestBody?: AdminPostOrderEditsAddItemsReqSchema,
    ): CancelablePromise<AdminOrderEditPreviewResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/admin/order-edits/{id}/items',
            path: {
                'id': id,
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
     * Update Order Item Quantity of Order Edit
     * Update an existing order item's quantity of an order edit.
     * You can also use this API route to remove an item from an order by setting its quantity to `0`.
     *
     * @param id The order edit's ID.
     * @param itemId The order edit's item id.
     * @param requestBody
     * @returns AdminOrderEditPreviewResponse OK
     * @throws ApiError
     */
    public static adminPostOrderEditsIdItemsItemItemId(
        id: string,
        itemId: string,
        requestBody?: AdminPostOrderEditsUpdateItemQuantityReqSchema,
    ): CancelablePromise<AdminOrderEditPreviewResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/admin/order-edits/{id}/items/item/{item_id}',
            path: {
                'id': id,
                'item_id': itemId,
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
     * Update an Item in an Order Edit
     * Update an added item in the order edit by the ID of the item's `ITEM_ADD` action.
     *
     * Every item has an `actions` property, whose value is an array of actions. You can check the action's name using its `action` property, and use the value of the `id` property.
     *
     * @param id The order edit's ID.
     * @param actionId The ID of the new item's `ITEM_ADD` action.
     * @param requestBody
     * @returns AdminOrderEditPreviewResponse OK
     * @throws ApiError
     */
    public static adminPostOrderEditsIdItemsActionId(
        id: string,
        actionId: string,
        requestBody?: AdminPostOrderEditsItemsActionReqSchema,
    ): CancelablePromise<AdminOrderEditPreviewResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/admin/order-edits/{id}/items/{action_id}',
            path: {
                'id': id,
                'action_id': actionId,
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
     * Remove Item from Order Edit
     * Remove an added item in the order edit by the ID of the item's `ITEM_ADD` action.
     *
     * Every item has an `actions` property, whose value is an array of actions. You can check the action's name using its `action` property, and use the value of the `id` property.
     *
     * @param id The order edit's ID.
     * @param actionId The ID of the new item's `ITEM_ADD` action.
     * @returns AdminOrderEditPreviewResponse OK
     * @throws ApiError
     */
    public static adminDeleteOrderEditsIdItemsActionId(
        id: string,
        actionId: string,
    ): CancelablePromise<AdminOrderEditPreviewResponse> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/admin/order-edits/{id}/items/{action_id}',
            path: {
                'id': id,
                'action_id': actionId,
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
     * Request Order Edit
     * Change the status of an active order edit to requested.
     * @param id The order edit's ID.
     * @returns AdminOrderEditPreviewResponse OK
     * @throws ApiError
     */
    public static adminPostOrderEditsIdRequest(
        id: string,
    ): CancelablePromise<AdminOrderEditPreviewResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/admin/order-edits/{id}/request',
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
     * Add Shipping Method to Order Edit
     * Add a shipping method to an exchange. The shipping method will have a `SHIPPING_ADD` action.
     * @param id The order edit's ID.
     * @param requestBody
     * @returns AdminOrderEditPreviewResponse OK
     * @throws ApiError
     */
    public static adminPostOrderEditsIdShippingMethod(
        id: string,
        requestBody?: AdminPostOrderEditsShippingReqSchema,
    ): CancelablePromise<AdminOrderEditPreviewResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/admin/order-edits/{id}/shipping-method',
            path: {
                'id': id,
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
     * Update Shipping Method of an Order Edit
     * Update a shipping method in the order edit by the ID of the method's `SHIPPING_ADD` action.
     *
     * Every shipping method has an `actions` property, whose value is an array of actions. You can check the action's name using its `action` property, and use the value of the `id` property.
     *
     * @param id The order edit's ID.
     * @param actionId The ID of the shipping method's `SHIPPING_ADD` action.
     * @param requestBody
     * @returns AdminOrderEditPreviewResponse OK
     * @throws ApiError
     */
    public static adminPostOrderEditsIdShippingMethodActionId(
        id: string,
        actionId: string,
        requestBody?: AdminPostOrderEditsShippingActionReqSchema,
    ): CancelablePromise<AdminOrderEditPreviewResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/admin/order-edits/{id}/shipping-method/{action_id}',
            path: {
                'id': id,
                'action_id': actionId,
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
     * Remove Shipping Method from Order Edit
     * Remove a shipping method in the order edit by the ID of the method's `SHIPPING_ADD` action.
     *
     * Every shipping method has an `actions` property, whose value is an array of actions. You can check the action's name using its `action` property, and use the value of the `id` property.
     *
     * @param id The order edit's ID.
     * @param actionId The ID of the shipping method's `SHIPPING_ADD` action.
     * @returns AdminOrderEditPreviewResponse OK
     * @throws ApiError
     */
    public static adminDeleteOrderEditsIdShippingMethodActionId(
        id: string,
        actionId: string,
    ): CancelablePromise<AdminOrderEditPreviewResponse> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/admin/order-edits/{id}/shipping-method/{action_id}',
            path: {
                'id': id,
                'action_id': actionId,
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
