/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * The fulfillment's details.
 */
export type StoreOrderFulfillment = {
    /**
     * The fulfillment's ID.
     */
    id: string;
    /**
     * The ID of the location the items are fulfilled from.
     */
    location_id: string;
    /**
     * The date the items were packed.
     */
    packed_at: string;
    /**
     * The date the items were shipped.
     */
    shipped_at: string;
    /**
     * The date the items were delivered.
     */
    delivered_at: string;
    /**
     * The date the items were canceled.
     */
    canceled_at: string;
    /**
     * Data useful for the fulfillment provider handling it. This is taken from the associated shipping option.
     */
    data: Record<string, any>;
    /**
     * The ID of the fulfillment provider used to handle the fulfillment.
     */
    provider_id: string;
    /**
     * The ID of the associated shipping option.
     */
    shipping_option_id: string;
    /**
     * The fulfillment's metadata, can hold custom key-value pairs.
     */
    metadata: Record<string, any>;
    /**
     * The date the fulfillment was created.
     */
    created_at: string;
    /**
     * The date the fulfillment was updated.
     */
    updated_at: string;
    /**
     * The fulfillment's requires shipping.
     */
    requires_shipping: boolean;
};

