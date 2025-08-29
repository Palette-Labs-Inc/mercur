/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { VendorCreatePriceList } from '../models/VendorCreatePriceList';
import type { VendorCreatePriceListPrice } from '../models/VendorCreatePriceListPrice';
import type { VendorPriceList } from '../models/VendorPriceList';
import type { VendorProduct } from '../models/VendorProduct';
import type { VendorRemoveProductsFromPriceList } from '../models/VendorRemoveProductsFromPriceList';
import type { VendorUpdatePriceList } from '../models/VendorUpdatePriceList';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class VendorPriceListsService {
    /**
     * List Price lists
     * Retrieves a list of price lists.
     * @param limit The number of items to return. Default 50.
     * @param offset The number of items to skip before starting the response. Default 0.
     * @param fields Comma-separated fields that should be included in the returned data.
     * @returns any OK
     * @throws ApiError
     */
    public static vendorListPriceLists(
        limit?: number,
        offset?: number,
        fields?: string,
    ): CancelablePromise<{
        price_lists?: Array<VendorPriceList>;
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
            url: '/vendor/price-lists',
            query: {
                'limit': limit,
                'offset': offset,
                'fields': fields,
            },
        });
    }
    /**
     * Create price list
     * Creates new price list
     * @param fields Comma-separated fields to include in the response.
     * @param requestBody
     * @returns any OK
     * @throws ApiError
     */
    public static vendorCreatePriceList(
        fields?: string,
        requestBody?: VendorCreatePriceList,
    ): CancelablePromise<{
        price_list?: VendorPriceList;
    }> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/vendor/price-lists',
            query: {
                'fields': fields,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Get price list details
     * Retrieves the details of specified price list.
     * @param id The ID of the price list.
     * @returns any OK
     * @throws ApiError
     */
    public static vendorGetPriceListById(
        id: string,
    ): CancelablePromise<{
        price_list?: VendorPriceList;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/vendor/price-lists/{id}',
            path: {
                'id': id,
            },
        });
    }
    /**
     * Update price list
     * Updates price list price
     * @param id The ID of the price list.
     * @param fields Comma-separated fields to include in the response.
     * @param requestBody
     * @returns any OK
     * @throws ApiError
     */
    public static vendorUpdatePriceList(
        id: string,
        fields?: string,
        requestBody?: VendorUpdatePriceList,
    ): CancelablePromise<{
        price_list?: VendorPriceList;
    }> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/vendor/price-lists/{id}',
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
     * Delete a Price List
     * Delete a price list.
     * @param id The price list's ID.
     * @returns any OK
     * @throws ApiError
     */
    public static vendorDeletePriceListsId(
        id: string,
    ): CancelablePromise<{
        /**
         * The ID of the deleted Price list
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
            url: '/vendor/price-lists/{id}',
            path: {
                'id': id,
            },
        });
    }
    /**
     * Create price list
     * Creates new price list price
     * @param id The ID of the price list.
     * @param fields Comma-separated fields to include in the response.
     * @param requestBody
     * @returns any OK
     * @throws ApiError
     */
    public static vendorCreatePriceListPrice(
        id: string,
        fields?: string,
        requestBody?: VendorCreatePriceListPrice,
    ): CancelablePromise<{
        price_list?: VendorPriceList;
    }> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/vendor/price-lists/{id}/prices',
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
     * Deletes price list price
     * Deletes price list price by id.
     * @param id The ID of the price list.
     * @param priceId The ID of the price.
     * @returns any OK
     * @throws ApiError
     */
    public static vendorDeletePriceListPriceById(
        id: string,
        priceId: string,
    ): CancelablePromise<{
        /**
         * The ID of the deleted Price
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
            url: '/vendor/price-lists/{id}/prices/{price_id}',
            path: {
                'id': id,
                'price_id': priceId,
            },
        });
    }
    /**
     * List Products in a given price list
     * Retrieves a list of products in the given price list.
     * @param id The ID of the price list.
     * @param offset The number of items to skip before starting to collect the result set.
     * @param limit The number of items to return.
     * @param fields Comma-separated fields to include in the response.
     * @returns any OK
     * @throws ApiError
     */
    public static vendorListProductsInPriceList(
        id: string,
        offset?: number,
        limit?: number,
        fields?: string,
    ): CancelablePromise<{
        products?: Array<VendorProduct>;
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
            url: '/vendor/price-lists/{id}/products',
            path: {
                'id': id,
            },
            query: {
                'offset': offset,
                'limit': limit,
                'fields': fields,
            },
        });
    }
    /**
     * Update price list
     * Updates price list price
     * @param id The ID of the price list.
     * @param fields Comma-separated fields to include in the response.
     * @param requestBody
     * @returns any OK
     * @throws ApiError
     */
    public static vendorRemoveProductsFromPriceList(
        id: string,
        fields?: string,
        requestBody?: VendorRemoveProductsFromPriceList,
    ): CancelablePromise<{
        price_list?: VendorPriceList;
    }> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/vendor/price-lists/{id}/products',
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
