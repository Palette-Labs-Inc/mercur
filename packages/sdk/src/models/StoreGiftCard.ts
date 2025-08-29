/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { StoreCustomer } from './StoreCustomer';
import type { StoreOrderLineItem } from './StoreOrderLineItem';
/**
 * The gift card's details.
 */
export type StoreGiftCard = {
    customer: StoreCustomer;
    line_item: StoreOrderLineItem;
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
     * The ID of the customer that the gift card belongs to.
     */
    customer_id: string;
    /**
     * The gift card's reference ID.
     */
    reference_id: string;
    /**
     * A note with more information about the gift card.
     */
    note: string;
    /**
     * The gift card's reference.
     */
    reference: string;
    /**
     * The date the gift card expires.
     */
    expires_at: string;
    /**
     * The date the gift card was created.
     */
    created_at: string;
    /**
     * The date the gift card was updated.
     */
    updated_at: string;
};

