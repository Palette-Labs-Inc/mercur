/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * The shipment's details.
 */
export type AdminCreateShipment = {
    /**
     * The shipment's labels.
     */
    labels: Array<{
        /**
         * The label's tracking number.
         */
        tracking_number: string;
        /**
         * The label's tracking URL.
         */
        tracking_url: string;
        /**
         * The label's URL.
         */
        label_url: string;
    }>;
};

