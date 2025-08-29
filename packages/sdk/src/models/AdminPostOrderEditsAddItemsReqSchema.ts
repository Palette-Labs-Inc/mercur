/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * The details of items to be edited.
 */
export type AdminPostOrderEditsAddItemsReqSchema = {
    /**
     * The details of items to be edited.
     */
    items?: Array<{
        /**
         * The ID of the associated product variant.
         */
        variant_id: string;
        /**
         * The item's quantity.
         */
        quantity: number;
        /**
         * The item's unit price.
         */
        unit_price?: number;
        /**
         * A note viewed only by admin users.
         */
        internal_note?: string;
        /**
         * Whether the item can be added even if there's no available invenotory quantity of the variant.
         */
        allow_backorder?: boolean;
        /**
         * The item's metadata, can hold custom key-value pairs.
         */
        metadata?: Record<string, any>;
        /**
         * The original price of the item before a promotion or sale.
         */
        compare_at_unit_price?: number;
    }>;
};

