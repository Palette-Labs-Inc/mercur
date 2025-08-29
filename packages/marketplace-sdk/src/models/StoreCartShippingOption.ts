/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { StoreCalculatedPrice } from './StoreCalculatedPrice';
import type { StorePrice } from './StorePrice';
/**
 * The shipping option's details.
 */
export type StoreCartShippingOption = {
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
    /**
     * The fulfillment provider's details.
     */
    provider: {
        /**
         * The provider's ID.
         */
        id: string;
        /**
         * Whether the provider is enabled.
         */
        is_enabled: boolean;
    };
    /**
     * The shipping option type's details.
     */
    type: {
        /**
         * The type's ID.
         */
        id: string;
        /**
         * The type's label.
         */
        label: string;
        /**
         * The type's description.
         */
        description: string;
        /**
         * The type's code.
         */
        code: string;
    };
    /**
     * The ID of the associated shipping profile.
     */
    shipping_profile_id: string;
    /**
     * The shipping option's amount.
     */
    amount: number;
    /**
     * The shipping option's data, useful for the provider handling fulfillment.
     */
    data: Record<string, any>;
    /**
     * The shipping option's prices.
     */
    prices: Array<StorePrice>;
    calculated_price: StoreCalculatedPrice;
    /**
     * Whether the shipping option's location doesn't have sufficient quantity for any of the cart's items.
     */
    insufficient_inventory: boolean;
};

