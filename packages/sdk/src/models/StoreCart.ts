/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { StoreCartAddress } from './StoreCartAddress';
import type { StoreCartLineItem } from './StoreCartLineItem';
import type { StoreCartPromotion } from './StoreCartPromotion';
import type { StoreCartShippingMethod } from './StoreCartShippingMethod';
import type { StorePaymentCollection } from './StorePaymentCollection';
import type { StoreRegion } from './StoreRegion';
/**
 * The cart's details.
 */
export type StoreCart = {
    /**
     * The cart's ID.
     */
    id: string;
    region?: StoreRegion;
    /**
     * The ID of the region the cart belongs to.
     */
    region_id?: string;
    /**
     * The ID of the customer the cart belongs to.
     */
    customer_id?: string;
    /**
     * The ID of the cart's sales channel. Only products that belong to the same sales channel can be added to the cart. The created order will be associated with the same sales channel.
     */
    sales_channel_id?: string;
    /**
     * The email of the customer the cart belongs to.
     */
    email?: string;
    /**
     * The cart's currency code.
     */
    currency_code: string;
    shipping_address?: StoreCartAddress;
    billing_address?: StoreCartAddress;
    /**
     * The cart's items.
     */
    items?: Array<StoreCartLineItem>;
    /**
     * The cart's shipping methods.
     */
    shipping_methods?: Array<StoreCartShippingMethod>;
    payment_collection?: StorePaymentCollection;
    /**
     * The cart's metadata, can hold custom key-value pairs.
     */
    metadata?: Record<string, any>;
    /**
     * The date the cart was created.
     */
    created_at?: string;
    /**
     * The date the cart was updated.
     */
    updated_at?: string;
    /**
     * The cart items' total including taxes, excluding promotions.
     */
    original_item_total: number;
    /**
     * The cart items' total excluding taxes, including promotions.
     */
    original_item_subtotal: number;
    /**
     * The cart items' tax total excluding promotions.
     */
    original_item_tax_total: number;
    /**
     * The cart items' total including taxes and promotions.
     */
    item_total: number;
    /**
     * The cart items' total excluding taxes, including promotions.
     */
    item_subtotal: number;
    /**
     * The cart items' tax total including promotions.
     */
    item_tax_total: number;
    /**
     * The cart's total including taxes, excluding promotions.
     */
    original_total: number;
    /**
     * The cart's total excluding taxes, including promotions.
     */
    original_subtotal: number;
    /**
     * The cart's tax total excluding promotions.
     */
    original_tax_total: number;
    /**
     * The cart's total including taxes and promotions.
     */
    total: number;
    /**
     * The cart's total excluding taxes, including promotions.
     */
    subtotal: number;
    /**
     * The cart's tax total including promotions.
     */
    tax_total: number;
    /**
     * The cart's discount total.
     */
    discount_total: number;
    /**
     * The tax total applied on the discounted amount.
     */
    discount_tax_total: number;
    /**
     * The total gift card amount applied on the cart.
     */
    gift_card_total: number;
    /**
     * The total taxes applied on the gift card amount.
     */
    gift_card_tax_total: number;
    /**
     * The cart's shipping total including taxes and promotions.
     */
    shipping_total: number;
    /**
     * The cart's shipping total excluding taxes, including promotions.
     */
    shipping_subtotal: number;
    /**
     * The total taxes applied on the cart's shipping amount.
     */
    shipping_tax_total: number;
    /**
     * The cart's shipping total including taxes, excluding promotions.
     */
    original_shipping_total: number;
    /**
     * The cart's shipping total excluding taxes, including promotions.
     */
    original_shipping_subtotal: number;
    /**
     * The total taxes applied on the cart's shipping amount.
     */
    original_shipping_tax_total: number;
    /**
     * The cart's promotions.
     */
    promotions: Array<StoreCartPromotion>;
};

