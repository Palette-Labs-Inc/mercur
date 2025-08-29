/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { VendorCreateShippingProfile } from '../models/VendorCreateShippingProfile';
import type { VendorShippingProfile } from '../models/VendorShippingProfile';
import type { VendorUpdateShippingProfile } from '../models/VendorUpdateShippingProfile';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class VendorShippingProfilesService {
    /**
     * List shipping profiles
     * Retrieves a list of shipping profiles.
     * @param fields The comma-separated fields to include in the response
     * @returns any OK
     * @throws ApiError
     */
    public static vendorListShippingProfiles(
        fields?: string,
    ): CancelablePromise<{
        shipping_profiles?: Array<VendorShippingProfile>;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/vendor/shipping-profiles',
            query: {
                'fields': fields,
            },
        });
    }
    /**
     * Create a Shipping profile
     * Creates a Shipping profile.
     * @param fields The comma-separated fields to include in the response
     * @param requestBody
     * @returns any Created
     * @throws ApiError
     */
    public static vendorCreateShippingProfile(
        fields?: string,
        requestBody?: VendorCreateShippingProfile,
    ): CancelablePromise<{
        shipping_profile?: VendorShippingProfile;
    }> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/vendor/shipping-profiles',
            query: {
                'fields': fields,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Get shipping profile
     * Retrieves a shipping profile by id.
     * @param id The ID of the shipping profile
     * @param fields The comma-separated fields to include in the response
     * @returns any OK
     * @throws ApiError
     */
    public static vendorGetShippingProfile(
        id: string,
        fields?: string,
    ): CancelablePromise<{
        shipping_profile?: VendorShippingProfile;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/vendor/shipping-profiles/{id}',
            path: {
                'id': id,
            },
            query: {
                'fields': fields,
            },
        });
    }
    /**
     * Update a Shipping profile
     * Updates a Shipping profile.
     * @param id The ID of the shipping profile
     * @param fields The comma-separated fields to include in the response
     * @param requestBody
     * @returns any OK
     * @throws ApiError
     */
    public static vendorUpdateShippingProfile(
        id: string,
        fields?: string,
        requestBody?: VendorUpdateShippingProfile,
    ): CancelablePromise<{
        shipping_profile?: VendorShippingProfile;
    }> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/vendor/shipping-profiles/{id}',
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
     * Delete shipping profile
     * Deletes shipping profile by id for the authenticated vendor.
     * @param id The ID of the shipping profile.
     * @returns any OK
     * @throws ApiError
     */
    public static vendorDeleteShippingProfileById(
        id: string,
    ): CancelablePromise<{
        /**
         * The ID of the deleted resource
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
            url: '/vendor/shipping-profiles/{id}',
            path: {
                'id': id,
            },
        });
    }
}
