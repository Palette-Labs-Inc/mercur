/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * The tax region's details.
 */
export type AdminCreateTaxRegion = {
    /**
     * The tax region's country code.
     */
    country_code: string;
    /**
     * The tax region's ISO 3166-2 province code. Must be lower-case.
     */
    province_code?: string;
    /**
     * The ID of the parent tax region.
     */
    parent_id?: string;
    /**
     * The tax region's default tax rate.
     */
    default_tax_rate?: {
        /**
         * The rate to charge.
         */
        rate?: number;
        /**
         * The code the tax rate is identified by
         */
        code: string;
        /**
         * The default tax rate's name.
         */
        name: string;
        /**
         * Whether the tax rate should be combined with parent rates.
         */
        is_combinable?: boolean;
        /**
         * The default tax rate's metadata, used to store custom key-value pairs.
         */
        metadata?: Record<string, any>;
    };
    /**
     * The tax region's metadata, used to store custom key-value pairs.
     */
    metadata?: Record<string, any>;
    /**
     * The ID of the tax provider used to calculate the tax rate in this tax region.
     */
    provider_id?: string;
};

