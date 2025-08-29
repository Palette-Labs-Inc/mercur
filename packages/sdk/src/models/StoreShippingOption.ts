/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BaseFulfillmentProvider } from './BaseFulfillmentProvider';
import type { StoreShippingOptionType } from './StoreShippingOptionType';
/**
 * The shipping option's details.
 */
export type StoreShippingOption = {
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
    price_type: 'flat' | 'calculated';
    /**
     * The ID of the service zone the shipping option belongs to.
     */
    service_zone_id: string;
    /**
     * The ID of the fulfillment provider handling this option.
     */
    provider_id: string;
    provider: BaseFulfillmentProvider;
    /**
     * The ID of the shipping option's type.
     */
    shipping_option_type_id: string;
    type: StoreShippingOptionType;
    /**
     * The ID of the associated shipping profile.
     */
    shipping_profile_id: string;
    /**
     * The shipping option's amount.
     */
    amount: number;
    /**
     * Whether the amount includes taxes.
     */
    is_tax_inclusive: boolean;
    /**
     * The shipping option's data, useful for the provider handling fulfillment.
     */
    data: Record<string, any>;
    /**
     * The shipping option's metadata, can hold custom key-value pairs.
     */
    metadata: Record<string, any>;
};

