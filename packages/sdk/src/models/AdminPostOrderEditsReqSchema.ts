/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * The order edit's details.
 */
export type AdminPostOrderEditsReqSchema = {
    /**
     * The ID of the order this edit is for.
     */
    order_id: string;
    /**
     * The order edit's description.
     */
    description?: string;
    /**
     * A note viewed only by admin users.
     */
    internal_note?: string;
    /**
     * The order edit's metadata, can hold custom key-value pairs.
     */
    metadata?: Record<string, any>;
};

