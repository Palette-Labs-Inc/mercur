/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CreateShippingOptionPriceWithCurrency } from './CreateShippingOptionPriceWithCurrency';
import type { CreateShippingOptionPriceWithRegion } from './CreateShippingOptionPriceWithRegion';
import type { CreateShippingOptionTypeObject } from './CreateShippingOptionTypeObject';
import type { VendorCreateShippingOptionRule } from './VendorCreateShippingOptionRule';
export type VendorCreateShippingOption = {
    /**
     * The name of the shipping option.
     */
    name: string;
    /**
     * The ID of the shipping profile.
     */
    shipping_profile_id: string;
    /**
     * The ID of the fulfillment provider.
     */
    provider_id: string;
    /**
     * The prices of the shipping option.
     */
    prices: Array<(CreateShippingOptionPriceWithCurrency | CreateShippingOptionPriceWithRegion)>;
    rules?: Array<VendorCreateShippingOptionRule>;
    type: CreateShippingOptionTypeObject;
};

