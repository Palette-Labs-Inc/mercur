/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Attribute } from '../models/Attribute';
import type { AttributePossibleValue } from '../models/AttributePossibleValue';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class AdminAttributesService {
    /**
     * List Attributes
     * Retrieves a list of attributes with optional filtering.
     * @param offset The number of items to skip before starting to collect the result set.
     * @param limit The number of items to return.
     * @param fields Comma-separated fields to include in the response.
     * @param id Filter by attribute ID.
     * @param name Filter by attribute name.
     * @param handle Filter by attribute handle.
     * @param isGlobal Filter for global attributes (not assigned to any category).
     * @param uiComponent Filter by UI component type.
     * @param createdAt Filter by creation date using operators.
     * @param updatedAt Filter by update date using operators.
     * @param deletedAt Filter by deletion date using operators.
     * @returns any OK
     * @throws ApiError
     */
    public static adminListAttributes(
        offset?: number,
        limit?: number,
        fields?: string,
        id?: string,
        name?: string,
        handle?: string,
        isGlobal?: boolean,
        uiComponent?: 'select' | 'multivalue' | 'unit' | 'toggle' | 'text_area' | 'color_picker',
        createdAt?: Record<string, any>,
        updatedAt?: Record<string, any>,
        deletedAt?: Record<string, any>,
    ): CancelablePromise<{
        attributes?: Array<Attribute>;
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
            url: '/admin/attributes',
            query: {
                'offset': offset,
                'limit': limit,
                'fields': fields,
                'id': id,
                'name': name,
                'handle': handle,
                'is_global': isGlobal,
                'ui_component': uiComponent,
                'created_at': createdAt,
                'updated_at': updatedAt,
                'deleted_at': deletedAt,
            },
        });
    }
    /**
     * Create Attribute
     * Creates a new attribute with the specified properties.
     * @param requestBody
     * @returns any Created
     * @throws ApiError
     */
    public static adminCreateAttribute(
        requestBody: {
            /**
             * The name of the attribute.
             */
            name: string;
            /**
             * A description of the attribute.
             */
            description?: string;
            /**
             * A unique handle for the attribute.
             */
            handle?: string;
            /**
             * Whether the attribute can be used for filtering products.
             */
            is_filterable?: boolean;
            /**
             * The UI component type for this attribute.
             */
            ui_component?: 'select' | 'multivalue' | 'unit' | 'toggle' | 'text_area' | 'color_picker';
            /**
             * Additional metadata for the attribute.
             */
            metadata?: Record<string, any>;
            /**
             * Array of possible values for the attribute (required when ui_component is 'select').
             */
            possible_values?: Array<{
                /**
                 * The value of the possible value.
                 */
                value: string;
                /**
                 * The rank/order of the possible value.
                 */
                rank: number;
                /**
                 * Additional metadata for the possible value.
                 */
                metadata?: Record<string, any>;
            }>;
            /**
             * Array of product category IDs to associate with this attribute.
             */
            product_category_ids?: Array<string>;
        },
    ): CancelablePromise<{
        attribute?: Attribute;
    }> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/admin/attributes',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad Request`,
            },
        });
    }
    /**
     * Get Attribute
     * Retrieves a specific attribute by its ID.
     * @param id The ID of the attribute to retrieve.
     * @param fields Comma-separated fields to include in the response.
     * @returns any OK
     * @throws ApiError
     */
    public static adminGetAttribute(
        id: string,
        fields?: string,
    ): CancelablePromise<{
        attribute?: Attribute;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/admin/attributes/{id}',
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
    /**
     * Update Attribute
     * Updates an existing attribute with the specified properties.
     * @param id The ID of the attribute to update.
     * @param requestBody
     * @returns any OK
     * @throws ApiError
     */
    public static adminUpdateAttribute(
        id: string,
        requestBody: {
            /**
             * The name of the attribute.
             */
            name?: string;
            /**
             * A description of the attribute.
             */
            description?: string;
            /**
             * A unique handle for the attribute.
             */
            handle?: string;
            /**
             * Whether the attribute can be used for filtering products.
             */
            is_filterable?: boolean;
            /**
             * The UI component type for this attribute.
             */
            ui_component?: 'select' | 'multivalue' | 'unit' | 'toggle' | 'text_area' | 'color_picker';
            /**
             * Additional metadata for the attribute.
             */
            metadata?: Record<string, any>;
            /**
             * Array of product category IDs to associate with this attribute.
             */
            product_category_ids?: Array<string>;
            /**
             * Array of possible values for the attribute.
             */
            possible_values?: Array<{
                /**
                 * The ID of the possible value (for updates).
                 */
                id?: string;
                /**
                 * The value of the possible value.
                 */
                value?: string;
                /**
                 * The rank/order of the possible value.
                 */
                rank?: number;
                /**
                 * Additional metadata for the possible value.
                 */
                metadata?: Record<string, any>;
            }>;
        },
    ): CancelablePromise<{
        attribute?: Attribute;
    }> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/admin/attributes/{id}',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                404: `Not Found`,
            },
        });
    }
    /**
     * Delete Attribute
     * Deletes an attribute and all its associated possible values.
     * @param id The ID of the attribute to delete.
     * @returns any OK
     * @throws ApiError
     */
    public static adminDeleteAttribute(
        id: string,
    ): CancelablePromise<{
        /**
         * The ID of the deleted attribute.
         */
        id?: string;
        object?: string;
        deleted?: boolean;
    }> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/admin/attributes/{id}',
            path: {
                'id': id,
            },
        });
    }
    /**
     * List Attribute Values
     * Retrieves a list of possible values for a specific attribute.
     * @param id The ID of the attribute.
     * @param offset The number of items to skip before starting to collect the result set.
     * @param limit The number of items to return.
     * @param fields Comma-separated fields to include in the response.
     * @returns any OK
     * @throws ApiError
     */
    public static adminListAttributeValues(
        id: string,
        offset?: number,
        limit?: number,
        fields?: string,
    ): CancelablePromise<{
        attribute_possible_values?: Array<AttributePossibleValue>;
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
            url: '/admin/attributes/{id}/values',
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
     * Create Attribute Value
     * Creates a new possible value for a specific attribute.
     * @param id The ID of the attribute.
     * @param requestBody
     * @returns any Created
     * @throws ApiError
     */
    public static adminCreateAttributeValue(
        id: string,
        requestBody: {
            /**
             * The value of the possible value.
             */
            value: string;
            /**
             * The rank/order of the possible value.
             */
            rank: number;
            /**
             * Additional metadata for the possible value.
             */
            metadata?: Record<string, any>;
        },
    ): CancelablePromise<{
        attribute_possible_value?: AttributePossibleValue;
    }> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/admin/attributes/{id}/values',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Get Attribute Value
     * Retrieves a specific attribute possible value by its ID.
     * @param id The ID of the attribute.
     * @param valueId The ID of the attribute possible value.
     * @param fields Comma-separated fields to include in the response.
     * @returns any OK
     * @throws ApiError
     */
    public static adminGetAttributeValue(
        id: string,
        valueId: string,
        fields?: string,
    ): CancelablePromise<{
        attribute_possible_value?: AttributePossibleValue;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/admin/attributes/{id}/values/{value_id}',
            path: {
                'id': id,
                'value_id': valueId,
            },
            query: {
                'fields': fields,
            },
            errors: {
                404: `Not Found`,
            },
        });
    }
    /**
     * Update Attribute Value
     * Updates an existing attribute possible value with the specified properties.
     * @param id The ID of the attribute.
     * @param valueId The ID of the attribute possible value to update.
     * @param requestBody
     * @returns any OK
     * @throws ApiError
     */
    public static adminUpdateAttributeValue(
        id: string,
        valueId: string,
        requestBody: {
            /**
             * The value of the possible value.
             */
            value?: string;
            /**
             * The rank/order of the possible value.
             */
            rank?: number;
            /**
             * Additional metadata for the possible value.
             */
            metadata?: Record<string, any>;
        },
    ): CancelablePromise<{
        attribute_possible_value?: AttributePossibleValue;
    }> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/admin/attributes/{id}/values/{value_id}',
            path: {
                'id': id,
                'value_id': valueId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                404: `Not Found`,
            },
        });
    }
}
