/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * The refund's details.
 */
export type AdminCreatePaymentRefund = {
    /**
     * The amount to refund.
     */
    amount?: number;
    /**
     * The ID of a refund reason.
     */
    refund_reason_id?: string;
    /**
     * A note to attach to the refund.
     */
    note?: string;
};

