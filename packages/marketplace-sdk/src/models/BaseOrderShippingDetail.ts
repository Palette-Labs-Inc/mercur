/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Details of changes to a shipping method.
 */
export type BaseOrderShippingDetail = {
    /**
     * The ID of the new changes to the shipping method.
     */
    id: string;
    /**
     * The ID of the shipping method.
     */
    shipping_method_id: string;
    shipping_method: Record<string, any>;
    /**
     * The ID of the associated claim.
     */
    claim_id?: string;
    /**
     * The ID of the associated exchange.
     */
    exchange_id?: string;
    /**
     * The ID of the associated return.
     */
    return_id?: string;
    /**
     * The date the shipping method change was created.
     */
    created_at: string;
    /**
     * The date the shipping method change was updated.
     */
    updated_at: string;
};

