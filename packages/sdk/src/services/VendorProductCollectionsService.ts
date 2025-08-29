/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { VendorProductCollection } from '../models/VendorProductCollection';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class VendorProductCollectionsService {
    /**
     * List product collections
     * Retrieves a list of product collections.
     * @param fields The comma-separated fields to include in the response
     * @param offset The number of items to skip before starting to collect the result set.
     * @param limit The number of items to return.
     * @returns any OK
     * @throws ApiError
     */
    public static vendorListProductCollections(
        fields?: string,
        offset?: number,
        limit?: number,
    ): CancelablePromise<{
        product_collections?: Array<VendorProductCollection>;
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
            url: '/vendor/product-collections',
            query: {
                'fields': fields,
                'offset': offset,
                'limit': limit,
            },
        });
    }
    /**
     * Get product collection
     * Retrieves product collection by id.
     * @param id The ID of the collection
     * @param fields The comma-separated fields to include in the response
     * @returns any OK
     * @throws ApiError
     */
    public static vendorGetProductCollectionById(
        id: string,
        fields?: string,
    ): CancelablePromise<{
        product_collection?: VendorProductCollection;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/vendor/product-collections/{id}',
            path: {
                'id': id,
            },
            query: {
                'fields': fields,
            },
        });
    }
}
