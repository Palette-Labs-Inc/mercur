/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * The properties to update in the shipping option.
 */
export type AdminUpdateShippingOption = {
    /**
     * The shipping option's name.
     */
    name?: string;
    /**
     * The shipping option's data that is useful for third-party providers.
     */
    data?: Record<string, any>;
    /**
     * The type of the shipping option's price. If `calculated`, its price is retrieved by the  associated fulfillment provider during checkout. If `flat`, its price is set in the `prices` property.
     *
     */
    price_type?: 'calculated' | 'flat';
    /**
     * The ID of the associated fulfillment provider that is used to process the option.
     */
    provider_id?: string;
    /**
     * The ID of the shipping profile this shipping option belongs to.
     */
    shipping_profile_id?: string;
    /**
     * The shipping option's type.
     */
    type?: {
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
     * The shipping option's prices. If the `price_type` is `calculated`, pass an empty array.
     */
    prices?: Array<({
        /**
         * The ID of an existing price.
         */
        id?: string;
        /**
         * The price's currency code.
         */
        currency_code?: string;
        /**
         * The price's amount.
         */
        amount?: number;
    } | {
        /**
         * The ID of an existing price.
         */
        id?: string;
        /**
         * The ID of the associated region.
         */
        region_id?: string;
        /**
         * The price's amount.
         */
        amount?: number;
    })>;
    /**
     * The shipping option's rules.
     */
    rules?: Array<({
        /**
         * The operator used to check whether a rule applies.
         */
        operator: 'in' | 'eq' | 'ne' | 'gt' | 'gte' | 'lt' | 'lte' | 'nin';
        /**
         * The name of a property or table that the rule applies to.
         */
        attribute: string;
        value: (string | Array<string>);
    } | {
        /**
         * The rule's ID.
         */
        id: string;
        /**
         * The operator used to check whether a rule applies.
         */
        operator: 'in' | 'eq' | 'ne' | 'gt' | 'gte' | 'lt' | 'lte' | 'nin';
        /**
         * The name of a property or table that the rule applies to.
         */
        attribute: string;
        value: (string | Array<string>);
    })>;
};

