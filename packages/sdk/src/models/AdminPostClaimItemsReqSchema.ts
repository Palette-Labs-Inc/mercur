/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * The details of the order items to add to the claim.
 */
export type AdminPostClaimItemsReqSchema = {
    /**
     * The item's details.
     */
    items?: Array<{
        /**
         * The ID of the order's item.
         */
        id: string;
        /**
         * The quantity of the order's item to add to the claim.
         */
        quantity: number;
        /**
         * The reason the item is claimed.
         */
        reason?: 'missing_item' | 'wrong_item' | 'production_failure' | 'other';
        /**
         * The item's description.
         */
        description?: string;
        /**
         * A note that's only viewed by admin users.
         */
        internal_note?: string;
    }>;
};

