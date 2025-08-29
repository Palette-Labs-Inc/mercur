/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * The address's details.
 */
export type StoreCreateCustomerAddress = {
    /**
     * The customer's first name.
     */
    first_name?: string;
    /**
     * The customer's last name.
     */
    last_name?: string;
    /**
     * The customer's phone.
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
     * The address's name.
     */
    address_name?: string;
    /**
     * Whether the address is used by default for shipping during checkout.
     */
    is_default_shipping?: boolean;
    /**
     * Whether the address is used by default for billing during checkout.
     */
    is_default_billing?: boolean;
    /**
     * Holds custom key-value pairs.
     */
    metadata?: Record<string, any>;
};

