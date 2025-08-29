/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * The properties to update in a stock location.
 */
export type AdminUpdateStockLocation = {
    /**
     * The stock location's name.
     */
    name?: string;
    /**
     * The stock location's address. Pass this property if you're creating a new address to associate with the location.
     */
    address?: {
        /**
         * The address's first line.
         */
        address_1: string;
        /**
         * The address's second line.
         */
        address_2?: string;
        /**
         * The address's company.
         */
        company?: string;
        /**
         * The address's city.
         */
        city?: string;
        /**
         * The address's country code.
         */
        country_code: string;
        /**
         * The address's phone.
         */
        phone?: string;
        /**
         * The address's postal code.
         */
        postal_code?: string;
        /**
         * The address's ISO 3166-2 province code. Must be lower-case.
         */
        province?: string;
    };
    /**
     * The ID of an existing stock location address to associate the stock location with.
     */
    address_id?: string;
    /**
     * The stock location's metadata, can hold custom key-value pairs.
     */
    metadata?: Record<string, any>;
};

