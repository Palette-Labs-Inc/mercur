/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AdminBatchProductRequest } from '../models/AdminBatchProductRequest';
import type { AdminBatchProductResponse } from '../models/AdminBatchProductResponse';
import type { AdminBatchProductVariantRequest } from '../models/AdminBatchProductVariantRequest';
import type { AdminBatchProductVariantResponse } from '../models/AdminBatchProductVariantResponse';
import type { AdminCreateProduct } from '../models/AdminCreateProduct';
import type { AdminCreateProductOption } from '../models/AdminCreateProductOption';
import type { AdminCreateProductVariant } from '../models/AdminCreateProductVariant';
import type { AdminCreateVariantInventoryItem } from '../models/AdminCreateVariantInventoryItem';
import type { AdminExportProductResponse } from '../models/AdminExportProductResponse';
import type { AdminImportProductRequest } from '../models/AdminImportProductRequest';
import type { AdminImportProductResponse } from '../models/AdminImportProductResponse';
import type { AdminImportProducts } from '../models/AdminImportProducts';
import type { AdminProductDeleteResponse } from '../models/AdminProductDeleteResponse';
import type { AdminProductOption } from '../models/AdminProductOption';
import type { AdminProductOptionDeleteResponse } from '../models/AdminProductOptionDeleteResponse';
import type { AdminProductOptionResponse } from '../models/AdminProductOptionResponse';
import type { AdminProductResponse } from '../models/AdminProductResponse';
import type { AdminProductVariant } from '../models/AdminProductVariant';
import type { AdminProductVariantDeleteResponse } from '../models/AdminProductVariantDeleteResponse';
import type { AdminProductVariantInventoryBatchResponse } from '../models/AdminProductVariantInventoryBatchResponse';
import type { AdminProductVariantInventoryLinkDeleteResponse } from '../models/AdminProductVariantInventoryLinkDeleteResponse';
import type { AdminProductVariantResponse } from '../models/AdminProductVariantResponse';
import type { AdminUpdateProduct } from '../models/AdminUpdateProduct';
import type { AdminUpdateProductOption } from '../models/AdminUpdateProductOption';
import type { AdminUpdateProductVariant } from '../models/AdminUpdateProductVariant';
import type { AdminUpdateVariantInventoryItem } from '../models/AdminUpdateVariantInventoryItem';
import type { Attribute } from '../models/Attribute';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class AdminProductsService {
    /**
     * List Products
     * Retrieve a list of products. The products can be filtered by fields such as `id`. The products can also be sorted or paginated.
     * @param fields Comma-separated fields that should be included in the returned data. if a field is prefixed with `+` it will be added to the default fields, using `-` will remove it from the default fields. without prefix it will replace the entire default fields.
     * @param offset The number of items to skip when retrieving a list.
     * @param limit Limit the number of items returned in the list.
     * @param order The field to sort the data by. By default, the sort order is ascending. To change the order to descending, prefix the field name with `-`.
     * @param priceListId
     * @param q Search term to filter a product's searchable properties.
     * @param status
     * @param salesChannelId
     * @param title
     * @param handle
     * @param id
     * @param isGiftcard Filter by whether a product is a gift card.
     * @param tags Filter by associated tags to retrieve their products.
     * @param typeId
     * @param categoryId
     * @param createdAt Filter by a product's creation date.
     * @param updatedAt Filter by a product's update date.
     * @param deletedAt Filter by a product's deletion date.
     * @param and Join query parameters with an AND condition. Each object's content is the same type as the expected query parameters.
     * @param or Join query parameters with an OR condition. Each object's content is the same type as the expected query parameters.
     * @param collectionId
     * @param variants Filter the retrieved products' variants.
     * @returns any OK
     * @throws ApiError
     */
    public static adminGetProducts(
        fields?: string,
        offset?: number,
        limit?: number,
        order?: string,
        priceListId?: (string | Array<string>),
        q?: string,
        status?: (string | Array<'draft' | 'proposed' | 'published' | 'rejected'>),
        salesChannelId?: (string | Array<string>),
        title?: (string | Array<string>),
        handle?: (string | Array<string>),
        id?: (string | Array<string>),
        isGiftcard?: boolean,
        tags?: any,
        typeId?: (string | Array<string>),
        categoryId?: (string | Array<string>),
        createdAt?: {
            /**
             * Join query parameters with an AND condition. Each object's content is the same type as the expected query parameters.
             */
            $and?: Array<Record<string, any>>;
            /**
             * Join query parameters with an OR condition. Each object's content is the same type as the expected query parameters.
             */
            $or?: Array<Record<string, any>>;
            $eq?: (string | Array<string>);
            /**
             * Filter by values not equal to this parameter.
             */
            $ne?: string;
            /**
             * Filter by values in this array.
             */
            $in?: Array<string>;
            /**
             * Filter by values not in this array.
             */
            $nin?: Array<string>;
            $not?: (string | Record<string, any> | Array<string>);
            /**
             * Filter by values greater than this parameter. Useful for numbers and dates only.
             */
            $gt?: string;
            /**
             * Filter by values greater than or equal to this parameter. Useful for numbers and dates only.
             */
            $gte?: string;
            /**
             * Filter by values less than this parameter. Useful for numbers and dates only.
             */
            $lt?: string;
            /**
             * Filter by values less than or equal to this parameter. Useful for numbers and dates only.
             */
            $lte?: string;
            /**
             * Apply a `like` filter. Useful for strings only.
             */
            $like?: string;
            /**
             * Apply a regex filter. Useful for strings only.
             */
            $re?: string;
            /**
             * Apply a case-insensitive `like` filter. Useful for strings only.
             */
            $ilike?: string;
            /**
             * Filter to apply on full-text properties.
             */
            $fulltext?: string;
            /**
             * Filter arrays that have overlapping values with this parameter.
             */
            $overlap?: Array<string>;
            /**
             * Filter arrays that contain some of the values of this parameter.
             */
            $contains?: Array<string>;
            /**
             * Filter arrays that contain all values of this parameter.
             */
            $contained?: Array<string>;
            /**
             * Filter by whether a value for this parameter exists (not `null`).
             */
            $exists?: boolean;
        },
        updatedAt?: {
            /**
             * Join query parameters with an AND condition. Each object's content is the same type as the expected query parameters.
             */
            $and?: Array<Record<string, any>>;
            /**
             * Join query parameters with an OR condition. Each object's content is the same type as the expected query parameters.
             */
            $or?: Array<Record<string, any>>;
            $eq?: (string | Array<string>);
            /**
             * Filter by values not equal to this parameter.
             */
            $ne?: string;
            /**
             * Filter by values in this array.
             */
            $in?: Array<string>;
            /**
             * Filter by values not in this array.
             */
            $nin?: Array<string>;
            $not?: (string | Record<string, any> | Array<string>);
            /**
             * Filter by values greater than this parameter. Useful for numbers and dates only.
             */
            $gt?: string;
            /**
             * Filter by values greater than or equal to this parameter. Useful for numbers and dates only.
             */
            $gte?: string;
            /**
             * Filter by values less than this parameter. Useful for numbers and dates only.
             */
            $lt?: string;
            /**
             * Filter by values less than or equal to this parameter. Useful for numbers and dates only.
             */
            $lte?: string;
            /**
             * Apply a `like` filter. Useful for strings only.
             */
            $like?: string;
            /**
             * Apply a regex filter. Useful for strings only.
             */
            $re?: string;
            /**
             * Apply a case-insensitive `like` filter. Useful for strings only.
             */
            $ilike?: string;
            /**
             * Filter to apply on full-text properties.
             */
            $fulltext?: string;
            /**
             * Filter arrays that have overlapping values with this parameter.
             */
            $overlap?: Array<string>;
            /**
             * Filter arrays that contain some of the values of this parameter.
             */
            $contains?: Array<string>;
            /**
             * Filter arrays that contain all values of this parameter.
             */
            $contained?: Array<string>;
            /**
             * Filter by whether a value for this parameter exists (not `null`).
             */
            $exists?: boolean;
        },
        deletedAt?: {
            /**
             * Join query parameters with an AND condition. Each object's content is the same type as the expected query parameters.
             */
            $and?: Array<Record<string, any>>;
            /**
             * Join query parameters with an OR condition. Each object's content is the same type as the expected query parameters.
             */
            $or?: Array<Record<string, any>>;
            $eq?: (string | Array<string>);
            /**
             * Filter by values not equal to this parameter.
             */
            $ne?: string;
            /**
             * Filter by values in this array.
             */
            $in?: Array<string>;
            /**
             * Filter by values not in this array.
             */
            $nin?: Array<string>;
            $not?: (string | Record<string, any> | Array<string>);
            /**
             * Filter by values greater than this parameter. Useful for numbers and dates only.
             */
            $gt?: string;
            /**
             * Filter by values greater than or equal to this parameter. Useful for numbers and dates only.
             */
            $gte?: string;
            /**
             * Filter by values less than this parameter. Useful for numbers and dates only.
             */
            $lt?: string;
            /**
             * Filter by values less than or equal to this parameter. Useful for numbers and dates only.
             */
            $lte?: string;
            /**
             * Apply a `like` filter. Useful for strings only.
             */
            $like?: string;
            /**
             * Apply a regex filter. Useful for strings only.
             */
            $re?: string;
            /**
             * Apply a case-insensitive `like` filter. Useful for strings only.
             */
            $ilike?: string;
            /**
             * Filter to apply on full-text properties.
             */
            $fulltext?: string;
            /**
             * Filter arrays that have overlapping values with this parameter.
             */
            $overlap?: Array<string>;
            /**
             * Filter arrays that contain some of the values of this parameter.
             */
            $contains?: Array<string>;
            /**
             * Filter arrays that contain all values of this parameter.
             */
            $contained?: Array<string>;
            /**
             * Filter by whether a value for this parameter exists (not `null`).
             */
            $exists?: boolean;
        },
        and?: Array<Record<string, any>>,
        or?: Array<Record<string, any>>,
        collectionId?: (string | Array<string>),
        variants?: {
            id?: (string | Array<string>);
            /**
             * Filter by whether the Medusa application manages the variant's inventory.
             */
            manage_inventory?: boolean;
            /**
             * Filter by whether the variant can be ordered even if it's out of stock.
             */
            allow_backorder?: boolean;
            /**
             * Filter by the variant's creation date.
             */
            created_at?: {
                /**
                 * Join query parameters with an AND condition. Each object's content is the same type as the expected query parameters.
                 */
                $and?: Array<Record<string, any>>;
                /**
                 * Join query parameters with an OR condition. Each object's content is the same type as the expected query parameters.
                 */
                $or?: Array<Record<string, any>>;
                $eq?: (string | Array<string>);
                /**
                 * Filter by values not equal to this parameter.
                 */
                $ne?: string;
                /**
                 * Filter by values in this array.
                 */
                $in?: Array<string>;
                /**
                 * Filter by values not in this array.
                 */
                $nin?: Array<string>;
                $not?: (string | Record<string, any> | Array<string>);
                /**
                 * Filter by values greater than this parameter. Useful for numbers and dates only.
                 */
                $gt?: string;
                /**
                 * Filter by values greater than or equal to this parameter. Useful for numbers and dates only.
                 */
                $gte?: string;
                /**
                 * Filter by values less than this parameter. Useful for numbers and dates only.
                 */
                $lt?: string;
                /**
                 * Filter by values less than or equal to this parameter. Useful for numbers and dates only.
                 */
                $lte?: string;
                /**
                 * Apply a `like` filter. Useful for strings only.
                 */
                $like?: string;
                /**
                 * Apply a regex filter. Useful for strings only.
                 */
                $re?: string;
                /**
                 * Apply a case-insensitive `like` filter. Useful for strings only.
                 */
                $ilike?: string;
                /**
                 * Filter to apply on full-text properties.
                 */
                $fulltext?: string;
                /**
                 * Filter arrays that have overlapping values with this parameter.
                 */
                $overlap?: Array<string>;
                /**
                 * Filter arrays that contain some of the values of this parameter.
                 */
                $contains?: Array<string>;
                /**
                 * Filter arrays that contain all values of this parameter.
                 */
                $contained?: Array<string>;
                /**
                 * Filter by whether a value for this parameter exists (not `null`).
                 */
                $exists?: boolean;
            };
            /**
             * The variant's updated at.
             */
            updated_at?: {
                /**
                 * Join query parameters with an AND condition. Each object's content is the same type as the expected query parameters.
                 */
                $and?: Array<Record<string, any>>;
                /**
                 * Join query parameters with an OR condition. Each object's content is the same type as the expected query parameters.
                 */
                $or?: Array<Record<string, any>>;
                $eq?: (string | Array<string>);
                /**
                 * Filter by values not equal to this parameter.
                 */
                $ne?: string;
                /**
                 * Filter by values in this array.
                 */
                $in?: Array<string>;
                /**
                 * Filter by values not in this array.
                 */
                $nin?: Array<string>;
                $not?: (string | Record<string, any> | Array<string>);
                /**
                 * Filter by values greater than this parameter. Useful for numbers and dates only.
                 */
                $gt?: string;
                /**
                 * Filter by values greater than or equal to this parameter. Useful for numbers and dates only.
                 */
                $gte?: string;
                /**
                 * Filter by values less than this parameter. Useful for numbers and dates only.
                 */
                $lt?: string;
                /**
                 * Filter by values less than or equal to this parameter. Useful for numbers and dates only.
                 */
                $lte?: string;
                /**
                 * Apply a `like` filter. Useful for strings only.
                 */
                $like?: string;
                /**
                 * Apply a regex filter. Useful for strings only.
                 */
                $re?: string;
                /**
                 * Apply a case-insensitive `like` filter. Useful for strings only.
                 */
                $ilike?: string;
                /**
                 * Filter to apply on full-text properties.
                 */
                $fulltext?: string;
                /**
                 * Filter arrays that have overlapping values with this parameter.
                 */
                $overlap?: Array<string>;
                /**
                 * Filter arrays that contain some of the values of this parameter.
                 */
                $contains?: Array<string>;
                /**
                 * Filter arrays that contain all values of this parameter.
                 */
                $contained?: Array<string>;
                /**
                 * Filter by whether a value for this parameter exists (not `null`).
                 */
                $exists?: boolean;
            };
            /**
             * The variant's deleted at.
             */
            deleted_at?: {
                /**
                 * Join query parameters with an AND condition. Each object's content is the same type as the expected query parameters.
                 */
                $and?: Array<Record<string, any>>;
                /**
                 * Join query parameters with an OR condition. Each object's content is the same type as the expected query parameters.
                 */
                $or?: Array<Record<string, any>>;
                $eq?: (string | Array<string>);
                /**
                 * Filter by values not equal to this parameter.
                 */
                $ne?: string;
                /**
                 * Filter by values in this array.
                 */
                $in?: Array<string>;
                /**
                 * Filter by values not in this array.
                 */
                $nin?: Array<string>;
                $not?: (string | Record<string, any> | Array<string>);
                /**
                 * Filter by values greater than this parameter. Useful for numbers and dates only.
                 */
                $gt?: string;
                /**
                 * Filter by values greater than or equal to this parameter. Useful for numbers and dates only.
                 */
                $gte?: string;
                /**
                 * Filter by values less than this parameter. Useful for numbers and dates only.
                 */
                $lt?: string;
                /**
                 * Filter by values less than or equal to this parameter. Useful for numbers and dates only.
                 */
                $lte?: string;
                /**
                 * Apply a `like` filter. Useful for strings only.
                 */
                $like?: string;
                /**
                 * Apply a regex filter. Useful for strings only.
                 */
                $re?: string;
                /**
                 * Apply a case-insensitive `like` filter. Useful for strings only.
                 */
                $ilike?: string;
                /**
                 * Filter to apply on full-text properties.
                 */
                $fulltext?: string;
                /**
                 * Filter arrays that have overlapping values with this parameter.
                 */
                $overlap?: Array<string>;
                /**
                 * Filter arrays that contain some of the values of this parameter.
                 */
                $contains?: Array<string>;
                /**
                 * Filter arrays that contain all values of this parameter.
                 */
                $contained?: Array<string>;
                /**
                 * Filter by whether a value for this parameter exists (not `null`).
                 */
                $exists?: boolean;
            };
            /**
             * Limit the number of items returned in the list.
             */
            limit?: number;
            /**
             * The number of items to skip when retrieving a list.
             */
            offset?: number;
            /**
             * The field to sort the data by. By default, the sort order is ascending. To change the order to descending, prefix the field name with `-`.
             */
            order?: string;
            /**
             * Comma-separated fields that should be included in the returned data. if a field is prefixed with `+` it will be added to the default fields, using `-` will remove it from the default fields. without prefix it will replace the entire default fields.
             */
            fields?: string;
            /**
             * Join query parameters with an AND condition. Each object's content is the same type as the expected query parameters.
             */
            $and?: Array<Record<string, any>>;
            /**
             * Join query parameters with an OR condition. Each object's content is the same type as the expected query parameters.
             */
            $or?: Array<Record<string, any>>;
            ean?: (string | Array<string>);
            upc?: (string | Array<string>);
            barcode?: (string | Array<string>);
        },
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
         * The list of products.
         */
        products: Array<Record<string, any>>;
    })> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/admin/products',
            query: {
                'fields': fields,
                'offset': offset,
                'limit': limit,
                'order': order,
                'price_list_id': priceListId,
                'q': q,
                'status': status,
                'sales_channel_id': salesChannelId,
                'title': title,
                'handle': handle,
                'id': id,
                'is_giftcard': isGiftcard,
                'tags': tags,
                'type_id': typeId,
                'category_id': categoryId,
                'created_at': createdAt,
                'updated_at': updatedAt,
                'deleted_at': deletedAt,
                '$and': and,
                '$or': or,
                'collection_id': collectionId,
                'variants': variants,
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
     * Create Product
     * Create a product.
     * @param fields Comma-separated fields that should be included in the returned data. if a field is prefixed with `+` it will be added to the default fields, using `-` will remove it from the default fields. without prefix it will replace the entire default fields.
     * @param requestBody
     * @returns AdminProductResponse OK
     * @throws ApiError
     */
    public static adminPostProducts(
        fields?: string,
        requestBody?: (AdminCreateProduct & {
            /**
             * Pass additional custom data to the API route. This data is passed to the underlying workflow under the `additional_data` parameter.
             */
            additional_data?: Record<string, any>;
        }),
    ): CancelablePromise<AdminProductResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/admin/products',
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
     * Manage Products
     * Manage products to create, update, or delete them.
     * @param fields Comma-separated fields that should be included in the returned data. if a field is prefixed with `+` it will be added to the default fields, using `-` will remove it from the default fields. without prefix it will replace the entire default fields.
     * @param requestBody
     * @returns AdminBatchProductResponse OK
     * @throws ApiError
     */
    public static adminPostProductsBatch(
        fields?: string,
        requestBody?: AdminBatchProductRequest,
    ): CancelablePromise<AdminBatchProductResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/admin/products/batch',
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
     * Export Products
     * Start a product export process to retrieve a CSV of exported products.
     *
     * You'll receive in the response the transaction ID of the workflow generating the CSV file. To check the status of the execution, send a GET request to `/admin/workflows-executions/export-products/:transaction-id`.
     * Once the execution finishes successfully, a notification is created for the export. You can retrieve the notifications using the `/admin/notification` API route to retrieve the file's download URL.
     *
     * @param fields Comma-separated fields that should be included in the returned data. if a field is prefixed with `+` it will be added to the default fields, using `-` will remove it from the default fields. without prefix it will replace the entire default fields.
     * @returns AdminExportProductResponse OK
     * @throws ApiError
     */
    public static adminPostProductsExport(
        fields?: string,
    ): CancelablePromise<AdminExportProductResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/admin/products/export',
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
     * @deprecated
     * Create Product Import
     * Create a new product import process. The products aren't imported until the import is confirmed with the `/admin/products/:transaction-id/import` API route.
     * @param requestBody
     * @returns AdminImportProductResponse OK
     * @throws ApiError
     */
    public static adminPostProductsImport(
        requestBody?: AdminImportProductRequest,
    ): CancelablePromise<AdminImportProductResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/admin/products/import',
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
     * @deprecated
     * Confirm Product Import
     * Confirm that a created product import should start importing the products into Medusa.
     * @param transactionId The ID of the transaction returned when the product import was created.
     * @returns any OK
     * @throws ApiError
     */
    public static adminPostProductsImportTransactionIdConfirm(
        transactionId: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/admin/products/import/{transaction_id}/confirm',
            path: {
                'transaction_id': transactionId,
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
     * Create Product Import
     * Create a new product import process. The products aren't imported until the import is confirmed with the `/admin/products/:transaction-id/imports` API route.
     * @param requestBody
     * @returns AdminImportProductResponse OK
     * @throws ApiError
     */
    public static adminPostProductsImports(
        requestBody?: AdminImportProducts,
    ): CancelablePromise<AdminImportProductResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/admin/products/imports',
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
     * Confirm Product Import
     * Confirm that a created product import should start importing the products into Medusa.
     * @param transactionId The product's transaction id.
     * @returns any OK
     * @throws ApiError
     */
    public static adminPostProductsImportsTransactionIdConfirm(
        transactionId: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/admin/products/imports/{transaction_id}/confirm',
            path: {
                'transaction_id': transactionId,
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
     * Get a Product
     * Retrieve a product by its ID. You can expand the product's relations or select the fields that should be returned.
     * @param id The product's ID.
     * @param fields Comma-separated fields that should be included in the returned data. if a field is prefixed with `+` it will be added to the default fields, using `-` will remove it from the default fields. without prefix it will replace the entire default fields.
     * @returns AdminProductResponse OK
     * @throws ApiError
     */
    public static adminGetProductsId(
        id: string,
        fields?: string,
    ): CancelablePromise<AdminProductResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/admin/products/{id}',
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
     * Update a Product
     * Update a product's details.
     * @param id The product's ID.
     * @param fields Comma-separated fields that should be included in the returned data. if a field is prefixed with `+` it will be added to the default fields, using `-` will remove it from the default fields. without prefix it will replace the entire default fields.
     * @param requestBody
     * @returns AdminProductResponse OK
     * @throws ApiError
     */
    public static adminPostProductsId(
        id: string,
        fields?: string,
        requestBody?: (AdminUpdateProduct & {
            /**
             * Pass additional custom data to the API route. This data is passed to the underlying workflow under the `additional_data` parameter.
             */
            additional_data?: Record<string, any>;
        }),
    ): CancelablePromise<AdminProductResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/admin/products/{id}',
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
     * Delete a Product
     * Delete a product.
     * @param id The product's ID.
     * @returns AdminProductDeleteResponse OK
     * @throws ApiError
     */
    public static adminDeleteProductsId(
        id: string,
    ): CancelablePromise<AdminProductDeleteResponse> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/admin/products/{id}',
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
     * List a Product's Options
     * Retrieve a list of options of a product. The options can be filtered by fields like `id`. The options can also be paginated.
     * @param id The product's ID.
     * @param fields Comma-separated fields that should be included in the returned data. if a field is prefixed with `+` it will be added to the default fields, using `-` will remove it from the default fields. without prefix it will replace the entire default fields.
     * @param offset The number of items to skip when retrieving a list.
     * @param limit Limit the number of items returned in the list.
     * @param order The field to sort the data by. By default, the sort order is ascending. To change the order to descending, prefix the field name with `-`.
     * @param q Search term to filter the product option's searchable fields.
     * @param id
     * @param title
     * @param and Join query parameters with an AND condition. Each object's content is the same type as the expected query parameters.
     * @param or Join query parameters with an OR condition. Each object's content is the same type as the expected query parameters.
     * @param withDeleted Whether to include deleted records in the result.
     * @returns any OK
     * @throws ApiError
     */
    public static adminGetProductsIdOptions(
        id: string,
        fields?: string,
        offset?: number,
        limit?: number,
        order?: string,
        q?: string,
        id?: (string | Array<string>),
        title?: (string | Array<string>),
        and?: Array<Record<string, any>>,
        or?: Array<Record<string, any>>,
        withDeleted?: boolean,
    ): CancelablePromise<({
        /**
         * The maximum number of items returned.
         */
        limit: number;
        /**
         * The number of items skipped before the returned items.
         */
        offset: number;
        /**
         * The total number of items.
         */
        count: number;
    } & {
        /**
         * The list of product options.
         */
        product_options: Array<AdminProductOption>;
    })> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/admin/products/{id}/options',
            path: {
                'id': id,
            },
            query: {
                'fields': fields,
                'offset': offset,
                'limit': limit,
                'order': order,
                'q': q,
                'id': id,
                'title': title,
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
     * Create a Product Option
     * Create an option for a product.
     * @param id The product's ID.
     * @param fields Comma-separated fields that should be included in the returned data. if a field is prefixed with `+` it will be added to the default fields, using `-` will remove it from the default fields. without prefix it will replace the entire default fields.
     * @param requestBody
     * @returns AdminProductResponse OK
     * @throws ApiError
     */
    public static adminPostProductsIdOptions(
        id: string,
        fields?: string,
        requestBody?: (AdminCreateProductOption & {
            /**
             * Pass additional custom data to the API route. This data is passed to the underlying workflow under the `additional_data` parameter.
             */
            additional_data?: Record<string, any>;
        }),
    ): CancelablePromise<AdminProductResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/admin/products/{id}/options',
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
     * Get a Product's Option
     * Retrieve a product's option by its ID.
     * @param id The product's ID.
     * @param optionId The product's option id.
     * @param fields Comma-separated fields that should be included in the returned data. if a field is prefixed with `+` it will be added to the default fields, using `-` will remove it from the default fields. without prefix it will replace the entire default fields.
     * @returns AdminProductOptionResponse OK
     * @throws ApiError
     */
    public static adminGetProductsIdOptionsOptionId(
        id: string,
        optionId: string,
        fields?: string,
    ): CancelablePromise<AdminProductOptionResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/admin/products/{id}/options/{option_id}',
            path: {
                'id': id,
                'option_id': optionId,
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
     * Update a Product's Option
     * Update the details of a product option.
     * @param id The product's ID.
     * @param optionId The option's ID.
     * @param fields Comma-separated fields that should be included in the returned data. if a field is prefixed with `+` it will be added to the default fields, using `-` will remove it from the default fields. without prefix it will replace the entire default fields.
     * @param requestBody
     * @returns AdminProductResponse OK
     * @throws ApiError
     */
    public static adminPostProductsIdOptionsOptionId(
        id: string,
        optionId: string,
        fields?: string,
        requestBody?: (AdminUpdateProductOption & {
            /**
             * Pass additional custom data to the API route. This data is passed to the underlying workflow under the `additional_data` parameter.
             */
            additional_data?: Record<string, any>;
        }),
    ): CancelablePromise<AdminProductResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/admin/products/{id}/options/{option_id}',
            path: {
                'id': id,
                'option_id': optionId,
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
     * Delete an Option from Product
     * Delete an option from a product.
     *
     * Values of this option in the product's variants are removed.
     *
     * @param id The product's ID.
     * @param optionId The product option's ID.
     * @param fields Comma-separated fields that should be included in the returned data. if a field is prefixed with `+` it will be added to the default fields, using `-` will remove it from the default fields. without prefix it will replace the entire default fields.
     * @returns AdminProductOptionDeleteResponse OK
     * @throws ApiError
     */
    public static adminDeleteProductsIdOptionsOptionId(
        id: string,
        optionId: string,
        fields?: string,
    ): CancelablePromise<AdminProductOptionDeleteResponse> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/admin/products/{id}/options/{option_id}',
            path: {
                'id': id,
                'option_id': optionId,
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
     * List Variants of a Product
     * Retrieve a list of variants in a product. The variants can be filtered by fields like FILTER FIELDS. The variants can also be paginated.
     * @param id The product's ID.
     * @param fields Comma-separated fields that should be included in the returned data. if a field is prefixed with `+` it will be added to the default fields, using `-` will remove it from the default fields. without prefix it will replace the entire default fields.
     * @param offset The number of items to skip when retrieving a list.
     * @param limit Limit the number of items returned in the list.
     * @param order The field to sort the data by. By default, the sort order is ascending. To change the order to descending, prefix the field name with `-`.
     * @param q Search term to filter the variant's search attributes.
     * @param id
     * @param manageInventory Filter by whether a variant's `manage_inventory` property is enabled.
     * @param allowBackorder Filter by whether backorders are allowed for the variant.
     * @param createdAt Filter by the product's creation date.
     * @param updatedAt Filter by the product's update date.
     * @param deletedAt Filter by the product's deletion date.
     * @param and Join query parameters with an AND condition. Each object's content is the same type as the expected query parameters.
     * @param or Join query parameters with an OR condition. Each object's content is the same type as the expected query parameters.
     * @param withDeleted Whether to include deleted records in the result.
     * @param ean
     * @param upc
     * @param barcode
     * @returns any OK
     * @throws ApiError
     */
    public static adminGetProductsIdVariants(
        id: string,
        fields?: string,
        offset?: number,
        limit?: number,
        order?: string,
        q?: string,
        id?: (string | Array<string>),
        manageInventory?: boolean,
        allowBackorder?: boolean,
        createdAt?: {
            /**
             * Join query parameters with an AND condition. Each object's content is the same type as the expected query parameters.
             */
            $and?: Array<Record<string, any>>;
            /**
             * Join query parameters with an OR condition. Each object's content is the same type as the expected query parameters.
             */
            $or?: Array<Record<string, any>>;
            $eq?: (string | Array<string>);
            /**
             * Filter by values not equal to this parameter.
             */
            $ne?: string;
            /**
             * Filter by values in this array.
             */
            $in?: Array<string>;
            /**
             * Filter by values not in this array.
             */
            $nin?: Array<string>;
            $not?: (string | Record<string, any> | Array<string>);
            /**
             * Filter by values greater than this parameter. Useful for numbers and dates only.
             */
            $gt?: string;
            /**
             * Filter by values greater than or equal to this parameter. Useful for numbers and dates only.
             */
            $gte?: string;
            /**
             * Filter by values less than this parameter. Useful for numbers and dates only.
             */
            $lt?: string;
            /**
             * Filter by values less than or equal to this parameter. Useful for numbers and dates only.
             */
            $lte?: string;
            /**
             * Apply a `like` filter. Useful for strings only.
             */
            $like?: string;
            /**
             * Apply a regex filter. Useful for strings only.
             */
            $re?: string;
            /**
             * Apply a case-insensitive `like` filter. Useful for strings only.
             */
            $ilike?: string;
            /**
             * Filter to apply on full-text properties.
             */
            $fulltext?: string;
            /**
             * Filter arrays that have overlapping values with this parameter.
             */
            $overlap?: Array<string>;
            /**
             * Filter arrays that contain some of the values of this parameter.
             */
            $contains?: Array<string>;
            /**
             * Filter arrays that contain all values of this parameter.
             */
            $contained?: Array<string>;
            /**
             * Filter by whether a value for this parameter exists (not `null`).
             */
            $exists?: boolean;
        },
        updatedAt?: {
            /**
             * Join query parameters with an AND condition. Each object's content is the same type as the expected query parameters.
             */
            $and?: Array<Record<string, any>>;
            /**
             * Join query parameters with an OR condition. Each object's content is the same type as the expected query parameters.
             */
            $or?: Array<Record<string, any>>;
            $eq?: (string | Array<string>);
            /**
             * Filter by values not equal to this parameter.
             */
            $ne?: string;
            /**
             * Filter by values in this array.
             */
            $in?: Array<string>;
            /**
             * Filter by values not in this array.
             */
            $nin?: Array<string>;
            $not?: (string | Record<string, any> | Array<string>);
            /**
             * Filter by values greater than this parameter. Useful for numbers and dates only.
             */
            $gt?: string;
            /**
             * Filter by values greater than or equal to this parameter. Useful for numbers and dates only.
             */
            $gte?: string;
            /**
             * Filter by values less than this parameter. Useful for numbers and dates only.
             */
            $lt?: string;
            /**
             * Filter by values less than or equal to this parameter. Useful for numbers and dates only.
             */
            $lte?: string;
            /**
             * Apply a `like` filter. Useful for strings only.
             */
            $like?: string;
            /**
             * Apply a regex filter. Useful for strings only.
             */
            $re?: string;
            /**
             * Apply a case-insensitive `like` filter. Useful for strings only.
             */
            $ilike?: string;
            /**
             * Filter to apply on full-text properties.
             */
            $fulltext?: string;
            /**
             * Filter arrays that have overlapping values with this parameter.
             */
            $overlap?: Array<string>;
            /**
             * Filter arrays that contain some of the values of this parameter.
             */
            $contains?: Array<string>;
            /**
             * Filter arrays that contain all values of this parameter.
             */
            $contained?: Array<string>;
            /**
             * Filter by whether a value for this parameter exists (not `null`).
             */
            $exists?: boolean;
        },
        deletedAt?: {
            /**
             * Join query parameters with an AND condition. Each object's content is the same type as the expected query parameters.
             */
            $and?: Array<Record<string, any>>;
            /**
             * Join query parameters with an OR condition. Each object's content is the same type as the expected query parameters.
             */
            $or?: Array<Record<string, any>>;
            $eq?: (string | Array<string>);
            /**
             * Filter by values not equal to this parameter.
             */
            $ne?: string;
            /**
             * Filter by values in this array.
             */
            $in?: Array<string>;
            /**
             * Filter by values not in this array.
             */
            $nin?: Array<string>;
            $not?: (string | Record<string, any> | Array<string>);
            /**
             * Filter by values greater than this parameter. Useful for numbers and dates only.
             */
            $gt?: string;
            /**
             * Filter by values greater than or equal to this parameter. Useful for numbers and dates only.
             */
            $gte?: string;
            /**
             * Filter by values less than this parameter. Useful for numbers and dates only.
             */
            $lt?: string;
            /**
             * Filter by values less than or equal to this parameter. Useful for numbers and dates only.
             */
            $lte?: string;
            /**
             * Apply a `like` filter. Useful for strings only.
             */
            $like?: string;
            /**
             * Apply a regex filter. Useful for strings only.
             */
            $re?: string;
            /**
             * Apply a case-insensitive `like` filter. Useful for strings only.
             */
            $ilike?: string;
            /**
             * Filter to apply on full-text properties.
             */
            $fulltext?: string;
            /**
             * Filter arrays that have overlapping values with this parameter.
             */
            $overlap?: Array<string>;
            /**
             * Filter arrays that contain some of the values of this parameter.
             */
            $contains?: Array<string>;
            /**
             * Filter arrays that contain all values of this parameter.
             */
            $contained?: Array<string>;
            /**
             * Filter by whether a value for this parameter exists (not `null`).
             */
            $exists?: boolean;
        },
        and?: Array<Record<string, any>>,
        or?: Array<Record<string, any>>,
        withDeleted?: boolean,
        ean?: (string | Array<string>),
        upc?: (string | Array<string>),
        barcode?: (string | Array<string>),
    ): CancelablePromise<({
        /**
         * The maximum number of returned items.
         */
        limit: number;
        /**
         * The number of items skipped before the returned item.
         */
        offset: number;
        /**
         * The total number of items.
         */
        count: number;
    } & {
        /**
         * The list of product variants.
         */
        variants: Array<AdminProductVariant>;
    })> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/admin/products/{id}/variants',
            path: {
                'id': id,
            },
            query: {
                'fields': fields,
                'offset': offset,
                'limit': limit,
                'order': order,
                'q': q,
                'id': id,
                'manage_inventory': manageInventory,
                'allow_backorder': allowBackorder,
                'created_at': createdAt,
                'updated_at': updatedAt,
                'deleted_at': deletedAt,
                '$and': and,
                '$or': or,
                'with_deleted': withDeleted,
                'ean': ean,
                'upc': upc,
                'barcode': barcode,
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
     * Create a Product Variant
     * Create a variant for a product.
     * @param id The product's ID.
     * @param fields Comma-separated fields that should be included in the returned data. if a field is prefixed with `+` it will be added to the default fields, using `-` will remove it from the default fields. without prefix it will replace the entire default fields.
     * @param requestBody
     * @returns AdminProductResponse OK
     * @throws ApiError
     */
    public static adminPostProductsIdVariants(
        id: string,
        fields?: string,
        requestBody?: (AdminCreateProductVariant & {
            /**
             * Pass additional custom data to the API route. This data is passed to the underlying workflow under the `additional_data` parameter.
             */
            additional_data?: Record<string, any>;
        }),
    ): CancelablePromise<AdminProductResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/admin/products/{id}/variants',
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
     * Manage Variants in a Product
     * Manage variants in a product to create, update, or delete them.
     * @param id The product's ID.
     * @param fields Comma-separated fields that should be included in the returned data. if a field is prefixed with `+` it will be added to the default fields, using `-` will remove it from the default fields. without prefix it will replace the entire default fields.
     * @param requestBody
     * @returns AdminBatchProductVariantResponse OK
     * @throws ApiError
     */
    public static adminPostProductsIdVariantsBatch(
        id: string,
        fields?: string,
        requestBody?: AdminBatchProductVariantRequest,
    ): CancelablePromise<AdminBatchProductVariantResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/admin/products/{id}/variants/batch',
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
     * Manage Variants Inventory in a Product
     * Manage a product's variant's inventoris to associate them with inventory items, update their inventory items, or delete their association with inventory items.
     * @param id The product's ID.
     * @param requestBody
     * @returns AdminProductVariantInventoryBatchResponse OK
     * @throws ApiError
     */
    public static adminPostProductsIdVariantsInventoryItemsBatch(
        id: string,
        requestBody?: {
            /**
             * The The associations to create between product variants and inventory items.
             */
            create?: Array<{
                /**
                 * The number of units a single quantity is equivalent to. For example, if a customer orders one quantity of the variant, Medusa checks the availability of the quantity multiplied by the value set for `required_quantity`. When the customer orders the quantity, Medusa reserves the ordered quantity multiplied by the value set for `required_quantity`.
                 */
                required_quantity: number;
                /**
                 * The ID of the inventory item to associate the variant with.
                 */
                inventory_item_id: string;
                /**
                 * The ID of the variant.
                 */
                variant_id: string;
            }>;
            /**
             * The product variants to update their association with inventory items.
             */
            update?: Array<{
                /**
                 * The number of units a single quantity is equivalent to. For example, if a customer orders one quantity of the variant, Medusa checks the availability of the quantity multiplied by the value set for `required_quantity`. When the customer orders the quantity, Medusa reserves the ordered quantity multiplied by the value set for `required_quantity`.
                 */
                required_quantity: number;
                /**
                 * The ID of the inventory item the variant is associated with.
                 */
                inventory_item_id: string;
                /**
                 * The ID of the variant.
                 */
                variant_id: string;
            }>;
            /**
             * The product variants to delete their association with inventory items.
             */
            delete?: Array<{
                /**
                 * The ID of the inventory item associated with the variant.
                 */
                inventory_item_id: string;
                /**
                 * The ID of the variant.
                 */
                variant_id: string;
            }>;
        },
    ): CancelablePromise<AdminProductVariantInventoryBatchResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/admin/products/{id}/variants/inventory-items/batch',
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
     * Get Variant of a Product
     * Retrieve a product's variant by its ID.
     * @param id The product's ID.
     * @param variantId The variant's ID.
     * @param fields Comma-separated fields that should be included in the returned data. if a field is prefixed with `+` it will be added to the default fields, using `-` will remove it from the default fields. without prefix it will replace the entire default fields.
     * @returns AdminProductVariantResponse OK
     * @throws ApiError
     */
    public static adminGetProductsIdVariantsVariantId(
        id: string,
        variantId: string,
        fields?: string,
    ): CancelablePromise<AdminProductVariantResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/admin/products/{id}/variants/{variant_id}',
            path: {
                'id': id,
                'variant_id': variantId,
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
     * Update a Product Variant
     * Update a variant's details.
     * @param id The product's ID.
     * @param variantId The product's variant id.
     * @param fields Comma-separated fields that should be included in the returned data. if a field is prefixed with `+` it will be added to the default fields, using `-` will remove it from the default fields. without prefix it will replace the entire default fields.
     * @param requestBody
     * @returns AdminProductResponse OK
     * @throws ApiError
     */
    public static adminPostProductsIdVariantsVariantId(
        id: string,
        variantId: string,
        fields?: string,
        requestBody?: (AdminUpdateProductVariant & {
            /**
             * Pass additional custom data to the API route. This data is passed to the underlying workflow under the `additional_data` parameter.
             */
            additional_data?: Record<string, any>;
        }),
    ): CancelablePromise<AdminProductResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/admin/products/{id}/variants/{variant_id}',
            path: {
                'id': id,
                'variant_id': variantId,
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
     * Delete Product Variant
     * Delete a variant of a product.
     * @param id The product's ID.
     * @param variantId The product variant's ID.
     * @param fields Comma-separated fields that should be included in the returned data. if a field is prefixed with `+` it will be added to the default fields, using `-` will remove it from the default fields. without prefix it will replace the entire default fields.
     * @returns AdminProductVariantDeleteResponse OK
     * @throws ApiError
     */
    public static adminDeleteProductsIdVariantsVariantId(
        id: string,
        variantId: string,
        fields?: string,
    ): CancelablePromise<AdminProductVariantDeleteResponse> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/admin/products/{id}/variants/{variant_id}',
            path: {
                'id': id,
                'variant_id': variantId,
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
     * Associate Variant with Inventory Item
     * Associate with a product variant an inventory item that manages its inventory details.
     * @param id The product's ID.
     * @param variantId The variant's ID.
     * @param fields Comma-separated fields that should be included in the returned data. if a field is prefixed with `+` it will be added to the default fields, using `-` will remove it from the default fields. without prefix it will replace the entire default fields.
     * @param requestBody
     * @returns AdminProductVariantResponse OK
     * @throws ApiError
     */
    public static adminPostProductsIdVariantsVariantIdInventoryItems(
        id: string,
        variantId: string,
        fields?: string,
        requestBody?: AdminCreateVariantInventoryItem,
    ): CancelablePromise<AdminProductVariantResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/admin/products/{id}/variants/{variant_id}/inventory-items',
            path: {
                'id': id,
                'variant_id': variantId,
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
     * Update Product Variant's Inventory Details
     * Update the inventory item that manages the inventory details of a product variant.
     * @param id The product's ID.
     * @param variantId The variant's ID.
     * @param inventoryItemId The inventory item's ID.
     * @param fields Comma-separated fields that should be included in the returned data. if a field is prefixed with `+` it will be added to the default fields, using `-` will remove it from the default fields. without prefix it will replace the entire default fields.
     * @param requestBody
     * @returns AdminProductVariantResponse OK
     * @throws ApiError
     */
    public static adminPostProductsIdVariantsVariantIdInventoryItemsInventoryItemId(
        id: string,
        variantId: string,
        inventoryItemId: string,
        fields?: string,
        requestBody?: AdminUpdateVariantInventoryItem,
    ): CancelablePromise<AdminProductVariantResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/admin/products/{id}/variants/{variant_id}/inventory-items/{inventory_item_id}',
            path: {
                'id': id,
                'variant_id': variantId,
                'inventory_item_id': inventoryItemId,
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
     * Remove Inventory Item Association with Product Variant
     * Remove the association between an inventory item and its product variant.
     * @param id The product's ID.
     * @param variantId The products variant's ID.
     * @param inventoryItemId The inventory item's ID.
     * @param fields Comma-separated fields that should be included in the returned data. if a field is prefixed with `+` it will be added to the default fields, using `-` will remove it from the default fields. without prefix it will replace the entire default fields.
     * @returns AdminProductVariantInventoryLinkDeleteResponse OK
     * @throws ApiError
     */
    public static adminDeleteProductsIdVariantsVariantIdInventoryItemsInventoryItemId(
        id: string,
        variantId: string,
        inventoryItemId: string,
        fields?: string,
    ): CancelablePromise<AdminProductVariantInventoryLinkDeleteResponse> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/admin/products/{id}/variants/{variant_id}/inventory-items/{inventory_item_id}',
            path: {
                'id': id,
                'variant_id': variantId,
                'inventory_item_id': inventoryItemId,
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
     * Get Product Applicable Attributes
     * Retrieves all attributes that can be applied to a specific product, including global attributes and category-specific attributes.
     * @param id The ID of the product to get applicable attributes for.
     * @param fields Comma-separated fields to include in the response.
     * @returns any OK
     * @throws ApiError
     */
    public static adminGetProductApplicableAttributes(
        id: string,
        fields?: string,
    ): CancelablePromise<{
        /**
         * Array of attributes that can be applied to the product, including global attributes and category-specific attributes.
         */
        attributes?: Array<Attribute>;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/admin/products/{id}/applicable-attributes',
            path: {
                'id': id,
            },
            query: {
                'fields': fields,
            },
            errors: {
                404: `Not Found`,
            },
        });
    }
}
