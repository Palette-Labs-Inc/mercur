/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AdminCollection } from './AdminCollection';
/**
 * The paginated list of product collections.
 */
export type AdminCollectionListResponse = {
    /**
     * The maximum number of items returned.
     */
    limit: number;
    /**
     * The number of items skipped before retrieving the returned results.
     */
    offset: number;
    /**
     * The total number of items.
     */
    count: number;
    /**
     * The list of product collections.
     */
    collections: Array<AdminCollection>;
    /**
     * The estimated count retrieved from the PostgreSQL query planner, which may be inaccurate.
     */
    estimate_count?: number;
};

