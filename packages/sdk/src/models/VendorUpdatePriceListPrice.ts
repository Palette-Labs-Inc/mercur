/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type VendorUpdatePriceListPrice = {
    /**
     * The ID of the product variant this price list is for.
     */
    variant_id?: string;
    /**
     * The price's rules.
     */
    rules?: Record<string, any>;
    /**
     * The price's currency code.
     */
    currency_code?: string;
    /**
     * The price's amount.
     */
    amount?: number;
    /**
     * The minimum quantity that must be available in the cart for the price to be applied.
     */
    min_quantity?: number;
    /**
     * The maximum quantity allowed to be available in the cart for the price to be applied.
     */
    max_quantity?: number;
};

