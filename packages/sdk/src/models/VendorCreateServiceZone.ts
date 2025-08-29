/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { GeoZoneCity } from './GeoZoneCity';
import type { GeoZoneCountry } from './GeoZoneCountry';
import type { GeoZoneProvince } from './GeoZoneProvince';
import type { GeoZoneZip } from './GeoZoneZip';
export type VendorCreateServiceZone = {
    /**
     * The name of the service zone.
     */
    name: string;
    /**
     * The geo zones that belong to the service zone.
     */
    geo_zones?: Array<(GeoZoneCountry | GeoZoneProvince | GeoZoneCity | GeoZoneZip)>;
};

