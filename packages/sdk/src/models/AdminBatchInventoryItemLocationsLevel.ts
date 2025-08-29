/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * The inventory levels to create, update, or delete.
 */
export type AdminBatchInventoryItemLocationsLevel = {
    /**
     * The inventory levels to create.
     */
    create?: Array<{
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
    }>;
    /**
     * The inventory levels to update.
     */
    update?: Array<{
        /**
         * The inventory level's stocked quantity.
         */
        stocked_quantity?: number;
        /**
         * The inventory level's incoming quantity.
         */
        incoming_quantity?: number;
        /**
         * The associated stock location's ID.
         */
        location_id: string;
        /**
         * The ID of the location level.
         */
        id?: string;
    }>;
    /**
     * The inventory levels to delete.
     */
    delete?: Array<string>;
    /**
     * Whether to delete specified inventory levels even if they have a non-zero stocked quantity.
     */
    force?: boolean;
};

