/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * The details of a price list's price.
 */
export type VendorPriceListPrice = {
    /**
     * The ID of the product variant this price list is for.
     */
    variant_id?: string;
    /**
     * The price's rules.
     */
    rules?: Record<string, any>;
    /**
     * The price's ID.
     */
    id?: string;
    /**
     * The price's title.
     */
    title?: string;
    /**
     * The price's currency code.
     */
    currency_code?: string;
    /**
     * The price's amount.
     */
    amount?: number;
    /**
     * The price's raw amount.
     */
    raw_amount?: Record<string, any>;
    /**
     * The minimum quantity that must be available in the cart for the price to be applied.
     */
    min_quantity?: number;
    /**
     * The maximum quantity allowed to be available in the cart for the price to be applied.
     */
    max_quantity?: number;
    /**
     * The ID of the price set this price belongs to.
     */
    price_set_id?: string;
    /**
     * The date the price was created.
     */
    created_at?: string;
    /**
     * The date the price was updated.
     */
    updated_at?: string;
    /**
     * The date the price was deleted.
     */
    deleted_at?: string;
};

