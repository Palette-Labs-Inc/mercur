/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BasePayment } from './BasePayment';
import type { BasePaymentProvider } from './BasePaymentProvider';
import type { BasePaymentSession } from './BasePaymentSession';
/**
 * The payment collection's details.
 */
export type BasePaymentCollection = {
    /**
     * The payment collection's ID.
     */
    id: string;
    /**
     * The payment collection's currency code.
     */
    currency_code: string;
    /**
     * The total amount to be paid.
     */
    amount: number;
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
    status: 'canceled' | 'not_paid' | 'awaiting' | 'authorized' | 'partially_authorized' | 'completed' | 'failed';
    /**
     * The payment provider used to process the collection's payments and sessions.
     */
    payment_providers: Array<BasePaymentProvider>;
    /**
     * The payment collection's payment sessions.
     */
    payment_sessions?: Array<BasePaymentSession>;
    /**
     * The payment collection's payments.
     */
    payments?: Array<BasePayment>;
};

