/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * The credit line's details.
 */
export type OrderCreditLine = {
    /**
     * The credit line's ID.
     */
    id: string;
    /**
     * The ID of the associated order.
     */
    order_id: string;
    order: Record<string, any>;
    /**
     * The table that this credit line references. For example, `payment_collection`.
     */
    reference: string;
    /**
     * The ID of the record in the referenced table. For example, `paycol_123`.
     */
    reference_id: string;
    /**
     * The credit line's metadata, can hold custom key-value pairs.
     */
    metadata: Record<string, any>;
    /**
     * The date the credit line was created.
     */
    created_at: string;
    /**
     * The date the credit line was updated.
     */
    updated_at: string;
    /**
     * The credit line's amount.
     */
    amount: number;
};

