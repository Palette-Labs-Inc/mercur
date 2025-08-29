/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * The tax region's details.
 */
export type AdminTaxRegion = {
    /**
     * The tax region's ID.
     */
    id: string;
    /**
     * The tax region's country code.
     */
    country_code: string;
    /**
     * The tax region's lower-case ISO 3166-2 province code.
     */
    province_code: string;
    /**
     * The tax region's metadata, can hold custom key-value pairs.
     */
    metadata: Record<string, any>;
    /**
     * The ID of the parent tax region.
     */
    parent_id: string;
    /**
     * The date the tax region was created.
     */
    created_at: string;
    /**
     * The date the tax region was updated.
     */
    updated_at: string;
    /**
     * The date the tax region was deleted.
     */
    deleted_at: string;
    /**
     * The ID of the user that created the tax region.
     */
    created_by: string;
    /**
     * The tax region's rates.
     */
    tax_rates: Array<Record<string, any>>;
    parent: Record<string, any>;
    /**
     * The tax region's children.
     */
    children: Array<Record<string, any>>;
};

