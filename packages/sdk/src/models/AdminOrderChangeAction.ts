/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AdminOrder } from './AdminOrder';
/**
 * The order change action's details.
 */
export type AdminOrderChangeAction = {
    /**
     * The action's ID.
     */
    id: string;
    /**
     * The ID of the order change that the action belongs to.
     */
    order_change_id: string;
    order_change: Record<string, any>;
    /**
     * The ID of the order the associated change is for.
     */
    order_id: string;
    /**
     * The ID of the associated return.
     */
    return_id: string;
    /**
     * The ID of the associated claim.
     */
    claim_id: string;
    /**
     * The ID of the associated exchange.
     */
    exchange_id: string;
    order: AdminOrder;
    /**
     * The name of the table this action applies on.
     */
    reference: 'claim' | 'exchange' | 'return' | 'order_shipping_method';
    /**
     * The ID of the record in the referenced table.
     */
    reference_id: string;
    /**
     * The applied action.
     */
    action: 'CANCEL_RETURN_ITEM' | 'FULFILL_ITEM' | 'DELIVER_ITEM' | 'CANCEL_ITEM_FULFILLMENT' | 'ITEM_ADD' | 'ITEM_REMOVE' | 'ITEM_UPDATE' | 'RECEIVE_DAMAGED_RETURN_ITEM' | 'RECEIVE_RETURN_ITEM' | 'RETURN_ITEM' | 'SHIPPING_ADD' | 'SHIPPING_REMOVE' | 'SHIP_ITEM' | 'WRITE_OFF_ITEM' | 'REINSTATE_ITEM';
    /**
     * The action's details.
     */
    details: Record<string, any>;
    /**
     * A note that's viewed only by admin users.
     */
    internal_note: string;
    /**
     * The date the action was created.
     */
    created_at: string;
    /**
     * The date the action was updated.
     */
    updated_at: string;
};

