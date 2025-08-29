/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { VendorProductType } from '../models/VendorProductType';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class VendorProductTypesService {
    /**
     * List product types
     * Retrieves a list of product types.
     * @param fields The comma-separated fields to include in the response
     * @param offset The number of items to skip before starting to collect the result set.
     * @param limit The number of items to return.
     * @returns any OK
     * @throws ApiError
     */
    public static vendorListProductTypes(
        fields?: string,
        offset?: number,
        limit?: number,
    ): CancelablePromise<{
        product_types?: Array<VendorProductType>;
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
            url: '/vendor/product-types',
            query: {
                'fields': fields,
                'offset': offset,
                'limit': limit,
            },
        });
    }
    /**
     * Get product type
     * Retrieves product type by id.
     * @param id The ID of the type
     * @param fields The comma-separated fields to include in the response
     * @returns any OK
     * @throws ApiError
     */
    public static vendorGetProductTypeById(
        id: string,
        fields?: string,
    ): CancelablePromise<{
        product_type?: VendorProductType;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/vendor/product-types/{id}',
            path: {
                'id': id,
            },
            query: {
                'fields': fields,
            },
        });
    }
}
