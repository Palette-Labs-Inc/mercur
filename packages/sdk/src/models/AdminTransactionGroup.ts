/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * The transaction group's details.
 */
export type AdminTransactionGroup = {
    /**
     * The transaction group's ID.
     */
    id: string;
    /**
     * The transaction group's code.
     */
    code: string;
    /**
     * The transaction group's credits.
     */
    credits: number;
    /**
     * The transaction group's debits.
     */
    debits: number;
    /**
     * The transaction group's balance.
     */
    balance: number;
    account: Record<string, any>;
    /**
     * The transaction group's metadata, can hold custom key-value pairs.
     */
    metadata: Record<string, any>;
};

