/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { VendorCreateOnboarding } from '../models/VendorCreateOnboarding';
import type { VendorCreatePayoutAccount } from '../models/VendorCreatePayoutAccount';
import type { VendorPayoutAccount } from '../models/VendorPayoutAccount';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class VendorPayoutAccountService {
    /**
     * Get Payout Account
     * Retrieves the payout account for the authenticated vendor.
     * @param fields Comma-separated fields that should be included in the returned data.
     * @returns any OK
     * @throws ApiError
     */
    public static vendorGetPayoutAccount(
        fields?: string,
    ): CancelablePromise<{
        payout_account?: VendorPayoutAccount;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/vendor/payout-account',
            query: {
                'fields': fields,
            },
        });
    }
    /**
     * Create Payout Account
     * Creates a payout account for the authenticated vendor.
     * @param requestBody
     * @returns any Created
     * @throws ApiError
     */
    public static vendorCreatePayoutAccount(
        requestBody?: VendorCreatePayoutAccount,
    ): CancelablePromise<{
        payout_account?: VendorPayoutAccount;
    }> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/vendor/payout-account',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Create Onboarding
     * Creates an onboarding for the authenticated vendor's payout account.
     * @param requestBody
     * @returns any OK
     * @throws ApiError
     */
    public static vendorCreateOnboarding(
        requestBody?: VendorCreateOnboarding,
    ): CancelablePromise<{
        payout_account?: VendorPayoutAccount;
    }> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/vendor/payout-account/onboarding',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Sync Payout Account
     * Synchronizes the payout account data with the payment processor for the authenticated vendor/seller.
     * @returns any OK
     * @throws ApiError
     */
    public static vendorSyncPayoutAccount(): CancelablePromise<{
        payout_account?: VendorPayoutAccount;
    }> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/vendor/payout-account/sync',
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }
}
