/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * The details of the gift card to create.
 */
export type AdminCreateGiftCardParams = {
    /**
     * The gift card's code.
     */
    code: string;
    /**
     * The gift card's amount.
     */
    value: number;
    /**
     * The gift card's currency code.
     */
    currency_code: string;
    /**
     * The date the gift card expires at.
     */
    expires_at: string;
    /**
     * The gift card's reference ID.
     */
    reference_id: string;
    /**
     * The gift card's reference.
     */
    reference: string;
    /**
     * The ID of the line item associated with the gift card.
     */
    line_item_id: string;
    /**
     * The ID of the customer associated with the gift card.
     */
    customer_id: string;
    /**
     * The gift card's metadata, can hold custom key-value pairs.
     */
    metadata: Record<string, any>;
};

