/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BaseCart } from './BaseCart';
import type { BaseLineItemAdjustment } from './BaseLineItemAdjustment';
import type { BaseProduct } from './BaseProduct';
import type { BaseProductVariant } from './BaseProductVariant';
/**
 * The tax line's item.
 */
export type BaseCartLineItem = {
    /**
     * The item's ID.
     */
    id: string;
    /**
     * The item's title.
     */
    title: string;
    /**
     * The item's subtitle.
     */
    subtitle?: string;
    /**
     * The item's thumbnail.
     */
    thumbnail?: string;
    /**
     * The item's quantity.
     */
    quantity: number;
    product?: BaseProduct;
    /**
     * The item's product id.
     */
    product_id?: string;
    /**
     * The item's product title.
     */
    product_title?: string;
    /**
     * The item's product description.
     */
    product_description?: string;
    /**
     * The item's product subtitle.
     */
    product_subtitle?: string;
    /**
     * The item's product type.
     */
    product_type?: string;
    /**
     * The item's product collection.
     */
    product_collection?: string;
    /**
     * The item's product handle.
     */
    product_handle?: string;
    variant?: BaseProductVariant;
    /**
     * The item's variant id.
     */
    variant_id?: string;
    /**
     * The item's variant sku.
     */
    variant_sku?: string;
    /**
     * The item's variant barcode.
     */
    variant_barcode?: string;
    /**
     * The item's variant title.
     */
    variant_title?: string;
    /**
     * The item's variant option values.
     */
    variant_option_values?: Record<string, any>;
    /**
     * The item's requires shipping.
     */
    requires_shipping: boolean;
    /**
     * The item's is discountable.
     */
    is_discountable: boolean;
    /**
     * The item's is tax inclusive.
     */
    is_tax_inclusive: boolean;
    /**
     * The item's compare at unit price.
     */
    compare_at_unit_price?: number;
    /**
     * The item's unit price.
     */
    unit_price: number;
    /**
     * The item's tax lines.
     */
    tax_lines?: Array<Record<string, any>>;
    /**
     * The item's adjustments.
     */
    adjustments?: Array<BaseLineItemAdjustment>;
    cart: BaseCart;
    /**
     * The item's cart id.
     */
    cart_id: string;
    /**
     * The item's metadata.
     */
    metadata?: Record<string, any>;
    /**
     * The item's created at.
     */
    created_at?: string;
    /**
     * The item's updated at.
     */
    updated_at?: string;
    /**
     * The item's deleted at.
     */
    deleted_at?: string;
    /**
     * The item's original total.
     */
    original_total: number;
    /**
     * The item's original subtotal.
     */
    original_subtotal: number;
    /**
     * The item's original tax total.
     */
    original_tax_total: number;
    /**
     * The item's item total.
     */
    item_total: number;
    /**
     * The item's item subtotal.
     */
    item_subtotal: number;
    /**
     * The item's item tax total.
     */
    item_tax_total: number;
    /**
     * The item's total.
     */
    total: number;
    /**
     * The item's subtotal.
     */
    subtotal: number;
    /**
     * The item's tax total.
     */
    tax_total: number;
    /**
     * The item's discount total.
     */
    discount_total: number;
    /**
     * The item's discount tax total.
     */
    discount_tax_total: number;
};

