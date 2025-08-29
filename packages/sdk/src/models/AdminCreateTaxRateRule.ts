/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * The tax rate rule's details.
 */
export type AdminCreateTaxRateRule = {
    /**
     * The name of a table in the database that this rule points to.
     */
    reference: string;
    /**
     * The ID of a record in the table specified in reference.
     */
    reference_id: string;
};

