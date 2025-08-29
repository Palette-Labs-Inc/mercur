/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { VendorMember } from '../models/VendorMember';
import type { VendorUpdateMember } from '../models/VendorUpdateMember';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class VendorMembersService {
    /**
     * List Members
     * Retrieves a list of members.
     * @param limit The number of items to return. Default 50.
     * @param offset The number of items to skip before starting the response. Default 0.
     * @param fields Comma-separated fields that should be included in the returned data.
     * @param expand Comma-separated relations that should be expanded in the returned data.
     * @param order Field used to order the results.
     * @returns any OK
     * @throws ApiError
     */
    public static vendorListMembers(
        limit?: number,
        offset?: number,
        fields?: string,
        expand?: string,
        order?: string,
    ): CancelablePromise<{
        members?: Array<VendorMember>;
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
            url: '/vendor/members',
            query: {
                'limit': limit,
                'offset': offset,
                'fields': fields,
                'expand': expand,
                'order': order,
            },
        });
    }
    /**
     * Get a Member
     * Retrieves a member by id.
     * @param id The ID of the Member.
     * @returns any OK
     * @throws ApiError
     */
    public static vendorGetMemberById(
        id: string,
    ): CancelablePromise<{
        member?: VendorMember;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/vendor/members/{id}',
            path: {
                'id': id,
            },
        });
    }
    /**
     * Update a Member
     * Updates a member by id for the authenticated vendor.
     * @param id The ID of the Member.
     * @param requestBody
     * @returns any OK
     * @throws ApiError
     */
    public static vendorUpdateMemberById(
        id: string,
        requestBody?: VendorUpdateMember,
    ): CancelablePromise<{
        member?: VendorMember;
    }> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/vendor/members/{id}',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Delete a Member
     * Deletes a member by id.
     * @param id The ID of the Member.
     * @returns any OK
     * @throws ApiError
     */
    public static vendorDeleteMemberById(
        id: string,
    ): CancelablePromise<{
        /**
         * The ID of the deleted Member
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
            url: '/vendor/members/{id}',
            path: {
                'id': id,
            },
        });
    }
}
