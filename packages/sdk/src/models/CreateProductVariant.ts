/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CreateVariantPrice } from './CreateVariantPrice';
export type CreateProductVariant = {
    /**
     * The title of the variant.
     */
    title?: string;
    /**
     * The unique SKU for the variant.
     */
    sku?: string;
    /**
     * The EAN number of the variant.
     */
    ean?: string;
    /**
     * The UPC number of the variant.
     */
    upc?: string;
    /**
     * The barcode of the variant.
     */
    barcode?: string;
    /**
     * The HS code of the variant.
     */
    hs_code?: string;
    /**
     * The MID code of the variant.
     */
    mid_code?: string;
    /**
     * Whether the variant can be backordered.
     */
    allow_backorder?: boolean;
    /**
     * Whether Medusa should keep track of inventory for this variant.
     */
    manage_inventory?: boolean;
    /**
     * The rank of the variant.
     */
    variant_rank?: number;
    /**
     * The weight of the variant.
     */
    weight?: number;
    /**
     * The length of the variant.
     */
    length?: number;
    /**
     * The height of the variant.
     */
    height?: number;
    /**
     * The width of the variant.
     */
    width?: number;
    /**
     * The country of origin of the variant.
     */
    origin_country?: string;
    /**
     * The material composition of the variant.
     */
    material?: string;
    /**
     * Additional metadata for the variant.
     */
    metadata?: Record<string, any>;
    /**
     * The prices of the variant.
     */
    prices?: Array<CreateVariantPrice>;
    /**
     * The options of the variant.
     */
    options?: Record<string, any>;
    /**
     * The inventory items of the variant.
     */
    inventory_items?: Array<{
        inventory_item_id?: string;
        required_quantity?: number;
    }>;
};

