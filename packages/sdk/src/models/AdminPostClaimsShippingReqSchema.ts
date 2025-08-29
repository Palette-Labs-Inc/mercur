/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * The details of the shipping method used to ship outbound items.
 */
export type AdminPostClaimsShippingReqSchema = {
    /**
     * The ID of the associated shipping option.
     */
    shipping_option_id: string;
    /**
     * Set a custom price for the shipping method.
     */
    custom_amount?: number;
    /**
     * The shipping method's description.
     */
    description?: string;
    /**
     * A note only viewed by admin users.
     */
    internal_note?: string;
    /**
     * The claim's metadata, can hold custom key-value pairs.
     */
    metadata?: Record<string, any>;
};

