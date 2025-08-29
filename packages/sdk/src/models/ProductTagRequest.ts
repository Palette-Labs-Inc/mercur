/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type ProductTagRequest = {
    /**
     * The type of the request
     */
    type: 'product_tag';
    data: {
        /**
         * The product tag value
         */
        value?: string;
        /**
         * The product tag metadata
         */
        metadata?: Record<string, any>;
    };
};

