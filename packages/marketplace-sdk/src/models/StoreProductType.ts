/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * The product type's details.
 */
export type StoreProductType = {
    /**
     * The product type's ID.
     */
    id: string;
    /**
     * The product type's metadata, can hold custom key-value pairs.
     */
    metadata?: Record<string, any>;
    /**
     * The date the product type was created.
     */
    created_at: string;
    /**
     * The date the product type was updated.
     */
    updated_at: string;
    /**
     * The date the product type was deleted.
     */
    deleted_at?: string;
    /**
     * The type's value.
     */
    value: string;
};

