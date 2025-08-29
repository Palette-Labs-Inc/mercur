/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * The inventory level details.
 */
export type VendorCreateInventoryLevel = {
    /**
     * The inventory level locationId.
     */
    location_id?: string;
    /**
     * The inventory level in stock.
     */
    stocked_quantity?: number;
    /**
     * The quantity reserved from the available stocked_quantity.
     */
    reserved_quantity?: number;
};

