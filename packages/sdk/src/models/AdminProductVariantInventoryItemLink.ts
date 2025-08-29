/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AdminInventoryItem } from './AdminInventoryItem';
/**
 * An association between a product variant and an inventory item.
 */
export type AdminProductVariantInventoryItemLink = {
    /**
     * The ID of the association.
     */
    id: string;
    /**
     * The associated product variant's ID.
     */
    variant_id: string;
    variant?: Record<string, any>;
    /**
     * The associated inventory item's ID.
     */
    inventory_item_id: string;
    inventory?: AdminInventoryItem;
    /**
     * The inventory item's required quantity.
     */
    required_quantity?: number;
};

