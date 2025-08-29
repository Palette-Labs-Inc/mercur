/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * The details of the inbound (return) items.
 */
export type AdminPostExchangesReturnRequestItemsReqSchema = {
    /**
     * The details of the inbound (return) items.
     */
    items?: Array<{
        /**
         * The ID of the order's item.
         */
        id: string;
        /**
         * The item's quantity.
         */
        quantity: number;
        /**
         * The item's description.
         */
        description?: string;
        /**
         * A note viewed only by admin users.
         */
        internal_note?: string;
        /**
         * The ID of the return reason to associate with the item.
         */
        reason_id?: string;
        /**
         * The item's metadata, can hold custom key-value pairs.
         */
        metadata?: Record<string, any>;
    }>;
};

