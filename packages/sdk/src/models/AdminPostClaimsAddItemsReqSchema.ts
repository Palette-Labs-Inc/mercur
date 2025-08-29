/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * The details of the outbound items to add to the claim.
 */
export type AdminPostClaimsAddItemsReqSchema = {
    /**
     * The outbound item's details.
     */
    items?: Array<{
        /**
         * The ID of the associated product variant.
         */
        variant_id: string;
        /**
         * The quantity to send to the customer.
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
         * The item's metadata, can hold custom key-value pairs.
         */
        metadata?: Record<string, any>;
    }>;
};

