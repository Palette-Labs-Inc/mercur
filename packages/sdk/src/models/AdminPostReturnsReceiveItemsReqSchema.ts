/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * The items details.
 */
export type AdminPostReturnsReceiveItemsReqSchema = {
    /**
     * The items details.
     */
    items?: Array<{
        /**
         * The ID of the item in the order.
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
    }>;
};

