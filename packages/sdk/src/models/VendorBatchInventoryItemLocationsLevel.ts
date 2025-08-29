/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { VendorBatchInventoryLocationLevel } from './VendorBatchInventoryLocationLevel';
import type { VendorCreateInventoryLevel } from './VendorCreateInventoryLevel';
export type VendorBatchInventoryItemLocationsLevel = {
    /**
     * Levels to create
     */
    create?: Array<VendorCreateInventoryLevel>;
    /**
     * Levels to update
     */
    update?: Array<VendorBatchInventoryLocationLevel>;
    /**
     * Levels to delete
     */
    delete?: Array<string>;
};

