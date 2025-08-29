/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AdminStoreCreditAccount } from './AdminStoreCreditAccount';
/**
 * The transaction's details.
 */
export type AdminTransaction = {
    /**
     * The transaction's ID.
     */
    id: string;
    /**
     * The ID of the store credit account that the transaction belongs to.
     */
    account_id: string;
    /**
     * The ID of the transaction group that the transaction belongs to.
     */
    transaction_group_id: string;
    /**
     * The transaction's type.
     */
    type: 'credit' | 'debit';
    /**
     * The transaction's amount.
     */
    amount: number;
    account: AdminStoreCreditAccount;
    /**
     * The transaction's note.
     */
    note?: string;
    /**
     * The transaction's reference.
     */
    reference?: string;
    /**
     * The transaction's reference ID.
     */
    reference_id?: string;
    /**
     * The transaction's metadata, can hold custom key-value pairs.
     */
    metadata: Record<string, any>;
    /**
     * The date the transaction was created at.
     */
    created_at: string;
    /**
     * The date the transaction was updated at.
     */
    updated_at: string;
};

