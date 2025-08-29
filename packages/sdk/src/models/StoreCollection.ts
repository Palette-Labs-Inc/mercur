/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * The collection's details.
 */
export type StoreCollection = {
    /**
     * The collection's ID.
     */
    id: string;
    /**
     * The collection's title.
     */
    title: string;
    /**
     * The collection's handle.
     */
    handle: string;
    /**
     * The date the collection was created.
     */
    created_at: string;
    /**
     * The date the collection was updated.
     */
    updated_at: string;
    /**
     * The date the collection was deleted.
     */
    deleted_at: string;
    /**
     * The collection's products.
     */
    products?: Array<Record<string, any>>;
    /**
     * The collection's metadata, can hold custom key-value pairs.
     */
    metadata: Record<string, any>;
};

