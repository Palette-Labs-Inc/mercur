/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BaseOrderSummary } from './BaseOrderSummary';
import type { BaseOrderTransaction } from './BaseOrderTransaction';
import type { StoreCustomer } from './StoreCustomer';
import type { StoreOrderAddress } from './StoreOrderAddress';
import type { StoreOrderFulfillment } from './StoreOrderFulfillment';
import type { StoreOrderLineItem } from './StoreOrderLineItem';
import type { StoreOrderShippingMethod } from './StoreOrderShippingMethod';
import type { StorePaymentCollection } from './StorePaymentCollection';
/**
 * The order's details.
 */
export type StoreOrder = {
    /**
     * The order's ID.
     */
    id: string;
    /**
     * The ID of the associated region.
     */
    region_id: string;
    /**
     * The ID of the customer that placed the order.
     */
    customer_id: string;
    /**
     * The ID of the sales channel the order was placed in.
     */
    sales_channel_id: string;
    /**
     * The email of the customer that placed the order.
     */
    email: string;
    /**
     * The order's currency code.
     */
    currency_code: string;
    /**
     * The order's display ID.
     */
    display_id?: number;
    shipping_address?: StoreOrderAddress;
    billing_address?: StoreOrderAddress;
    /**
     * The order's items.
     */
    items: Array<StoreOrderLineItem>;
    /**
     * The order's shipping methods.
     */
    shipping_methods: Array<StoreOrderShippingMethod>;
    /**
     * The order's payment collections.
     */
    payment_collections?: Array<StorePaymentCollection>;
    /**
     * The order's payment status.
     */
    payment_status: 'canceled' | 'not_paid' | 'awaiting' | 'authorized' | 'partially_authorized' | 'captured' | 'partially_captured' | 'partially_refunded' | 'refunded' | 'requires_action';
    /**
     * The order's fulfillments.
     */
    fulfillments?: Array<StoreOrderFulfillment>;
    /**
     * The order's fulfillment status.
     */
    fulfillment_status: 'canceled' | 'not_fulfilled' | 'partially_fulfilled' | 'fulfilled' | 'partially_shipped' | 'shipped' | 'partially_delivered' | 'delivered';
    summary: BaseOrderSummary;
    /**
     * The order's metadata, can hold custom key-value pairs.
     */
    metadata?: Record<string, any>;
    /**
     * The date the order was created.
     */
    created_at: string;
    /**
     * The date the order was updated.
     */
    updated_at: string;
    /**
     * The order items' total including taxes, excluding promotions.
     */
    original_item_total: number;
    /**
     * The order items' total excluding taxes, including promotions.
     */
    original_item_subtotal: number;
    /**
     * The total taxes applied on the order items, excluding promotions.
     */
    original_item_tax_total: number;
    /**
     * The order items' total including taxes and promotions.
     */
    item_total: number;
    /**
     * The order items' total excluding taxes, including promotions.
     */
    item_subtotal: number;
    /**
     * The total taxes applied on the order's items, including promotions.
     */
    item_tax_total: number;
    /**
     * The order's total including taxes, excluding promotions.
     */
    original_total: number;
    /**
     * The order's total excluding taxes, including promotions.
     */
    original_subtotal: number;
    /**
     * The total taxes of the order excluding promotions.
     */
    original_tax_total: number;
    /**
     * The order's total including taxes and promotions.
     */
    total: number;
    /**
     * The order's total excluding taxes, including promotions.
     */
    subtotal: number;
    /**
     * The tax totals of the order including promotions.
     */
    tax_total: number;
    /**
     * The order's discount total.
     */
    discount_total: number;
    /**
     * The total taxes applied on the discounted amount.
     */
    discount_tax_total: number;
    /**
     * The order's gift card total.
     */
    gift_card_total: number;
    /**
     * The total taxes applied on the gift card's amount.
     */
    gift_card_tax_total: number;
    /**
     * The order's shipping total including taxes and promotions.
     */
    shipping_total: number;
    /**
     * The order's shipping total excluding taxes, including promotions.
     */
    shipping_subtotal: number;
    /**
     * The total taxes of the order's shipping including promotions.
     */
    shipping_tax_total: number;
    /**
     * The order's shipping total including taxes, excluding promotions.
     */
    original_shipping_total: number;
    /**
     * The order's shipping total excluding taxes, including promotions.
     */
    original_shipping_subtotal: number;
    /**
     * The total taxes of the order's shipping excluding promotions.
     */
    original_shipping_tax_total: number;
    customer?: StoreCustomer;
    /**
     * The order's transactions.
     */
    transactions?: Array<BaseOrderTransaction>;
    /**
     * The order's status.
     */
    status: string;
    /**
     * The order's credit line total.
     */
    credit_line_total: number;
};

