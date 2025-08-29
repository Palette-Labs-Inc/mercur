/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * The refund reason's details.
 */
export type RefundReason = {
    /**
     * The refund reason's ID.
     */
    id: string;
    /**
     * The refund reason's label.
     */
    label: string;
    /**
     * The refund reason's description.
     */
    description?: string;
    /**
     * The refund reason's metadata, can hold custom key-value pairs.
     */
    metadata: Record<string, any>;
    /**
     * The date the refund reason was created.
     */
    created_at: string;
    /**
     * The date the refund reason was updated.
     */
    updated_at: string;
};

