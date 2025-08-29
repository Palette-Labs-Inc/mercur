/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AdminPaymentProvider } from './AdminPaymentProvider';
import type { BaseRegionCountry } from './BaseRegionCountry';
/**
 * The region's details.
 */
export type BaseRegion = {
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
     * The region's automatic taxes.
     */
    automatic_taxes?: boolean;
    /**
     * The region's countries.
     */
    countries?: Array<BaseRegionCountry>;
    /**
     * The region's payment providers.
     */
    payment_providers?: Array<AdminPaymentProvider>;
    /**
     * The region's metadata.
     */
    metadata?: Record<string, any>;
    /**
     * The region's created at.
     */
    created_at?: string;
    /**
     * The region's updated at.
     */
    updated_at?: string;
};

