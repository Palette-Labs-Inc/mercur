/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AdminCustomerAddress } from './AdminCustomerAddress';
import type { AdminCustomerGroup } from './AdminCustomerGroup';
/**
 * The customer's details.
 */
export type AdminCustomer = {
    /**
     * The customer's ID.
     */
    id: string;
    /**
     * Whether the customer is registered.
     */
    has_account: boolean;
    /**
     * The customer's groups.
     */
    groups?: Array<AdminCustomerGroup>;
    /**
     * The customer's email.
     */
    email: string;
    /**
     * The ID of the address used as the default billing address.
     */
    default_billing_address_id: string;
    /**
     * The ID of the address used as the default shipping address.
     */
    default_shipping_address_id: string;
    /**
     * The customer's company name.
     */
    company_name: string;
    /**
     * The customer's first name.
     */
    first_name: string;
    /**
     * The customer's last name.
     */
    last_name: string;
    /**
     * The customer's addresses.
     */
    addresses: Array<AdminCustomerAddress>;
    /**
     * The customer's phone.
     */
    phone?: string;
    /**
     * The customer's metadata, used to store custom key-value pairs.
     */
    metadata?: Record<string, any>;
    /**
     * The ID of the user that created this customer, if available.
     */
    created_by?: string;
    /**
     * The customer's creation date.
     */
    created_at?: string;
    /**
     * The customer's update date.
     */
    updated_at?: string;
    /**
     * The customer's deletion date.
     */
    deleted_at?: string;
};

