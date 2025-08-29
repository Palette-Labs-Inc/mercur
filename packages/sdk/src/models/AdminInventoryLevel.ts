/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * The location level's location levels.
 */
export type AdminInventoryLevel = {
    /**
     * The location level's ID.
     */
    id: string;
    /**
     * The location level's created at.
     */
    created_at: string;
    /**
     * The location level's updated at.
     */
    updated_at: string;
    /**
     * The location level's deleted at.
     */
    deleted_at: string;
    /**
     * The location level's inventory item id.
     */
    inventory_item_id: string;
    /**
     * The location level's location id.
     */
    location_id: string;
    /**
     * The location level's stocked quantity.
     */
    stocked_quantity: number;
    /**
     * The location level's reserved quantity.
     */
    reserved_quantity: number;
    /**
     * The location level's incoming quantity.
     */
    incoming_quantity: number;
    /**
     * The location level's metadata.
     */
    metadata: Record<string, any>;
    inventory_item?: Record<string, any>;
    /**
     * The location level's available quantity.
     */
    available_quantity: number;
};

