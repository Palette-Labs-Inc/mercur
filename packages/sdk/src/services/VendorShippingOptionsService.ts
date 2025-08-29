/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { VendorCreateShippingOption } from '../models/VendorCreateShippingOption';
import type { VendorShippingOption } from '../models/VendorShippingOption';
import type { VendorUpdateShippingOption } from '../models/VendorUpdateShippingOption';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class VendorShippingOptionsService {
    /**
     * List Shipping Options
     * Retrieves a list of Shipping Options for authenticated vendor.
     * @returns any OK
     * @throws ApiError
     */
    public static vendorListShippingOptions(): CancelablePromise<{
        shipping_options?: Array<VendorShippingOption>;
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
            url: '/vendor/shipping-options',
        });
    }
    /**
     * Create a Shipping Option
     * Creates a Shipping Option for authenticated vendor.
     * @param requestBody
     * @returns any Created
     * @throws ApiError
     */
    public static vendorCreateShippingOption(
        requestBody?: VendorCreateShippingOption,
    ): CancelablePromise<{
        shipping_option?: VendorShippingOption;
    }> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/vendor/shipping-options',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Get a Shipping Option
     * Retrieves a Shipping Option by its ID.
     * @param id The ID of the Shipping Option.
     * @returns any OK
     * @throws ApiError
     */
    public static vendorGetShippingOptionById(
        id: string,
    ): CancelablePromise<{
        shipping_option?: VendorShippingOption;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/vendor/shipping-options/{id}',
            path: {
                'id': id,
            },
        });
    }
    /**
     * Update a Shipping Option
     * Updates a Shipping Option.
     * @param id The ID of the Shipping Option.
     * @param requestBody
     * @returns any OK
     * @throws ApiError
     */
    public static vendorUpdateShippingOptionById(
        id: string,
        requestBody?: VendorUpdateShippingOption,
    ): CancelablePromise<{
        shipping_option?: VendorShippingOption;
    }> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/vendor/shipping-options/{id}',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Delete a Shipping Option
     * Deletes a Shipping Option.
     * @param id The ID of the Shipping Option.
     * @returns any OK
     * @throws ApiError
     */
    public static vendorDeleteShippingOptionById(
        id: string,
    ): CancelablePromise<{
        /**
         * The ID of the deleted Shipping Option.
         */
        id?: string;
        /**
         * The type of the object that was deleted.
         */
        object?: string;
        /**
         * Whether or not the items were deleted.
         */
        deleted?: boolean;
    }> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/vendor/shipping-options/{id}',
            path: {
                'id': id,
            },
        });
    }
}
