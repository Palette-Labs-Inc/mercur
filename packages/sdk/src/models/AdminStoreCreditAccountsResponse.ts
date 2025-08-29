/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AdminStoreCreditAccount } from './AdminStoreCreditAccount';
/**
 * The paginated list of store credit accounts.
 */
export type AdminStoreCreditAccountsResponse = {
    /**
     * The maximum number of store credit accounts to return.
     */
    limit: number;
    /**
     * The number of store credit accounts to skip before retrieving the results.
     */
    offset: number;
    /**
     * The total number of store credit accounts available.
     */
    count: number;
    /**
     * The list of store credit accounts.
     */
    store_credit_accounts: Array<AdminStoreCreditAccount>;
    /**
     * The store credit account's estimate count.
     */
    estimate_count?: number;
};

