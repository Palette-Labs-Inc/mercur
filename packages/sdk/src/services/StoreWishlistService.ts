/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { StoreCreateWishlist } from '../models/StoreCreateWishlist';
import type { Wishlist } from '../models/Wishlist';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class StoreWishlistService {
    /**
     * Get wishlist of the current user
     * Retrieves the wishlist created by the authenticated user.
     * @param offset The number of items to skip before starting to collect the result set.
     * @param limit The number of items to return.
     * @param fields Comma-separated fields to include in the response.
     * @returns any OK
     * @throws ApiError
     */
    public static storeGetMyWishlist(
        offset?: number,
        limit?: number,
        fields?: string,
    ): CancelablePromise<{
        wishlists?: Array<Wishlist>;
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
            url: '/store/wishlist',
            query: {
                'offset': offset,
                'limit': limit,
                'fields': fields,
            },
        });
    }
    /**
     * Create new wishlist entry
     * Creates a new wishlist entry by specifying a reference type and reference ID.
     * @param fields Comma-separated fields to include in the response.
     * @param requestBody
     * @returns any OK
     * @throws ApiError
     */
    public static storeCreateNewWishlist(
        fields?: string,
        requestBody?: StoreCreateWishlist,
    ): CancelablePromise<{
        /**
         * Id of the wishlsit nad reference id.
         */
        id?: string;
        /**
         * The date with timezone at which the resource was created.
         */
        created_at?: string;
        /**
         * The date with timezone at which the resource was last updated.
         */
        updated_at?: string;
        /**
         * The date with timezone at which the resource was deleted.
         */
        deleted_at?: string;
    }> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/store/wishlist',
            query: {
                'fields': fields,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Delete a wishlist entry
     * Deletes a wishlist entry by its ID for the authenticated user.
     * @param id The ID of the wishlist entry to delete.
     * @param referenceId The ID of the wishlist entry to delete.
     * @returns any OK
     * @throws ApiError
     */
    public static storeDeleteWishlist(
        id: string,
        referenceId: string,
    ): CancelablePromise<{
        /**
         * Id of the wishlsit nad reference id.
         */
        id?: string;
        reference_id?: string;
        /**
         * The type of resource
         */
        object?: string;
        /**
         * Indicates if the wishlist entry was deleted.
         */
        deleted?: boolean;
    }> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/store/wishlist/{id}/product/{reference_id}',
            path: {
                'id': id,
                'reference_id': referenceId,
            },
        });
    }
}
