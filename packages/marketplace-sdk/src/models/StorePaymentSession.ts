/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BasePayment } from './BasePayment';
/**
 * The payment session's details.
 */
export type StorePaymentSession = {
    /**
     * The payment session's ID.
     */
    id: string;
    /**
     * The payment session's amount.
     */
    amount: number;
    /**
     * The payment session's currency code.
     */
    currency_code: string;
    /**
     * The ID of the payment provider processing this session.
     */
    provider_id: string;
    /**
     * The payment session's data, useful for the payment provider processing the payment.
     */
    data: Record<string, any>;
    /**
     * The context around the payment, such as the customer's details.
     */
    context?: Record<string, any>;
    /**
     * The payment session's status.
     */
    status: 'authorized' | 'captured' | 'canceled' | 'pending' | 'requires_more' | 'error';
    /**
     * The date the payment session was authorized.
     */
    authorized_at?: string;
    payment_collection?: Record<string, any>;
    payment?: BasePayment;
};

