/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * The inventory level's details
 */
export type InventoryLevel = {
    /**
     * The inventory level's ID.
     */
    id: string;
    /**
     * The ID of the associated inventory item.
     */
    inventory_item_id: string;
    /**
     * The ID of the associated location.
     */
    location_id: string;
    /**
     * The inventory level's stocked quantity.
     */
    stocked_quantity: number;
    /**
     * The inventory level's reserved quantity.
     */
    reserved_quantity: number;
    /**
     * The inventory level's available quantity.
     */
    available_quantity: number;
    /**
     * The inventory level's incoming quantity.
     */
    incoming_quantity: number;
    /**
     * The inventory level's metadata, can hold custom key-value pairs.
     */
    metadata?: Record<string, any>;
};

