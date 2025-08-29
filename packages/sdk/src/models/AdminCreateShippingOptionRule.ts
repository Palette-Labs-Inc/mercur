/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * The details of the shipping option rule.
 */
export type AdminCreateShippingOptionRule = {
    /**
     * The operator used to check whether a rule applies.
     */
    operator: 'gt' | 'lt' | 'eq' | 'ne' | 'in' | 'lte' | 'gte' | 'nin';
    /**
     * The name of a property or table that the rule applies to.
     */
    attribute: string;
    value: (string | Array<string>);
};

