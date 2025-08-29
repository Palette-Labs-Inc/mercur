/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * The price rule's details.
 */
export type StorePriceRule = {
    /**
     * The price rule's ID.
     */
    id: string;
    /**
     * The price rule's attribute.
     */
    attribute: string;
    /**
     * The price rule's operator.
     */
    operator: 'gt' | 'lt' | 'eq' | 'lte' | 'gte';
    /**
     * The price rule's value.
     */
    value: string;
};

