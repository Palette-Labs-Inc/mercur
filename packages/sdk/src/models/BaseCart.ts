/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BaseCartAddress } from './BaseCartAddress';
import type { BaseCartShippingMethod } from './BaseCartShippingMethod';
import type { BasePaymentCollection } from './BasePaymentCollection';
import type { BaseRegion } from './BaseRegion';
/**
 * The item's cart.
 */
export type BaseCart = {
    /**
     * The cart's ID.
     */
    id: string;
    region?: BaseRegion;
    /**
     * The cart's region id.
     */
    region_id?: string;
    /**
     * The cart's customer id.
     */
    customer_id?: string;
    /**
     * The cart's sales channel id.
     */
    sales_channel_id?: string;
    /**
     * The cart's email.
     */
    email?: string;
    /**
     * The cart's currency code.
     */
    currency_code: string;
    shipping_address?: BaseCartAddress;
    billing_address?: BaseCartAddress;
    /**
     * The cart's items.
     */
    items?: Array<Record<string, any>>;
    /**
     * The cart's shipping methods.
     */
    shipping_methods?: Array<BaseCartShippingMethod>;
    payment_collection?: BasePaymentCollection;
    /**
     * The cart's metadata.
     */
    metadata?: Record<string, any>;
    /**
     * The cart's created at.
     */
    created_at?: string;
    /**
     * The cart's updated at.
     */
    updated_at?: string;
    /**
     * The cart's original item total.
     */
    original_item_total: number;
    /**
     * The cart's original item subtotal.
     */
    original_item_subtotal: number;
    /**
     * The cart's original item tax total.
     */
    original_item_tax_total: number;
    /**
     * The cart's item total.
     */
    item_total: number;
    /**
     * The cart's item subtotal.
     */
    item_subtotal: number;
    /**
     * The cart's item tax total.
     */
    item_tax_total: number;
    /**
     * The cart's original total.
     */
    original_total: number;
    /**
     * The cart's original subtotal.
     */
    original_subtotal: number;
    /**
     * The cart's original tax total.
     */
    original_tax_total: number;
    /**
     * The cart's total.
     */
    total: number;
    /**
     * The cart's subtotal.
     */
    subtotal: number;
    /**
     * The cart's tax total.
     */
    tax_total: number;
    /**
     * The cart's discount total.
     */
    discount_total: number;
    /**
     * The cart's discount tax total.
     */
    discount_tax_total: number;
    /**
     * The cart's gift card total.
     */
    gift_card_total: number;
    /**
     * The cart's gift card tax total.
     */
    gift_card_tax_total: number;
    /**
     * The cart's shipping total.
     */
    shipping_total: number;
    /**
     * The cart's shipping subtotal.
     */
    shipping_subtotal: number;
    /**
     * The cart's shipping tax total.
     */
    shipping_tax_total: number;
    /**
     * The cart's original shipping total.
     */
    original_shipping_total: number;
    /**
     * The cart's original shipping subtotal.
     */
    original_shipping_subtotal: number;
    /**
     * The cart's original shipping tax total.
     */
    original_shipping_tax_total: number;
};

