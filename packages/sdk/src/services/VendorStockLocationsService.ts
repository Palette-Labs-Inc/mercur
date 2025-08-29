/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { VendorCreateStockLocation } from '../models/VendorCreateStockLocation';
import type { VendorCreateStockLocationFulfillmentSet } from '../models/VendorCreateStockLocationFulfillmentSet';
import type { VendorStockLocation } from '../models/VendorStockLocation';
import type { VendorUpdateStockLocation } from '../models/VendorUpdateStockLocation';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class VendorStockLocationsService {
    /**
     * List Stock Locations
     * Retrieves a list of Stock Locations.
     * @param fields The comma-separated fields to include in the response
     * @returns any OK
     * @throws ApiError
     */
    public static vendorListStockLocations(
        fields?: string,
    ): CancelablePromise<{
        stock_locations?: Array<VendorStockLocation>;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/vendor/stock-locations',
            query: {
                'fields': fields,
            },
        });
    }
    /**
     * Create a Stock Location
     * Creates a Stock Location.
     * @param fields The comma-separated fields to include in the response
     * @param requestBody
     * @returns any Created
     * @throws ApiError
     */
    public static vendorCreateStockLocation(
        fields?: string,
        requestBody?: VendorCreateStockLocation,
    ): CancelablePromise<{
        stock_location?: VendorStockLocation;
    }> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/vendor/stock-locations',
            query: {
                'fields': fields,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Get Stock Location
     * Retrieves a Stock Location by id.
     * @param id The ID of the Stock Location
     * @param fields The comma-separated fields to include in the response
     * @returns any OK
     * @throws ApiError
     */
    public static vendorGetStockLocation(
        id: string,
        fields?: string,
    ): CancelablePromise<{
        stock_location?: VendorStockLocation;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/vendor/stock-locations/{id}',
            path: {
                'id': id,
            },
            query: {
                'fields': fields,
            },
        });
    }
    /**
     * Update Stock Location
     * Updates a Stock Location.
     * @param id The ID of the Stock Location
     * @param fields The comma-separated fields to include in the response
     * @param requestBody
     * @returns any OK
     * @throws ApiError
     */
    public static vendorUpdateStockLocation(
        id: string,
        fields?: string,
        requestBody?: VendorUpdateStockLocation,
    ): CancelablePromise<{
        stock_location?: VendorStockLocation;
    }> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/vendor/stock-locations/{id}',
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
     * Delete stock location
     * Deletes stock location by id for the authenticated vendor.
     * @param id The ID of the stock location.
     * @returns any OK
     * @throws ApiError
     */
    public static vendorDeleteStockLocationById(
        id: string,
    ): CancelablePromise<{
        /**
         * The ID of the deleted resource
         */
        id?: string;
        /**
         * The type of the object that was deleted
         */
        object?: string;
        /**
         * Whether or not the items were deleted
         */
        deleted?: boolean;
    }> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/vendor/stock-locations/{id}',
            path: {
                'id': id,
            },
        });
    }
    /**
     * Update Stock Location Fulfillment Providers
     * Updates the fulfillment providers of a Stock Location.
     * @param id The ID of the Stock Location
     * @param fields The comma-separated fields to include in the response
     * @param requestBody
     * @returns any OK
     * @throws ApiError
     */
    public static vendorUpdateStockLocationFulfillmentProviders(
        id: string,
        fields?: string,
        requestBody?: {
            /**
             * Array of fulfillment provider IDs to add
             */
            add?: Array<string>;
            /**
             * Array of fulfillment provider IDs to remove
             */
            remove?: Array<string>;
        },
    ): CancelablePromise<{
        stock_location?: VendorStockLocation;
    }> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/vendor/stock-locations/{id}/fulfillment-providers',
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
     * Create a Fulfillment Set
     * Creates a Fulfillment Set for a Stock Location.
     * @param id The ID of the Stock Location.
     * @param fields The comma-separated fields to include in the response
     * @param requestBody
     * @returns any OK
     * @throws ApiError
     */
    public static vendorCreateStockLocationFulfillmentSet(
        id: string,
        fields?: string,
        requestBody?: VendorCreateStockLocationFulfillmentSet,
    ): CancelablePromise<{
        stock_location?: VendorStockLocation;
    }> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/vendor/stock-locations/{id}/fulfillment-sets',
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
     * Update Stock Location Sales Channels
     * Updates the sales channels of a Stock Location.
     * @param id The ID of the Stock Location
     * @param fields The comma-separated fields to include in the response
     * @param requestBody
     * @returns any OK
     * @throws ApiError
     */
    public static vendorUpdateStockLocationSalesChannels(
        id: string,
        fields?: string,
        requestBody?: {
            /**
             * Array of sales channel IDs to add
             */
            add?: Array<string>;
            /**
             * Array of sales channel IDs to remove
             */
            remove?: Array<string>;
        },
    ): CancelablePromise<{
        stock_location?: VendorStockLocation;
    }> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/vendor/stock-locations/{id}/sales-channels',
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
}
