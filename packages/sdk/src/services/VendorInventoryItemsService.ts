/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { VendorBatchInventoryItemLevels } from '../models/VendorBatchInventoryItemLevels';
import type { VendorBatchInventoryItemLocationsLevel } from '../models/VendorBatchInventoryItemLocationsLevel';
import type { VendorCreateInventoryLevel } from '../models/VendorCreateInventoryLevel';
import type { VendorUpdateInventoryItem } from '../models/VendorUpdateInventoryItem';
import type { VendorUpdateInventoryLevel } from '../models/VendorUpdateInventoryLevel';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class VendorInventoryItemsService {
    /**
     * List InventoryItems
     * Retrieves list of InventoryItems
     * @returns any Ok
     * @throws ApiError
     */
    public static vendorListInventoryItem(): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/vendor/inventory-items',
        });
    }
    /**
     * Update inventory item levels
     * Batch updates InventoryItem levels
     * @param requestBody
     * @returns any Ok
     * @throws ApiError
     */
    public static vendorBatchInventoryItemLevels(
        requestBody?: VendorBatchInventoryItemLevels,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/vendor/inventory-items/location-levels/batch',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Get inventory item
     * Retrieves InventoryItem of specified id
     * @param id The ID of the InventoryItem.
     * @returns any Ok
     * @throws ApiError
     */
    public static vendorGetInventoryItem(
        id: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/vendor/inventory-items/{id}',
            path: {
                'id': id,
            },
        });
    }
    /**
     * Update inventory item
     * Updates InventoryItem of specified id
     * @param id The ID of the InventoryItem.
     * @param requestBody
     * @returns any Ok
     * @throws ApiError
     */
    public static vendorUpdateInventoryItem(
        id: string,
        requestBody?: VendorUpdateInventoryItem,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/vendor/inventory-items/{id}',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Get InventoryLevels of specified InventoryItem
     * Retrieves inventory levels of the InventoryItem
     * @param id The ID of the InventoryItem.
     * @returns any Ok
     * @throws ApiError
     */
    public static vendorGetItemInventoryLevel(
        id: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/vendor/inventory-items/{id}/location-levels',
            path: {
                'id': id,
            },
        });
    }
    /**
     * Create inventory level
     * Creates inventory level of the InventoryItem in the specified location
     * @param id The ID of the InventoryItem.
     * @param requestBody
     * @returns any Ok
     * @throws ApiError
     */
    public static vendorCreateInventoryLevel(
        id: string,
        requestBody?: VendorCreateInventoryLevel,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/vendor/inventory-items/{id}/location-levels',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Update inventory item levels
     * Batch updates InventoryItem levels
     * @param id The ID of the InventoryItem.
     * @param requestBody
     * @returns any Ok
     * @throws ApiError
     */
    public static vendorBatchInventoryItemLocationsLevels(
        id: string,
        requestBody?: VendorBatchInventoryItemLocationsLevel,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/vendor/inventory-items/{id}/location-levels/batch',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Get inventory level
     * Retrieves inventory level of the InventoryItem in the specified location
     * @param id The ID of the InventoryItem.
     * @param locationId The ID of the Stock Location.
     * @returns any Inventory level
     * @throws ApiError
     */
    public static vendorGetInventoryLevel(
        id: string,
        locationId: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/vendor/inventory-items/{id}/location-levels/{location_id}',
            path: {
                'id': id,
                'location_id': locationId,
            },
        });
    }
    /**
     * Update inventory level
     * Updates inventory level of the InventoryItem in the specified location
     * @param id The ID of the InventoryItem.
     * @param locationId The ID of the Stock Location.
     * @param requestBody
     * @returns any Accepted
     * @throws ApiError
     */
    public static vendorUpdateInventoryLevel(
        id: string,
        locationId: string,
        requestBody?: VendorUpdateInventoryLevel,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/vendor/inventory-items/{id}/location-levels/{location_id}',
            path: {
                'id': id,
                'location_id': locationId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
}
