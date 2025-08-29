/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AdminCreateRule } from '../models/AdminCreateRule';
import type { AdminUpdateRule } from '../models/AdminUpdateRule';
import type { ConfigurationRule } from '../models/ConfigurationRule';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class AdminConfigurationService {
    /**
     * List rules
     * Retrieves rules list
     * @param offset The number of items to skip before starting to collect the result set.
     * @param limit The number of items to return.
     * @returns any OK
     * @throws ApiError
     */
    public static adminListRules(
        offset?: number,
        limit?: number,
    ): CancelablePromise<{
        configuration_rules?: Array<ConfigurationRule>;
        /**
         * The total number of requests
         */
        count?: number;
        /**
         * The number of requests skipped
         */
        offset?: number;
        /**
         * The number of requests per page
         */
        limit?: number;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/admin/configuration',
            query: {
                'offset': offset,
                'limit': limit,
            },
        });
    }
    /**
     * Create a configuration rule
     * Creates a request to admin to accept new resource
     * @param requestBody
     * @returns any Created
     * @throws ApiError
     */
    public static adminCreateRule(
        requestBody?: AdminCreateRule,
    ): CancelablePromise<{
        configuration_rule?: ConfigurationRule;
    }> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/admin/configuration',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Update a configuration rule
     * Updates a rule
     * @param id The ID of the Rule.
     * @param requestBody
     * @returns any Created
     * @throws ApiError
     */
    public static adminUpdateRule(
        id: string,
        requestBody?: AdminUpdateRule,
    ): CancelablePromise<{
        configuration_rule?: ConfigurationRule;
    }> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/admin/configuration/{id}',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
}
