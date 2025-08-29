/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * The propeties to update in the region.
 */
export type AdminUpdateRegion = {
    /**
     * The region's name.
     */
    name?: string;
    /**
     * The region's currency code.
     */
    currency_code?: string;
    /**
     * The region's countries.
     */
    countries?: Array<string>;
    /**
     * Whether taxes are calculated automatically for carts in the region.
     */
    automatic_taxes?: boolean;
    /**
     * The payment providers enabled in the region.
     */
    payment_providers?: Array<string>;
    /**
     * The region's metadata. Can hold custom key-value pairs.
     */
    metadata?: Record<string, any>;
    /**
     * Whether the prices in the region are tax inclusive.
     */
    is_tax_inclusive?: boolean;
};

