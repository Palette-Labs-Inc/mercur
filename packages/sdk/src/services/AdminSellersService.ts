/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AdminSeller } from '../models/AdminSeller';
import type { AdminSellerInvitation } from '../models/AdminSellerInvitation';
import type { VendorSeller } from '../models/VendorSeller';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class AdminSellersService {
    /**
     * List Sellers
     * Retrieves a list of sellers.
     * @param offset The number of items to skip before starting to collect the result set.
     * @param limit The number of items to return.
     * @param fields Comma-separated fields to include in the response.
     * @returns any OK
     * @throws ApiError
     */
    public static adminListSellers(
        offset?: number,
        limit?: number,
        fields?: string,
    ): CancelablePromise<{
        sellers?: Array<VendorSeller>;
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
            url: '/admin/sellers',
            query: {
                'offset': offset,
                'limit': limit,
                'fields': fields,
            },
        });
    }
    /**
     * Invite Seller
     * Sends an invitation to a new seller to join the platform.
     * @param requestBody
     * @returns any Created
     * @throws ApiError
     */
    public static adminInviteSeller(
        requestBody: {
            /**
             * The email address of the seller to invite.
             */
            email: string;
            /**
             * The registration URL for the invitation.
             */
            registration_url?: string;
        },
    ): CancelablePromise<{
        invitation?: AdminSellerInvitation;
    }> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/admin/sellers/invite',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad Request`,
            },
        });
    }
    /**
     * Get Seller
     * Retrieves a specific seller by its ID.
     * @param id The ID of the seller to retrieve.
     * @param fields Comma-separated fields to include in the response.
     * @returns any OK
     * @throws ApiError
     */
    public static adminGetSeller(
        id: string,
        fields?: string,
    ): CancelablePromise<{
        seller?: AdminSeller;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/admin/sellers/{id}',
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
     * Update Seller
     * Updates an existing seller with the specified properties.
     * @param id The ID of the seller to update.
     * @param requestBody
     * @returns any OK
     * @throws ApiError
     */
    public static adminUpdateSeller(
        id: string,
        requestBody: {
            /**
             * The name of the seller.
             */
            name?: string;
            /**
             * A description of the seller.
             */
            description?: string;
            /**
             * URL to the seller's photo.
             */
            photo?: string;
            /**
             * Store contact email.
             */
            email?: string;
            /**
             * Store contact phone.
             */
            phone?: string;
            /**
             * Seller address line.
             */
            address_line?: string;
            /**
             * Seller city.
             */
            city?: string;
            /**
             * Seller state.
             */
            state?: string;
            /**
             * Seller postal code.
             */
            postal_code?: string;
            /**
             * Seller country code.
             */
            country_code?: string;
            /**
             * Seller tax ID.
             */
            tax_id?: string;
            /**
             * The status of the seller's store.
             */
            store_status?: 'active' | 'inactive' | 'suspended';
        },
    ): CancelablePromise<{
        seller?: AdminSeller;
    }> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/admin/sellers/{id}',
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
     * List Seller Customer Groups
     * Retrieves a list of customer groups associated with a specific seller.
     * @param id The ID of the seller.
     * @param offset The number of items to skip before starting to collect the result set.
     * @param limit The number of items to return.
     * @param fields Comma-separated fields to include in the response.
     * @returns any OK
     * @throws ApiError
     */
    public static adminListSellerCustomerGroups(
        id: string,
        offset?: number,
        limit?: number,
        fields?: string,
    ): CancelablePromise<{
        /**
         * Array of customer groups associated with the seller.
         */
        customer_groups?: Array<Record<string, any>>;
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
            url: '/admin/sellers/{id}/customer-groups',
            path: {
                'id': id,
            },
            query: {
                'offset': offset,
                'limit': limit,
                'fields': fields,
            },
            errors: {
                404: `Not Found`,
            },
        });
    }
    /**
     * List Seller Orders
     * Retrieves a list of orders associated with a specific seller.
     * @param id The ID of the seller.
     * @param offset The number of items to skip before starting to collect the result set.
     * @param limit The number of items to return.
     * @param fields Comma-separated fields to include in the response.
     * @returns any OK
     * @throws ApiError
     */
    public static adminListSellerOrders(
        id: string,
        offset?: number,
        limit?: number,
        fields?: string,
    ): CancelablePromise<{
        /**
         * Array of orders associated with the seller.
         */
        orders?: Array<Record<string, any>>;
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
            url: '/admin/sellers/{id}/orders',
            path: {
                'id': id,
            },
            query: {
                'offset': offset,
                'limit': limit,
                'fields': fields,
            },
            errors: {
                404: `Not Found`,
            },
        });
    }
    /**
     * List Seller Products
     * Retrieves a list of products associated with a specific seller.
     * @param id The ID of the seller.
     * @param offset The number of items to skip before starting to collect the result set.
     * @param limit The number of items to return.
     * @param fields Comma-separated fields to include in the response.
     * @returns any OK
     * @throws ApiError
     */
    public static adminListSellerProducts(
        id: string,
        offset?: number,
        limit?: number,
        fields?: string,
    ): CancelablePromise<{
        /**
         * Array of products associated with the seller.
         */
        products?: Array<Record<string, any>>;
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
            url: '/admin/sellers/{id}/products',
            path: {
                'id': id,
            },
            query: {
                'offset': offset,
                'limit': limit,
                'fields': fields,
            },
            errors: {
                404: `Not Found`,
            },
        });
    }
}
