/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AdminTransaction } from './AdminTransaction';
/**
 * The paginated list of transactions.
 */
export type AdminTransactionsResponse = {
    /**
     * The maximum number of transactions to return.
     */
    limit: number;
    /**
     * The number of transactions to skip before retrieving the results.
     */
    offset: number;
    /**
     * The total number of transactions available.
     */
    count: number;
    /**
     * The list of transactions.
     */
    transactions: Array<AdminTransaction>;
    /**
     * The store credit account's estimate count.
     */
    estimate_count?: number;
};

