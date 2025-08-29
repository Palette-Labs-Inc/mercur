/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BaseClaimItem } from './BaseClaimItem';
import type { Order } from './Order';
import type { OrderShippingMethod } from './OrderShippingMethod';
import type { OrderTransaction } from './OrderTransaction';
/**
 * The order change's claim.
 */
export type OrderClaim = {
    /**
     * The claim's ID.
     */
    id: string;
    /**
     * The ID of the order associated with the claim.
     */
    order_id: string;
    /**
     * The order items targetted by the claim.
     */
    claim_items: Array<BaseClaimItem>;
    /**
     * The outbound or new items of the claim.
     */
    additional_items: Array<BaseClaimItem>;
    return?: Record<string, any>;
    /**
     * The ID of the associated return.
     */
    return_id?: string;
    /**
     * Whether the customer should be notified about changes in the claim.
     */
    no_notification?: boolean;
    /**
     * The amount to be refunded.
     */
    refund_amount?: number;
    /**
     * The claim's display ID.
     */
    display_id: number;
    /**
     * The claim's shipping methods.
     */
    shipping_methods?: Array<OrderShippingMethod>;
    /**
     * The claim's transactions.
     */
    transactions?: Array<OrderTransaction>;
    /**
     * The claim's metadata, used to store custom key-value pairs.
     */
    metadata: Record<string, any>;
    /**
     * The claim's creation date.
     */
    created_at?: string;
    /**
     * The claim's update date.
     */
    updated_at?: string;
    /**
     * The claim's type.
     */
    type: 'replace' | 'refund';
    order?: Order;
    /**
     * The claim's order version.
     */
    order_version: number;
    raw_refund_amount?: (string | number);
    /**
     * The ID of the user that created the claim.
     */
    created_by?: string;
    /**
     * The date the claim was deleted.
     */
    deleted_at?: string;
    /**
     * The date the claim was canceled.
     */
    canceled_at?: string;
};

