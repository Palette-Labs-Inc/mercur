/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AdminFulfillmentProvider } from './AdminFulfillmentProvider';
import type { AdminShippingOptionPrice } from './AdminShippingOptionPrice';
import type { AdminShippingOptionRule } from './AdminShippingOptionRule';
import type { AdminShippingOptionType } from './AdminShippingOptionType';
import type { AdminShippingProfile } from './AdminShippingProfile';
/**
 * The shipping option's details.
 */
export type AdminShippingOption = {
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
    service_zone: Record<string, any>;
    /**
     * The ID of the provider handling fulfillments created from this shipping option.
     */
    provider_id: string;
    provider: AdminFulfillmentProvider;
    /**
     * The ID of the associated shipping option type.
     */
    shipping_option_type_id: string;
    type: AdminShippingOptionType;
    /**
     * The ID of the associated shipping profile.
     */
    shipping_profile_id: string;
    shipping_profile: AdminShippingProfile;
    /**
     * The shipping option's rules.
     */
    rules: Array<AdminShippingOptionRule>;
    /**
     * The shipping option's prices. If the `price_type` is `calculated`, this array will be empty since the price is calculated by the fulfillment provider during checkout.
     */
    prices: Array<AdminShippingOptionPrice>;
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

