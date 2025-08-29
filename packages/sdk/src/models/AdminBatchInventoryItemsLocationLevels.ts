/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AdminBatchCreateInventoryItemsLocationLevels } from './AdminBatchCreateInventoryItemsLocationLevels';
import type { AdminBatchUpdateInventoryItemsLocationLevels } from './AdminBatchUpdateInventoryItemsLocationLevels';
/**
 * The inventory levels to manage.
 */
export type AdminBatchInventoryItemsLocationLevels = {
    /**
     * The inventory levels to create.
     */
    create: Array<AdminBatchCreateInventoryItemsLocationLevels>;
    /**
     * The inventory levels to update.
     */
    update: Array<AdminBatchUpdateInventoryItemsLocationLevels>;
    /**
     * The IDs of the inventory levels to delete.
     */
    delete: Array<string>;
    /**
     * Whether to delete specified inventory levels even if they have a non-zero stocked quantity.
     */
    force?: boolean;
};

