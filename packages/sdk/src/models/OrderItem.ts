/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * The order item's detail.
 */
export type OrderItem = {
    /**
     * The item's ID.
     */
    id: string;
    /**
     * The ID of the associated line item.
     */
    item_id: string;
    item: Record<string, any>;
    /**
     * The item's quantity.
     */
    quantity: number;
    /**
     * The item's fulfilled quantity.
     */
    fulfilled_quantity: number;
    /**
     * The item's delivered quantity.
     */
    delivered_quantity: number;
    /**
     * The item's shipped quantity.
     */
    shipped_quantity: number;
    /**
     * The item's quantity that's requested to be returned.
     */
    return_requested_quantity: number;
    /**
     * The item's quantity that's received through a return.
     */
    return_received_quantity: number;
    /**
     * The item's quantity that's returned but dismissed because it's damaged.
     */
    return_dismissed_quantity: number;
    /**
     * The item's quantity that's removed due to an order change.
     */
    written_off_quantity: number;
    /**
     * The item's metadata, can hold custom key-value pairs.
     */
    metadata: Record<string, any>;
    /**
     * The date the item was created.
     */
    created_at: string;
    /**
     * The date the item was updated.
     */
    updated_at: string;
};

