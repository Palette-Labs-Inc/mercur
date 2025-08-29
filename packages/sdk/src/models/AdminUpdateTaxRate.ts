/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * The properties to update in the tax rate.
 */
export type AdminUpdateTaxRate = {
    /**
     * The rate to charge.
     */
    rate?: number;
    /**
     * The code that the tax rate is identified by.
     */
    code?: string;
    /**
     * The tax rate's rules.
     */
    rules?: Array<{
        /**
         * The name of the table this rule references.
         */
        reference: string;
        /**
         * The ID of the record in the table that the rule references.
         */
        reference_id: string;
    }>;
    /**
     * The tax rate's name.
     */
    name?: string;
    /**
     * Whether the tax rate is the default in the store.
     */
    is_default?: boolean;
    /**
     * Whether the tax rate should be combined with parent rates.
     */
    is_combinable?: boolean;
    /**
     * The tax rate's metadata, can hold custom key-value pairs.
     */
    metadata?: Record<string, any>;
};

