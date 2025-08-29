/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BaseOrderAddress } from './BaseOrderAddress';
import type { BaseOrderFulfillment } from './BaseOrderFulfillment';
import type { BaseOrderLineItem } from './BaseOrderLineItem';
import type { BaseOrderShippingMethod } from './BaseOrderShippingMethod';
import type { BaseOrderSummary } from './BaseOrderSummary';
import type { BaseOrderTransaction } from './BaseOrderTransaction';
import type { BasePaymentCollection } from './BasePaymentCollection';
/**
 * The order's details.
 */
export type BaseOrder = {
    /**
     * The order's payment collections.
     */
    payment_collections?: Array<BasePaymentCollection>;
    /**
     * The order's fulfillments.
     */
    fulfillments?: Array<BaseOrderFulfillment>;
    shipping_address?: BaseOrderAddress;
    billing_address?: BaseOrderAddress;
    /**
     * The order's ID.
     */
    id: string;
    /**
     * The order's version.
     */
    version: number;
    /**
     * The ID of the region associated with the order.
     */
    region_id: string;
    /**
     * The ID of the customer that placed the order.
     */
    customer_id: string;
    /**
     * The ID of the sales channel the order is placed in.
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
    /**
     * The order's items.
     */
    items: Array<BaseOrderLineItem>;
    /**
     * The order's shipping methods.
     */
    shipping_methods: Array<BaseOrderShippingMethod>;
    /**
     * The order's payment status.
     */
    payment_status: 'canceled' | 'not_paid' | 'awaiting' | 'authorized' | 'partially_authorized' | 'captured' | 'partially_captured' | 'partially_refunded' | 'refunded' | 'requires_action';
    /**
     * The order's fulfillment status.
     */
    fulfillment_status: 'canceled' | 'not_fulfilled' | 'partially_fulfilled' | 'fulfilled' | 'partially_shipped' | 'shipped' | 'partially_delivered' | 'delivered';
    /**
     * The order's transactions.
     */
    transactions?: Array<BaseOrderTransaction>;
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
     * The total of the order's items including taxes, excluding promotions.
     */
    original_item_total: number;
    /**
     * The total of the order's items excluding taxes, including promotions.
     */
    original_item_subtotal: number;
    /**
     * The tax total of the order's items excluding promotions.
     */
    original_item_tax_total: number;
    /**
     * The total of the order's items including taxes and promotions.
     */
    item_total: number;
    /**
     * The total of the order's items excluding taxes, including promotions.
     */
    item_subtotal: number;
    /**
     * The tax total of the order's items including promotions.
     */
    item_tax_total: number;
    /**
     * The order's total excluding promotions, including taxes.
     */
    original_total: number;
    /**
     * The order's total excluding taxes, including promotions.
     */
    original_subtotal: number;
    /**
     * The order's tax total, excluding promotions.
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
     * The order's tax total including promotions.
     */
    tax_total: number;
    /**
     * The order's discount or promotions total.
     */
    discount_total: number;
    /**
     * The tax total of order's discount or promotion.
     */
    discount_tax_total: number;
    /**
     * The order's gift card total.
     */
    gift_card_total: number;
    /**
     * The tax total of the order's gift card.
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
     * The tax total of the order's shipping.
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
     * The tax total of the order's shipping excluding promotions.
     */
    original_shipping_tax_total: number;
    /**
     * The order's status.
     */
    status: string;
    /**
     * The order's credit line total.
     */
    credit_line_total: number;
};

