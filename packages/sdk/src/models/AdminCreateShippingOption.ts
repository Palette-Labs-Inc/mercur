/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AdminCreateShippingOptionRule } from './AdminCreateShippingOptionRule';
import type { AdminCreateShippingOptionType } from './AdminCreateShippingOptionType';
/**
 * The shipping option's details.
 */
export type AdminCreateShippingOption = {
    /**
     * The shipping option's name.
     */
    name: string;
    /**
     * The ID of the associated service zone.
     */
    service_zone_id: string;
    /**
     * The ID of the associated shipping profile.
     */
    shipping_profile_id: string;
    /**
     * The shipping option's data, useful for the fulfillment provider handling its processing.
     */
    data?: Record<string, any>;
    /**
     * The shipping option's price type. If `flat`, the shipping option has a fixed price set in `prices`. Otherwise, the shipping option's price is calculated by the fulfillment provider.
     */
    price_type: 'flat' | 'calculated';
    /**
     * The ID of the fulfillment provider handling this shipping option.
     */
    provider_id: string;
    type?: AdminCreateShippingOptionType;
    /**
     * The shipping option's prices.
     */
    prices: Array<({
        /**
         * The price's currency code.
         */
        currency_code: string;
        /**
         * The price's amount.
         */
        amount: number;
    } | {
        /**
         * The ID of the region this price is used in.
         */
        region_id: string;
        /**
         * The price's amount.
         */
        amount: number;
    })>;
    /**
     * The shipping option's rules.
     */
    rules?: Array<AdminCreateShippingOptionRule>;
    /**
     * The ID of the shipping option type that this shipping option belongs to.
     */
    type_id?: string;
};

