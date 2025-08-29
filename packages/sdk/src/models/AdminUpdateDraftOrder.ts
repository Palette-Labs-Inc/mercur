/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * The data to update in the draft order.
 */
export type AdminUpdateDraftOrder = {
    /**
     * The customer email associated with the draft order.
     */
    email?: string;
    /**
     * The draft order's shipping address.
     */
    shipping_address?: {
        /**
         * The shipping address's first name.
         */
        first_name?: string;
        /**
         * The shipping address's last name.
         */
        last_name?: string;
        /**
         * The shipping address's phone.
         */
        phone?: string;
        /**
         * The shipping address's company.
         */
        company?: string;
        /**
         * The first address line.
         */
        address_1?: string;
        /**
         * The second address line.
         */
        address_2?: string;
        /**
         * The shipping address's city.
         */
        city?: string;
        /**
         * The shipping address's country code.
         */
        country_code?: string;
        /**
         * The shipping address's ISO 3166-2 province code. Must be lower-case.
         */
        province?: string;
        /**
         * The shipping address's postal code.
         */
        postal_code?: string;
        /**
         * The shipping address's metadata, can hold custom key-value pairs.
         */
        metadata?: Record<string, any>;
    };
    /**
     * The draft order's billing address.
     */
    billing_address?: {
        /**
         * The billing address's first name.
         */
        first_name?: string;
        /**
         * The billing address's last name.
         */
        last_name?: string;
        /**
         * The billing address's phone.
         */
        phone?: string;
        /**
         * The billing address's company.
         */
        company?: string;
        /**
         * The first address line.
         */
        address_1?: string;
        /**
         * The second address line.
         */
        address_2?: string;
        /**
         * The billing address's city.
         */
        city?: string;
        /**
         * The billing address's country code.
         */
        country_code?: string;
        /**
         * The billing address's ISO 3166-2 province code. Must be lower-case.
         */
        province?: string;
        /**
         * The billing address's postal code.
         */
        postal_code?: string;
        /**
         * The billing address's metadata, can hold custom key-value pairs.
         */
        metadata?: Record<string, any>;
    };
    /**
     * The draft order's metadata, can hold custom key-value pairs.
     */
    metadata?: Record<string, any>;
    /**
     * The ID of the customer associated with the draft order.
     */
    customer_id?: string;
    /**
     * The ID of the sales channel associated with the draft order.
     */
    sales_channel_id?: string;
};

