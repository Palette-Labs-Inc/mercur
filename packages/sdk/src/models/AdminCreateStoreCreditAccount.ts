/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * The details of the store credit account to create.
 */
export type AdminCreateStoreCreditAccount = {
    /**
     * The store credit account's currency code.
     */
    currency_code: string;
    /**
     * The ID of the customer that the store credit account belongs to.
     */
    customer_id: string;
    /**
     * The store credit account's metadata, can hold custom key-value pairs.
     */
    metadata?: Record<string, any>;
};

