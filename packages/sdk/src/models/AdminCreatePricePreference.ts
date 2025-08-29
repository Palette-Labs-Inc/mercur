/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * The price preference's details.
 */
export type AdminCreatePricePreference = {
    /**
     * The name of the attribute the price preference applies on.
     */
    attribute?: string;
    /**
     * The attribute's value.
     */
    value?: string;
    /**
     * Whether the price is tax inclusive if the value of the specified attribute matches the specified value.
     */
    is_tax_inclusive?: boolean;
};

