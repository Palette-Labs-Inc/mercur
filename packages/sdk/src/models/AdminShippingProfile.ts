/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * The shipping profile's details..
 */
export type AdminShippingProfile = {
    /**
     * The shipping profile's ID.
     */
    id: string;
    /**
     * The shipping profile's name.
     */
    name: string;
    /**
     * The shipping profile's type.
     */
    type: string;
    /**
     * The shipping profile's metadata, holds custom key-value pairs.
     */
    metadata: Record<string, any>;
    /**
     * The date the shipping profile was created.
     */
    created_at: string;
    /**
     * The date the shipping profile was updated.
     */
    updated_at: string;
    /**
     * The date the shipping profile was deleted.
     */
    deleted_at: string;
};

