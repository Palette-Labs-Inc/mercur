/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { VendorCreateCustomerGroup } from '../models/VendorCreateCustomerGroup';
import type { VendorCustomerGroup } from '../models/VendorCustomerGroup';
import type { VendorLinkCustomersToGroup } from '../models/VendorLinkCustomersToGroup';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class VendorCustomerGroupsService {
    /**
     * List Customer Groups
     * Retrieves a list of customer groups.
     * @param limit The number of items to return. Default 50.
     * @param offset The number of items to skip before starting the response. Default 0.
     * @param fields Comma-separated fields that should be included in the returned data.
     * @returns any OK
     * @throws ApiError
     */
    public static vendorListCustomerGroups(
        limit?: number,
        offset?: number,
        fields?: string,
    ): CancelablePromise<{
        customer_groups?: Array<VendorCustomerGroup>;
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
            url: '/vendor/customer-groups',
            query: {
                'limit': limit,
                'offset': offset,
                'fields': fields,
            },
        });
    }
    /**
     * Create a customer group
     * Creates a new customer group
     * @param requestBody
     * @returns any Created
     * @throws ApiError
     */
    public static vendorCreateCustomerGroup(
        requestBody?: VendorCreateCustomerGroup,
    ): CancelablePromise<{
        customer_group?: VendorCustomerGroup;
    }> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/vendor/customer-groups',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Retrieve customer group by id
     * Retrieve customer group by id
     * @param id The ID of the Customer group.
     * @param fields Comma-separated fields that should be included in the returned data.
     * @returns any OK
     * @throws ApiError
     */
    public static vendorGetCustomerGroupById(
        id: string,
        fields?: string,
    ): CancelablePromise<{
        member?: VendorCustomerGroup;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/vendor/customer-groups/{id}',
            path: {
                'id': id,
            },
            query: {
                'fields': fields,
            },
        });
    }
    /**
     * Update customer group
     * Updates customer group
     * @param id The ID of the Customer group.
     * @param requestBody
     * @returns any Ok
     * @throws ApiError
     */
    public static vendorUpdateCustomerGroup(
        id: string,
        requestBody?: VendorCreateCustomerGroup,
    ): CancelablePromise<{
        customer_group?: VendorCustomerGroup;
    }> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/vendor/customer-groups/{id}',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Delete a customer group
     * Deletes a customer group by id.
     * @param id The ID of the Customer group.
     * @returns any OK
     * @throws ApiError
     */
    public static vendorDeleteCustomerGroupById(
        id: string,
    ): CancelablePromise<{
        /**
         * The ID of the deleted Customer group
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
            url: '/vendor/customer-groups/{id}',
            path: {
                'id': id,
            },
        });
    }
    /**
     * Link customers to customer group
     * Adds or removes customers to a customer group
     * @param id The ID of the Customer group.
     * @param requestBody
     * @returns any Ok
     * @throws ApiError
     */
    public static vendorUpdateCustomersInCustomerGroup(
        id: string,
        requestBody?: VendorLinkCustomersToGroup,
    ): CancelablePromise<{
        customer_group?: VendorCustomerGroup;
    }> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/vendor/customer-groups/{id}/customers',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
}
