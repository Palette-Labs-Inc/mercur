/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { VendorCreateSeller } from '../models/VendorCreateSeller';
import type { VendorRequest } from '../models/VendorRequest';
import type { VendorSeller } from '../models/VendorSeller';
import type { VendorUpdateSeller } from '../models/VendorUpdateSeller';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class VendorSellersService {
    /**
     * Create a Seller
     * Creates a request to create a new seller with an initial owner member.
     * @param requestBody
     * @returns any Created
     * @throws ApiError
     */
    public static vendorCreateSeller(
        requestBody?: VendorCreateSeller,
    ): CancelablePromise<{
        request?: VendorRequest;
    }> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/vendor/sellers',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Get Current Seller
     * Retrieves the seller associated with the authenticated user.
     * @returns any OK
     * @throws ApiError
     */
    public static vendorGetSellerMe(): CancelablePromise<{
        seller?: VendorSeller;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/vendor/sellers/me',
        });
    }
    /**
     * Update Current Seller
     * Updates the seller associated with the authenticated user.
     * @param requestBody
     * @returns any OK
     * @throws ApiError
     */
    public static vendorUpdateSellerMe(
        requestBody?: VendorUpdateSeller,
    ): CancelablePromise<{
        seller?: VendorSeller;
    }> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/vendor/sellers/me',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
}
