/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * The shipping option's calculated price.
 */
export type StoreCalculatedPrice = {
    /**
     * The ID of the price set from which the price was selected.
     */
    id: string;
    /**
     * Whether the calculated price belongs to a price list.
     */
    is_calculated_price_price_list?: boolean;
    /**
     * Whether the calculated price is tax inclusive.
     */
    is_calculated_price_tax_inclusive?: boolean;
    /**
     * The amount of the calculated price, or `null` if there isn't a calculated price. This is the amount shown to the customer.
     */
    calculated_amount: number;
    /**
     * The `calculated_amount` with taxes applied.
     */
    calculated_amount_with_tax?: number;
    /**
     * The `calculated_amount` without taxes applied.
     */
    calculated_amount_without_tax?: number;
    /**
     * Whether the original price belongs to a price list.
     */
    is_original_price_price_list?: boolean;
    /**
     * Whether the original price is tax inclusive.
     */
    is_original_price_tax_inclusive?: boolean;
    /**
     * The amount of the original price, or `null` if there isn't an original price. This amount is useful to compare with the `calculated_amount`, such as to check for discounted value.
     */
    original_amount: number;
    /**
     * The currency code of the calculated price, or `null` if there isn't a calculated price.
     */
    currency_code: string;
    /**
     * The calculated price's details.
     */
    calculated_price?: {
        /**
         * The ID of the price.
         */
        id: string;
        /**
         * The ID of the associated price list.
         */
        price_list_id: string;
        /**
         * The price list's type. For example, `sale` or `override`.
         */
        price_list_type: string;
        /**
         * The minimum quantity required in the cart for the price to apply.
         */
        min_quantity: number;
        /**
         * The maximum quantity required in the cart for the price to apply.
         */
        max_quantity: number;
    };
    /**
     * The origin price's details.
     */
    original_price?: {
        /**
         * The ID of the price.
         */
        id: string;
        /**
         * The ID of the associated price list.
         */
        price_list_id: string;
        /**
         * The price list's type. For example, `sale` or `override`.
         */
        price_list_type: string;
        /**
         * The minimum quantity required in the cart for the price to apply.
         */
        min_quantity: number;
        /**
         * The maximum quantity required in the cart for the price to apply.
         */
        max_quantity: number;
    };
    /**
     * The original amount with taxes applied.
     */
    original_amount_with_tax: number;
    /**
     * The original amount without taxes.
     */
    original_amount_without_tax: number;
};

