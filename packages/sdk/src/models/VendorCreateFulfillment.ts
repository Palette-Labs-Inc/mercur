/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type VendorCreateFulfillment = {
    requires_shipping?: boolean;
    /**
     * The location id.
     */
    location_id?: string;
    /**
     * Items to create fulfillment.
     */
    items?: Array<{
        id?: string;
        quantity?: number;
    }>;
};

