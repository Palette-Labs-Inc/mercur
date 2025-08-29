/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { VendorReceiveReturn } from '../models/VendorReceiveReturn';
import type { VendorReceiveReturnItems } from '../models/VendorReceiveReturnItems';
import type { VendorReturn } from '../models/VendorReturn';
import type { VendorReturnsDismissItemsAction } from '../models/VendorReturnsDismissItemsAction';
import type { VendorReturnsReceiveItemsAction } from '../models/VendorReturnsReceiveItemsAction';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class VendorReturnsService {
    /**
     * List Returns
     * Retrieves a list of returns for the authenticated vendor.
     * @param offset The number of items to skip before starting to collect the result set.
     * @param limit The number of items to return.
     * @param fields Comma-separated fields to include in the response.
     * @returns any OK
     * @throws ApiError
     */
    public static vendorListReturns(
        offset?: number,
        limit?: number,
        fields?: string,
    ): CancelablePromise<{
        returns?: Array<VendorReturn>;
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
            url: '/vendor/returns',
            query: {
                'offset': offset,
                'limit': limit,
                'fields': fields,
            },
        });
    }
    /**
     * Get return
     * Retrieves return by id for the authenticated vendor.
     * @param id The ID of the return.
     * @param fields Comma-separated fields to include in the response.
     * @returns any OK
     * @throws ApiError
     */
    public static vendorGetReturnById(
        id: string,
        fields?: string,
    ): CancelablePromise<{
        return?: VendorReturn;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/vendor/returns/{id}',
            path: {
                'id': id,
            },
            query: {
                'fields': fields,
            },
        });
    }
    /**
     * Add Damaged Item to Return
     * Add damaged items, whose quantity is to be dismissed, to a return.
     * @param id The ID of the return.
     * @param fields Comma-separated fields that should be included in the returned data.
     * @param requestBody
     * @returns any OK
     * @throws ApiError
     */
    public static vendorAddDismissReturnItemById(
        id: string,
        fields?: string,
        requestBody?: VendorReceiveReturnItems,
    ): CancelablePromise<{
        return?: VendorReturn;
    }> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/vendor/returns/{id}/dismiss-items',
            path: {
                'id': id,
            },
            query: {
                'fields': fields,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Update Damaged Item of Return
     * Update a damaged item, whose quantity is to be dismissed, in the return by the ID of the  item's `RECEIVE_DAMAGED_RETURN_ITEM` action.
     * @param id The ID of the return.
     * @param actionId The ID of the damaged item's `RECEIVE_DAMAGED_RETURN_ITEM` action.
     * @param fields Comma-separated fields that should be included in the returned data.
     * @param requestBody
     * @returns any OK
     * @throws ApiError
     */
    public static vendorUpdateDismissReturnItemById(
        id: string,
        actionId: string,
        fields?: string,
        requestBody?: VendorReturnsDismissItemsAction,
    ): CancelablePromise<{
        return?: VendorReturn;
    }> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/vendor/returns/{id}/dismiss-items/{action_id}',
            path: {
                'id': id,
                'action_id': actionId,
            },
            query: {
                'fields': fields,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Remove Damaged Item from Return
     * Remove a damaged item, whose quantity is to be dismissed, in the return by the ID of the  item's `RECEIVE_DAMAGED_RETURN_ITEM` action.
     * @param id The ID of the return.
     * @param actionId The ID of the damaged item's `RECEIVE_DAMAGED_RETURN_ITEM` action.
     * @param fields Comma-separated fields that should be included in the returned data.
     * @returns any OK
     * @throws ApiError
     */
    public static vendorDismissReturnItemById(
        id: string,
        actionId: string,
        fields?: string,
    ): CancelablePromise<{
        return?: VendorReturn;
    }> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/vendor/returns/{id}/dismiss-items/{action_id}',
            path: {
                'id': id,
                'action_id': actionId,
            },
            query: {
                'fields': fields,
            },
        });
    }
    /**
     * Start Return Receival
     * Start a return receival process to be later confirmed.
     * @param id The return's ID.
     * @param fields Comma-separated fields that should be included in the returned data. if a field is prefixed with `+` it will be added to the default fields, using `-` will remove it from the default fields. without prefix it will replace the entire default fields.
     * @param requestBody
     * @returns any OK
     * @throws ApiError
     */
    public static vendorReturnReceiveById(
        id: string,
        fields?: string,
        requestBody?: VendorReceiveReturn,
    ): CancelablePromise<{
        return?: VendorReturn;
    }> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/vendor/returns/{id}/receive',
            path: {
                'id': id,
            },
            query: {
                'fields': fields,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Add received Item to Return
     * Add received items to return.
     * @param id The ID of the return.
     * @param fields Comma-separated fields that should be included in the returned data.
     * @param requestBody
     * @returns any OK
     * @throws ApiError
     */
    public static vendorAddReceiveReturnItemById(
        id: string,
        fields?: string,
        requestBody?: VendorReceiveReturnItems,
    ): CancelablePromise<{
        return?: VendorReturn;
    }> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/vendor/returns/{id}/receive-items',
            path: {
                'id': id,
            },
            query: {
                'fields': fields,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Update received Item of Return
     * Update a received item.
     * @param id The ID of the return.
     * @param actionId The ID of the received item's `RECEIVE_RETURN_ITEM` action.
     * @param fields Comma-separated fields that should be included in the returned data.
     * @param requestBody
     * @returns any OK
     * @throws ApiError
     */
    public static vendorUpdateReceiveReturnItemById(
        id: string,
        actionId: string,
        fields?: string,
        requestBody?: VendorReturnsReceiveItemsAction,
    ): CancelablePromise<{
        return?: VendorReturn;
    }> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/vendor/returns/{id}/receive-items/{action_id}',
            path: {
                'id': id,
                'action_id': actionId,
            },
            query: {
                'fields': fields,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Remove received Item from Return
     * Remove a received item
     * @param id The ID of the return.
     * @param actionId The ID of the received item's `RECEIVE_RETURN_ITEM` action.
     * @param fields Comma-separated fields that should be included in the returned data.
     * @returns any OK
     * @throws ApiError
     */
    public static vendorReceiveReturnItemById(
        id: string,
        actionId: string,
        fields?: string,
    ): CancelablePromise<{
        return?: VendorReturn;
    }> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/vendor/returns/{id}/receive-items/{action_id}',
            path: {
                'id': id,
                'action_id': actionId,
            },
            query: {
                'fields': fields,
            },
        });
    }
    /**
     * Confirm Return Receival
     * Confirm a return receival process.
     * @param id The return's ID.
     * @param fields Comma-separated fields that should be included in the returned data. if a field is prefixed with `+` it will be added to the default fields, using `-` will remove it from the default fields. without prefix it will replace the entire default fields.
     * @returns any OK
     * @throws ApiError
     */
    public static vendorConfirmReturnReceiveById(
        id: string,
        fields?: string,
    ): CancelablePromise<{
        return?: VendorReturn;
    }> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/vendor/returns/{id}/receive/confirm',
            path: {
                'id': id,
            },
            query: {
                'fields': fields,
            },
        });
    }
}
