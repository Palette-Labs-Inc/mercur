/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * The user's details.
 */
export type AdminUser = {
    /**
     * The user's ID.
     */
    id: string;
    /**
     * The user's email.
     */
    email: string;
    /**
     * The user's first name.
     */
    first_name: string;
    /**
     * The user's last name.
     */
    last_name: string;
    /**
     * The URL of the user's avatar.
     */
    avatar_url: string;
    /**
     * The user's metadata, can hold custom key-value pairs.
     */
    metadata: Record<string, any>;
    /**
     * The date the user was created.
     */
    created_at: string;
    /**
     * The date the user was updated.
     */
    updated_at: string;
    /**
     * The date the user was deleted.
     */
    deleted_at: string;
};

