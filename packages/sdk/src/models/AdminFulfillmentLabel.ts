/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * The details of a fulfillmet's shipment label.
 */
export type AdminFulfillmentLabel = {
    /**
     * The label's ID.
     */
    id: string;
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
    /**
     * The ID of the fulfillment the label is associated with.
     */
    fulfillment_id: string;
    /**
     * The date the label was created.
     */
    created_at: string;
    /**
     * The date the label was updated.
     */
    updated_at: string;
    /**
     * The date the label was deleted.
     */
    deleted_at: string;
};

