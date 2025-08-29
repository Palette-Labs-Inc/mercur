/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { VendorReturnItem } from './VendorReturnItem';
/**
 * The return's details.
 */
export type VendorReturn = {
    /**
     * The return's ID.
     */
    id?: string;
    /**
     * The return's status.
     */
    status?: 'canceled' | 'requested' | 'received' | 'partially_received';
    /**
     * The amount refunded by this return.
     */
    refund_amount?: number;
    /**
     * The ID of the associated order.
     */
    order_id?: string;
    /**
     * The return's items.
     */
    items?: Array<VendorReturnItem>;
    /**
     * The date the return was created.
     */
    created_at?: string;
    /**
     * The date the return was canceled.
     */
    canceled_at?: string;
    /**
     * The return's exchange id.
     */
    exchange_id?: string;
    /**
     * The return's location id.
     */
    location_id?: string;
    /**
     * The return's claim id.
     */
    claim_id?: string;
    /**
     * The return's order version.
     */
    order_version?: number;
    /**
     * The return's display id.
     */
    display_id?: number;
    /**
     * Whether the customer should receive notifications about the return's updates.
     */
    no_notification?: boolean;
    /**
     * The date the return was received.
     */
    received_at?: string;
};

