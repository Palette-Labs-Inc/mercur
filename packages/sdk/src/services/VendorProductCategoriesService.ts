/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { VendorProductCategory } from '../models/VendorProductCategory';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class VendorProductCategoriesService {
    /**
     * List product categories
     * Retrieves a list of product categories.
     * @param fields The comma-separated fields to include in the response
     * @param offset The number of items to skip before starting to collect the result set.
     * @param limit The number of items to return.
     * @returns any OK
     * @throws ApiError
     */
    public static vendorListProductCategories(
        fields?: string,
        offset?: number,
        limit?: number,
    ): CancelablePromise<{
        product_categories?: Array<VendorProductCategory>;
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
            url: '/vendor/product-categories',
            query: {
                'fields': fields,
                'offset': offset,
                'limit': limit,
            },
        });
    }
    /**
     * Get product category
     * Retrieves product category by id.
     * @param id The ID of the category
     * @param fields The comma-separated fields to include in the response
     * @returns any OK
     * @throws ApiError
     */
    public static vendorGetProductCategoryById(
        id: string,
        fields?: string,
    ): CancelablePromise<{
        product_category?: VendorProductCategory;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/vendor/product-categories/{id}',
            path: {
                'id': id,
            },
            query: {
                'fields': fields,
            },
        });
    }
}
