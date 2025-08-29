/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AdminDraftOrder } from './AdminDraftOrder';
/**
 * The list of draft orders with pagination fields.
 */
export type AdminDraftOrderListResponse = {
    /**
     * The maximum number of items retrieved.
     */
    limit: number;
    /**
     * The number of items skipped before retrieving the returned items.
     */
    offset: number;
    /**
     * The total count of items available.
     */
    count: number;
    /**
     * The list of draft orders.
     */
    draft_orders: Array<AdminDraftOrder>;
    /**
     * The estimated count retrieved from the PostgreSQL query planner, which may be inaccurate.
     */
    estimate_count?: number;
};

