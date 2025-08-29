/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AdminCreateProductVariantInventoryKit } from './AdminCreateProductVariantInventoryKit';
import type { AdminCreateProductVariantPrice } from './AdminCreateProductVariantPrice';
/**
 * The product variant's details.
 */
export type AdminCreateProductVariant = {
    /**
     * The variant's title.
     */
    title: string;
    /**
     * The variant's SKU.
     */
    sku?: string;
    /**
     * The variant's EAN.
     */
    ean?: string;
    /**
     * The variant's UPC.
     */
    upc?: string;
    /**
     * The variant's barcode.
     */
    barcode?: string;
    /**
     * The variant's HS code.
     */
    hs_code?: string;
    /**
     * The variant's MID code.
     */
    mid_code?: string;
    /**
     * Whether it's allowed to order this variant when it's out of stock.
     */
    allow_backorder?: boolean;
    /**
     * Whether Medusa manages the variant's inventory quantity. If disabled, the product variant is always considered in stock.
     */
    manage_inventory?: boolean;
    /**
     * The sorting order of the variant among other variants in the product.
     */
    variant_rank?: number;
    /**
     * The variant's weight.
     */
    weight?: number;
    /**
     * The variant's length.
     */
    length?: number;
    /**
     * The variant's height.
     */
    height?: number;
    /**
     * The variant's width.
     */
    width?: number;
    /**
     * The variant's origin country.
     */
    origin_country?: string;
    /**
     * The variant's material.
     */
    material?: string;
    /**
     * The variant's metadata, used to store custom key-value pairs.
     */
    metadata?: Record<string, any>;
    /**
     * The variant's prices.
     */
    prices: Array<AdminCreateProductVariantPrice>;
    /**
     * The variant's options, where the key is an option's name, and the value is the option's value.
     */
    options?: Record<string, any>;
    /**
     * The variant's inventory items to create.
     */
    inventory_items?: Array<AdminCreateProductVariantInventoryKit>;
};

