/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class AdminFeatureFlagsService {
    /**
     * List Feature Flags
     * Retrieve a list of feature flags. The feature flags can be filtered by fields such as `id`. The feature flags can also be sorted or paginated.
     * @returns any OK
     * @throws ApiError
     */
    public static adminGetFeatureFlags(): CancelablePromise<{
        /**
         * The list of feature flags.
         */
        feature_flags: Record<string, any>;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/admin/feature-flags',
            errors: {
                400: `Client Error`,
                401: `User is not authorized. Must log in first`,
                404: `Not Found Error`,
                409: `Invalid State Error`,
                422: `Invalid Request Error`,
                500: `Server Error`,
            },
        });
    }
}
