/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { RefundReason } from './RefundReason';
/**
 * The refund's details.
 */
export type BaseRefund = {
    /**
     * The refund's ID.
     */
    id: string;
    /**
     * The refund's amount.
     */
    amount: number;
    /**
     * The ID of the refund reason.
     */
    refund_reason_id?: string;
    /**
     * More details about the refund.
     */
    note?: string;
    /**
     * The date the refund was created.
     */
    created_at: string;
    /**
     * The ID of the user that created the refund.
     */
    created_by?: string;
    payment: Record<string, any>;
    refund_reason?: RefundReason;
};

