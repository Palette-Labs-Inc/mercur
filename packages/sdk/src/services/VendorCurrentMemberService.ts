/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { VendorMember } from '../models/VendorMember';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class VendorCurrentMemberService {
    /**
     * Get Current Member
     * Retrieves the member associated with the authenticated user.
     * @returns any OK
     * @throws ApiError
     */
    public static vendorGetMemberMe(): CancelablePromise<{
        member?: VendorMember;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/vendor/me',
        });
    }
}
