/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * The product tag's details.
 */
export type BaseProductTag = {
    /**
     * The tag's ID.
     */
    id: string;
    /**
     * The tag's value.
     */
    value: string;
    /**
     * The date the tag was created.
     */
    created_at: string;
    /**
     * The date the tag was updated.
     */
    updated_at: string;
    /**
     * The date the tag was deleted.
     */
    deleted_at?: string;
    /**
     * The tag's metadata, can hold custom key-value pairs.
     */
    metadata?: Record<string, any>;
};

