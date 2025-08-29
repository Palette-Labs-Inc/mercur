/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * The updates to make on a draft order's shipping method.
 */
export type AdminUpdateDraftOrderShippingMethod = {
    /**
     * The ID of the associated shipping option.
     */
    shipping_option_id?: string;
    /**
     * The custom amount of the shipping method. If not provided, the shipping option's amount will be used.
     */
    custom_amount?: number;
    /**
     * A note viewed only by admin users about the shipping method.
     */
    internal_note?: string;
};

