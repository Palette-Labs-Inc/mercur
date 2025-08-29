/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * A schema for the admin review of request.
 */
export type AdminReviewRequest = {
    /**
     * Reviewer note.
     */
    reviewer_note?: string;
    /**
     * A status of the request
     */
    status?: 'accepted' | 'rejected';
};

