/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type VendorPromotionRule = {
    /**
     * The unique identifier of the item.
     */
    id?: string;
    /**
     * The date with timezone at which the resource was created.
     */
    created_at?: string;
    /**
     * The date with timezone at which the resource was last updated.
     */
    updated_at?: string;
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
    operator?: string;
    /**
     * Rule values.
     */
    values?: Array<{
        value?: string;
    }>;
};

