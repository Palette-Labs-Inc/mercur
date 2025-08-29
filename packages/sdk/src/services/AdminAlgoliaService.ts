/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class AdminAlgoliaService {
    /**
     * Get Algolia Status
     * Retrieves the current status of Algolia configuration and product index.
     * @returns any OK
     * @throws ApiError
     */
    public static adminGetAlgoliaStatus(): CancelablePromise<{
        /**
         * The Algolia application ID
         */
        appId?: string;
        /**
         * The status of the product index
         */
        productIndex?: {
            /**
             * Whether the product index exists
             */
            exists?: boolean;
            /**
             * The name of the product index
             */
            name?: string;
        };
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/admin/algolia',
        });
    }
    /**
     * Sync Algolia
     * Initiates a synchronization process for Algolia indices.
     * @returns any OK
     * @throws ApiError
     */
    public static adminSyncAlgolia(): CancelablePromise<{
        /**
         * Confirmation message that sync is in progress
         */
        message?: string;
    }> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/admin/algolia',
        });
    }
}
