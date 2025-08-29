/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { VendorCreatePromotionRule } from './VendorCreatePromotionRule';
export type VendorCreateApplicationMethod = {
    /**
     * Description of the promotion.
     */
    description?: string;
    /**
     * The percentage value of the promotion.
     */
    value?: number;
    /**
     * The max quantity of the items.
     */
    max_quantity?: string;
    /**
     * Apply to quantity of the items.
     */
    apply_to_quantity?: string;
    /**
     * Buy ruyles min quantity of the items.
     */
    buy_rules_min_quantity?: string;
    /**
     * The type of the application method.
     */
    type?: 'percentage';
    /**
     * The target type of the application method.
     */
    target_type?: 'items';
    /**
     * The allocation of the application method.
     */
    allocation?: 'each' | 'across';
    /**
     * Promotion target rules.
     */
    target_rules?: Array<VendorCreatePromotionRule>;
};

