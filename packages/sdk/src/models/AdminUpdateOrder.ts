/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * The details to update in the order.
 */
export type AdminUpdateOrder = {
    /**
     * The order's email.
     */
    email?: string;
    /**
     * The order's shipping address.
     */
    shipping_address?: {
        /**
         * The address's first name.
         */
        first_name?: string;
        /**
         * The address's last name.
         */
        last_name?: string;
        /**
         * The address's phone.
         */
        phone?: string;
        /**
         * The address's company.
         */
        company?: string;
        /**
         * The address's first line.
         */
        address_1?: string;
        /**
         * The address's second line.
         */
        address_2?: string;
        /**
         * The address's city.
         */
        city?: string;
        /**
         * The address's country code.
         */
        country_code?: string;
        /**
         * The address's ISO 3166-2 province code. Must be lower-case.
         */
        province?: string;
        /**
         * The address's postal code.
         */
        postal_code?: string;
        /**
         * The address's metadata, can hold custom key-value pairs.
         */
        metadata?: Record<string, any>;
    };
    /**
     * The order's billing address.
     */
    billing_address?: {
        /**
         * The address's first name.
         */
        first_name?: string;
        /**
         * The address's last name.
         */
        last_name?: string;
        /**
         * The address's phone.
         */
        phone?: string;
        /**
         * The address's company.
         */
        company?: string;
        /**
         * The address's first line.
         */
        address_1?: string;
        /**
         * The address's second line.
         */
        address_2?: string;
        /**
         * The address's city.
         */
        city?: string;
        /**
         * The address's country code.
         */
        country_code?: string;
        /**
         * The address's ISO 3166-2 province code. Must be lower-case.
         */
        province?: string;
        /**
         * The address's postal code.
         */
        postal_code?: string;
        /**
         * The address's metadata, can hold custom key-value pairs.
         */
        metadata?: Record<string, any>;
    };
    /**
     * The order's metadata, can hold custom key-value pairs.
     */
    metadata?: Record<string, any>;
};

