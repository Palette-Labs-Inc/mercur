/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AdminPaymentProvider } from './AdminPaymentProvider';
import type { AdminRegionCountry } from './AdminRegionCountry';
/**
 * The region's details.
 */
export type AdminRegion = {
    /**
     * The region's ID.
     */
    id: string;
    /**
     * The region's name.
     */
    name: string;
    /**
     * The region's currency code.
     */
    currency_code: string;
    /**
     * Whether taxes are applied automatically during checkout.
     */
    automatic_taxes?: boolean;
    /**
     * The region's countries.
     */
    countries?: Array<AdminRegionCountry>;
    /**
     * The region's payment providers.
     */
    payment_providers?: Array<AdminPaymentProvider>;
    /**
     * The region's metadata, can hold custom key-value pairs.
     */
    metadata?: Record<string, any>;
    /**
     * The date the region was created.
     */
    created_at?: string;
    /**
     * The date the region was updated.
     */
    updated_at?: string;
};

