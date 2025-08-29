/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * The shipping method's details.
 */
export type AdminPostOrderEditsShippingActionReqSchema = {
    /**
     * Set a custom price for the shipping method.
     */
    custom_amount?: number;
    /**
     * A note viewed only by admin users.
     */
    internal_note?: string;
    /**
     * The order edit's metadata, can hold custom key-value pairs.
     */
    metadata?: Record<string, any>;
};

