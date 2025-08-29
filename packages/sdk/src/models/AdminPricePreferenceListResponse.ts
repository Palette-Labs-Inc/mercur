/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AdminPricePreference } from './AdminPricePreference';
/**
 * The paginated list of price preferences.
 */
export type AdminPricePreferenceListResponse = {
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
     * The list of price preferences.
     */
    price_preferences: Array<AdminPricePreference>;
    /**
     * The estimated count retrieved from the PostgreSQL query planner, which may be inaccurate.
     */
    estimate_count?: number;
};

