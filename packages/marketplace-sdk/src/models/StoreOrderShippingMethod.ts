/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BaseOrderShippingDetail } from './BaseOrderShippingDetail';
/**
 * The shipping method's details.
 */
export type StoreOrderShippingMethod = {
    /**
     * The shipping method's ID.
     */
    id: string;
    /**
     * The ID of the order the shipping method belongs to.
     */
    order_id: string;
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
     * Whether the shipping method's amount includes applied taxes.
     */
    is_tax_inclusive: boolean;
    /**
     * The ID of the shipping option this method was created from.
     */
    shipping_option_id: string;
    /**
     * The shipping method's data, useful for fulfillment provider handling its fulfillment.
     */
    data: Record<string, any>;
    /**
     * The shipping method's metadata, can hold custom key-value pairs.
     */
    metadata: Record<string, any>;
    /**
     * The shipping method's tax lines.
     */
    tax_lines?: Array<({
        /**
         * The tax line's shipping method.
         */
        shipping_method: {
            /**
             * The shipping method's ID.
             */
            id: string;
            /**
             * The shipping method's order id.
             */
            order_id: string;
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
             * The shipping method's is tax inclusive.
             */
            is_tax_inclusive: boolean;
            /**
             * The shipping method's shipping option id.
             */
            shipping_option_id: string;
            /**
             * The shipping method's data.
             */
            data: Record<string, any>;
            /**
             * The shipping method's metadata.
             */
            metadata: Record<string, any>;
            /**
             * The shipping method's tax lines.
             */
            tax_lines?: Array<{
                /**
                 * The tax line's shipping method.
                 */
                shipping_method: Record<string, any>;
                /**
                 * The tax line's shipping method id.
                 */
                shipping_method_id: string;
                /**
                 * The tax line's total.
                 */
                total: number;
                /**
                 * The tax line's subtotal.
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
                 * The tax line's tax rate id.
                 */
                tax_rate_id?: string;
                /**
                 * The tax line's code.
                 */
                code: string;
                /**
                 * The tax line's rate.
                 */
                rate: number;
                /**
                 * The tax line's provider id.
                 */
                provider_id?: string;
                /**
                 * The tax line's created at.
                 */
                created_at: string;
                /**
                 * The tax line's updated at.
                 */
                updated_at: string;
            }>;
            /**
             * The shipping method's adjustments.
             */
            adjustments?: Array<{
                /**
                 * The adjustment's shipping method.
                 */
                shipping_method: Record<string, any>;
                /**
                 * The adjustment's shipping method id.
                 */
                shipping_method_id: string;
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
                 * The adjustment's order id.
                 */
                order_id: string;
                /**
                 * The adjustment's description.
                 */
                description?: string;
                /**
                 * The adjustment's promotion id.
                 */
                promotion_id?: string;
                /**
                 * The adjustment's provider id.
                 */
                provider_id?: string;
                /**
                 * The adjustment's created at.
                 */
                created_at: string;
                /**
                 * The adjustment's updated at.
                 */
                updated_at: string;
            }>;
            /**
             * The shipping method's original total.
             */
            original_total: number;
            /**
             * The shipping method's original subtotal.
             */
            original_subtotal: number;
            /**
             * The shipping method's original tax total.
             */
            original_tax_total: number;
            /**
             * The shipping method's total.
             */
            total: number;
            /**
             * The shipping method's detail.
             */
            detail?: {
                /**
                 * The detail's ID.
                 */
                id: string;
                /**
                 * The detail's shipping method id.
                 */
                shipping_method_id: string;
                /**
                 * The detail's shipping method.
                 */
                shipping_method: Record<string, any>;
                /**
                 * The detail's claim id.
                 */
                claim_id?: string;
                /**
                 * The detail's exchange id.
                 */
                exchange_id?: string;
                /**
                 * The detail's return id.
                 */
                return_id?: string;
                /**
                 * The detail's created at.
                 */
                created_at: string;
                /**
                 * The detail's updated at.
                 */
                updated_at: string;
            };
            /**
             * The shipping method's subtotal.
             */
            subtotal: number;
            /**
             * The shipping method's tax total.
             */
            tax_total: number;
            /**
             * The shipping method's discount total.
             */
            discount_total: number;
            /**
             * The shipping method's discount tax total.
             */
            discount_tax_total: number;
            /**
             * The shipping method's created at.
             */
            created_at: string;
            /**
             * The shipping method's updated at.
             */
            updated_at: string;
        };
        /**
         * The tax line's shipping method id.
         */
        shipping_method_id: string;
        /**
         * The tax line's total.
         */
        total: number;
        /**
         * The tax line's subtotal.
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
         * The tax line's tax rate id.
         */
        tax_rate_id?: string;
        /**
         * The tax line's code.
         */
        code: string;
        /**
         * The tax line's rate.
         */
        rate: number;
        /**
         * The tax line's provider id.
         */
        provider_id?: string;
        /**
         * The tax line's created at.
         */
        created_at: string;
        /**
         * The tax line's updated at.
         */
        updated_at: string;
    } & {
        /**
         * The tax line's shipping method.
         */
        shipping_method: {
            /**
             * The shipping method's tax lines.
             */
            tax_lines?: Array<({
                /**
                 * The tax line's shipping method.
                 */
                shipping_method: Record<string, any>;
                /**
                 * The tax line's shipping method id.
                 */
                shipping_method_id: string;
                /**
                 * The tax line's total.
                 */
                total: number;
                /**
                 * The tax line's subtotal.
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
                 * The tax line's tax rate id.
                 */
                tax_rate_id?: string;
                /**
                 * The tax line's code.
                 */
                code: string;
                /**
                 * The tax line's rate.
                 */
                rate: number;
                /**
                 * The tax line's provider id.
                 */
                provider_id?: string;
                /**
                 * The tax line's created at.
                 */
                created_at: string;
                /**
                 * The tax line's updated at.
                 */
                updated_at: string;
            } & {
                /**
                 * The tax line's shipping method.
                 */
                shipping_method: Record<string, any>;
            })>;
            /**
             * The shipping method's adjustments.
             */
            adjustments?: Array<({
                /**
                 * The adjustment's shipping method.
                 */
                shipping_method: Record<string, any>;
                /**
                 * The adjustment's shipping method id.
                 */
                shipping_method_id: string;
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
                 * The adjustment's order id.
                 */
                order_id: string;
                /**
                 * The adjustment's description.
                 */
                description?: string;
                /**
                 * The adjustment's promotion id.
                 */
                promotion_id?: string;
                /**
                 * The adjustment's provider id.
                 */
                provider_id?: string;
                /**
                 * The adjustment's created at.
                 */
                created_at: string;
                /**
                 * The adjustment's updated at.
                 */
                updated_at: string;
            } & {
                /**
                 * The adjustment's shipping method.
                 */
                shipping_method: Record<string, any>;
            })>;
            detail?: ({
                /**
                 * The detail's ID.
                 */
                id: string;
                /**
                 * The detail's shipping method id.
                 */
                shipping_method_id: string;
                /**
                 * The detail's shipping method.
                 */
                shipping_method: Record<string, any>;
                /**
                 * The detail's claim id.
                 */
                claim_id?: string;
                /**
                 * The detail's exchange id.
                 */
                exchange_id?: string;
                /**
                 * The detail's return id.
                 */
                return_id?: string;
                /**
                 * The detail's created at.
                 */
                created_at: string;
                /**
                 * The detail's updated at.
                 */
                updated_at: string;
            } & {
                /**
                 * The detail's shipping method.
                 */
                shipping_method: Record<string, any>;
            });
            /**
             * The shipping method's ID.
             */
            id: string;
            /**
             * The shipping method's order id.
             */
            order_id: string;
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
             * The shipping method's is tax inclusive.
             */
            is_tax_inclusive: boolean;
            /**
             * The shipping method's shipping option id.
             */
            shipping_option_id: string;
            /**
             * The shipping method's data.
             */
            data: Record<string, any>;
            /**
             * The shipping method's metadata.
             */
            metadata: Record<string, any>;
            /**
             * The shipping method's original total.
             */
            original_total: number;
            /**
             * The shipping method's original subtotal.
             */
            original_subtotal: number;
            /**
             * The shipping method's original tax total.
             */
            original_tax_total: number;
            /**
             * The shipping method's total.
             */
            total: number;
            /**
             * The shipping method's subtotal.
             */
            subtotal: number;
            /**
             * The shipping method's tax total.
             */
            tax_total: number;
            /**
             * The shipping method's discount total.
             */
            discount_total: number;
            /**
             * The shipping method's discount tax total.
             */
            discount_tax_total: number;
            /**
             * The shipping method's created at.
             */
            created_at: string;
            /**
             * The shipping method's updated at.
             */
            updated_at: string;
        };
    })>;
    /**
     * The shipping method's adjustments.
     */
    adjustments?: Array<({
        /**
         * The adjustment's shipping method.
         */
        shipping_method: {
            /**
             * The shipping method's ID.
             */
            id: string;
            /**
             * The shipping method's order id.
             */
            order_id: string;
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
             * The shipping method's is tax inclusive.
             */
            is_tax_inclusive: boolean;
            /**
             * The shipping method's shipping option id.
             */
            shipping_option_id: string;
            /**
             * The shipping method's data.
             */
            data: Record<string, any>;
            /**
             * The shipping method's metadata.
             */
            metadata: Record<string, any>;
            /**
             * The shipping method's tax lines.
             */
            tax_lines?: Array<{
                /**
                 * The tax line's shipping method.
                 */
                shipping_method: Record<string, any>;
                /**
                 * The tax line's shipping method id.
                 */
                shipping_method_id: string;
                /**
                 * The tax line's total.
                 */
                total: number;
                /**
                 * The tax line's subtotal.
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
                 * The tax line's tax rate id.
                 */
                tax_rate_id?: string;
                /**
                 * The tax line's code.
                 */
                code: string;
                /**
                 * The tax line's rate.
                 */
                rate: number;
                /**
                 * The tax line's provider id.
                 */
                provider_id?: string;
                /**
                 * The tax line's created at.
                 */
                created_at: string;
                /**
                 * The tax line's updated at.
                 */
                updated_at: string;
            }>;
            /**
             * The shipping method's adjustments.
             */
            adjustments?: Array<{
                /**
                 * The adjustment's shipping method.
                 */
                shipping_method: Record<string, any>;
                /**
                 * The adjustment's shipping method id.
                 */
                shipping_method_id: string;
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
                 * The adjustment's order id.
                 */
                order_id: string;
                /**
                 * The adjustment's description.
                 */
                description?: string;
                /**
                 * The adjustment's promotion id.
                 */
                promotion_id?: string;
                /**
                 * The adjustment's provider id.
                 */
                provider_id?: string;
                /**
                 * The adjustment's created at.
                 */
                created_at: string;
                /**
                 * The adjustment's updated at.
                 */
                updated_at: string;
            }>;
            /**
             * The shipping method's original total.
             */
            original_total: number;
            /**
             * The shipping method's original subtotal.
             */
            original_subtotal: number;
            /**
             * The shipping method's original tax total.
             */
            original_tax_total: number;
            /**
             * The shipping method's total.
             */
            total: number;
            /**
             * The shipping method's detail.
             */
            detail?: {
                /**
                 * The detail's ID.
                 */
                id: string;
                /**
                 * The detail's shipping method id.
                 */
                shipping_method_id: string;
                /**
                 * The detail's shipping method.
                 */
                shipping_method: Record<string, any>;
                /**
                 * The detail's claim id.
                 */
                claim_id?: string;
                /**
                 * The detail's exchange id.
                 */
                exchange_id?: string;
                /**
                 * The detail's return id.
                 */
                return_id?: string;
                /**
                 * The detail's created at.
                 */
                created_at: string;
                /**
                 * The detail's updated at.
                 */
                updated_at: string;
            };
            /**
             * The shipping method's subtotal.
             */
            subtotal: number;
            /**
             * The shipping method's tax total.
             */
            tax_total: number;
            /**
             * The shipping method's discount total.
             */
            discount_total: number;
            /**
             * The shipping method's discount tax total.
             */
            discount_tax_total: number;
            /**
             * The shipping method's created at.
             */
            created_at: string;
            /**
             * The shipping method's updated at.
             */
            updated_at: string;
        };
        /**
         * The adjustment's shipping method id.
         */
        shipping_method_id: string;
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
         * The adjustment's order id.
         */
        order_id: string;
        /**
         * The adjustment's description.
         */
        description?: string;
        /**
         * The adjustment's promotion id.
         */
        promotion_id?: string;
        /**
         * The adjustment's provider id.
         */
        provider_id?: string;
        /**
         * The adjustment's created at.
         */
        created_at: string;
        /**
         * The adjustment's updated at.
         */
        updated_at: string;
    } & {
        /**
         * The adjustment's shipping method.
         */
        shipping_method: {
            /**
             * The shipping method's tax lines.
             */
            tax_lines?: Array<({
                /**
                 * The tax line's shipping method.
                 */
                shipping_method: Record<string, any>;
                /**
                 * The tax line's shipping method id.
                 */
                shipping_method_id: string;
                /**
                 * The tax line's total.
                 */
                total: number;
                /**
                 * The tax line's subtotal.
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
                 * The tax line's tax rate id.
                 */
                tax_rate_id?: string;
                /**
                 * The tax line's code.
                 */
                code: string;
                /**
                 * The tax line's rate.
                 */
                rate: number;
                /**
                 * The tax line's provider id.
                 */
                provider_id?: string;
                /**
                 * The tax line's created at.
                 */
                created_at: string;
                /**
                 * The tax line's updated at.
                 */
                updated_at: string;
            } & {
                /**
                 * The tax line's shipping method.
                 */
                shipping_method: Record<string, any>;
            })>;
            /**
             * The shipping method's adjustments.
             */
            adjustments?: Array<({
                /**
                 * The adjustment's shipping method.
                 */
                shipping_method: Record<string, any>;
                /**
                 * The adjustment's shipping method id.
                 */
                shipping_method_id: string;
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
                 * The adjustment's order id.
                 */
                order_id: string;
                /**
                 * The adjustment's description.
                 */
                description?: string;
                /**
                 * The adjustment's promotion id.
                 */
                promotion_id?: string;
                /**
                 * The adjustment's provider id.
                 */
                provider_id?: string;
                /**
                 * The adjustment's created at.
                 */
                created_at: string;
                /**
                 * The adjustment's updated at.
                 */
                updated_at: string;
            } & {
                /**
                 * The adjustment's shipping method.
                 */
                shipping_method: Record<string, any>;
            })>;
            detail?: ({
                /**
                 * The detail's ID.
                 */
                id: string;
                /**
                 * The detail's shipping method id.
                 */
                shipping_method_id: string;
                /**
                 * The detail's shipping method.
                 */
                shipping_method: Record<string, any>;
                /**
                 * The detail's claim id.
                 */
                claim_id?: string;
                /**
                 * The detail's exchange id.
                 */
                exchange_id?: string;
                /**
                 * The detail's return id.
                 */
                return_id?: string;
                /**
                 * The detail's created at.
                 */
                created_at: string;
                /**
                 * The detail's updated at.
                 */
                updated_at: string;
            } & {
                /**
                 * The detail's shipping method.
                 */
                shipping_method: Record<string, any>;
            });
            /**
             * The shipping method's ID.
             */
            id: string;
            /**
             * The shipping method's order id.
             */
            order_id: string;
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
             * The shipping method's is tax inclusive.
             */
            is_tax_inclusive: boolean;
            /**
             * The shipping method's shipping option id.
             */
            shipping_option_id: string;
            /**
             * The shipping method's data.
             */
            data: Record<string, any>;
            /**
             * The shipping method's metadata.
             */
            metadata: Record<string, any>;
            /**
             * The shipping method's original total.
             */
            original_total: number;
            /**
             * The shipping method's original subtotal.
             */
            original_subtotal: number;
            /**
             * The shipping method's original tax total.
             */
            original_tax_total: number;
            /**
             * The shipping method's total.
             */
            total: number;
            /**
             * The shipping method's subtotal.
             */
            subtotal: number;
            /**
             * The shipping method's tax total.
             */
            tax_total: number;
            /**
             * The shipping method's discount total.
             */
            discount_total: number;
            /**
             * The shipping method's discount tax total.
             */
            discount_tax_total: number;
            /**
             * The shipping method's created at.
             */
            created_at: string;
            /**
             * The shipping method's updated at.
             */
            updated_at: string;
        };
    })>;
    /**
     * The shipping method's total including taxes, excluding promotions.
     */
    original_total: number;
    /**
     * The shipping method's total excluding taxes, including promotions.
     */
    original_subtotal: number;
    /**
     * The shipping method's total taxes excluding promotions.
     */
    original_tax_total: number;
    /**
     * The shipping method's total including taxes and promotions.
     */
    total: number;
    /**
     * The shipping method's total excluding taxes, including promotions.
     */
    subtotal: number;
    /**
     * The shipping method's tax total including promotions.
     */
    tax_total: number;
    /**
     * The total discounts applied on the shipping method.
     */
    discount_total: number;
    /**
     * The taxes applied on the discount amount.
     */
    discount_tax_total: number;
    /**
     * The date the shipping method was created.
     */
    created_at: string;
    /**
     * The date the shipping method was updated.
     */
    updated_at: string;
    /**
     * Details of changes to a shipping method.
     */
    detail?: (BaseOrderShippingDetail & {
        /**
         * The detail's shipping method.
         */
        shipping_method: {
            /**
             * The shipping method's tax lines.
             */
            tax_lines?: Array<({
                /**
                 * The tax line's shipping method.
                 */
                shipping_method: Record<string, any>;
                /**
                 * The tax line's shipping method id.
                 */
                shipping_method_id: string;
                /**
                 * The tax line's total.
                 */
                total: number;
                /**
                 * The tax line's subtotal.
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
                 * The tax line's tax rate id.
                 */
                tax_rate_id?: string;
                /**
                 * The tax line's code.
                 */
                code: string;
                /**
                 * The tax line's rate.
                 */
                rate: number;
                /**
                 * The tax line's provider id.
                 */
                provider_id?: string;
                /**
                 * The tax line's created at.
                 */
                created_at: string;
                /**
                 * The tax line's updated at.
                 */
                updated_at: string;
            } & {
                /**
                 * The tax line's shipping method.
                 */
                shipping_method: Record<string, any>;
            })>;
            /**
             * The shipping method's adjustments.
             */
            adjustments?: Array<({
                /**
                 * The adjustment's shipping method.
                 */
                shipping_method: Record<string, any>;
                /**
                 * The adjustment's shipping method id.
                 */
                shipping_method_id: string;
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
                 * The adjustment's order id.
                 */
                order_id: string;
                /**
                 * The adjustment's description.
                 */
                description?: string;
                /**
                 * The adjustment's promotion id.
                 */
                promotion_id?: string;
                /**
                 * The adjustment's provider id.
                 */
                provider_id?: string;
                /**
                 * The adjustment's created at.
                 */
                created_at: string;
                /**
                 * The adjustment's updated at.
                 */
                updated_at: string;
            } & {
                /**
                 * The adjustment's shipping method.
                 */
                shipping_method: Record<string, any>;
            })>;
            detail?: ({
                /**
                 * The detail's ID.
                 */
                id: string;
                /**
                 * The detail's shipping method id.
                 */
                shipping_method_id: string;
                /**
                 * The detail's shipping method.
                 */
                shipping_method: Record<string, any>;
                /**
                 * The detail's claim id.
                 */
                claim_id?: string;
                /**
                 * The detail's exchange id.
                 */
                exchange_id?: string;
                /**
                 * The detail's return id.
                 */
                return_id?: string;
                /**
                 * The detail's created at.
                 */
                created_at: string;
                /**
                 * The detail's updated at.
                 */
                updated_at: string;
            } & {
                /**
                 * The detail's shipping method.
                 */
                shipping_method: Record<string, any>;
            });
            /**
             * The shipping method's ID.
             */
            id: string;
            /**
             * The shipping method's order id.
             */
            order_id: string;
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
             * The shipping method's is tax inclusive.
             */
            is_tax_inclusive: boolean;
            /**
             * The shipping method's shipping option id.
             */
            shipping_option_id: string;
            /**
             * The shipping method's data.
             */
            data: Record<string, any>;
            /**
             * The shipping method's metadata.
             */
            metadata: Record<string, any>;
            /**
             * The shipping method's original total.
             */
            original_total: number;
            /**
             * The shipping method's original subtotal.
             */
            original_subtotal: number;
            /**
             * The shipping method's original tax total.
             */
            original_tax_total: number;
            /**
             * The shipping method's total.
             */
            total: number;
            /**
             * The shipping method's subtotal.
             */
            subtotal: number;
            /**
             * The shipping method's tax total.
             */
            tax_total: number;
            /**
             * The shipping method's discount total.
             */
            discount_total: number;
            /**
             * The shipping method's discount tax total.
             */
            discount_tax_total: number;
            /**
             * The shipping method's created at.
             */
            created_at: string;
            /**
             * The shipping method's updated at.
             */
            updated_at: string;
        };
    });
};

