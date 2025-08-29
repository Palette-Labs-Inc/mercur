/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { StoreProductOptionValue } from './StoreProductOptionValue';
/**
 * The product option's details.
 */
export type StoreProductOption = {
    /**
     * The option's ID.
     */
    id: string;
    /**
     * The option's title.
     */
    title: string;
    product?: Record<string, any>;
    /**
     * The ID of the product this option belongs to.
     */
    product_id?: string;
    /**
     * The option's values.
     */
    values?: Array<StoreProductOptionValue>;
    /**
     * The option's metadata, can hold custom key-value pairs.
     */
    metadata?: Record<string, any>;
    /**
     * The date the product option was created.
     */
    created_at?: string;
    /**
     * The date the product option was updated.
     */
    updated_at?: string;
    /**
     * The date the product option was deleted.
     */
    deleted_at?: string;
};

