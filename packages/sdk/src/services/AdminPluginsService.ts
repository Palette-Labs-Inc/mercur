/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AdminPluginsListResponse } from '../models/AdminPluginsListResponse';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class AdminPluginsService {
    /**
     * List Plugins
     * Retrieve the list of plugins installed in the Medusa application.
     * @returns AdminPluginsListResponse OK
     * @throws ApiError
     */
    public static adminGetPlugins(): CancelablePromise<AdminPluginsListResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/admin/plugins',
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
