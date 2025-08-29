/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { StoreProductTag } from './StoreProductTag';
/**
 * The paginated list of product tags.
 */
export type StoreProductTagListResponse = {
    /**
     * The maximum number of items returned.
     */
    limit: number;
    /**
     * The number of items to skip before retrieving the returned items.
     */
    offset: number;
    /**
     * The total number of items available.
     */
    count: number;
    /**
     * The list of product tags.
     */
    product_tags: Array<StoreProductTag>;
    /**
     * The estimated count retrieved from the PostgreSQL query planner, which may be inaccurate.
     */
    estimate_count?: number;
};

