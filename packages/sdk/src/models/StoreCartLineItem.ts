/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { StoreProduct } from './StoreProduct';
import type { StoreProductVariant } from './StoreProductVariant';
/**
 * The item's details.
 */
export type StoreCartLineItem = {
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
     * The item's thumbnail URL.
     */
    thumbnail?: string;
    /**
     * The item's quantity.
     */
    quantity: number;
    product?: StoreProduct;
    /**
     * The ID of the associated product.
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
     * The ID of the associated product's type.
     */
    product_type?: string;
    /**
     * The ID of the associated product's collection.
     */
    product_collection?: string;
    /**
     * The item's product handle.
     */
    product_handle?: string;
    variant?: StoreProductVariant;
    /**
     * The ID of the associated product variant.
     */
    variant_id?: string;
    /**
     * The item's variant SKU.
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
     * The associated variant's value for the product's options.
     */
    variant_option_values?: Record<string, any>;
    /**
     * Whether the item requires shipping.
     */
    requires_shipping: boolean;
    /**
     * Whether the item is discountable.
     */
    is_discountable: boolean;
    /**
     * Whether the item's price includes taxes.
     */
    is_tax_inclusive: boolean;
    /**
     * The original price of the item before a promotion or sale.
     */
    compare_at_unit_price?: number;
    /**
     * The price of a single quantity of the item.
     */
    unit_price: number;
    /**
     * The item's tax lines.
     */
    tax_lines?: Array<({
        /**
         * The details of the item that the tax line belongs to.
         */
        item: Record<string, any>;
        /**
         * The ID of the line item this tax line belongs to.
         */
        item_id: string;
        /**
         * The item's total including taxes and promotions.
         */
        total: number;
        /**
         * The item's total excluding taxes, including promotions.
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
         * The details of the item that the tax line belongs to.
         */
        item: Record<string, any>;
    })>;
    /**
     * The item's adjustments.
     */
    adjustments?: Array<({
        /**
         * The details of the item that the adjustment belongs to.
         */
        item: Record<string, any>;
        /**
         * The ID of the item that the adjustment belongs to.
         */
        item_id: string;
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
         * The details of the item that the adjustment belongs to.
         */
        item: Record<string, any>;
    })>;
    cart: Record<string, any>;
    /**
     * The ID of the cart that the line item belongs to.
     */
    cart_id: string;
    /**
     * The item's metadata, can hold custom key-value pairs.
     */
    metadata?: Record<string, any>;
    /**
     * The date the item was created.
     */
    created_at?: string;
    /**
     * The date the item was updated.
     */
    updated_at?: string;
    /**
     * The date the item was deleted.
     */
    deleted_at?: string;
    /**
     * The item's total including taxes, excluding promotions.
     */
    original_total: number;
    /**
     * The item's total excluding taxes, including promotions.
     */
    original_subtotal: number;
    /**
     * The total taxes of the item excluding promotions.
     */
    original_tax_total: number;
    /**
     * The item's total including taxes and promotions.
     */
    item_total: number;
    /**
     * The item's total excluding taxes, including promotions.
     */
    item_subtotal: number;
    /**
     * The total taxes of the item including promotions.
     */
    item_tax_total: number;
    /**
     * The item's total including taxes and promotions.
     */
    total: number;
    /**
     * The item's total excluding taxes, including promotions.
     */
    subtotal: number;
    /**
     * The total taxes of the item including promotions.
     */
    tax_total: number;
    /**
     * The total discount of the item.
     */
    discount_total: number;
    /**
     * The total taxes applied on the discounted amount.
     */
    discount_tax_total: number;
};

