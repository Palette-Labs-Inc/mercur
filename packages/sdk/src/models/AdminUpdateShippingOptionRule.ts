/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * The properties to update in the shipping option rule.
 */
export type AdminUpdateShippingOptionRule = {
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
};

