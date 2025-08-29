/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { StoreCartAddress } from './StoreCartAddress';
import type { StoreCartLineItem } from './StoreCartLineItem';
/**
 * The details of the cart to be created.
 */
export type StoreCreateCart = {
    /**
     * The ID of the cart's region. This affects the prices and currency of the cart.
     */
    region_id?: string;
    shipping_address?: StoreCartAddress;
    billing_address?: StoreCartAddress;
    /**
     * The email of the cart's customer.
     */
    email?: string;
    /**
     * The cart's currency code. If not provided, the region's currency is used. This affects prices in the cart, as well.
     */
    currency_code?: string;
    /**
     * The cart's items.
     */
    items?: Array<StoreCartLineItem>;
    /**
     * The ID of the sales channel that cart is created in. Only products available in that sales channel can be added to the cart. If not provided, the store's default sales channel is associated with the cart instead.
     */
    sales_channel_id?: string;
    /**
     * The cart's metadata, can hold custom key-value pairs.
     */
    metadata?: Record<string, any>;
};

