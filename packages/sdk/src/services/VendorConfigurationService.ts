/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ConfigurationRule } from '../models/ConfigurationRule';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class VendorConfigurationService {
    /**
     * List rules
     * Retrieves marketplace rules list
     * @returns any OK
     * @throws ApiError
     */
    public static vendorListRules(): CancelablePromise<{
        configuration_rules?: Array<ConfigurationRule>;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/vendor/configuration',
        });
    }
}
