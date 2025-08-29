/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * The product collection's details.
 */
export type BaseCollection = {
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
     * The collection's creation date.
     */
    created_at: string;
    /**
     * The collection's update date.
     */
    updated_at: string;
    /**
     * The collection's deletion date.
     */
    deleted_at: string;
    /**
     * The collection's products.
     */
    products?: Array<Record<string, any>>;
    /**
     * The collection's metadata, used to store custom key-value pairs.
     */
    metadata: Record<string, any>;
};

