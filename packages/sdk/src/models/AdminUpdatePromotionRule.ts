/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * The properties to update in a buy rule.
 */
export type AdminUpdatePromotionRule = {
    /**
     * The buy rule's ID.
     */
    id: string;
    /**
     * The operator used to check whether the buy rule applies on a cart. For example, `eq` means that the cart's value for the specified attribute must match the specified value.
     */
    operator?: 'gte' | 'lte' | 'gt' | 'lt' | 'eq' | 'ne' | 'in';
    /**
     * The buy rule's description.
     */
    description?: string;
    /**
     * The attribute to compare against when checking whether a promotion can be applied on a cart.
     */
    attribute?: string;
    values: (string | Array<string>);
};

