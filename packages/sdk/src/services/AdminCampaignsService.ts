/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AdminCampaignResponse } from '../models/AdminCampaignResponse';
import type { CampaignResponse } from '../models/CampaignResponse';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class AdminCampaignsService {
    /**
     * List Campaigns
     * Retrieve a list of campaigns. The campaigns can be filtered by fields such as `id`. The campaigns can also be sorted or paginated.
     * @param fields Comma-separated fields that should be included in the returned data. if a field is prefixed with `+` it will be added to the default fields, using `-` will remove it from the default fields. without prefix it will replace the entire default fields.
     * @param offset The number of items to skip when retrieving a list.
     * @param limit Limit the number of items returned in the list.
     * @param order The field to sort the data by. By default, the sort order is ascending. To change the order to descending, prefix the field name with `-`.
     * @param withDeleted Whether to include deleted records in the result.
     * @returns any OK
     * @throws ApiError
     */
    public static adminGetCampaigns(
        fields?: string,
        offset?: number,
        limit?: number,
        order?: string,
        withDeleted?: boolean,
    ): CancelablePromise<({
        /**
         * The maximum number of items retrieved.
         */
        limit: number;
        /**
         * The number of its skipped before the returned items.
         */
        offset: number;
        /**
         * The total number of items.
         */
        count: number;
    } & {
        /**
         * The list of campaigns.
         */
        campaigns: Array<CampaignResponse>;
    })> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/admin/campaigns',
            query: {
                'fields': fields,
                'offset': offset,
                'limit': limit,
                'order': order,
                'with_deleted': withDeleted,
            },
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
    /**
     * Create Campaign
     * Create a campaign.
     * @param fields Comma-separated fields that should be included in the returned data. if a field is prefixed with `+` it will be added to the default fields, using `-` will remove it from the default fields. without prefix it will replace the entire default fields.
     * @param requestBody
     * @returns AdminCampaignResponse OK
     * @throws ApiError
     */
    public static adminPostCampaigns(
        fields?: string,
        requestBody?: ({
            /**
             * The campaign's name.
             */
            name: string;
            /**
             * The campaign's identifier.
             */
            campaign_identifier: string;
            /**
             * The campaign's description.
             */
            description: string;
            /**
             * The campaign's budget which, when crossed, ends the campaign.
             */
            budget: {
                /**
                 * The budget's type. This can't be edited later. Use `spend` to set a limit on the total amount discounted by the campaign's promotions. Use `usage` to set a limit on the total number of times the campaign's promotions can be used.
                 *
                 */
                type: 'spend' | 'usage';
                /**
                 * The campaign budget's limit.
                 */
                limit: number;
                /**
                 * The campaign budget's currency code. This can't be edited later.
                 */
                currency_code: string;
            };
            /**
             * The campaign's start date.
             */
            starts_at: string;
            /**
             * The campaign's end date.
             */
            ends_at: string;
            /**
             * The campaign's promotions.
             */
            promotions?: Array<{
                /**
                 * A promotion's ID.
                 */
                id: string;
            }>;
        } & {
            /**
             * Pass additional custom data to the API route. This data is passed to the underlying workflow under the `additional_data` parameter.
             */
            additional_data?: Record<string, any>;
        }),
    ): CancelablePromise<AdminCampaignResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/admin/campaigns',
            query: {
                'fields': fields,
            },
            body: requestBody,
            mediaType: 'application/json',
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
    /**
     * Get a Campaign
     * Retrieve a campaign by its ID. You can expand the campaign's relations or select the fields that should be returned using the query parameters.
     * @param id The campaign's ID.
     * @param fields Comma-separated fields that should be included in the returned data. if a field is prefixed with `+` it will be added to the default fields, using `-` will remove it from the default fields. without prefix it will replace the entire default fields.
     * @returns AdminCampaignResponse OK
     * @throws ApiError
     */
    public static adminGetCampaignsId(
        id: string,
        fields?: string,
    ): CancelablePromise<AdminCampaignResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/admin/campaigns/{id}',
            path: {
                'id': id,
            },
            query: {
                'fields': fields,
            },
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
    /**
     * Update a Campaign
     * Update a campaign's details.
     * @param id The campaign's ID.
     * @param fields Comma-separated fields that should be included in the returned data. if a field is prefixed with `+` it will be added to the default fields, using `-` will remove it from the default fields. without prefix it will replace the entire default fields.
     * @param requestBody
     * @returns AdminCampaignResponse OK
     * @throws ApiError
     */
    public static adminPostCampaignsId(
        id: string,
        fields?: string,
        requestBody?: ({
            /**
             * The campaign's name.
             */
            name?: string;
            /**
             * The campaign's identifier.
             */
            campaign_identifier?: string;
            /**
             * The campaign's description.
             */
            description: string;
            /**
             * The campaign's budget.
             */
            budget?: {
                /**
                 * The campaign budget's limit.
                 */
                limit: number;
            };
            /**
             * The campaign's start date.
             */
            starts_at: string;
            /**
             * The campaign's end date.
             */
            ends_at: string;
            /**
             * The campaign's promotions.
             */
            promotions?: Array<{
                /**
                 * A promotion's ID.
                 */
                id: string;
            }>;
        } & {
            /**
             * Pass additional custom data to the API route. This data is passed to the underlying workflow under the `additional_data` parameter.
             */
            additional_data?: Record<string, any>;
        }),
    ): CancelablePromise<AdminCampaignResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/admin/campaigns/{id}',
            path: {
                'id': id,
            },
            query: {
                'fields': fields,
            },
            body: requestBody,
            mediaType: 'application/json',
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
    /**
     * Delete a Campaign
     * Delete a campaign by its ID. This doesn't delete promotions that belong to this campaign.
     *
     * @param id The campaign's ID.
     * @returns any OK
     * @throws ApiError
     */
    public static adminDeleteCampaignsId(
        id: string,
    ): CancelablePromise<{
        /**
         * The campaign's ID.
         */
        id: string;
        /**
         * The name of the object that was deleted.
         */
        object: string;
        /**
         * Whether the campaign was deleted.
         */
        deleted: boolean;
    }> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/admin/campaigns/{id}',
            path: {
                'id': id,
            },
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
    /**
     * Manage the Promotions of a Campaign
     * Manage the promotions of a campaign, either by adding them or removing them from the campaign.
     * @param id The campaign's ID.
     * @param fields Comma-separated fields that should be included in the returned data. if a field is prefixed with `+` it will be added to the default fields, using `-` will remove it from the default fields. without prefix it will replace the entire default fields.
     * @param requestBody
     * @returns AdminCampaignResponse OK
     * @throws ApiError
     */
    public static adminPostCampaignsIdPromotions(
        id: string,
        fields?: string,
        requestBody?: {
            /**
             * The promotions to add to the campaign.
             */
            add?: Array<string>;
            /**
             * The promotions to remove from the campaign.
             */
            remove?: Array<string>;
        },
    ): CancelablePromise<AdminCampaignResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/admin/campaigns/{id}/promotions',
            path: {
                'id': id,
            },
            query: {
                'fields': fields,
            },
            body: requestBody,
            mediaType: 'application/json',
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
