/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { VendorServiceZone } from './VendorServiceZone';
import type { VendorShippingOptionPrice } from './VendorShippingOptionPrice';
import type { VendorShippingOptionType } from './VendorShippingOptionType';
/**
 * The shipping option's details.
 */
export type VendorShippingOption = {
    /**
     * The shipping option's ID.
     */
    id: string;
    /**
     * The shipping option's name.
     */
    name: string;
    /**
     * The shipping option's price type. If it's `flat`, the price is fixed and is set in the `prices` property. If it's `calculated`, the price is calculated on checkout by the associated fulfillment provider.
     */
    price_type: 'calculated' | 'flat';
    /**
     * The ID of the service zone this option belongs to.
     */
    service_zone_id: string;
    service_zone: VendorServiceZone;
    /**
     * The ID of the associated shipping option type.
     */
    shipping_option_type_id: string;
    type: VendorShippingOptionType;
    /**
     * The shipping option's prices. If the `price_type` is `calculated`, this array will be empty since the price is calculated by the fulfillment provider during checkout.
     */
    prices: Array<VendorShippingOptionPrice>;
    /**
     * The shipping option's data, useful for the fulfillment provider handling fulfillments created from this option.
     */
    data: Record<string, any>;
    /**
     * The shipping option's metadata, can hold custom key-value pairs.
     */
    metadata: Record<string, any>;
    /**
     * The date the shipping option was created.
     */
    created_at: string;
    /**
     * The date the shipping option was updated.
     */
    updated_at: string;
    /**
     * The date the shipping option was deleted.
     */
    deleted_at: string;
};

