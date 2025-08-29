/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * The item's details.
 */
export type BaseExchangeItem = {
    /**
     * The item's ID.
     */
    id: string;
    /**
     * The ID of the exchange this item belongs to.
     */
    exchange_id: string;
    /**
     * The ID of the order this item belongs to.
     */
    order_id: string;
    /**
     * The ID of the item in the order.
     */
    item_id: string;
    /**
     * The item's quantity.
     */
    quantity: number;
    /**
     * The item's metadata, can hold custom key-value pairs.
     */
    metadata?: Record<string, any>;
    /**
     * The date the item was created.
     */
    created_at: string;
    /**
     * The date the item was updated.
     */
    updated_at: string;
};

