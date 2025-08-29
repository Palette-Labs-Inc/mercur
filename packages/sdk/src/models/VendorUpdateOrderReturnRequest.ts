/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * A schema for the update of order return request.
 */
export type VendorUpdateOrderReturnRequest = {
    /**
     * Reviewer note.
     */
    vendor_reviewer_note?: string;
    /**
     * Location ID to use for the return.
     */
    location_id?: string;
    /**
     * A status of the request
     */
    status?: 'refunded' | 'withdrawn' | 'escalated';
};

