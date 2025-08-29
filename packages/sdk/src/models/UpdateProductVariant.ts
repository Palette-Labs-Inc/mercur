/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { UpdateVariantPrice } from './UpdateVariantPrice';
export type UpdateProductVariant = {
    /**
     * The ID of the variant to update.
     */
    id?: string;
    /**
     * The title of the variant.
     */
    title?: string;
    /**
     * The prices of the variant.
     */
    prices?: Array<UpdateVariantPrice>;
    /**
     * The unique SKU for the variant.
     */
    sku?: string | null;
    /**
     * The EAN number of the variant.
     */
    ean?: string | null;
    /**
     * The UPC number of the variant.
     */
    upc?: string | null;
    /**
     * A generic GTIN field for the variant.
     */
    barcode?: string | null;
    /**
     * The Harmonized System code of the variant.
     */
    hs_code?: string | null;
    /**
     * The Manufacturer Identification code of the variant.
     */
    mid_code?: string | null;
    /**
     * Whether the variant can be backordered.
     */
    allow_backorder?: boolean;
    /**
     * Whether Medusa should keep track of the inventory of this variant.
     */
    manage_inventory?: boolean;
    /**
     * The rank of the variant when presented in a list of variants.
     */
    variant_rank?: number;
    /**
     * The weight of the variant.
     */
    weight?: number | null;
    /**
     * The length of the variant.
     */
    length?: number | null;
    /**
     * The height of the variant.
     */
    height?: number | null;
    /**
     * The width of the variant.
     */
    width?: number | null;
    /**
     * The country of origin of the variant.
     */
    origin_country?: string | null;
    /**
     * The material composition of the variant.
     */
    material?: string | null;
    /**
     * An optional set of key-value pairs with additional information.
     */
    metadata?: Record<string, any> | null;
    /**
     * The options of the variant.
     */
    options?: Record<string, string>;
};

