/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BaseOrderShippingDetail } from './BaseOrderShippingDetail';
import type { BaseOrderShippingMethodAdjustment } from './BaseOrderShippingMethodAdjustment';
import type { BaseOrderShippingMethodTaxLine } from './BaseOrderShippingMethodTaxLine';
/**
 * The shipping method's details.
 */
export type BaseOrderShippingMethod = {
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
    tax_lines?: Array<BaseOrderShippingMethodTaxLine>;
    /**
     * The shipping method's adjustments.
     */
    adjustments?: Array<BaseOrderShippingMethodAdjustment>;
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
    detail?: BaseOrderShippingDetail;
};

