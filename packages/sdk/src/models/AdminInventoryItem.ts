/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AdminInventoryLevel } from './AdminInventoryLevel';
/**
 * The inventory item's details.
 */
export type AdminInventoryItem = {
    /**
     * The inventory item's ID.
     */
    id: string;
    /**
     * The inventory item's sku.
     */
    sku?: string;
    /**
     * The inventory item's origin country.
     */
    origin_country?: string;
    /**
     * The inventory item's HS code.
     */
    hs_code?: string;
    /**
     * Whether the inventory item requires shipping.
     */
    requires_shipping: boolean;
    /**
     * The inventory item's MID code.
     */
    mid_code?: string;
    /**
     * The inventory item's material.
     */
    material?: string;
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
     * The inventory item's title.
     */
    title?: string;
    /**
     * The inventory item's description.
     */
    description?: string;
    /**
     * The thumbnail URL of the inventory item.
     */
    thumbnail?: string;
    /**
     * Custom key-value pairs, used to store additional information about the inventory item.
     */
    metadata?: Record<string, any>;
    /**
     * The inventory item's location levels.
     */
    location_levels?: Array<AdminInventoryLevel>;
};

