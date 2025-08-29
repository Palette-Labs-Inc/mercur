/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * The region's details.
 */
export type AdminCreateRegion = {
    /**
     * The region's name.
     */
    name: string;
    /**
     * The region's currency code.
     */
    currency_code: string;
    /**
     * The region's countries.
     */
    countries?: Array<string>;
    /**
     * Whether taxes are calculated automatically during checkout in this region.
     */
    automatic_taxes?: boolean;
    /**
     * Whether prices in this region are tax inclusive.
     */
    is_tax_inclusive?: boolean;
    /**
     * The payment providers enabled in this region.
     */
    payment_providers?: Array<string>;
    /**
     * The region's metadata, used to store custom key-value pairs.
     */
    metadata?: Record<string, any>;
};

