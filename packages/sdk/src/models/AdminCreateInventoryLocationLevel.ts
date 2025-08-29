/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * The inventory level's details.
 */
export type AdminCreateInventoryLocationLevel = {
    /**
     * The ID of the associated location.
     */
    location_id: string;
    /**
     * The inventory level's stocked quantity.
     */
    stocked_quantity?: number;
    /**
     * The inventory level's incoming quantity.
     */
    incoming_quantity?: number;
};

