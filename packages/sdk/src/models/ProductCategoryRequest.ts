/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type ProductCategoryRequest = {
    /**
     * The type of the request
     */
    type: 'product_category';
    data: {
        /**
         * The name of the product category
         */
        name?: string;
        /**
         * The description of the product category
         */
        handle?: string;
        /**
         * The description of the product category
         */
        description?: string;
        /**
         * The id of the parent category
         */
        parent_category_id?: string;
    };
};

