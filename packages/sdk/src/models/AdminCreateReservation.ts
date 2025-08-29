/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * The reservation's details.
 */
export type AdminCreateReservation = {
    /**
     * The ID of the line item this reservation is created for.
     */
    line_item_id?: string;
    /**
     * The ID of the location the quantity is reserved from.
     */
    location_id: string;
    /**
     * The ID of the inventory item associated with the line item's variant.
     */
    inventory_item_id: string;
    /**
     * The reserved quantity.
     */
    quantity: number;
    /**
     * The reservation's description.
     */
    description?: string;
    /**
     * The reservation's metadata, used to store custom key-value pairs.
     */
    metadata?: Record<string, any>;
};

