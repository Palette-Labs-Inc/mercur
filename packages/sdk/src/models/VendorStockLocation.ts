/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { VendorFulfillmentSet } from './VendorFulfillmentSet';
/**
 * The stock location's details.
 */
export type VendorStockLocation = {
    /**
     * The location's ID.
     */
    id: string;
    /**
     * The location's name.
     */
    name: string;
    /**
     * The fulfillment sets associated with the location.
     */
    fulfillment_sets?: Array<VendorFulfillmentSet>;
};

