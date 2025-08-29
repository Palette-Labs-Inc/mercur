/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * The items' details.
 */
export type AdminPostReturnsRequestItemsReqSchema = {
    /**
     * The items' details.
     */
    items?: Array<{
        /**
         * The item's ID.
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
         * The ID of the associated return reason.
         */
        reason_id?: string;
        /**
         * The item's metadata, can hold custom key-value pairs.
         */
        metadata?: Record<string, any>;
    }>;
};

