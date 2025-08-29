/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AdminCurrency } from './AdminCurrency';
/**
 * The paginated list of currencies.
 */
export type AdminCurrencyListResponse = {
    /**
     * The maximum number of items returned.
     */
    limit: number;
    /**
     * The number of items skipped before retrieving the returned items.
     */
    offset: number;
    /**
     * The total number of items.
     */
    count: number;
    /**
     * The list of currencies.
     */
    currencies: Array<AdminCurrency>;
    /**
     * The estimated count retrieved from the PostgreSQL query planner, which may be inaccurate.
     */
    estimate_count?: number;
};

