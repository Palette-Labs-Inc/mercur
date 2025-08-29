/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * The details of the line item to create.
 */
export type StoreCreateReturnItem = {
    /**
     * The item's ID.
     */
    id: string;
    /**
     * The item's quantity.
     */
    quantity: number;
    /**
     * The ID of the associated return reason.
     */
    reason_id?: string;
    /**
     * A note with more details about the returned item.
     */
    note?: string;
};

