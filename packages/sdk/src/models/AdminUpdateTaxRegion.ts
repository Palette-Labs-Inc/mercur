/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * The details to update in a tax region.
 */
export type AdminUpdateTaxRegion = {
    /**
     * The tax region's ISO 3166-2 province code. Must be lower-case.
     */
    province_code?: string;
    /**
     * The tax region's metadata, can hold custom key-value pairs.
     */
    metadata?: Record<string, any>;
    /**
     * The ID of the tax provider to use when calculating taxes for this tax region.
     */
    provider_id?: string;
};

