/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { StoreCurrency } from './StoreCurrency';
/**
 * The paginated list of currencies.
 */
export type StoreCurrencyListResponse = {
    /**
     * The maximum number of items returned.
     */
    limit: number;
    /**
     * The number of items skipped before retrieving the returned items.
     */
    offset: number;
    /**
     * The total count of items.
     */
    count: number;
    /**
     * The list of currencies.
     */
    currencies: Array<StoreCurrency>;
    /**
     * The estimated count retrieved from the PostgreSQL query planner, which may be inaccurate.
     */
    estimate_count?: number;
};

