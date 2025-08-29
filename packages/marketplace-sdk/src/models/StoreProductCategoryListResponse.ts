/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { StoreProductCategory } from './StoreProductCategory';
/**
 * The paginated list of product categories.
 */
export type StoreProductCategoryListResponse = {
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
     * The list of product categories.
     */
    product_categories: Array<StoreProductCategory>;
    /**
     * The estimated count retrieved from the PostgreSQL query planner, which may be inaccurate.
     */
    estimate_count?: number;
};

