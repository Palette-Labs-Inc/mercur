/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * The properties to update in the sales channel.
 */
export type AdminUpdateSalesChannel = {
    /**
     * The sales channel's name.
     */
    name?: string;
    /**
     * The sales channel's description.
     */
    description?: string;
    /**
     * Whether the sales channel is disabled.
     */
    is_disabled?: boolean;
    /**
     * The sales channel's metadata, can hold custom key-value pairs.
     */
    metadata?: Record<string, any>;
};

