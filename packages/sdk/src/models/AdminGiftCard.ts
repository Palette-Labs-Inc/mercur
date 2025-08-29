/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AdminCustomer } from './AdminCustomer';
import type { AdminOrderLineItem } from './AdminOrderLineItem';
/**
 * The gift card's details.
 */
export type AdminGiftCard = {
    line_item: AdminOrderLineItem;
    customer: AdminCustomer;
    /**
     * The gift card's ID.
     */
    id: string;
    /**
     * The gift card's code.
     */
    code: string;
    /**
     * The gift card's status.
     */
    status: 'pending' | 'redeemed';
    /**
     * The gift card's amount.
     */
    value: number;
    /**
     * The gift card's currency code.
     */
    currency_code: string;
    /**
     * The ID of the customer associated with the gift card.
     */
    customer_id: string;
    /**
     * The gift card's reference ID.
     */
    reference_id: string;
    /**
     * The gift card's note.
     */
    note: string;
    /**
     * The gift card's reference.
     */
    reference: string;
    /**
     * The date the gift card expires at.
     */
    expires_at: string;
    /**
     * The date the gift card was created at.
     */
    created_at: string;
    /**
     * The date the gift card was updated at.
     */
    updated_at: string;
};

