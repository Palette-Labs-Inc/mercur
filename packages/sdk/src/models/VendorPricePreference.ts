/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * A price preference configuration for vendors.
 */
export type VendorPricePreference = {
    /**
     * The unique identifier for the price preference.
     */
    id: string;
    /**
     * The attribute name for the price preference.
     */
    attribute: string;
    /**
     * The value of the attribute for the price preference.
     */
    value: string;
    /**
     * Whether the price preference is tax inclusive.
     */
    is_tax_inclusive: boolean;
    /**
     * The date and time when the price preference was created.
     */
    created_at: string;
    /**
     * The date and time when the price preference was last updated.
     */
    updated_at: string;
    /**
     * The date and time when the price preference was deleted.
     */
    deleted_at?: string | null;
};

