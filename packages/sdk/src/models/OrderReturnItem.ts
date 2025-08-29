/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * The item's items.
 */
export type OrderReturnItem = {
    /**
     * The return item's ID.
     */
    id: string;
    /**
     * The return item's quantity.
     */
    quantity: number;
    /**
     * The received quantity of the item. This quantity is added to the stocked inventory quantity of the item.
     */
    received_quantity?: number;
    /**
     * The ID of the return reason associated with the item.
     */
    reason_id?: string;
    /**
     * The ID of the associated order item.
     */
    item_id: string;
    /**
     * The ID of the return this return item belongs to.
     */
    return_id: string;
    /**
     * The return item's metadata, can hold custom key-value pairs.
     */
    metadata?: Record<string, any>;
    /**
     * The ID of the order the return belongs to.
     */
    order_id: string;
    /**
     * The date the item was created.
     */
    created_at?: string;
    /**
     * The date the item was updated.
     */
    updated_at?: string;
    /**
     * The item's damaged quantity.
     */
    damaged_quantity?: number;
};

