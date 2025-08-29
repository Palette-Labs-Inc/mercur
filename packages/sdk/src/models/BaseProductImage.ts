/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * The image's details.
 */
export type BaseProductImage = {
    /**
     * The image's ID.
     */
    id: string;
    /**
     * The image's URL.
     */
    url: string;
    /**
     * The date the image was created.
     */
    created_at?: string;
    /**
     * The date the image was updated.
     */
    updated_at?: string;
    /**
     * The date the image was deleted.
     */
    deleted_at?: string;
    /**
     * The image's metadata, can hold custom key-value pairs.
     */
    metadata?: Record<string, any>;
    /**
     * The image's rank among its sibling images.
     */
    rank: number;
};

