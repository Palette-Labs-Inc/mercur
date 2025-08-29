/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * The customer group's details.
 */
export type AdminCustomerGroup = {
    /**
     * The customer group's ID.
     */
    id: string;
    /**
     * The customer group's name.
     */
    name: string;
    /**
     * The customer group's customers.
     */
    customers: Array<Record<string, any>>;
    /**
     * The customer group's metadata, used to store custom key-value pairs.
     */
    metadata: Record<string, any>;
    /**
     * The customer group's creation date.
     */
    created_at: string;
    /**
     * The customer group's update date.
     */
    updated_at: string;
};

