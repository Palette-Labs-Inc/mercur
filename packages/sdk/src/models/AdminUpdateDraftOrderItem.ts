/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * The updates to make on a draft order's item.
 */
export type AdminUpdateDraftOrderItem = {
    /**
     * The item's quantity.
     */
    quantity: number;
    /**
     * The item's unit price.
     */
    unit_price?: number;
    /**
     * The original price of the item before a promotion or sale.
     */
    compare_at_unit_price?: number;
    /**
     * A note viewed only by admin users about the item.
     */
    internal_note?: string;
};

