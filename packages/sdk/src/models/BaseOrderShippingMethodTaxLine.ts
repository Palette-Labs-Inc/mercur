/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * The tax line's details.
 */
export type BaseOrderShippingMethodTaxLine = {
    shipping_method: Record<string, any>;
    /**
     * The ID of the shipping method this tax line belongs to.
     */
    shipping_method_id: string;
    /**
     * The shipping method's total including taxes and promotions.
     */
    total: number;
    /**
     * The shipping method's total excluding taxes, including promotions.
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
     * The ID of the tax provider handling the tax calculation.
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

