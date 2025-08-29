/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type UpdateVariantPrice = {
    /**
     * The ID of the price to update.
     */
    id?: string;
    /**
     * The currency code of the price.
     */
    currency_code?: string;
    /**
     * The amount of the price.
     */
    amount?: number;
    /**
     * The minimum quantity required to get this price.
     */
    min_quantity?: number | null;
    /**
     * The maximum quantity allowed to get this price.
     */
    max_quantity?: number | null;
    /**
     * Additional rules that apply to the price.
     */
    rules?: Record<string, string>;
};

