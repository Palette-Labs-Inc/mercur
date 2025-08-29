/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { OrderChangeAction } from './OrderChangeAction';
import type { OrderClaim } from './OrderClaim';
import type { OrderExchange } from './OrderExchange';
/**
 * The order change's details.
 */
export type OrderChange = {
    /**
     * The order change's ID.
     */
    id: string;
    /**
     * The order change's version. This will be the order's version when the change is applied.
     */
    version: number;
    /**
     * The order change's type.
     */
    change_type?: 'return' | 'exchange' | 'claim' | 'edit';
    /**
     * The ID of the order this change applies on.
     */
    order_id: string;
    /**
     * The ID of the associated return.
     */
    return_id: string;
    /**
     * The ID of the associated exchange.
     */
    exchange_id: string;
    /**
     * The ID of the associated claim.
     */
    claim_id: string;
    order: Record<string, any>;
    return_order: Record<string, any>;
    exchange: OrderExchange;
    claim: OrderClaim;
    /**
     * The order change's actions.
     */
    actions: Array<OrderChangeAction>;
    /**
     * The order change's status.
     */
    status: 'canceled' | 'requested' | 'pending' | 'confirmed' | 'declined';
    /**
     * The ID of the user that requested the change.
     */
    requested_by: string;
    /**
     * The date the order change was requested.
     */
    requested_at: string;
    /**
     * The ID of the user that confirmed the order change.
     */
    confirmed_by: string;
    /**
     * The date the order change was confirmed.
     */
    confirmed_at: string;
    /**
     * The ID of the user that declined the order change.
     */
    declined_by: string;
    /**
     * The reason the order change was declined.
     */
    declined_reason: string;
    /**
     * The order change's metadata, can hold custom key-value pairs.
     */
    metadata: Record<string, any>;
    /**
     * The date the order change was declined.
     */
    declined_at: string;
    /**
     * The ID of the user that canceled the order change.
     */
    canceled_by: string;
    /**
     * The date the order change was canceled.
     */
    canceled_at: string;
    /**
     * The date the order change was created.
     */
    created_at: string;
    /**
     * The date the order change was updated.
     */
    updated_at: string;
};

