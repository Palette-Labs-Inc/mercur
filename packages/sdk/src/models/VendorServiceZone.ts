/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { VendorFulfillmentSet } from './VendorFulfillmentSet';
import type { VendorGeoZone } from './VendorGeoZone';
import type { VendorShippingOption } from './VendorShippingOption';
/**
 * The shipping option's service zone.
 */
export type VendorServiceZone = {
    /**
     * The service zone's ID.
     */
    id: string;
    /**
     * The service zone's name.
     */
    name: string;
    /**
     * The service zone's fulfillment set id.
     */
    fulfillment_set_id: string;
    fulfillment_set: VendorFulfillmentSet;
    /**
     * The service zone's geo zones.
     */
    geo_zones: Array<VendorGeoZone>;
    /**
     * The service zone's shipping options.
     */
    shipping_options: Array<VendorShippingOption>;
    /**
     * The service zone's created at.
     */
    created_at: string;
    /**
     * The service zone's updated at.
     */
    updated_at: string;
    /**
     * The service zone's deleted at.
     */
    deleted_at: string;
};

