/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type ReviewRemoveRequest = {
    /**
     * The type of the request
     */
    type: 'review_remove';
    data: {
        /**
         * Id of the review to remove
         */
        review_id?: string;
        /**
         * The reason to remove review
         */
        reason?: string;
    };
};

