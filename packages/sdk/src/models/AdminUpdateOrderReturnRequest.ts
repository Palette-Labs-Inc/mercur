/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * A schema for the update of order return request.
 */
export type AdminUpdateOrderReturnRequest = {
    /**
     * Reviewer note.
     */
    admin_reviewer_note?: string;
    /**
     * A status of the request
     */
    status?: 'refunded' | 'canceled';
};

