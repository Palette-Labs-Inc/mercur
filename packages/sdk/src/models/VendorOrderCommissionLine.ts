/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type VendorOrderCommissionLine = {
    /**
     * Commission line id
     */
    id?: string;
    /**
     * Order line item id that commission line relates to
     */
    item_line_id?: string;
    /**
     * Commission value of the order line
     */
    amount?: number;
    /**
     * The currency code.
     */
    currency_code?: string;
};

