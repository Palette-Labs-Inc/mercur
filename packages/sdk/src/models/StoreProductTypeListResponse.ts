/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { StoreProductType } from './StoreProductType';
/**
 * The paginated list of product types.
 */
export type StoreProductTypeListResponse = {
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
     * The list of product types.
     */
    product_types: Array<StoreProductType>;
    /**
     * The estimated count retrieved from the PostgreSQL query planner, which may be inaccurate.
     */
    estimate_count?: number;
};

