/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Review } from '../models/Review';
import type { StoreCreateReview } from '../models/StoreCreateReview';
import type { StoreUpdateReview } from '../models/StoreUpdateReview';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class StoreReviewsService {
    /**
     * Get reviews of the current user
     * Retrieves the reviews created by the authenticated user.
     * @param offset The number of items to skip before starting to collect the result set.
     * @param limit The number of items to return.
     * @param fields Comma-separated fields to include in the response.
     * @returns any OK
     * @throws ApiError
     */
    public static storeGetMyReviews(
        offset?: number,
        limit?: number,
        fields?: string,
    ): CancelablePromise<{
        products?: Array<Review>;
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
            url: '/store/reviews',
            query: {
                'offset': offset,
                'limit': limit,
                'fields': fields,
            },
        });
    }
    /**
     * Create new review
     * Creates new review with rating and comment
     * @param fields Comma-separated fields to include in the response.
     * @param requestBody
     * @returns any OK
     * @throws ApiError
     */
    public static storeCreateNewReview(
        fields?: string,
        requestBody?: StoreCreateReview,
    ): CancelablePromise<{
        product?: Review;
    }> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/store/reviews',
            query: {
                'fields': fields,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Get Review
     * Retrieves a review of specified id
     * @param id The ID of the Review.
     * @param fields Comma-separated fields to include in the response.
     * @returns any OK
     * @throws ApiError
     */
    public static storeGetReviewById(
        id: string,
        fields?: string,
    ): CancelablePromise<{
        product?: Review;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/store/reviews/{id}',
            path: {
                'id': id,
            },
            query: {
                'fields': fields,
            },
        });
    }
    /**
     * Update a Review
     * Updates customer_note and rating for the review of specified id
     * @param id The ID of the Review.
     * @param fields Comma-separated fields to include in the response.
     * @param requestBody
     * @returns any OK
     * @throws ApiError
     */
    public static storeUpdateReviewById(
        id: string,
        fields?: string,
        requestBody?: StoreUpdateReview,
    ): CancelablePromise<{
        product?: Review;
    }> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/store/reviews/{id}',
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
     * Delete a Review
     * Deletes a review by id.
     * @param id The ID of the Review.
     * @returns any OK
     * @throws ApiError
     */
    public static storeDeleteReviewById(
        id: string,
    ): CancelablePromise<{
        /**
         * The ID of the deleted Review
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
            url: '/store/reviews/{id}',
            path: {
                'id': id,
            },
        });
    }
}
