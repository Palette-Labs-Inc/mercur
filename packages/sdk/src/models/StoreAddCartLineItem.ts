/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * The details of the line item to add.
 */
export type StoreAddCartLineItem = {
    /**
     * The ID of the product variant to add to the cart.
     */
    variant_id: string;
    /**
     * The item's quantity.
     */
    quantity: number;
    /**
     * The item's metadata, can hold custom key-value pairs.
     */
    metadata?: Record<string, any>;
};

