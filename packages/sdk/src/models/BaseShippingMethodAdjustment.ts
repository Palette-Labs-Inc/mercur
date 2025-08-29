/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * The adjustment's details.
 */
export type BaseShippingMethodAdjustment = {
    shipping_method: Record<string, any>;
    /**
     * The ID of the shipping method the adjustment is applied on.
     */
    shipping_method_id: string;
    /**
     * The adjustment's ID.
     */
    id: string;
    /**
     * The adjustment's code.
     */
    code?: string;
    /**
     * The adjustment's amount.
     */
    amount: number;
    /**
     * The ID of the associated cart.
     */
    cart_id: string;
    /**
     * The adjustment's description.
     */
    description?: string;
    /**
     * The ID of the promotion applied by this adjustment.
     */
    promotion_id?: string;
    /**
     * The adjustment's provider ID.
     */
    provider_id?: string;
    /**
     * The date the adjustment was created.
     */
    created_at: string;
    /**
     * The date the adjustment was updated.
     */
    updated_at: string;
};

