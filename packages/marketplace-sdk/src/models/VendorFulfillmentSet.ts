/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { VendorServiceZone } from './VendorServiceZone';
import type { VendorStockLocation } from './VendorStockLocation';
/**
 * The service zone's fulfillment set.
 */
export type VendorFulfillmentSet = {
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
    location: VendorStockLocation;
    /**
     * The fulfillment set's service zones.
     */
    service_zones: Array<VendorServiceZone>;
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

