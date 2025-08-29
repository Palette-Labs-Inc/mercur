/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type VendorSplitOrderPayment = {
    /**
     * Split order payment id
     */
    id?: string;
    /**
     * Payment status
     */
    status?: string;
    /**
     * Authorized amount
     */
    authorized_amount?: number;
    /**
     * Captured amount
     */
    captured_amount?: number;
    /**
     * Refunded amount
     */
    refunded_amount?: number;
    /**
     * The currency code.
     */
    currency_code?: string;
};

