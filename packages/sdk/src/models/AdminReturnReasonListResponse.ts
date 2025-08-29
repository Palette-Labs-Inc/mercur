/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AdminReturnReason } from './AdminReturnReason';
/**
 * The paginated list of return reasons.
 */
export type AdminReturnReasonListResponse = {
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
     * The list of return reasons.
     */
    return_reasons: Array<AdminReturnReason>;
    /**
     * The estimated count retrieved from the PostgreSQL query planner, which may be inaccurate.
     */
    estimate_count?: number;
};

