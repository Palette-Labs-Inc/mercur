/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * A schema for creating a review.
 */
export type StoreCreateReview = {
    /**
     * The unique identifier of the order.
     */
    order_id?: string;
    /**
     * Indicates if review reference is seller or product
     */
    reference?: 'seller' | 'product';
    /**
     * The unique identifier of reference.
     */
    reference_id?: string;
    /**
     * The customer rating on the resource.
     */
    rating?: number;
    /**
     * The customer note on the resource.
     */
    customer_note?: string;
};

