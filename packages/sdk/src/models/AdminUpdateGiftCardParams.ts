/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * The details to update in the gift card.
 */
export type AdminUpdateGiftCardParams = {
    /**
     * The gift card's status.
     */
    status?: 'pending' | 'redeemed';
    /**
     * The gift card's amount.
     */
    value?: number;
    /**
     * The ID of the customer that the gift card belongs to.
     */
    customer_id?: string;
    /**
     * The gift card's currency code.
     */
    currency_code?: string;
    /**
     * The gift card's note.
     */
    note?: string;
    /**
     * The date the gift card expires at.
     */
    expires_at?: string;
    /**
     * The gift card's metadata.
     */
    metadata?: Record<string, any>;
};

