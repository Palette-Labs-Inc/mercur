/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { VendorCampaign } from '../models/VendorCampaign';
import type { VendorCreateCampaign } from '../models/VendorCreateCampaign';
import type { VendorUpdateCampaign } from '../models/VendorUpdateCampaign';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class VendorCampaignsService {
    /**
     * List Campaigns
     * Retrieves a list of campaigns for the authenticated vendor.
     * @param offset The number of items to skip before starting to collect the result set.
     * @param limit The number of items to return.
     * @param fields Comma-separated fields to include in the response.
     * @returns any OK
     * @throws ApiError
     */
    public static vendorListCampaigns(
        offset?: number,
        limit?: number,
        fields?: string,
    ): CancelablePromise<{
        campaigns?: Array<VendorCampaign>;
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
            url: '/vendor/campaigns',
            query: {
                'offset': offset,
                'limit': limit,
                'fields': fields,
            },
        });
    }
    /**
     * Create campaign
     * Creates a new campaign for the authenticated vendor.
     * @param fields Comma-separated fields to include in the response.
     * @param requestBody
     * @returns any Created
     * @throws ApiError
     */
    public static vendorCreateCampaign(
        fields?: string,
        requestBody?: VendorCreateCampaign,
    ): CancelablePromise<{
        campaign?: VendorCampaign;
    }> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/vendor/campaigns',
            query: {
                'fields': fields,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Get campaign
     * Retrieves campaign by id for the authenticated vendor.
     * @param id The ID of the campaign.
     * @param fields Comma-separated fields to include in the response.
     * @returns any OK
     * @throws ApiError
     */
    public static vendorGetCampaignById(
        id: string,
        fields?: string,
    ): CancelablePromise<{
        campaign?: VendorCampaign;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/vendor/campaigns/{id}',
            path: {
                'id': id,
            },
            query: {
                'fields': fields,
            },
        });
    }
    /**
     * Update campaign
     * Updates campaign by id for the authenticated vendor.
     * @param id The ID of the campaign.
     * @param fields Comma-separated fields to include in the response.
     * @param requestBody
     * @returns any OK
     * @throws ApiError
     */
    public static vendorUpdateCampaignById(
        id: string,
        fields?: string,
        requestBody?: VendorUpdateCampaign,
    ): CancelablePromise<{
        campaign?: VendorCampaign;
    }> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/vendor/campaigns/{id}',
            path: {
                'id': id,
            },
            query: {
                'fields': fields,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Delete campaign
     * Deletes campaign by id for the authenticated vendor.
     * @param id The ID of the campaign.
     * @returns any OK
     * @throws ApiError
     */
    public static vendorDeleteCampaignById(
        id: string,
    ): CancelablePromise<{
        /**
         * The ID of the deleted campaign.
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
            url: '/vendor/campaigns/{id}',
            path: {
                'id': id,
            },
        });
    }
}
