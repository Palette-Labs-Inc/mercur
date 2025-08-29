/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * The details of the sales channel.
 */
export type VendorSalesChannel = {
    /**
     * The sales channel ID.
     */
    id?: string;
    /**
     * The sales channel name.
     */
    name?: string;
    /**
     * The sales channel description.
     */
    description?: string;
    /**
     * Is sales channel disabled.
     */
    is_disabled?: boolean;
    /**
     * The sales channel metadata.
     */
    metadata?: Record<string, any>;
    /**
     * The date the channel was created.
     */
    created_at?: string;
    /**
     * The date the channel was updated.
     */
    updated_at?: string;
    /**
     * The date the channel was deleted.
     */
    deleted_at?: string;
};

