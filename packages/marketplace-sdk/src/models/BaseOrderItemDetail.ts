/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * The item's detail.
 */
export type BaseOrderItemDetail = {
    /**
     * the detail's ID.
     */
    id: string;
    /**
     * the ID of the associated line item.
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
     * The item's quantity that's returned and added to the underlying variant's stocked quantity.
     */
    return_received_quantity: number;
    /**
     * The item's quantity that's returned but damaged. So, it's not added to the underlying variant's stocked quantity.
     */
    return_dismissed_quantity: number;
    /**
     * The item's quantity that's removed from the order.
     */
    written_off_quantity: number;
    /**
     * The item's metadata, can hold custom key-value pairs.
     */
    metadata: Record<string, any>;
    /**
     * The date the detail was created.
     */
    created_at: string;
    /**
     * The date the detail was updated.
     */
    updated_at: string;
};

