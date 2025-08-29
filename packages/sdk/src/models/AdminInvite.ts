/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * The invite's details.
 */
export type AdminInvite = {
    /**
     * The invite's ID.
     */
    id: string;
    /**
     * The invite's email.
     */
    email: string;
    /**
     * Whether the invite has been accepted.
     */
    accepted: boolean;
    /**
     * The invite's token.
     */
    token: string;
    /**
     * The invite's expiry date.
     */
    expires_at: string;
    /**
     * The invite's metadata, can hold custom key-value pairs.
     */
    metadata?: Record<string, any>;
    /**
     * The date the invite was created.
     */
    created_at: string;
    /**
     * The date the invite was updated.
     */
    updated_at: string;
};

