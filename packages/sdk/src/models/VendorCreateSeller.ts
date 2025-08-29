/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type VendorCreateSeller = {
    /**
     * The name of the seller.
     */
    name: string;
    /**
     * A description of the seller.
     */
    description?: string | null;
    /**
     * Store contact email.
     */
    email?: string;
    /**
     * Store contact phone.
     */
    phone?: string;
    /**
     * URL to the seller's photo.
     */
    photo?: string | null;
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
    member: {
        /**
         * The name of the member.
         */
        name: string;
        /**
         * The email of the member.
         */
        email: string;
        /**
         * The member's biography.
         */
        bio?: string | null;
        /**
         * The member's phone number.
         */
        phone?: string | null;
        /**
         * URL to the member's photo.
         */
        photo?: string | null;
    };
};

