/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CreateProductOption } from '../models/CreateProductOption';
import type { CreateProductVariant } from '../models/CreateProductVariant';
import type { UpdateProductOption } from '../models/UpdateProductOption';
import type { UpdateProductVariant } from '../models/UpdateProductVariant';
import type { VendorAssignBrandName } from '../models/VendorAssignBrandName';
import type { VendorAttribute } from '../models/VendorAttribute';
import type { VendorCreateProduct } from '../models/VendorCreateProduct';
import type { VendorProduct } from '../models/VendorProduct';
import type { VendorUpdateProduct } from '../models/VendorUpdateProduct';
import type { VendorUpdateProductStatus } from '../models/VendorUpdateProductStatus';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class VendorProductsService {
    /**
     * List Products
     * Retrieves a list of products for the authenticated vendor.
     * @param offset The number of items to skip before starting to collect the result set.
     * @param limit The number of items to return.
     * @param fields Comma-separated fields to include in the response.
     * @param order The order of the returned items.
     * @returns any OK
     * @throws ApiError
     */
    public static vendorListProducts(
        offset?: number,
        limit?: number,
        fields?: string,
        order?: string,
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
            url: '/vendor/products',
            query: {
                'offset': offset,
                'limit': limit,
                'fields': fields,
                'order': order,
            },
        });
    }
    /**
     * Create a Product
     * Creates a new product for the authenticated vendor.
     * @param requestBody
     * @returns any Created
     * @throws ApiError
     */
    public static vendorCreateProduct(
        requestBody?: VendorCreateProduct,
    ): CancelablePromise<{
        product?: VendorProduct;
    }> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/vendor/products',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Get a Product
     * Retrieves a product by id for the authenticated vendor.
     * @param id The ID of the Product.
     * @param fields Comma-separated fields to include in the response.
     * @returns any OK
     * @throws ApiError
     */
    public static vendorGetProductById(
        id: string,
        fields?: string,
    ): CancelablePromise<{
        product?: VendorProduct;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/vendor/products/{id}',
            path: {
                'id': id,
            },
            query: {
                'fields': fields,
            },
        });
    }
    /**
     * Update a Product
     * Updates an existing product for the authenticated vendor.
     * @param id The ID of the Product.
     * @param fields Comma-separated fields to include in the response.
     * @param requestBody
     * @returns any OK
     * @throws ApiError
     */
    public static vendorUpdateProductById(
        id: string,
        fields?: string,
        requestBody?: VendorUpdateProduct,
    ): CancelablePromise<{
        product?: VendorProduct;
    }> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/vendor/products/{id}',
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
     * Delete a Product
     * Deletes a product by id for the authenticated vendor.
     * @param id The ID of the Product.
     * @returns any OK
     * @throws ApiError
     */
    public static vendorDeleteProductById(
        id: string,
    ): CancelablePromise<{
        /**
         * The ID of the deleted Product
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
            url: '/vendor/products/{id}',
            path: {
                'id': id,
            },
        });
    }
    /**
     * Get Product Applicable Attributes
     * Retrieves the applicable attributes for a specific product, including global attributes and category-specific attributes.
     * @param id The ID of the product
     * @param fields The comma-separated fields to include in the response
     * @returns any OK
     * @throws ApiError
     */
    public static vendorGetProductApplicableAttributes(
        id: string,
        fields?: string,
    ): CancelablePromise<{
        /**
         * Array of applicable attributes for the product
         */
        attributes?: Array<VendorAttribute>;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/vendor/products/{id}/applicable-attributes',
            path: {
                'id': id,
            },
            query: {
                'fields': fields,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }
    /**
     * Assign brand to the Product
     * Upserts brand and links to the product
     * @param id The ID of the Product.
     * @param fields Comma-separated fields to include in the response.
     * @param requestBody
     * @returns any OK
     * @throws ApiError
     */
    public static vendorAssignBrandToProduct(
        id: string,
        fields?: string,
        requestBody?: VendorAssignBrandName,
    ): CancelablePromise<{
        product?: VendorProduct;
    }> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/vendor/products/{id}/brand',
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
     * Create option for product
     * Creates option for product.
     * @param id The ID of the Product.
     * @param fields Comma-separated fields to include in the response.
     * @param requestBody
     * @returns any OK
     * @throws ApiError
     */
    public static vendorCreateOptionForProductById(
        id: string,
        fields?: string,
        requestBody?: CreateProductOption,
    ): CancelablePromise<{
        product?: VendorProduct;
    }> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/vendor/products/{id}/options',
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
     * Update a Product option
     * Updates an existing product option for the authenticated vendor.
     * @param id The ID of the Product.
     * @param optionId The ID of the Option.
     * @param fields Comma-separated fields to include in the response.
     * @param requestBody
     * @returns any OK
     * @throws ApiError
     */
    public static vendorUpdateProductOptionById(
        id: string,
        optionId: string,
        fields?: string,
        requestBody?: UpdateProductOption,
    ): CancelablePromise<{
        product?: VendorProduct;
    }> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/vendor/products/{id}/options/{option_id}',
            path: {
                'id': id,
                'option_id': optionId,
            },
            query: {
                'fields': fields,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Delete a Product option
     * Deletes a product option by id for the authenticated vendor.
     * @param id The ID of the Product.
     * @param optionId The ID of the Option.
     * @returns any OK
     * @throws ApiError
     */
    public static vendorDeleteProductOptionById(
        id: string,
        optionId: string,
    ): CancelablePromise<{
        /**
         * The ID of the deleted Product option
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
            url: '/vendor/products/{id}/options/{option_id}',
            path: {
                'id': id,
                'option_id': optionId,
            },
        });
    }
    /**
     * Update a Product status
     * Updates an existing product status for the authenticated vendor.
     * @param id The ID of the Product.
     * @param fields Comma-separated fields to include in the response.
     * @param requestBody
     * @returns any OK
     * @throws ApiError
     */
    public static vendorUpdateProductStatusById(
        id: string,
        fields?: string,
        requestBody?: VendorUpdateProductStatus,
    ): CancelablePromise<{
        product?: VendorProduct;
    }> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/vendor/products/{id}/status',
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
     * Create variant for product
     * Creates variant for product.
     * @param id The ID of the Product.
     * @param fields Comma-separated fields to include in the response.
     * @param requestBody
     * @returns any OK
     * @throws ApiError
     */
    public static vendorCreateVariantForProductById(
        id: string,
        fields?: string,
        requestBody?: CreateProductVariant,
    ): CancelablePromise<{
        product?: VendorProduct;
    }> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/vendor/products/{id}/variants',
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
     * Update a Product variant
     * Updates an existing product variant for the authenticated vendor.
     * @param id The ID of the Product.
     * @param variantId The ID of the Variant.
     * @param fields Comma-separated fields to include in the response.
     * @param requestBody
     * @returns any OK
     * @throws ApiError
     */
    public static vendorUpdateProductVariantById(
        id: string,
        variantId: string,
        fields?: string,
        requestBody?: UpdateProductVariant,
    ): CancelablePromise<{
        product?: VendorProduct;
    }> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/vendor/products/{id}/variants/{variant_id}',
            path: {
                'id': id,
                'variant_id': variantId,
            },
            query: {
                'fields': fields,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Delete a Product variant
     * Deletes a product variant by id for the authenticated vendor.
     * @param id The ID of the Product.
     * @param variantId The ID of the Variant.
     * @returns any OK
     * @throws ApiError
     */
    public static vendorDeleteProductVariantById(
        id: string,
        variantId: string,
    ): CancelablePromise<{
        /**
         * The ID of the deleted Product variant
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
            url: '/vendor/products/{id}/variants/{variant_id}',
            path: {
                'id': id,
                'variant_id': variantId,
            },
        });
    }
}
