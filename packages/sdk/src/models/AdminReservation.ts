/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AdminInventoryItem } from './AdminInventoryItem';
/**
 * The reservation's details.
 */
export type AdminReservation = {
    /**
     * The reservation's ID.
     */
    id: string;
    /**
     * The ID of the line item this reservation is for.
     */
    line_item_id: string;
    /**
     * The ID of the location the quantity is reserved from.
     */
    location_id: string;
    /**
     * The reservation's quantity.
     */
    quantity: number;
    /**
     * An ID in an external system
     */
    external_id: string;
    /**
     * The reservation's description.
     */
    description: string;
    /**
     * The ID of the inventory item this reservation is associated with.
     */
    inventory_item_id: string;
    inventory_item?: AdminInventoryItem;
    /**
     * The reservation's metadata, can hold custom key-value pairs.
     */
    metadata?: Record<string, any>;
    /**
     * The ID of the user that created this reservation.
     */
    created_by?: string;
    /**
     * The date this reservation was deleted.
     */
    deleted_at?: string;
    /**
     * The date this reservation was created.
     */
    created_at?: string;
    /**
     * The date this reservation was updated.
     */
    updated_at?: string;
};

