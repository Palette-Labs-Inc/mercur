/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * The details of a credit line to add to an order.
 */
export type AdminCreateOrderCreditLines = {
    /**
     * The amount of the credit line.
     */
    amount: number;
    /**
     * The name of the table that the credit line is referencing.
     */
    reference: string;
    /**
     * The ID of a record in the table that the credit line is referencing.
     */
    reference_id: string;
    /**
     * The credit line's metadata, can hold custom key-value pairs.
     */
    metadata?: Record<string, any>;
};

