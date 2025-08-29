/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Order } from './Order';
import type { OrderClaim } from './OrderClaim';
import type { OrderReturnItem } from './OrderReturnItem';
import type { OrderShippingMethod } from './OrderShippingMethod';
import type { OrderTransaction } from './OrderTransaction';
/**
 * The return's details.
 */
export type Return = {
    /**
     * The return's ID.
     */
    id: string;
    /**
     * The return's status.
     */
    status: 'canceled' | 'requested' | 'received' | 'partially_received';
    /**
     * The amount refunded by this return.
     */
    refund_amount?: number;
    /**
     * The ID of the associated order.
     */
    order_id: string;
    /**
     * The return's items.
     */
    items: Array<OrderReturnItem>;
    /**
     * The return's shipping methods.
     */
    shipping_methods?: Array<OrderShippingMethod>;
    /**
     * The return's transactions.
     */
    transactions?: Array<OrderTransaction>;
    /**
     * The return's metadata, can hold custom key-value pairs.
     */
    metadata: Record<string, any>;
    /**
     * The date the return was created.
     */
    created_at?: string;
    /**
     * The date the return was updated.
     */
    updated_at?: string;
    /**
     * The date the return was canceled.
     */
    canceled_at?: string;
    raw_refund_amount?: (string | number);
    order?: Order;
    /**
     * The ID of the exchange this return belongs to, if any.
     */
    exchange_id?: string;
    exchange?: Record<string, any>;
    /**
     * The ID of the claim this return belongs to, if any.
     */
    claim_id?: string;
    claim?: OrderClaim;
    /**
     * The return order's display ID.
     */
    display_id: number;
    /**
     * The ID of the stock location the items are returned to.
     */
    location_id?: string;
    /**
     * Whether to notify the customer about changes in the return.
     */
    no_notification?: boolean;
    /**
     * The ID of the user that created the return.
     */
    created_by?: string;
    /**
     * The date the return was deleted.
     */
    deleted_at?: string;
    /**
     * The date the return was requested.
     */
    requested_at?: string;
    /**
     * The date the return was received.
     */
    received_at?: string;
};

