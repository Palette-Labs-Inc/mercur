/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * The geo zone's geo zones.
 */
export type AdminGeoZone = {
    /**
     * The geo zone's ID.
     */
    id: string;
    /**
     * The geo zone's type.
     */
    type: 'country' | 'province' | 'city' | 'zip';
    /**
     * The geo zone's country code.
     */
    country_code: string;
    /**
     * The geo zone's lower-case ISO 3166-2 province code.
     */
    province_code: string;
    /**
     * The geo zone's city.
     */
    city: string;
    /**
     * The geo zone's postal expression.
     */
    postal_expression: Record<string, any>;
    /**
     * The geo zone's created at.
     */
    created_at: string;
    /**
     * The geo zone's updated at.
     */
    updated_at: string;
    /**
     * The geo zone's deleted at.
     */
    deleted_at: string;
};

