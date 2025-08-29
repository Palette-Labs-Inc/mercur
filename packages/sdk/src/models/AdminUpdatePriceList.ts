/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * the details to update in a price list.
 */
export type AdminUpdatePriceList = {
    /**
     * The price list's title.
     */
    title?: string;
    /**
     * The price list's description.
     */
    description?: string;
    /**
     * The date the price list starts.
     */
    starts_at?: string;
    /**
     * The date the price list ends.
     */
    ends_at?: string;
    /**
     * The price list's status.
     */
    status?: 'active' | 'draft';
    /**
     * The price list's type.
     */
    type?: 'sale' | 'override';
    /**
     * The price list's rules.
     */
    rules?: Record<string, any>;
};

