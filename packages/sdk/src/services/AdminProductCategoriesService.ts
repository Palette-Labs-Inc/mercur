/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AdminCreateProductCategory } from '../models/AdminCreateProductCategory';
import type { AdminProductCategoryDeleteResponse } from '../models/AdminProductCategoryDeleteResponse';
import type { AdminProductCategoryListResponse } from '../models/AdminProductCategoryListResponse';
import type { AdminProductCategoryResponse } from '../models/AdminProductCategoryResponse';
import type { AdminUpdateProductCategory } from '../models/AdminUpdateProductCategory';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class AdminProductCategoriesService {
    /**
     * List Product Categories
     * Retrieve a list of product categories. The product categories can be filtered by fields such as `id`. The product categories can also be sorted or paginated.
     * @param fields Comma-separated fields that should be included in the returned data. if a field is prefixed with `+` it will be added to the default fields, using `-` will remove it from the default fields. without prefix it will replace the entire default fields. This API route restricts the fields that can be selected. Learn how to override the retrievable fields in the [Retrieve Custom Links](https://docs.medusajs.com/learn/fundamentals/api-routes/retrieve-custom-links) documentation.
     * @param offset The number of items to skip when retrieving a list.
     * @param limit Limit the number of items returned in the list.
     * @param order The field to sort the data by. By default, the sort order is ascending. To change the order to descending, prefix the field name with `-`.
     * @param q Search term to filter on the product category's searchable properties.
     * @param id
     * @param description
     * @param handle
     * @param parentCategoryId
     * @param includeAncestorsTree Whether to include the parent category of each category. If you enable this, add to the `fields` query parameter `parent_category` to set the parent of a category in this field. You can either pass `*parent_category` to retreieve the fields of all parent categories, or select specific fields to make the response size smaller. For example, `fields=parent_category.id,parent_category.name`.
     * @param includeDescendantsTree Whether to include the child categories of each category. If you enable this, add to the `fields` query parameter `category_children` to set the children of a category in this field. You can either pass `*category_children` to retreieve the fields of all child categories, or select specific fields to make the response size smaller. For example, `fields=category_children.id,category_children.name`.
     * @param isInternal Filter by whether the category is internal.
     * @param isActive Filter by whether the category is active.
     * @param createdAt Filter by the category's creation date.
     * @param updatedAt Filter by the category's update date.
     * @param deletedAt Filter by the category's deletion date.
     * @param and
     * @param or
     * @param name
     * @param withDeleted Whether to include deleted records in the result.
     * @returns AdminProductCategoryListResponse OK
     * @throws ApiError
     */
    public static adminGetProductCategories(
        fields?: string,
        offset?: number,
        limit?: number,
        order?: string,
        q?: string,
        id?: (string | Array<string>),
        description?: (string | Array<string>),
        handle?: (string | Array<string>),
        parentCategoryId?: (string | Array<string>),
        includeAncestorsTree?: boolean,
        includeDescendantsTree?: boolean,
        isInternal?: boolean,
        isActive?: boolean,
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
        name?: (string | Array<string>),
        withDeleted?: boolean,
    ): CancelablePromise<AdminProductCategoryListResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/admin/product-categories',
            query: {
                'fields': fields,
                'offset': offset,
                'limit': limit,
                'order': order,
                'q': q,
                'id': id,
                'description': description,
                'handle': handle,
                'parent_category_id': parentCategoryId,
                'include_ancestors_tree': includeAncestorsTree,
                'include_descendants_tree': includeDescendantsTree,
                'is_internal': isInternal,
                'is_active': isActive,
                'created_at': createdAt,
                'updated_at': updatedAt,
                'deleted_at': deletedAt,
                '$and': and,
                '$or': or,
                'name': name,
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
     * Create Product Category
     * Create a product category.
     * @param fields Comma-separated fields that should be included in the returned data. if a field is prefixed with `+` it will be added to the default fields, using `-` will remove it from the default fields. without prefix it will replace the entire default fields. This API route restricts the fields that can be selected. Learn how to override the retrievable fields in the [Retrieve Custom Links](https://docs.medusajs.com/learn/fundamentals/api-routes/retrieve-custom-links) documentation.
     * @param requestBody
     * @returns AdminProductCategoryResponse OK
     * @throws ApiError
     */
    public static adminPostProductCategories(
        fields?: string,
        requestBody?: AdminCreateProductCategory,
    ): CancelablePromise<AdminProductCategoryResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/admin/product-categories',
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
     * Get a Product Category
     * Retrieve a product category by its ID. You can expand the product category's relations or select the fields that should be returned.
     * @param id The product category's ID.
     * @param fields Comma-separated fields that should be included in the returned data. if a field is prefixed with `+` it will be added to the default fields, using `-` will remove it from the default fields. without prefix it will replace the entire default fields. This API route restricts the fields that can be selected. Learn how to override the retrievable fields in the [Retrieve Custom Links](https://docs.medusajs.com/learn/fundamentals/api-routes/retrieve-custom-links) documentation.
     * @param includeAncestorsTree Whether to retrieve the category's parent. If you enable this, add to the `fields` query parameter `parent_category` to set the parent of a category in this field. You can either pass `*parent_category` to retreieve the fields of all parent categories, or select specific fields to make the response size smaller. For example, `fields=parent_category.id,parent_category.name`.
     * @param includeDescendantsTree Whether to retrieve a list of child categories. If you enable this, add to the `fields` query parameter `category_children` to set the children of a category in this field. You can either pass `*category_children` to retreieve the fields of all child categories, or select specific fields to make the response size smaller. For example, `fields=category_children.id,category_children.name`.
     * @returns AdminProductCategoryResponse OK
     * @throws ApiError
     */
    public static adminGetProductCategoriesId(
        id: string,
        fields?: string,
        includeAncestorsTree?: boolean,
        includeDescendantsTree?: boolean,
    ): CancelablePromise<AdminProductCategoryResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/admin/product-categories/{id}',
            path: {
                'id': id,
            },
            query: {
                'fields': fields,
                'include_ancestors_tree': includeAncestorsTree,
                'include_descendants_tree': includeDescendantsTree,
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
     * Update a Product Category
     * Update a product category's details.
     * @param id The product category's ID.
     * @param fields Comma-separated fields that should be included in the returned data. if a field is prefixed with `+` it will be added to the default fields, using `-` will remove it from the default fields. without prefix it will replace the entire default fields. This API route restricts the fields that can be selected. Learn how to override the retrievable fields in the [Retrieve Custom Links](https://docs.medusajs.com/learn/fundamentals/api-routes/retrieve-custom-links) documentation.
     * @param requestBody
     * @returns AdminProductCategoryResponse OK
     * @throws ApiError
     */
    public static adminPostProductCategoriesId(
        id: string,
        fields?: string,
        requestBody?: AdminUpdateProductCategory,
    ): CancelablePromise<AdminProductCategoryResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/admin/product-categories/{id}',
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
     * Delete a Product Category
     * Delete a product category. This doesn't deleted products in that category.
     * @param id The product category's ID.
     * @returns AdminProductCategoryDeleteResponse OK
     * @throws ApiError
     */
    public static adminDeleteProductCategoriesId(
        id: string,
    ): CancelablePromise<AdminProductCategoryDeleteResponse> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/admin/product-categories/{id}',
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
     * Manage Products in Product Category
     * Manage products of a category to add or remove them.
     * @param id The product category's ID.
     * @param fields Comma-separated fields that should be included in the returned data. if a field is prefixed with `+` it will be added to the default fields, using `-` will remove it from the default fields. without prefix it will replace the entire default fields. This API route restricts the fields that can be selected. Learn how to override the retrievable fields in the [Retrieve Custom Links](https://docs.medusajs.com/learn/fundamentals/api-routes/retrieve-custom-links) documentation.
     * @param requestBody
     * @returns AdminProductCategoryResponse OK
     * @throws ApiError
     */
    public static adminPostProductCategoriesIdProducts(
        id: string,
        fields?: string,
        requestBody?: {
            /**
             * The products to add.
             */
            add?: Array<string>;
            /**
             * The product to remove.
             */
            remove?: Array<string>;
        },
    ): CancelablePromise<AdminProductCategoryResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/admin/product-categories/{id}/products',
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
}
