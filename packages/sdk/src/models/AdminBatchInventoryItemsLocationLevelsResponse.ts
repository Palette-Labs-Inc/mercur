/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { InventoryLevel } from './InventoryLevel';
/**
 * The result of managing inventory levels.
 */
export type AdminBatchInventoryItemsLocationLevelsResponse = {
    /**
     * The created inventory levels.
     */
    created?: Array<InventoryLevel>;
    /**
     * The updated inventory levels.
     */
    updated?: Array<InventoryLevel>;
    /**
     * The IDs of deleted inventory levels.
     */
    deleted?: Array<string>;
};

