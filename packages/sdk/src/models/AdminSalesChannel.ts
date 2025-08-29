/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * The sales channel's details.
 */
export type AdminSalesChannel = {
    /**
     * The sales channel's ID.
     */
    id: string;
    /**
     * The sales channel's name.
     */
    name: string;
    /**
     * The sales channel's description.
     */
    description: string;
    /**
     * Whether the sales channel is disabled.
     */
    is_disabled: boolean;
    /**
     * The sales channel's metadata, can hold custom key-value pairs.
     */
    metadata: Record<string, any>;
    /**
     * The date the sales channel was created.
     */
    created_at: string;
    /**
     * The date the sales channel was updated.
     */
    updated_at: string;
    /**
     * The date the sales channel was deleted.
     */
    deleted_at: string;
};

