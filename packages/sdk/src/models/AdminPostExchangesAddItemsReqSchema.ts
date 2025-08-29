/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * The details of outbound items.
 */
export type AdminPostExchangesAddItemsReqSchema = {
    /**
     * The details of outbound items.
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
         * Whether the item can be added even if it's not in stock.
         */
        allow_backorder?: boolean;
        /**
         * The item's metadata, can hold custom key-value pairs.
         */
        metadata?: Record<string, any>;
    }>;
};

