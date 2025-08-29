/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * The claim's details.
 */
export type AdminPostOrderClaimsReqSchema = {
    /**
     * The claim's type.
     */
    type: 'refund' | 'replace';
    /**
     * The ID of the order the claim is created for.
     */
    order_id: string;
    /**
     * The claim's description.
     */
    description?: string;
    /**
     * A note viewed only by admin users.
     */
    internal_note?: string;
    /**
     * The ID of the associated return reason.
     */
    reason_id?: string;
    /**
     * The claim's metadata, can hold custom key-value pairs.
     */
    metadata?: Record<string, any>;
};

