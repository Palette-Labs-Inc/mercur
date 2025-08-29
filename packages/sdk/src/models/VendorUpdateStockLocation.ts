/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { UpsertStockLocationAddress } from './UpsertStockLocationAddress';
export type VendorUpdateStockLocation = {
    /**
     * Name of the stock location
     */
    name?: string;
    address?: UpsertStockLocationAddress;
    /**
     * ID of an existing address to use
     */
    address_id?: string | null;
    /**
     * Additional metadata
     */
    metadata?: Record<string, any> | null;
};

