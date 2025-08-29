/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * The updates to make on a changed shipping method.
 */
export type AdminUpdateDraftOrderActionShippingMethod = {
    /**
     * The ID of the associated shipping option.
     */
    shipping_option_id: string;
    /**
     * The custom amount of the shipping method. If not provided, the shipping option's amount will be used.
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

