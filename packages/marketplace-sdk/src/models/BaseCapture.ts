/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * The details of a captured payment.
 */
export type BaseCapture = {
    /**
     * The payment capture's ID.
     */
    id: string;
    /**
     * The captured amount.
     */
    amount: number;
    /**
     * The date the capture was created.
     */
    created_at: string;
    /**
     * The ID of the user that captured the payment.
     */
    created_by?: string;
    payment: Record<string, any>;
};

