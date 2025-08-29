/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { VendorAcceptMemberInvite } from '../models/VendorAcceptMemberInvite';
import type { VendorInviteMember } from '../models/VendorInviteMember';
import type { VendorMemberInvite } from '../models/VendorMemberInvite';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class VendorInvitesService {
    /**
     * List Member Invites
     * Retrieves a list of member invites for the authenticated vendor.
     * @param limit The number of items to return. Default 50.
     * @param offset The number of items to skip before starting the response. Default 0.
     * @param fields Comma-separated fields that should be included in the returned data.
     * @param order Field used to order the results.
     * @returns any OK
     * @throws ApiError
     */
    public static vendorListInvites(
        limit?: number,
        offset?: number,
        fields?: string,
        order?: string,
    ): CancelablePromise<{
        invites?: Array<VendorMemberInvite>;
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
            url: '/vendor/invites',
            query: {
                'limit': limit,
                'offset': offset,
                'fields': fields,
                'order': order,
            },
        });
    }
    /**
     * Create a Member Invite
     * Creates a new member invite for the authenticated vendor.
     * @param requestBody
     * @returns any Created
     * @throws ApiError
     */
    public static vendorCreateInvite(
        requestBody?: VendorInviteMember,
    ): CancelablePromise<{
        invite?: VendorMemberInvite;
    }> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/vendor/invites',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Accept a Member Invite
     * Accepts a member invite using the provided token and creates a new member.
     * @param id The ID of the invite to accept.
     * @param requestBody
     * @returns any OK
     * @throws ApiError
     */
    public static vendorAcceptInvite(
        id: string,
        requestBody?: VendorAcceptMemberInvite,
    ): CancelablePromise<{
        invite?: VendorMemberInvite;
    }> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/vendor/invites/{id}/accept',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
}
