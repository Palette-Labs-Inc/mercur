/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * The order's overview.
 */
export type VendorCustomerOrderOverview = {
    /**
     * The order's ID.
     */
    id?: string;
    /**
     * The order's version.
     */
    version?: number;
    /**
     * The ID of the region associated with the order.
     */
    region_id?: string;
    /**
     * The status of the order.
     */
    status?: string;
    /**
     * The ID of the customer that placed the order.
     */
    customer_id?: string;
    /**
     * The ID of the sales channel the order is placed in.
     */
    sales_channel_id?: string;
    /**
     * The email of the customer that placed the order.
     */
    email?: string;
    /**
     * The order's currency code.
     */
    currency_code?: string;
    /**
     * The order's display ID.
     */
    display_id?: number;
    /**
     * Indicates if order is draft.
     */
    is_draft_order?: boolean;
    /**
     * The order's metadata, can hold custom key-value pairs.
     */
    metadata?: Record<string, any>;
    /**
     * The date the order was created.
     */
    created_at?: string;
    /**
     * The date the order was updated.
     */
    updated_at?: string;
};

