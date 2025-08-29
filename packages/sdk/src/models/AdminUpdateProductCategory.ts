/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * The properties to update in the product category.
 */
export type AdminUpdateProductCategory = {
    /**
     * The product category's name.
     */
    name?: string;
    /**
     * The product category's description.
     */
    description?: string;
    /**
     * The product category's handle. Must be a unique value.
     */
    handle?: string;
    /**
     * Whether the product category is only used for internal purposes and shouldn't be shown the customer.
     */
    is_internal?: boolean;
    /**
     * Whether the product category is active.
     */
    is_active?: boolean;
    /**
     * The ID of a parent category.
     */
    parent_category_id?: string;
    /**
     * The product category's metadata. Can hold custom key-value pairs.
     */
    metadata?: Record<string, any>;
    /**
     * The product category's rank among other categories.
     */
    rank?: number;
};

