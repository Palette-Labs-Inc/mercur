/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * The API key's details.
 */
export type AdminApiKey = {
    /**
     * The api key's ID.
     */
    id: string;
    /**
     * The api key's token.
     */
    token: string;
    /**
     * The redacted form of the API key's token. This is useful when showing portion of the token.
     */
    redacted: string;
    /**
     * The api key's title.
     */
    title: string;
    /**
     * The api key's type. `secret` is used for a user's API key, whereas `publishable` is used for Publishable API keys.
     */
    type: 'secret' | 'publishable';
    /**
     * The date and time the API key was last used.
     */
    last_used_at: string;
    /**
     * The ID of the user that created the API key, if available.
     */
    created_by: string;
    /**
     * The date and time the API key was created.
     */
    created_at: string;
    /**
     * The ID of the user that revoked the API key, if available.
     */
    revoked_by: string;
    /**
     * The date and time the API key was revoked. The API key is considered revoked when this property is set.
     */
    revoked_at: string;
    /**
     * The date the API key was updated.
     */
    updated_at: string;
    /**
     * The date the API key was deleted.
     */
    deleted_at: string;
};

