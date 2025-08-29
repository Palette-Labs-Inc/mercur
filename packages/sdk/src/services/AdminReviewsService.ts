/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Review } from '../models/Review';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class AdminReviewsService {
    /**
     * List reviews
     * Retrieves review list
     * @param limit The number of items to return. Default 50.
     * @param offset The number of items to skip before starting the response. Default 0.
     * @param fields Comma-separated fields to include in the response.
     * @param reference Filter by review reference
     * @returns any OK
     * @throws ApiError
     */
    public static adminListReviews(
        limit?: number,
        offset?: number,
        fields?: string,
        reference?: 'product' | 'seller',
    ): CancelablePromise<{
        reviews?: Array<Review>;
        /**
         * The total number of reviews
         */
        count?: number;
        /**
         * The number of reviews skipped
         */
        offset?: number;
        /**
         * The number of reviews per page
         */
        limit?: number;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/admin/reviews',
            query: {
                'limit': limit,
                'offset': offset,
                'fields': fields,
                'reference': reference,
            },
        });
    }
    /**
     * Get review by id
     * Retrieves a review by id.
     * @param id The ID of the Review.
     * @param fields Comma-separated fields to include in the response.
     * @returns any OK
     * @throws ApiError
     */
    public static adminGetReviewById(
        id: string,
        fields?: string,
    ): CancelablePromise<{
        review?: Review;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/admin/reviews/{id}',
            path: {
                'id': id,
            },
            query: {
                'fields': fields,
            },
        });
    }
}
