/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * A schema for the update seller request body.
 */
export type VendorUpdateSeller = {
    /**
     * The name of the seller.
     */
    name?: string;
    /**
     * A description of the seller.
     */
    description?: string | null;
    /**
     * URL to the seller's photo.
     */
    photo?: string | null;
    /**
     * Store contact email.
     */
    email?: string;
    /**
     * Store contact phone.
     */
    phone?: string;
    /**
     * Seller address line.
     */
    address_line?: string | null;
    /**
     * Seller postal code.
     */
    postal_code?: string | null;
    /**
     * Seller city.
     */
    city?: string | null;
    /**
     * Seller state.
     */
    state?: string | null;
    /**
     * Seller country code.
     */
    country_code?: string | null;
    /**
     * Seller tax id.
     */
    tax_id?: string | null;
};

