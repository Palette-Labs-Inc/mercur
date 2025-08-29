/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { OrderAddress } from './OrderAddress';
import type { OrderCreditLine } from './OrderCreditLine';
import type { OrderLineItem } from './OrderLineItem';
import type { OrderShippingMethod } from './OrderShippingMethod';
import type { OrderTransaction } from './OrderTransaction';
/**
 * The order change's order.
 */
export type Order = {
    /**
     * The order's ID.
     */
    id: string;
    /**
     * The order's version.
     */
    version: number;
    order_change?: Record<string, any>;
    /**
     * The order's status.
     */
    status: 'canceled' | 'requires_action' | 'pending' | 'completed' | 'draft' | 'archived';
    /**
     * The ID of the region the order belongs to.
     */
    region_id?: string;
    /**
     * The ID of the customer that placed the order.
     */
    customer_id?: string;
    /**
     * The ID of the sales channel the order was placed in.
     */
    sales_channel_id?: string;
    /**
     * The email of the customer that placed the order.
     */
    email?: string;
    /**
     * The order's currency code.
     */
    currency_code: string;
    shipping_address?: OrderAddress;
    billing_address?: OrderAddress;
    /**
     * The order's items.
     */
    items?: Array<OrderLineItem>;
    /**
     * The order's shipping methods.
     */
    shipping_methods?: Array<OrderShippingMethod>;
    /**
     * The order's transactions.
     */
    transactions?: Array<OrderTransaction>;
    /**
     * The order's summary.
     */
    summary?: {
        /**
         * The remaining amount to be paid or refunded.
         */
        pending_difference: number;
        /**
         * The order's current total.
         */
        current_order_total: number;
        /**
         * The order's total before any changes.
         */
        original_order_total: number;
        /**
         * The total of the transactions (payments and refunds) made on the order.
         */
        transaction_total: number;
        /**
         * The total paid amount.
         */
        paid_total: number;
        /**
         * The total refunded amount.
         */
        refunded_total: number;
        /**
         * The total credit line amount.
         */
        credit_line_total: number;
        /**
         * The total amount for accounting purposes.
         */
        accounting_total: number;
        /**
         * The summary's raw pending difference.
         */
        raw_pending_difference: Record<string, any>;
        /**
         * The summary's raw current order total.
         */
        raw_current_order_total: Record<string, any>;
        /**
         * The summary's raw original order total.
         */
        raw_original_order_total: Record<string, any>;
        /**
         * The summary's raw transaction total.
         */
        raw_transaction_total: Record<string, any>;
        /**
         * The summary's raw paid total.
         */
        raw_paid_total: Record<string, any>;
        /**
         * The summary's raw refunded total.
         */
        raw_refunded_total: Record<string, any>;
        /**
         * The summary's raw credit line total.
         */
        raw_credit_line_total: Record<string, any>;
        /**
         * The summary's raw accounting total.
         */
        raw_accounting_total: Record<string, any>;
    };
    /**
     * The order's metadata, can hold custom key-value pairs.
     */
    metadata?: Record<string, any>;
    /**
     * The date the order was canceled.
     */
    canceled_at?: string;
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
     * The taxes total for order items, excluding promotions.
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
     * The tax total of the order items including promotions.
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
     * The tax total of the order excluding promotions.
     */
    original_tax_total: number;
    /**
     * The order's total including taxes and promotions.
     */
    total: number;
    /**
     * The order's subtotal excluding taxes, including promotions.
     */
    subtotal: number;
    /**
     * The tax total of the order including promotions.
     */
    tax_total: number;
    /**
     * The total discount excluding taxes.
     */
    discount_subtotal: number;
    /**
     * The total discount including taxes.
     */
    discount_total: number;
    /**
     * The tax total applied on the discount.
     */
    discount_tax_total: number;
    /**
     * The order's gift card total.
     */
    gift_card_total: number;
    /**
     * The order's gift card tax total.
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
     * The total taxes of the order's shipping including taxes.
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
    /**
     * The order's display ID.
     */
    display_id: number;
    /**
     * The order's credit lines, useful to add additional payment amounts for an order.
     */
    credit_lines?: Array<OrderCreditLine>;
    /**
     * Whether the order is a draft order.
     */
    is_draft_order?: boolean;
    /**
     * The date the order was deleted.
     */
    deleted_at?: string;
    /**
     * The order's credit line total.
     */
    credit_line_total: number;
};

