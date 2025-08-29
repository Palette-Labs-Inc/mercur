/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * The return's details.
 */
export type AdminPostReturnsReturnReqSchema = {
    /**
     * The ID of the location to return items to.
     */
    location_id?: string;
    /**
     * Whether the customer should receive notifications about updates to the return.
     */
    no_notification?: boolean;
    /**
     * The return's metadata, can hold custom key-value pairs.
     */
    metadata?: Record<string, any>;
};

