/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * The properties to update in a store.
 */
export type AdminUpdateStore = {
    /**
     * The store's name.
     */
    name?: string;
    /**
     * The store's supported currencies.
     */
    supported_currencies?: Array<{
        /**
         * The currency's code.
         */
        currency_code: string;
        /**
         * Whether the currency is the default in the store.
         */
        is_default?: boolean;
        /**
         * Whether prices using this currency are tax inclusive.
         */
        is_tax_inclusive?: boolean;
    }>;
    /**
     * The ID of the default sales channel in the store.
     */
    default_sales_channel_id?: string;
    /**
     * The ID of the default region in the store.
     */
    default_region_id?: string;
    /**
     * The ID of the default stock location in the store.
     */
    default_location_id?: string;
    /**
     * The store's metadata, can hold custom key-value pairs.
     */
    metadata?: Record<string, any>;
};

