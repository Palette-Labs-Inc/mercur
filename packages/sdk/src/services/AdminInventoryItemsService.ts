/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AdminBatchInventoryItemLocationsLevel } from '../models/AdminBatchInventoryItemLocationsLevel';
import type { AdminBatchInventoryItemsLocationLevels } from '../models/AdminBatchInventoryItemsLocationLevels';
import type { AdminBatchInventoryItemsLocationLevelsResponse } from '../models/AdminBatchInventoryItemsLocationLevelsResponse';
import type { AdminCreateInventoryItem } from '../models/AdminCreateInventoryItem';
import type { AdminCreateInventoryLocationLevel } from '../models/AdminCreateInventoryLocationLevel';
import type { AdminInventoryItem } from '../models/AdminInventoryItem';
import type { AdminInventoryItemResponse } from '../models/AdminInventoryItemResponse';
import type { AdminUpdateInventoryItem } from '../models/AdminUpdateInventoryItem';
import type { AdminUpdateInventoryLocationLevel } from '../models/AdminUpdateInventoryLocationLevel';
import type { InventoryLevel } from '../models/InventoryLevel';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class AdminInventoryItemsService {
    /**
     * List Inventory Items
     * Retrieve a list of inventory items. The inventory items can be filtered by fields such as `id`. The inventory items can also be sorted or paginated.
     * @param fields Comma-separated fields that should be included in the returned data. if a field is prefixed with `+` it will be added to the default fields, using `-` will remove it from the default fields. without prefix it will replace the entire default fields.
     * @param offset The number of items to skip when retrieving a list.
     * @param limit Limit the number of items returned in the list.
     * @param order The field to sort the data by. By default, the sort order is ascending. To change the order to descending, prefix the field name with `-`.
     * @param q The inventory item's q.
     * @param id
     * @param sku
     * @param originCountry
     * @param midCode
     * @param hsCode
     * @param material
     * @param requiresShipping The inventory item's requires shipping.
     * @param weight Filter the inventory item's weight.
     * @param length Filter the inventory item's length.
     * @param height Filter by the inventory item's height.
     * @param width Filter by the inventory item's width.
     * @param locationLevels Filter by the inventory item's associated location IDs.
     * @param and
     * @param or
     * @param withDeleted Whether to include deleted records in the result.
     * @returns any OK
     * @throws ApiError
     */
    public static adminGetInventoryItems(
        fields?: string,
        offset?: number,
        limit?: number,
        order?: string,
        q?: string,
        id?: (string | Array<string>),
        sku?: (string | Array<string>),
        originCountry?: (string | Array<string>),
        midCode?: (string | Array<string>),
        hsCode?: (string | Array<string>),
        material?: (string | Array<string>),
        requiresShipping?: boolean,
        weight?: any,
        length?: any,
        height?: any,
        width?: any,
        locationLevels?: {
            location_id: (string | Array<string>);
        },
        and?: Array<Record<string, any>>,
        or?: Array<Record<string, any>>,
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
         * The inventory item's inventory items.
         */
        inventory_items: Array<AdminInventoryItem>;
    })> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/admin/inventory-items',
            query: {
                'fields': fields,
                'offset': offset,
                'limit': limit,
                'order': order,
                'q': q,
                'id': id,
                'sku': sku,
                'origin_country': originCountry,
                'mid_code': midCode,
                'hs_code': hsCode,
                'material': material,
                'requires_shipping': requiresShipping,
                'weight': weight,
                'length': length,
                'height': height,
                'width': width,
                'location_levels': locationLevels,
                '$and': and,
                '$or': or,
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
     * Create Inventory Item
     * Create an inventory item.
     * @param fields Comma-separated fields that should be included in the returned data. if a field is prefixed with `+` it will be added to the default fields, using `-` will remove it from the default fields. without prefix it will replace the entire default fields.
     * @param requestBody
     * @returns AdminInventoryItemResponse OK
     * @throws ApiError
     */
    public static adminPostInventoryItems(
        fields?: string,
        requestBody?: AdminCreateInventoryItem,
    ): CancelablePromise<AdminInventoryItemResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/admin/inventory-items',
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
     * Manage Inventory Levels
     * Manage inventory levels to create, update, or delete them.
     * @param requestBody
     * @returns AdminBatchInventoryItemsLocationLevelsResponse OK
     * @throws ApiError
     */
    public static adminPostInventoryItemsLocationLevelsBatch(
        requestBody?: AdminBatchInventoryItemsLocationLevels,
    ): CancelablePromise<AdminBatchInventoryItemsLocationLevelsResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/admin/inventory-items/location-levels/batch',
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
     * Get a Inventory Item
     * Retrieve a inventory item by its ID. You can expand the inventory item's relations or select the fields that should be returned.
     * @param id The inventory item's ID.
     * @param fields Comma-separated fields that should be included in the returned data. if a field is prefixed with `+` it will be added to the default fields, using `-` will remove it from the default fields. without prefix it will replace the entire default fields.
     * @returns AdminInventoryItemResponse OK
     * @throws ApiError
     */
    public static adminGetInventoryItemsId(
        id: string,
        fields?: string,
    ): CancelablePromise<AdminInventoryItemResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/admin/inventory-items/{id}',
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
     * Update an Inventory Item
     * Update an inventory item's details.
     * @param id The inventory item's ID.
     * @param fields Comma-separated fields that should be included in the returned data. if a field is prefixed with `+` it will be added to the default fields, using `-` will remove it from the default fields. without prefix it will replace the entire default fields.
     * @param requestBody
     * @returns AdminInventoryItemResponse OK
     * @throws ApiError
     */
    public static adminPostInventoryItemsId(
        id: string,
        fields?: string,
        requestBody?: AdminUpdateInventoryItem,
    ): CancelablePromise<AdminInventoryItemResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/admin/inventory-items/{id}',
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
    /**
     * Delete Inventory Item
     * Delete an inventory item.
     * @param id The inventory item's ID.
     * @returns any OK
     * @throws ApiError
     */
    public static adminDeleteInventoryItemsId(
        id: string,
    ): CancelablePromise<{
        /**
         * The inventory item's ID.
         */
        id: string;
        /**
         * The name of the deleted object.
         */
        object: string;
        /**
         * Whether the inventory item was deleted.
         */
        deleted: boolean;
    }> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/admin/inventory-items/{id}',
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
     * List Inventory Levels
     * Retrieve a list of inventory levels associated with an inventory item. The inventory levels can be filtered by fields like `location_id`. The inventory levels can also be paginated.
     * @param id The inventory item's ID.
     * @param fields Comma-separated fields that should be included in the returned data. if a field is prefixed with `+` it will be added to the default fields, using `-` will remove it from the default fields. without prefix it will replace the entire default fields.
     * @param offset The number of items to skip when retrieving a list.
     * @param limit Limit the number of items returned in the list.
     * @param order The field to sort the data by. By default, the sort order is ascending. To change the order to descending, prefix the field name with `-`.
     * @param and
     * @param or
     * @param withDeleted Whether to include deleted records in the result.
     * @returns any OK
     * @throws ApiError
     */
    public static adminGetInventoryItemsIdLocationLevels(
        id: string,
        fields?: string,
        offset?: number,
        limit?: number,
        order?: string,
        and?: Array<Record<string, any>>,
        or?: Array<Record<string, any>>,
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
         * The inventory item's inventory levels.
         */
        inventory_levels: Array<InventoryLevel>;
    })> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/admin/inventory-items/{id}/location-levels',
            path: {
                'id': id,
            },
            query: {
                'fields': fields,
                'offset': offset,
                'limit': limit,
                'order': order,
                '$and': and,
                '$or': or,
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
     * Create Inventory Level for Inventory Item
     * Create an inventory level for an inventory item.
     * @param id The inventory item's ID.
     * @param fields Comma-separated fields that should be included in the returned data. if a field is prefixed with `+` it will be added to the default fields, using `-` will remove it from the default fields. without prefix it will replace the entire default fields.
     * @param requestBody
     * @returns AdminInventoryItemResponse OK
     * @throws ApiError
     */
    public static adminPostInventoryItemsIdLocationLevels(
        id: string,
        fields?: string,
        requestBody?: AdminCreateInventoryLocationLevel,
    ): CancelablePromise<AdminInventoryItemResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/admin/inventory-items/{id}/location-levels',
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
    /**
     * Manage Inventory Levels of Inventory Item
     * Manage the inventory levels of an inventory item to create or delete them.
     * @param id The inventory item's ID.
     * @param requestBody
     * @returns any OK
     * @throws ApiError
     */
    public static adminPostInventoryItemsIdLocationLevelsBatch(
        id: string,
        requestBody?: AdminBatchInventoryItemLocationsLevel,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/admin/inventory-items/{id}/location-levels/batch',
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
     * Update an Inventory Level of an Inventory Item
     * Updates the details of an inventory item's inventory level using its associated location ID.
     * @param id The inventory item's ID.
     * @param locationId The ID of the location associated with the inventory level.
     * @param fields Comma-separated fields that should be included in the returned data. if a field is prefixed with `+` it will be added to the default fields, using `-` will remove it from the default fields. without prefix it will replace the entire default fields.
     * @param requestBody
     * @returns AdminInventoryItemResponse OK
     * @throws ApiError
     */
    public static adminPostInventoryItemsIdLocationLevelsLocationId(
        id: string,
        locationId: string,
        fields?: string,
        requestBody?: AdminUpdateInventoryLocationLevel,
    ): CancelablePromise<AdminInventoryItemResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/admin/inventory-items/{id}/location-levels/{location_id}',
            path: {
                'id': id,
                'location_id': locationId,
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
     * Remove Inventory Level of Inventory Item
     * Remove the inventory level of an inventory item.
     *
     * If the inventory level has reserved quantity greater than `0`, an error is thrown.
     *
     * @param id The inventory item's ID.
     * @param locationId The inventory item's location id.
     * @param fields Comma-separated fields that should be included in the returned data. if a field is prefixed with `+` it will be added to the default fields, using `-` will remove it from the default fields. without prefix it will replace the entire default fields.
     * @returns any OK
     * @throws ApiError
     */
    public static adminDeleteInventoryItemsIdLocationLevelsLocationId(
        id: string,
        locationId: string,
        fields?: string,
    ): CancelablePromise<({
        /**
         * The inventory item's ID.
         */
        id: string;
        /**
         * The name of the deleted object.
         */
        object: string;
        /**
         * Whether the Inventory Item was deleted.
         */
        deleted: boolean;
    } & {
        parent?: AdminInventoryItem;
    })> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/admin/inventory-items/{id}/location-levels/{location_id}',
            path: {
                'id': id,
                'location_id': locationId,
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
