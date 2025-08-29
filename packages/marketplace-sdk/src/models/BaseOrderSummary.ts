/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * The order's summary details.
 */
export type BaseOrderSummary = {
    /**
     * The total amount paid.
     */
    paid_total: number;
    /**
     * The total amount refunded.
     */
    refunded_total: number;
    /**
     * The difference pending to be processed. If negative, the customer needs a refund. Otherwise, additional payment is required from the customer.
     */
    pending_difference: number;
    /**
     * The order's current total, could be the total after a change in the order.
     */
    current_order_total: number;
    /**
     * The order's original total.
     */
    original_order_total: number;
    /**
     * The total of the transactions made on the order.
     */
    transaction_total: number;
    /**
     * The order's total without the credit-line total.
     */
    accounting_total: number;
};

