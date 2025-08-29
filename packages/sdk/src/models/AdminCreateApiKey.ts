/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * The API key's details.
 */
export type AdminCreateApiKey = {
    /**
     * The API key's title.
     */
    title: string;
    /**
     * The API key's type. Use `secret` for a user's API key; Use `publishable` for Publishable API keys.
     */
    type: 'publishable' | 'secret';
};

