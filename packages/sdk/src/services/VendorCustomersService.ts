/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { VendorCustomer } from '../models/VendorCustomer';
import type { VendorCustomerOrderOverview } from '../models/VendorCustomerOrderOverview';
import type { VendorUpdateCustomersCustomerGroups } from '../models/VendorUpdateCustomersCustomerGroups';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class VendorCustomersService {
    /**
     * List Customers
     * Retrieves a list of customers who placed an order in sellers store.
     * @param limit The number of items to return. Default 50.
     * @param offset The number of items to skip before starting the response. Default 0.
     * @param fields Comma-separated fields that should be included in the returned data.
     * @returns any OK
     * @throws ApiError
     */
    public static vendorListSellerCustomers(
        limit?: number,
        offset?: number,
        fields?: string,
    ): CancelablePromise<{
        customers?: Array<VendorCustomer>;
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
            url: '/vendor/customers',
            query: {
                'limit': limit,
                'offset': offset,
                'fields': fields,
            },
        });
    }
    /**
     * Get Customer details
     * Retrieves the details of specified customer.
     * @param id The ID of the customer.
     * @returns any OK
     * @throws ApiError
     */
    public static vendorGetCustomer(
        id: string,
    ): CancelablePromise<{
        customer?: VendorCustomer;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/vendor/customers/{id}',
            path: {
                'id': id,
            },
        });
    }
    /**
     * Link customers to customer group
     * Adds or removes customer groups to a customer
     * @param id The ID of the Customer.
     * @param requestBody
     * @returns any Ok
     * @throws ApiError
     */
    public static vendorLinkCustomerToCustomerGroups(
        id: string,
        requestBody?: VendorUpdateCustomersCustomerGroups,
    ): CancelablePromise<{
        customer?: VendorCustomer;
    }> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/vendor/customers/{id}/customer-groups',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * List Orders by customer id
     * Retrieves a list of orders for the specified customer.
     * @param id The ID of the customer.
     * @param offset The number of items to skip before starting to collect the result set.
     * @param limit The number of items to return.
     * @param fields Comma-separated fields to include in the response.
     * @returns any OK
     * @throws ApiError
     */
    public static vendorListOrdersByCustomerId(
        id: string,
        offset?: number,
        limit?: number,
        fields?: string,
    ): CancelablePromise<{
        orders?: Array<VendorCustomerOrderOverview>;
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
            url: '/vendor/customers/{id}/orders',
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
}
