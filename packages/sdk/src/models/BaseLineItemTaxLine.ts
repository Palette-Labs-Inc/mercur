/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BaseCartLineItem } from './BaseCartLineItem';
/**
 * The tax line's details
 */
export type BaseLineItemTaxLine = {
    item: BaseCartLineItem;
    /**
     * The ID of the item the tax line applies on.
     */
    item_id: string;
    /**
     * The item's total, including taxes and promotions.
     */
    total: number;
    /**
     * The item's subtotal excluding taxes, including promotions.
     */
    subtotal: number;
    /**
     * The tax line's ID.
     */
    id: string;
    /**
     * The tax line's description.
     */
    description?: string;
    /**
     * The ID of the associated tax rate.
     */
    tax_rate_id?: string;
    /**
     * The code the tax rate is identified by.
     */
    code: string;
    /**
     * The rate to charge.
     */
    rate: number;
    /**
     * The ID of the tax provider.
     */
    provider_id?: string;
    /**
     * The date the tax line was created.
     */
    created_at: string;
    /**
     * The date the tax line was updated.
     */
    updated_at: string;
};

