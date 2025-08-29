/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AdminOrderLineItem } from './AdminOrderLineItem';
/**
 * The order item's details.
 */
export type AdminOrderItem = {
    /**
     * The ID of the order this item belongs to.
     */
    order_id: string;
    /**
     * The ID of the associated line item.
     */
    item_id: string;
    /**
     * The order item's version.
     */
    version: number;
    /**
     * The order item's history.
     */
    history: {
        /**
         * The version changes of the item.
         */
        version: {
            /**
             * The original version.
             */
            from: number;
            /**
             * The new version.
             */
            to: number;
        };
    };
    item: AdminOrderLineItem;
};

