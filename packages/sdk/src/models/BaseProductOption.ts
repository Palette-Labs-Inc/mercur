/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BaseProductOptionValue } from './BaseProductOptionValue';
/**
 * The product option's details.
 */
export type BaseProductOption = {
    /**
     * The product option's ID.
     */
    id: string;
    /**
     * The product option's title.
     */
    title: string;
    product?: Record<string, any>;
    /**
     * The ID of the product this option belongs to.
     */
    product_id?: string;
    /**
     * The product option's values.
     */
    values?: Array<BaseProductOptionValue>;
    /**
     * The product option's metadata, can hold custom key-value pairs.
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

