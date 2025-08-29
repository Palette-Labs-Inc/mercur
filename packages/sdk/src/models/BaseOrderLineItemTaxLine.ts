/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * The tax line's tax lines.
 */
export type BaseOrderLineItemTaxLine = {
    item: Record<string, any>;
    /**
     * The ID of the associated line item.
     */
    item_id: string;
    /**
     * The tax line's total including promotions.
     */
    total: number;
    /**
     * The tax line's subtotal excluding promotions.
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
     * The ID of the applied tax rate.
     */
    tax_rate_id?: string;
    /**
     * The code that the tax rate is identified by.
     */
    code: string;
    /**
     * The rate to charge.
     */
    rate: number;
    /**
     * The ID of the tax provider used to calculate the tax line.
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

