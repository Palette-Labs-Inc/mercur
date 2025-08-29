/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * The details of the request to transfer the order.
 */
export type AdminTransferOrder = {
    /**
     * The ID of the customer to transfer the order to.
     */
    customer_id: string;
    /**
     * The description of the order transfer, which can be shown to the customer receiving the order transfer request.
     */
    description?: string;
    /**
     * An internal note viewable only by admin users.
     */
    internal_note?: string;
};

