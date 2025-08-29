/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CreateAddress } from './CreateAddress';
import type { UpdateAddress } from './UpdateAddress';
/**
 * The details to update in a cart.
 */
export type UpdateCartData = {
    /**
     * The ID of the associated region. This can affect the prices and currency code of the cart.
     */
    region_id?: string;
    /**
     * The ID of the customer that the cart belongs to.
     */
    customer_id?: string;
    /**
     * The ID of the associated sales channel. Only products available in this channel can be added to the cart.
     */
    sales_channel_id?: string;
    /**
     * The email of the customer that the cart belongs to.
     */
    email?: string;
    /**
     * The cart's currency code.
     */
    currency_code?: string;
    /**
     * The ID of the cart's shipping address.
     */
    shipping_address_id?: string;
    /**
     * The ID of the cart's billing address.
     */
    billing_address_id?: string;
    billing_address?: (CreateAddress | UpdateAddress);
    shipping_address?: (CreateAddress | UpdateAddress);
    /**
     * The cart's metadata, ca hold custom key-value pairs.
     */
    metadata?: Record<string, any>;
};

