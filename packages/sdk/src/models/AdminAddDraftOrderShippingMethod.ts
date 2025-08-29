/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * The details of the shipping method to add to a draft order.
 */
export type AdminAddDraftOrderShippingMethod = {
    /**
     * The ID of the shipping option that this method is created from.
     */
    shipping_option_id: string;
    /**
     * A custom amount to be charged for this shipping method. If not provided, the shipping option's amount will be used.
     */
    custom_amount?: number;
    /**
     * The shipping method's description.
     */
    description?: string;
    /**
     * A note viewed only by admin users about the shipping method.
     */
    internal_note?: string;
    /**
     * The shipping method's metadata, can hold custom key-value pairs.
     */
    metadata?: Record<string, any>;
};

