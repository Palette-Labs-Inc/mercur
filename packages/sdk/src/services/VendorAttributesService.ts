/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { VendorAttribute } from '../models/VendorAttribute';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class VendorAttributesService {
    /**
     * List Attributes
     * Retrieves a list of attributes available to vendors with optional filtering.
     * @param offset The number of items to skip before starting to collect the result set.
     * @param limit The number of items to return.
     * @param fields Comma-separated fields to include in the response.
     * @param id Filter by attribute ID.
     * @param name Filter by attribute name.
     * @param handle Filter by attribute handle.
     * @param uiComponent Filter by UI component type.
     * @returns any OK
     * @throws ApiError
     */
    public static vendorListAttributes(
        offset?: number,
        limit?: number,
        fields?: string,
        id?: string,
        name?: string,
        handle?: string,
        uiComponent?: 'select' | 'multivalue' | 'unit' | 'toggle' | 'text_area' | 'color_picker',
    ): CancelablePromise<{
        attributes?: Array<VendorAttribute>;
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
            url: '/vendor/attributes',
            query: {
                'offset': offset,
                'limit': limit,
                'fields': fields,
                'id': id,
                'name': name,
                'handle': handle,
                'ui_component': uiComponent,
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
    public static vendorGetAttribute(
        id: string,
        fields?: string,
    ): CancelablePromise<{
        attribute?: VendorAttribute;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/vendor/attributes/{id}',
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
