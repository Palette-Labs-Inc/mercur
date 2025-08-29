/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * The customer's address.
 */
export type AdminCustomerAddress = {
    /**
     * The address's ID.
     */
    id: string;
    /**
     * The address's name.
     */
    address_name: string;
    /**
     * Whether the address is the default shipping address.
     */
    is_default_shipping: boolean;
    /**
     * Whether the address is the default billing address.
     */
    is_default_billing: boolean;
    /**
     * The ID of the customer that this address belongs to.
     */
    customer_id: string;
    /**
     * The customer's company.
     */
    company: string;
    /**
     * The customer's first name.
     */
    first_name: string;
    /**
     * The customer's last name.
     */
    last_name: string;
    /**
     * The address's first line.
     */
    address_1: string;
    /**
     * The address's second line.
     */
    address_2: string;
    /**
     * The address's city.
     */
    city: string;
    /**
     * The address's country code.
     */
    country_code: string;
    /**
     * The address's lower-case ISO 3166-2 province code.
     */
    province: string;
    /**
     * The address's postal code.
     */
    postal_code: string;
    /**
     * The address's phone.
     */
    phone: string;
    /**
     * The address's metadata, used to store custom key-value pairs.
     */
    metadata: Record<string, any>;
    /**
     * The address's creation date.
     */
    created_at: string;
    /**
     * The address's update date.
     */
    updated_at: string;
};

