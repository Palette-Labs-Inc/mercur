/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AdminPriceListPrice } from './AdminPriceListPrice';
/**
 * The price list's details.
 */
export type AdminPriceList = {
    /**
     * The price list's ID.
     */
    id: string;
    /**
     * The price list's title.
     */
    title: string;
    /**
     * The price list's description.
     */
    description: string;
    /**
     * The price list's rules.
     */
    rules: Record<string, any>;
    /**
     * The date the price list starts.
     */
    starts_at: string;
    /**
     * The date the price list ends.
     */
    ends_at: string;
    /**
     * The price list's status.
     */
    status: 'draft' | 'active';
    /**
     * The price list's type.
     */
    type: 'sale' | 'override';
    /**
     * The price list's prices.
     */
    prices: Array<AdminPriceListPrice>;
    /**
     * The date the price list was created.
     */
    created_at: string;
    /**
     * The date the price list was updated.
     */
    updated_at: string;
    /**
     * The date the price list was deleted.
     */
    deleted_at: string;
};

