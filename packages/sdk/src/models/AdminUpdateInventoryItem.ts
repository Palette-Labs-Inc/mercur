/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * The properties to update in the inventory item.
 */
export type AdminUpdateInventoryItem = {
    /**
     * The inventory item's SKU.
     */
    sku?: string;
    /**
     * The inventory item's HS code.
     */
    hs_code?: string;
    /**
     * The inventory item's weight.
     */
    weight?: number;
    /**
     * The inventory item's length.
     */
    length?: number;
    /**
     * The inventory item's height.
     */
    height?: number;
    /**
     * The inventory item's width.
     */
    width?: number;
    /**
     * The inventory item's origin country.
     */
    origin_country?: string;
    /**
     * The inventory item's MID code.
     */
    mid_code?: string;
    /**
     * The inventory item's material.
     */
    material?: string;
    /**
     * The inventory item's title.
     */
    title?: string;
    /**
     * The inventory item's description.
     */
    description?: string;
    /**
     * Whether the inventory item requires shipping.
     */
    requires_shipping?: boolean;
    /**
     * The URL of an image to be used as the inventory item's thumbnail. You can use the Upload API routes to upload an image and get its URL.
     */
    thumbnail?: string;
    /**
     * The inventory item's metadata. Can be custom data in key-value pairs.
     */
    metadata?: Record<string, any>;
};

