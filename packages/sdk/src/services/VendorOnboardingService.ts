/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { VendorSellerOnboarding } from '../models/VendorSellerOnboarding';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class VendorOnboardingService {
    /**
     * Get onboarding status of the current seller
     * Retrieves the onboarding details of the current authenticated seller.
     * @returns any OK
     * @throws ApiError
     */
    public static vendorGetOnboardingStatus(): CancelablePromise<{
        onboarding?: VendorSellerOnboarding;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/vendor/sellers/me/onboarding',
        });
    }
    /**
     * Recalculates onboarding status
     * Triggers onboarding status recalculation and retrieves the onboarding details of the current authenticated seller.
     * @returns any OK
     * @throws ApiError
     */
    public static vendorRecalculateOnboardingStatus(): CancelablePromise<{
        onboarding?: VendorSellerOnboarding;
    }> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/vendor/sellers/me/onboarding',
        });
    }
}
