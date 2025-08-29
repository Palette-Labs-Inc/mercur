/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AdminCreateTaxRateRule } from './AdminCreateTaxRateRule';
/**
 * The tax rate's details.
 */
export type AdminCreateTaxRate = {
    /**
     * The tax rate's name.
     */
    name: string;
    /**
     * The ID of the tax region this rate belongs to.
     */
    tax_region_id: string;
    /**
     * The rate to charge.
     */
    rate?: number;
    /**
     * The code the tax rate is identified by.
     */
    code: string;
    /**
     * The tax rate's rules.
     */
    rules?: Array<AdminCreateTaxRateRule>;
    /**
     * Whether the tax rate is the default in its tax region.
     */
    is_default?: boolean;
    /**
     * Whether the tax rate should be combined with parent rates.
     */
    is_combinable?: boolean;
    /**
     * The tax rate's metadata, used to store custom key-value pairs.
     */
    metadata?: Record<string, any>;
};

