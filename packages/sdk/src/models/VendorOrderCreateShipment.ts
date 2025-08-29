/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type VendorOrderCreateShipment = {
    /**
     * Items in the shipment.
     */
    items?: Array<{
        id?: string;
        quantity?: number;
    }>;
    /**
     * Labels of the shipment
     */
    labels?: Array<{
        tracking_number?: string;
        tracking_url?: string;
        label_url?: string;
    }>;
};

