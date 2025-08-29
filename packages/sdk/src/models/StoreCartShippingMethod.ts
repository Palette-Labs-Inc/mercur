/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * A cart's shipping method.
 */
export type StoreCartShippingMethod = {
    /**
     * The shipping method's ID.
     */
    id: string;
    /**
     * The ID of the cart this shipping method belongs to.
     */
    cart_id: string;
    /**
     * The shipping method's name.
     */
    name: string;
    /**
     * The shipping method's description.
     */
    description?: string;
    /**
     * The shipping method's amount.
     */
    amount: number;
    /**
     * Whether the shipping method's amount is tax inclusive.
     */
    is_tax_inclusive: boolean;
    /**
     * The ID of the shipping option this method was created from.
     */
    shipping_option_id?: string;
    /**
     * The shipping method's data, useful for fulfillment handling by third-party services.
     */
    data?: Record<string, any>;
    /**
     * The shipping method's metadata, can hold custom key-value pairs.
     */
    metadata?: Record<string, any>;
    /**
     * The shipping method's tax lines.
     */
    tax_lines?: Array<({
        /**
         * The details of the method that the tax line belongs to.
         */
        shipping_method: Record<string, any>;
        /**
         * The ID of the shipping method this tax line belongs to.
         */
        shipping_method_id: string;
        /**
         * The method's total including taxes and promotions.
         */
        total: number;
        /**
         * The method's total excluding taxes, including promotions.
         */
        subtotal: number;
        /**
         * The tax line's ID.
         */
        id: string;
        /**
         * The tax line's description.
         */
        description?: string;
        /**
         * The ID of the applied tax rate.
         */
        tax_rate_id?: string;
        /**
         * The code that the tax rate is identified by.
         */
        code: string;
        /**
         * The charged rate.
         */
        rate: number;
        /**
         * The ID of the tax provider used to calculate the tax line.
         */
        provider_id?: string;
        /**
         * The date the tax line was created.
         */
        created_at: string;
        /**
         * The date the tax line was updated.
         */
        updated_at: string;
    } & {
        /**
         * The details of the method that the tax line belongs to.
         */
        shipping_method: Record<string, any>;
    })>;
    /**
     * The shipping method's adjustments, such as applied promotions.
     */
    adjustments?: Array<({
        /**
         * The details of the method that the adjustment belongs to.
         */
        shipping_method: Record<string, any>;
        /**
         * The adjustment's ID.
         */
        id: string;
        /**
         * The adjustment's code.
         */
        code?: string;
        /**
         * The adjustment's amount.
         */
        amount: number;
        /**
         * The ID of the associated cart.
         */
        cart_id: string;
        /**
         * The adjustment's description.
         */
        description?: string;
        /**
         * The ID of the applied promotion.
         */
        promotion_id?: string;
        /**
         * The adjustment's provider ID.
         */
        provider_id?: string;
        /**
         * The date the adjustment was created.
         */
        created_at: string;
        /**
         * The date the adjustment was updated.
         */
        updated_at: string;
    } & {
        /**
         * The details of the method that the adjustment belongs to.
         */
        shipping_method: Record<string, any>;
    })>;
    /**
     * The date the shipping method was created.
     */
    created_at: string;
    /**
     * The date the shipping method was updated.
     */
    updated_at: string;
    /**
     * The shipping method's total including taxes, excluding promotions.
     */
    original_total: number;
    /**
     * The shipping method's total excluding taxes, including promotions.
     */
    original_subtotal: number;
    /**
     * The total taxes applied on the shipping method's amount including promotions.
     */
    original_tax_total: number;
    /**
     * The shipping method's total amount including taxes and promotions.
     */
    total: number;
    /**
     * The shipping method's total amount excluding taxes, including promotions.
     */
    subtotal: number;
    /**
     * The total taxes applied on the shipping method's amount including promotions.
     */
    tax_total: number;
    /**
     * The total amount discounted.
     */
    discount_total: number;
    /**
     * The taxes applied on the discounted amount.
     */
    discount_tax_total: number;
};

