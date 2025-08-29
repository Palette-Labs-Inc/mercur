/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * The details of the shipping method to update.
 */
export type AdminPostExchangesShippingActionReqSchema = {
    /**
     * The shipping method's custom amount.
     */
    custom_amount?: number;
    /**
     * A note viewed by admin users only.
     */
    internal_note?: string;
    /**
     * The exchange's metadata, can hold custom key-value pairs.
     */
    metadata?: Record<string, any>;
};

