/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * The details of an inventory level to create.
 */
export type AdminBatchCreateInventoryItemsLocationLevels = {
    /**
     * The ID of the associated stock location.
     */
    location_id: string;
    /**
     * The ID of the associated inventory item.
     */
    inventory_item_id: string;
    /**
     * The stocked quantity.
     */
    stocked_quantity?: number;
    /**
     * The incoming quantity to be added to stock.
     */
    incoming_quantity?: number;
};

