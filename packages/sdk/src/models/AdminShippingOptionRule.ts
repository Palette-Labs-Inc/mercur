/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * The shipping option rule's details.
 */
export type AdminShippingOptionRule = {
    /**
     * The shipping option rule's ID.
     */
    id: string;
    /**
     * The shipping option rule's attribute.
     */
    attribute: string;
    /**
     * The rule's operator.
     */
    operator: 'gt' | 'lt' | 'eq' | 'ne' | 'in' | 'lte' | 'gte' | 'nin';
    value: (string | Array<string>);
    /**
     * The ID of the shipping option this rule is for.
     */
    shipping_option_id: string;
    /**
     * The date the shipping option rule was created.
     */
    created_at: string;
    /**
     * The date the shipping option rule was updated.
     */
    updated_at: string;
    /**
     * The date the shipping option rule was deleted.
     */
    deleted_at: string;
};

