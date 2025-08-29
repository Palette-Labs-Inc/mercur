/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AdminServiceZone } from './AdminServiceZone';
import type { AdminStockLocation } from './AdminStockLocation';
/**
 * The service zone's fulfillment set.
 */
export type AdminFulfillmentSet = {
    /**
     * The fulfillment set's ID.
     */
    id: string;
    /**
     * The fulfillment set's name.
     */
    name: string;
    /**
     * The fulfillment set's type.
     */
    type: string;
    location: AdminStockLocation;
    /**
     * The fulfillment set's service zones.
     */
    service_zones: Array<AdminServiceZone>;
    /**
     * The fulfillment set's created at.
     */
    created_at: string;
    /**
     * The fulfillment set's updated at.
     */
    updated_at: string;
    /**
     * The fulfillment set's deleted at.
     */
    deleted_at: string;
};

