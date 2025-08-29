/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { StoreCustomerAddress } from './StoreCustomerAddress';
/**
 * The customer's details.
 */
export type StoreCustomer = {
    /**
     * The customer's ID.
     */
    id: string;
    /**
     * The customer's email.
     */
    email: string;
    /**
     * The ID of the address used for billing by default.
     */
    default_billing_address_id: string;
    /**
     * The ID of the address used for shipping by default.
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
    addresses: Array<StoreCustomerAddress>;
    /**
     * The customer's phone.
     */
    phone?: string;
    /**
     * The customer's metadata, can hold custom key-value pairs.
     */
    metadata?: Record<string, any>;
    /**
     * The date the customer was created.
     */
    created_at?: string;
    /**
     * The date the customer was updated.
     */
    updated_at?: string;
    /**
     * The date the customer was deleted.
     */
    deleted_at?: string;
};

