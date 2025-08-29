/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { VendorProductTag } from '../models/VendorProductTag';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class VendorProductTagsService {
    /**
     * List product tags
     * Retrieves a list of product tags.
     * @param fields The comma-separated fields to include in the response
     * @param offset The number of items to skip before starting to collect the result set.
     * @param limit The number of items to return.
     * @returns any OK
     * @throws ApiError
     */
    public static vendorListProductTags(
        fields?: string,
        offset?: number,
        limit?: number,
    ): CancelablePromise<{
        product_tags?: Array<VendorProductTag>;
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
            url: '/vendor/product-tags',
            query: {
                'fields': fields,
                'offset': offset,
                'limit': limit,
            },
        });
    }
    /**
     * Get product tag
     * Retrieves product tag by id.
     * @param id The ID of the tag
     * @param fields The comma-separated fields to include in the response
     * @returns any OK
     * @throws ApiError
     */
    public static vendorGetProductTagById(
        id: string,
        fields?: string,
    ): CancelablePromise<{
        product_tag?: VendorProductTag;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/vendor/product-tags/{id}',
            path: {
                'id': id,
            },
            query: {
                'fields': fields,
            },
        });
    }
}
