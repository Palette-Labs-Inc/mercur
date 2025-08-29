/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * The product option value's details.
 */
export type BaseProductOptionValue = {
    /**
     * The value's ID.
     */
    id: string;
    /**
     * The value.
     */
    value: string;
    option?: Record<string, any>;
    /**
     * The ID of the option this value belongs to.
     */
    option_id?: string;
    /**
     * The value's metadata, can hold custom key-value pairs.
     */
    metadata?: Record<string, any>;
    /**
     * The date the value was created.
     */
    created_at?: string;
    /**
     * The date the value was updated.
     */
    updated_at?: string;
    /**
     * The date the value was deleted.
     */
    deleted_at?: string;
};

