/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { StoreCreateReturnItem } from './StoreCreateReturnItem';
import type { StoreCreateReturnShipping } from './StoreCreateReturnShipping';
/**
 * The details of the return to create.
 */
export type StoreCreateReturn = {
    /**
     * The ID of the order this return is created for.
     */
    order_id: string;
    /**
     * The return's items.
     */
    items: Array<StoreCreateReturnItem>;
    return_shipping: StoreCreateReturnShipping;
    /**
     * A note with more details about the return.
     */
    note?: string;
    /**
     * Whether to mark the return as received.
     */
    receive_now?: boolean;
    /**
     * The ID of the location that items are returned to.
     */
    location_id?: string;
};

