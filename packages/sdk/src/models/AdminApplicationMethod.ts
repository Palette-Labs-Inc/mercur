/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AdminPromotionRule } from './AdminPromotionRule';
/**
 * The application method's details.
 */
export type AdminApplicationMethod = {
    promotion?: Record<string, any>;
    /**
     * The application method's target rules.
     */
    target_rules?: Array<AdminPromotionRule>;
    /**
     * The application method's buy rules.
     */
    buy_rules?: Array<AdminPromotionRule>;
    /**
     * The application method's ID.
     */
    id: string;
    /**
     * The application method's type. If it's `fixed`, the promotion discounts a fixed amount. If it's `percentage`, the promotion discounts a percentage.
     */
    type?: 'fixed' | 'percentage';
    /**
     * Which item does the promotion apply to. `items` mean the promotion applies to the cart's items; `shipping_methods` means the promotion applies to the cart's shipping methods; `order` means the promotion applies on the entire order.
     */
    target_type?: 'items' | 'shipping_methods' | 'order';
    /**
     * How is the promotion amount discounted. `each` means the discounted amount is applied on each applicable item; `across` means the discounted amount is split accross the applicable items.
     */
    allocation?: 'each' | 'across';
    /**
     * The amount to be discounted.
     */
    value?: number;
    /**
     * The application method's currency code.
     */
    currency_code?: string;
    /**
     * The max quantity allowed in the cart for the associated promotion to be applied.
     */
    max_quantity?: number;
    /**
     * The minimum quantity required for a `buyget` promotion to be applied. For example, if the promotion is a "Buy 2 shirts get 1 free", the value of this attribute is `2`.
     */
    buy_rules_min_quantity?: number;
    /**
     * The quantity that results from matching the `buyget` promotion's condition. For example, if the promotion is a "Buy 2 shirts get 1 free", the value of this attribute is `1`.
     */
    apply_to_quantity?: number;
};

