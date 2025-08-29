/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AdminCustomer } from './AdminCustomer';
import type { AdminOrderAddress } from './AdminOrderAddress';
import type { AdminOrderFulfillment } from './AdminOrderFulfillment';
import type { AdminOrderLineItem } from './AdminOrderLineItem';
import type { AdminOrderShippingMethod } from './AdminOrderShippingMethod';
import type { AdminPaymentCollection } from './AdminPaymentCollection';
import type { AdminRegion } from './AdminRegion';
import type { AdminSalesChannel } from './AdminSalesChannel';
import type { BaseOrderSummary } from './BaseOrderSummary';
import type { BaseOrderTransaction } from './BaseOrderTransaction';
import type { OrderCreditLine } from './OrderCreditLine';
/**
 * The draft order's details.
 */
export type AdminDraftOrder = {
    /**
     * The draft order's payment collections.
     */
    payment_collections: Array<AdminPaymentCollection>;
    /**
     * The draft order's fulfillments.
     */
    fulfillments?: Array<AdminOrderFulfillment>;
    sales_channel?: AdminSalesChannel;
    customer?: AdminCustomer;
    shipping_address?: AdminOrderAddress;
    billing_address?: AdminOrderAddress;
    /**
     * The draft order's items.
     */
    items: Array<AdminOrderLineItem>;
    /**
     * The draft order's shipping methods.
     */
    shipping_methods: Array<AdminOrderShippingMethod>;
    /**
     * The draft order's status.
     */
    status: string;
    /**
     * The draft order's currency code.
     */
    currency_code: string;
    /**
     * The draft order's ID.
     */
    id: string;
    /**
     * The draft order's version.
     */
    version: number;
    /**
     * The ID of the region associated with the draft order.
     */
    region_id: string;
    /**
     * The ID of the customer that the draft order belongs to.
     */
    customer_id: string;
    /**
     * The ID of the sales channel that the draft order is placed in.
     */
    sales_channel_id: string;
    /**
     * The customer email associated with the draft order.
     */
    email: string;
    /**
     * The draft order's display ID.
     */
    display_id?: number;
    /**
     * The draft order's payment status.
     */
    payment_status: 'not_paid' | 'awaiting' | 'authorized' | 'partially_authorized' | 'canceled' | 'captured' | 'partially_captured' | 'partially_refunded' | 'refunded' | 'requires_action';
    /**
     * The draft order's fulfillment status.
     */
    fulfillment_status: 'canceled' | 'not_fulfilled' | 'partially_fulfilled' | 'fulfilled' | 'partially_shipped' | 'shipped' | 'partially_delivered' | 'delivered';
    /**
     * The draft order's transactions.
     */
    transactions?: Array<BaseOrderTransaction>;
    summary: BaseOrderSummary;
    /**
     * The draft order's metadata, can hold custom key-value pairs.
     */
    metadata?: Record<string, any>;
    /**
     * The date the draft order was created.
     */
    created_at: string;
    /**
     * The date the draft order was updated.
     */
    updated_at: string;
    /**
     * The total of the draft order's items including taxes, excluding promotions.
     */
    original_item_total: number;
    /**
     * The total of the draft order's items excluding taxes, including promotions.
     */
    original_item_subtotal: number;
    /**
     * The tax total of the draft order's items excluding promotions.
     */
    original_item_tax_total: number;
    /**
     * The total of the draft order's items including taxes and promotions.
     */
    item_total: number;
    /**
     * The total of the draft order's items excluding taxes, including promotions.
     */
    item_subtotal: number;
    /**
     * The tax total of the draft order's items including promotions.
     */
    item_tax_total: number;
    /**
     * The draft order's total excluding promotions, including taxes.
     */
    original_total: number;
    /**
     * The draft order's total excluding taxes, including promotions.
     */
    original_subtotal: number;
    /**
     * The draft order's tax total, excluding promotions.
     */
    original_tax_total: number;
    /**
     * The draft order's total including taxes and promotions.
     */
    total: number;
    /**
     * The draft order's total excluding taxes, including promotions.
     */
    subtotal: number;
    /**
     * The draft order's tax total including promotions.
     */
    tax_total: number;
    /**
     * The draft order's discount or promotions total.
     */
    discount_total: number;
    /**
     * The tax total of draft order's discount or promotion.
     */
    discount_tax_total: number;
    /**
     * The draft order's gift card total.
     */
    gift_card_total: number;
    /**
     * The tax total of the draft order's gift card.
     */
    gift_card_tax_total: number;
    /**
     * The draft order's shipping total including taxes and promotions.
     */
    shipping_total: number;
    /**
     * The draft order's shipping total excluding taxes, including promotions.
     */
    shipping_subtotal: number;
    /**
     * The tax total of the draft order's shipping.
     */
    shipping_tax_total: number;
    /**
     * The draft order's shipping total including taxes, excluding promotions.
     */
    original_shipping_total: number;
    /**
     * The draft order's shipping total excluding taxes, including promotions.
     */
    original_shipping_subtotal: number;
    /**
     * The tax total of the draft order's shipping excluding promotions.
     */
    original_shipping_tax_total: number;
    region?: AdminRegion;
    /**
     * The draft order's credit lines.
     */
    credit_lines?: Array<OrderCreditLine>;
    /**
     * The draft order's credit line total.
     */
    credit_line_total: number;
};

