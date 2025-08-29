/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * The price preference's details.
 */
export type AdminPricePreference = {
    /**
     * The price preference's ID.
     */
    id: string;
    /**
     * The price preference's attribute.
     */
    attribute: string;
    /**
     * The price preference's value.
     */
    value: string;
    /**
     * Whether prices matching this preference include taxes.
     */
    is_tax_inclusive: boolean;
    /**
     * The date the price preference was created.
     */
    created_at: string;
    /**
     * The date the price preference was updated.
     */
    updated_at: string;
    /**
     * The date the price preference was deleted.
     */
    deleted_at: string;
};

