/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * A schema for the creation of order return request.
 */
export type StoreCreateOrderReturnRequest = {
    /**
     * ID of the order
     */
    order_id?: string;
    /**
     * Customer note.
     */
    customer_note?: string;
    /**
     * ID of the shipping option
     */
    shipping_option_id?: string;
    /**
     * Array of items to return
     */
    line_items?: Array<{
        line_item_id?: string;
        quantity?: number;
        /**
         * ID of the reason for return
         */
        reason_id?: string;
    }>;
};

