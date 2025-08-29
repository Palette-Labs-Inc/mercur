/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * The details of the stock location address to create.
 */
export type AdminUpsertStockLocationAddress = {
    /**
     * The address's first line.
     */
    address_1: string;
    /**
     * The address's second line.
     */
    address_2?: string;
    /**
     * The address's company.
     */
    company?: string;
    /**
     * The address's country code.
     */
    country_code: string;
    /**
     * The address's city.
     */
    city?: string;
    /**
     * The address's phone.
     */
    phone?: string;
    /**
     * The address's postal code.
     */
    postal_code?: string;
    /**
     * The address's ISO 3166-2 province code. Must be lower-case.
     */
    province?: string;
};

