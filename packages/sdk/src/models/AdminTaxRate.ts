/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AdminTaxRateRule } from './AdminTaxRateRule';
import type { AdminTaxRegion } from './AdminTaxRegion';
/**
 * The tax rate's details.
 */
export type AdminTaxRate = {
    /**
     * The tax rate's ID.
     */
    id: string;
    /**
     * The rate to charge.
     */
    rate: number;
    /**
     * The code the tax rate is identified by.
     */
    code: string;
    /**
     * The tax rate's name.
     */
    name: string;
    /**
     * The tax rate's metadata, can hold custom key-value pairs.
     */
    metadata: Record<string, any>;
    /**
     * The ID of the tax region this rate belongs to.
     */
    tax_region_id: string;
    /**
     * Whether the tax rate should be combined with parent rates.
     */
    is_combinable: boolean;
    /**
     * Whether this tax rate is the default in the tax region.
     */
    is_default: boolean;
    /**
     * The date the tax rate was created.
     */
    created_at: string;
    /**
     * The date the tax rate was updated.
     */
    updated_at: string;
    /**
     * The date the tax rate was deleted.
     */
    deleted_at: string;
    /**
     * The ID of the user that created the tax rate.
     */
    created_by: string;
    tax_region: AdminTaxRegion;
    /**
     * The tax rate's rules.
     */
    rules: Array<AdminTaxRateRule>;
};

