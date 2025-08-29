/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * The service zone's details.
 */
export type AdminUpdateFulfillmentSetServiceZones = {
    /**
     * The service zone's name.
     */
    name?: string;
    /**
     * The service zone's associated geo zones.
     */
    geo_zones?: Array<({
        /**
         * The geo zone's type.
         */
        type: string;
        /**
         * The geo zone's metadata.
         */
        metadata: Record<string, any>;
        /**
         * The geo zone's country code.
         */
        country_code: string;
        /**
         * The ID of an existing geo zone.
         */
        id?: string;
    } | {
        /**
         * The geo zone's type.
         */
        type: string;
        /**
         * The geo zone's metadata.
         */
        metadata: Record<string, any>;
        /**
         * The geo zone's country code.
         */
        country_code: string;
        /**
         * The geo zone's ISO 3166-2 province code. Must be lower-case.
         */
        province_code: string;
        /**
         * The ID of an existing geo zone.
         */
        id?: string;
    } | {
        /**
         * The geo zone's type.
         */
        type: string;
        /**
         * The geo zone's metadata.
         */
        metadata: Record<string, any>;
        /**
         * The geo zone's city.
         */
        city: string;
        /**
         * The geo zone's country code.
         */
        country_code: string;
        /**
         * The geo zone's ISO 3166-2 province code. Must be lower-case.
         */
        province_code: string;
        /**
         * The ID of an existing geo zone.
         */
        id?: string;
    } | {
        /**
         * The geo zone's type.
         */
        type: string;
        /**
         * The geo zone's metadata.
         */
        metadata: Record<string, any>;
        /**
         * The geo zone's city.
         */
        city: string;
        /**
         * The geo zone's country code.
         */
        country_code: string;
        /**
         * The geo zone's ISO 3166-2 province code. Must be lower-case.
         */
        province_code: string;
        /**
         * The geo zone's postal expression or ZIP code.
         */
        postal_expression: Record<string, any>;
        /**
         * The ID of an existing geo zone.
         */
        id?: string;
    })>;
};

