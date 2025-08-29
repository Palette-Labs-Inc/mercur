/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Review } from '../models/Review';
import type { VendorUpdateReview } from '../models/VendorUpdateReview';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class VendorReviewsService {
    /**
     * Get reviews of the current seller
     * Retrieves the reviews about the seller associated with the authenticated user.
     * @returns any OK
     * @throws ApiError
     */
    public static vendorGetSellerMyReviews(): CancelablePromise<{
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
            url: '/vendor/sellers/me/reviews',
        });
    }
    /**
     * Get a review by id
     * Retrieves a review by id for the authenticated vendor.
     * @param id The ID of the Review.
     * @param fields Comma-separated fields to include in the response.
     * @returns any OK
     * @throws ApiError
     */
    public static vendorGetSellerReviewById(
        id: string,
        fields?: string,
    ): CancelablePromise<{
        product?: Review;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/vendor/sellers/me/reviews/{id}',
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
     * Updates seller_note for the review of specified id
     * @param id The ID of the Review.
     * @param fields Comma-separated fields to include in the response.
     * @param requestBody
     * @returns any OK
     * @throws ApiError
     */
    public static vendorUpdateReviewById(
        id: string,
        fields?: string,
        requestBody?: VendorUpdateReview,
    ): CancelablePromise<{
        product?: Review;
    }> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/vendor/sellers/me/reviews/{id}',
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
}
