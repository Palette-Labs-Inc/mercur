/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * The outbound shipping method's details.
 */
export type AdminPostExchangesShippingReqSchema = {
    /**
     * The ID of the associated shipping option.
     */
    shipping_option_id: string;
    /**
     * Set a custom amount for the shipping method.
     */
    custom_amount?: number;
    /**
     * The shipping method's description.
     */
    description?: string;
    /**
     * A note viewed by admin users only.
     */
    internal_note?: string;
    /**
     * The exchange's metadata, can hold custom key-value pairs.
     */
    metadata?: Record<string, any>;
};

