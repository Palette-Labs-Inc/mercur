/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * The details to update in the shipping method.
 */
export type AdminPostClaimsShippingActionReqSchema = {
    /**
     * The shipping method's custom amount.
     */
    custom_amount?: number;
    /**
     * A note only viewed by admin users.
     */
    internal_note?: string;
    /**
     * The claim's metadata, can hold custom key-value pairs.
     */
    metadata?: Record<string, any>;
};

