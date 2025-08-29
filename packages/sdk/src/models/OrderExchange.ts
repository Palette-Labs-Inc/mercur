/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BaseExchangeItem } from './BaseExchangeItem';
import type { Order } from './Order';
import type { OrderShippingMethod } from './OrderShippingMethod';
import type { OrderTransaction } from './OrderTransaction';
import type { Return } from './Return';
/**
 * The order change's exchange.
 */
export type OrderExchange = {
    /**
     * The ID of the order the exchange is created for.
     */
    order_id: string;
    /**
     * The new items (outbound) sent by the exchange.
     */
    additional_items: Array<BaseExchangeItem>;
    /**
     * Whether to send the customer notifications when the exchange is updated.
     */
    no_notification?: boolean;
    /**
     * The amount to be exchanged or refunded. If the amount is negative, it must be refunded. If positive, additional payment is required from the customer.
     */
    difference_due?: number;
    return?: Return;
    /**
     * The ID of the associated exchange.
     */
    return_id?: string;
    /**
     * The exchange's ID.
     */
    id: string;
    /**
     * The exchange's display ID.
     */
    display_id: number;
    /**
     * The shipping methods used to send the new (outbound) items.
     */
    shipping_methods?: Array<OrderShippingMethod>;
    /**
     * The exchange's transactions.
     */
    transactions?: Array<OrderTransaction>;
    /**
     * The exchange's metadata, can hold custom key-value pairs.
     */
    metadata: Record<string, any>;
    /**
     * The date that the exchange was created.
     */
    created_at?: string;
    /**
     * The date that the exchange was updated.
     */
    updated_at?: string;
    order?: Order;
    /**
     * The version of the order when the exchange is applied.
     */
    order_version: number;
    raw_difference_due?: (string | number);
    /**
     * Whether variants that are out of stock can be added to the exchange as outbound items.
     */
    allow_backorder?: boolean;
    /**
     * The ID of the user that created the exchange.
     */
    created_by?: string;
    /**
     * The date the exchange was deleted.
     */
    deleted_at?: string;
    /**
     * The date the exchange was canceled.
     */
    canceled_at?: string;
};

