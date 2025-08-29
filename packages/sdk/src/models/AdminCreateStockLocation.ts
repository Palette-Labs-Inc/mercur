/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AdminUpsertStockLocationAddress } from './AdminUpsertStockLocationAddress';
/**
 * The stock location's details.
 */
export type AdminCreateStockLocation = {
    /**
     * The stock location's name.
     */
    name: string;
    /**
     * The ID of the stock location's address.
     */
    address_id?: string;
    address?: AdminUpsertStockLocationAddress;
    /**
     * The stock location's metadata, used to store custom key-value pairs.
     */
    metadata?: Record<string, any>;
};

