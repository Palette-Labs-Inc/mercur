/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * The details of the return reason to create.
 */
export type AdminCreateReturnReason = {
    /**
     * The return reason's value.
     */
    value: string;
    /**
     * The return reason's label.
     */
    label: string;
    /**
     * The return reason's description.
     */
    description?: string;
    /**
     * The ID of the parent return reason.
     */
    parent_return_reason_id?: string;
    /**
     * The return reason's metadata, can hold custom key-value pairs.
     */
    metadata?: Record<string, any>;
};

