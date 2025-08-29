/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * The payment session's details.
 */
export type StoreInitializePaymentSession = {
    /**
     * The ID of the payment provider the customer chose.
     */
    provider_id: string;
    /**
     * Any data necessary for the payment provider to process the payment.
     */
    data?: Record<string, any>;
};

