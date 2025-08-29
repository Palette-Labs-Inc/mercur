/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { VendorOrderCountryCode } from './VendorOrderCountryCode';
/**
 * An order address.
 */
export type VendorOrderAddress = {
    /**
     * The address's ID.
     */
    id?: string;
    /**
     * The ID of the customer this address belongs to.
     */
    customer_id?: string;
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
    country?: VendorOrderCountryCode;
    /**
     * The address's province.
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
    /**
     * The date the address was created.
     */
    created_at?: string;
    /**
     * The date the address was updated.
     */
    updated_at?: string;
};

