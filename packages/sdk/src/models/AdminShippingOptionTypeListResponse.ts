/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AdminShippingOptionType } from './AdminShippingOptionType';
/**
 * The paginated list of shipping option types.
 */
export type AdminShippingOptionTypeListResponse = {
    /**
     * The maximum number of items returned.
     */
    limit: number;
    /**
     * The number of items skipped before returning the results.
     */
    offset: number;
    /**
     * The total number of items.
     */
    count: number;
    /**
     * The estimated count retrieved from the PostgreSQL query planner, which may be inaccurate.
     */
    estimate_count?: number;
    /**
     * The list of shipping option types.
     */
    shipping_option_types: Array<AdminShippingOptionType>;
};

