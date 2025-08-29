/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * The details of the items to add to a draft order.
 */
export type AdminAddDraftOrderItems = {
    /**
     * The items to add to the draft order.
     */
    items?: Array<{
        /**
         * The item's quantity.
         */
        quantity: number;
        /**
         * The ID of the variant to add to the draft order.
         */
        variant_id?: string;
        /**
         * The item's title.
         */
        title?: string;
        /**
         * The item's unit price.
         */
        unit_price?: number;
        /**
         * The original price of the item before a promotion or sale.
         */
        compare_at_unit_price?: number;
        /**
         * A note viewed only by admin users about the item.
         */
        internal_note?: string;
        /**
         * Whether the item can be purchased if it's out of stock.
         */
        allow_backorder?: boolean;
        /**
         * The item's metadata, can hold custom key-value pairs.
         */
        metadata?: Record<string, any>;
    }>;
};

