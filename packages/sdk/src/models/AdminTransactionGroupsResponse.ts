/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AdminTransactionGroup } from './AdminTransactionGroup';
/**
 * The paginated list of transaction groups.
 */
export type AdminTransactionGroupsResponse = {
    /**
     * The maximum number of transaction groups to return.
     */
    limit: number;
    /**
     * The number of transaction groups to skip before retrieving the results.
     */
    offset: number;
    /**
     * The total number of transaction groups available.
     */
    count: number;
    /**
     * The list of transaction groups.
     */
    transaction_groups: Array<AdminTransactionGroup>;
    /**
     * The transaction group's estimate count.
     */
    estimate_count?: number;
};

