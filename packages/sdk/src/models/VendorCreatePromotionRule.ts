/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type VendorCreatePromotionRule = {
    /**
     * The description of the rule.
     */
    description?: string;
    /**
     * The attribute of the rule.
     */
    attribute?: string;
    /**
     * The operator of the rule.
     */
    operator?: 'in' | 'eq';
    /**
     * Rule values.
     */
    values?: Array<string>;
};

