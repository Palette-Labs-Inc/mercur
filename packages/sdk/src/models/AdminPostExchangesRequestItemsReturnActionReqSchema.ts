/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * The details to update in an inbound (returned) item.
 */
export type AdminPostExchangesRequestItemsReturnActionReqSchema = {
    /**
     * The item's quantity.
     */
    quantity?: number;
    /**
     * A note viewed only by admin users.
     */
    internal_note?: string;
    /**
     * The ID of the associated return reason.
     */
    reason_id?: string;
    /**
     * The exchange's metadata, can hold custom key-value pairs.
     */
    metadata?: Record<string, any>;
};

