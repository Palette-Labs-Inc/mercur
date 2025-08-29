/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * The payment collection's details.
 */
export type VendorOrderPaymentCollection = {
    /**
     * The payment collection's ID.
     */
    id?: string;
    /**
     * The payment collection's currency code.
     */
    currency_code?: string;
    /**
     * The ID of the region this payment collection is associated with.
     */
    region_id?: string;
    /**
     * The total amount to be paid.
     */
    amount?: number;
    /**
     * The total authorized amount of the collection's payments.
     */
    authorized_amount?: number;
    /**
     * The total captured amount of the collection's payments.
     */
    captured_amount?: number;
    /**
     * The total refunded amount of the collection's payments.
     */
    refunded_amount?: number;
    /**
     * The date the payment collection was completed.
     */
    completed_at?: string;
    /**
     * The date the payment collection was created.
     */
    created_at?: string;
    /**
     * The date the payment collection was updated.
     */
    updated_at?: string;
    /**
     * The payment collection's metadata, can hold custom key-value pairs.
     */
    metadata?: Record<string, any>;
    /**
     * The payment collection's status.
     */
    status?: 'canceled' | 'not_paid' | 'awaiting' | 'authorized' | 'partially_authorized';
};

