/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AdminGeoZone } from './AdminGeoZone';
import type { AdminShippingOption } from './AdminShippingOption';
/**
 * The shipping option's service zone.
 */
export type AdminServiceZone = {
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
    fulfillment_set: Record<string, any>;
    /**
     * The service zone's geo zones.
     */
    geo_zones: Array<AdminGeoZone>;
    /**
     * The service zone's shipping options.
     */
    shipping_options: Array<AdminShippingOption>;
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

