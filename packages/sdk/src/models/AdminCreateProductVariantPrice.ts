/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * The details of a variant's price.
 */
export type AdminCreateProductVariantPrice = {
    /**
     * The price's currency code.
     */
    currency_code: string;
    /**
     * The price's amount.
     */
    amount: number;
    /**
     * The minimum quantity that must be available in the cart for this price to apply.
     */
    min_quantity?: number;
    /**
     * The maximum quantity that must not be surpassed in the cart for this price to apply.
     */
    max_quantity?: number;
    /**
     * The price's rules.
     */
    rules?: {
        /**
         * The ID of a region.
         */
        region_id: string;
    };
};

