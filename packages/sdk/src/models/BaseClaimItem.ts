/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * The claim item's details.
 */
export type BaseClaimItem = {
    /**
     * The claim item's ID.
     */
    id: string;
    /**
     * The ID of the claim this item belongs to.
     */
    claim_id: string;
    /**
     * The ID of the order this item belongs to.
     */
    order_id: string;
    /**
     * The ID of the item in the order.
     */
    item_id: string;
    /**
     * The quantity claimed.
     */
    quantity: number;
    /**
     * The claim's reason.
     */
    reason: 'missing_item' | 'wrong_item' | 'production_failure' | 'other';
    /**
     * The quantity claimed.
     */
    raw_quantity: {
        value: (string | number);
    };
    /**
     * The item's metadata, can hold custom key-value pairs.
     */
    metadata?: Record<string, any>;
    /**
     * The date the claim was created.
     */
    created_at?: string;
    /**
     * The date the claim was updated.
     */
    updated_at?: string;
};

