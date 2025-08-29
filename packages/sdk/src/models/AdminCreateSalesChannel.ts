/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * The sales channel's details.
 */
export type AdminCreateSalesChannel = {
    /**
     * The sales channel's name.
     */
    name: string;
    /**
     * The sales channel's description.
     */
    description?: string;
    /**
     * Whether the sales channel is disabled.
     */
    is_disabled?: boolean;
    /**
     * The sales channel's metadata, used to store custom key-value pairs.
     */
    metadata?: Record<string, any>;
};

