/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * The return's details.
 */
export type AdminPostReturnsReqSchema = {
    /**
     * The ID of the order the return belongs to.
     */
    order_id: string;
    /**
     * The ID of the location the items are returned to.
     */
    location_id?: string;
    /**
     * The return's description.
     */
    description?: string;
    /**
     * A note viewed only by admin users.
     */
    internal_note?: string;
    /**
     * Whether to send the customer a notification about the created return.
     */
    no_notification?: boolean;
    /**
     * The return's metadata, can hold custom key-value pairs.
     */
    metadata?: Record<string, any>;
};

