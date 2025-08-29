/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * The return item's details.
 */
export type AdminReturnItem = {
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
    received_quantity: number;
    /**
     * The received damaged quantity of the item, which isn't added to the stocked inventory quantity of the item.
     */
    damaged_quantity: number;
    /**
     * The ID of the return reason associated with the item.
     */
    reason_id?: string;
    /**
     * A note about why the item was returned.
     */
    note?: string;
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
};

