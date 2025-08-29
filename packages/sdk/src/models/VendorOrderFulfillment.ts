/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { VendorFulfillmentAddress } from './VendorFulfillmentAddress';
import type { VendorFulfillmentItem } from './VendorFulfillmentItem';
import type { VendorFulfillmentLabel } from './VendorFulfillmentLabel';
import type { VendorFulfillmentProvider } from './VendorFulfillmentProvider';
/**
 * The fulfillment's details.
 */
export type VendorOrderFulfillment = {
    /**
     * The fulfillment's ID.
     */
    id?: string;
    /**
     * The ID of the location the fulfillment's items are shipped from.
     */
    location_id?: string;
    /**
     * The ID of the fulfillment provider handling this fulfillment.
     */
    provider_id?: string;
    /**
     * The ID of the shipping option this fulfillment is created for.
     */
    shipping_option_id?: string;
    provider?: VendorFulfillmentProvider;
    delivery_address?: VendorFulfillmentAddress;
    /**
     * The fulfillment's items.
     */
    items?: Array<VendorFulfillmentItem>;
    /**
     * The fulfillment's shipment labels.
     */
    labels?: Array<VendorFulfillmentLabel>;
    /**
     * The date the fulfillment was packed at.
     */
    packed_at?: string;
    /**
     * The date the fulfillment was shipped at.
     */
    shipped_at?: string;
    /**
     * The date the fulfillment was delivered at.
     */
    delivered_at?: string;
    /**
     * The date the fulfillment was canceled at.
     */
    canceled_at?: string;
    /**
     * The fulfillment's data, useful for the third-party provider handling the fulfillment.
     */
    data?: Record<string, any>;
    /**
     * The fulfillment's metadata, can hold custom key-value pairs.
     */
    metadata?: Record<string, any>;
    /**
     * The date the fulfillment was created at.
     */
    created_at?: string;
    /**
     * The date the fulfillment was updated at.
     */
    updated_at?: string;
    /**
     * The date the fulfillment was deleted at.
     */
    deleted_at?: string;
};

