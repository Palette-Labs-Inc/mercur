/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * The details of a shipping option price's rule.
 */
export type AdminShippingOptionPriceRule = {
    /**
     * The price rule's ID.
     */
    id: string;
    /**
     * The price rule's value.
     */
    value: (string | number);
    /**
     * The price rule's operator.
     */
    operator: 'gt' | 'lt' | 'eq' | 'ne' | 'in' | 'lte' | 'gte' | 'nin';
    /**
     * The price rule's attribute.
     */
    attribute: string;
    /**
     * The ID of the price this rule applies to.
     */
    price_id: string;
    /**
     * The price rule's priority.
     */
    priority: number;
    /**
     * The date the price rule was created.
     */
    created_at: string;
    /**
     * The date the price rule was updated.
     */
    updated_at: string;
    /**
     * The date the price rule was deleted.
     */
    deleted_at: string;
};

