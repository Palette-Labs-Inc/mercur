/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AdminStoreCurrency } from './AdminStoreCurrency';
/**
 * The store's details.
 */
export type AdminStore = {
    /**
     * The store's ID.
     */
    id: string;
    /**
     * The store's name.
     */
    name: string;
    /**
     * The store's supported currencies.
     */
    supported_currencies: Array<AdminStoreCurrency>;
    /**
     * The ID of the sales channel used by default in the store.
     */
    default_sales_channel_id: string;
    /**
     * The ID of the region used by default in the store.
     */
    default_region_id: string;
    /**
     * The ID of the stock location used by default in the store.
     */
    default_location_id: string;
    /**
     * The store's metadata, can hold custom key-value pairs.
     */
    metadata: Record<string, any>;
    /**
     * The date the store was created.
     */
    created_at: string;
    /**
     * The date the store was updated.
     */
    updated_at: string;
};

