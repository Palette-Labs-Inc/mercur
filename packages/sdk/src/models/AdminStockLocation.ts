/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AdminFulfillmentProvider } from './AdminFulfillmentProvider';
import type { AdminSalesChannel } from './AdminSalesChannel';
import type { AdminStockLocationAddress } from './AdminStockLocationAddress';
/**
 * The stock location's details.
 */
export type AdminStockLocation = {
    /**
     * The location's ID.
     */
    id: string;
    /**
     * The location's name.
     */
    name: string;
    /**
     * The ID of the associated address.
     */
    address_id: string;
    address?: AdminStockLocationAddress;
    /**
     * The sales channels associated with the location.
     */
    sales_channels?: Array<AdminSalesChannel>;
    /**
     * The fulfillment providers associated with the location.
     */
    fulfillment_providers?: Array<AdminFulfillmentProvider>;
    /**
     * The fulfillment sets associated with the location.
     */
    fulfillment_sets?: Array<Record<string, any>>;
};

