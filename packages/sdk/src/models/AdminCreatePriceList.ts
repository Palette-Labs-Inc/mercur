/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * The price list's details.
 */
export type AdminCreatePriceList = {
    /**
     * The price list's title.
     */
    title: string;
    /**
     * The price list's description.
     */
    description: string;
    /**
     * The date and time the price list starts at.
     */
    starts_at?: string;
    /**
     * The date and time the price list ends at.
     */
    ends_at?: string;
    /**
     * The price list's status.
     */
    status?: 'active' | 'draft';
    /**
     * The price list's type.
     */
    type?: 'sale' | 'override';
    /**
     * The price list's rules.
     */
    rules?: Record<string, any>;
    /**
     * The price list's prices.
     */
    prices?: Array<{
        /**
         * The price's currency code.
         */
        currency_code: string;
        /**
         * The price's amount.
         */
        amount: number;
        /**
         * The ID of the product variant this price is for.
         */
        variant_id: string;
        /**
         * The minimum quantity required in the cart for this price to be applied.
         */
        min_quantity?: number;
        /**
         * The maximum quantity in the cart that shouldn't be crossed for this price to be applied.
         */
        max_quantity?: number;
        /**
         * The price's rules.
         */
        rules?: Record<string, any>;
    }>;
};

