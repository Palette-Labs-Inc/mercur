/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { StoreCustomer } from './StoreCustomer';
import type { StoreTransactionGroup } from './StoreTransactionGroup';
/**
 * The store credit account's details.
 */
export type StoreStoreCreditAccount = {
    customer: StoreCustomer;
    /**
     * The store credit account's ID.
     */
    id: string;
    /**
     * The ID of the customer that the store credit account belongs to.
     */
    customer_id: string;
    /**
     * The store credit account's currency code.
     */
    currency_code: string;
    /**
     * The account's credits.
     */
    credits: number;
    /**
     * The account's debits.
     */
    debits: number;
    /**
     * The store credit account's balance.
     */
    balance: number;
    /**
     * The store credit account's transaction groups.
     */
    transaction_groups: Array<StoreTransactionGroup>;
    /**
     * The store credit account's metadata, can hold custom key-value pairs.
     */
    metadata: Record<string, any>;
    /**
     * The date the store credit account was created.
     */
    created_at: string;
    /**
     * The date the store credit account was updated.
     */
    updated_at: string;
};

