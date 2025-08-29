/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AdminCommissionAggregate } from '../models/AdminCommissionAggregate';
import type { AdminCommissionLine } from '../models/AdminCommissionLine';
import type { AdminCommissionRule } from '../models/AdminCommissionRule';
import type { AdminCreateCommissionRule } from '../models/AdminCreateCommissionRule';
import type { AdminUpdateCommissionRule } from '../models/AdminUpdateCommissionRule';
import type { AdminUpsertDefaultCommissionRule } from '../models/AdminUpsertDefaultCommissionRule';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class AdminCommissionService {
    /**
     * List Commission Lines
     * Retrieves a list of commission lines with optional filtering and expansion.
     * @param offset The number of items to skip before starting to collect the result set.
     * @param limit The number of items to return.
     * @param fields Comma-separated fields to include in the response.
     * @param startDate Filter commission lines created after this date.
     * @param endDate Filter commission lines created before this date.
     * @param sellerId Filter commission lines by seller ID.
     * @returns any OK
     * @throws ApiError
     */
    public static adminListCommissionLines(
        offset?: number,
        limit?: number,
        fields?: string,
        startDate?: string,
        endDate?: string,
        sellerId?: string,
    ): CancelablePromise<{
        commission_lines?: Array<AdminCommissionLine>;
        /**
         * The total number of items available
         */
        count?: number;
        /**
         * The number of items skipped before these items
         */
        offset?: number;
        /**
         * The number of items per page
         */
        limit?: number;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/admin/commission/commission-lines',
            query: {
                'offset': offset,
                'limit': limit,
                'fields': fields,
                'start_date': startDate,
                'end_date': endDate,
                'seller_id': sellerId,
            },
        });
    }
    /**
     * Get default commission rule
     * Retrieves a commission rule with 'site' reference type.
     * @returns any OK
     * @throws ApiError
     */
    public static adminGetDefaultCommissionRule(): CancelablePromise<{
        commission_rule?: AdminCommissionAggregate;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/admin/commission/default',
        });
    }
    /**
     * Upsert default CommissionRule
     * Creates or updates default commission rule.
     * @param requestBody
     * @returns any Created
     * @throws ApiError
     */
    public static adminUpsertDefaultCommissionRule(
        requestBody?: AdminUpsertDefaultCommissionRule,
    ): CancelablePromise<{
        commission_rule?: AdminCommissionRule;
    }> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/admin/commission/default',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * List Commission rules
     * Retrieves a list of commission rules.
     * @param offset The number of items to skip before starting to collect the result set.
     * @param limit The number of items to return.
     * @returns any OK
     * @throws ApiError
     */
    public static adminListCommissionRules(
        offset?: number,
        limit?: number,
    ): CancelablePromise<{
        commission_rules?: Array<AdminCommissionAggregate>;
        /**
         * The total number of items available
         */
        count?: number;
        /**
         * The number of items skipped before these items
         */
        offset?: number;
        /**
         * The number of items per page
         */
        limit?: number;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/admin/commission/rules',
            query: {
                'offset': offset,
                'limit': limit,
            },
        });
    }
    /**
     * Create a CommissionRule
     * Creates a new commission rule.
     * @param requestBody
     * @returns any Created
     * @throws ApiError
     */
    public static adminCreateCommissionRule(
        requestBody?: AdminCreateCommissionRule,
    ): CancelablePromise<{
        commission_rule?: AdminCommissionRule;
    }> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/admin/commission/rules',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Get commission rule by id
     * Retrieves a commission rule by id.
     * @param id The ID of the Rule.
     * @returns any OK
     * @throws ApiError
     */
    public static adminGetCommissionRuleById(
        id: string,
    ): CancelablePromise<{
        commission_rule?: AdminCommissionAggregate;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/admin/commission/rules/{id}',
            path: {
                'id': id,
            },
        });
    }
    /**
     * Update CommissionRule
     * Updates commission rule by id.
     * @param id The ID of the Rule.
     * @param requestBody
     * @returns any Created
     * @throws ApiError
     */
    public static adminUpdateCommissionRuleById(
        id: string,
        requestBody?: AdminUpdateCommissionRule,
    ): CancelablePromise<{
        commission_rule?: AdminCommissionRule;
    }> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/admin/commission/rules/{id}',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Delete a Commission Rule
     * Deletes a commission rule by id.
     * @param id The ID of the rule.
     * @returns any OK
     * @throws ApiError
     */
    public static adminDeleteCommissionRuleById(
        id: string,
    ): CancelablePromise<{
        /**
         * The ID of the deleted rule
         */
        id?: string;
        /**
         * The type of the object that was deleted
         */
        object?: string;
        /**
         * Whether or not the items were deleted
         */
        deleted?: boolean;
    }> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/admin/commission/rules/{id}',
            path: {
                'id': id,
            },
        });
    }
}
