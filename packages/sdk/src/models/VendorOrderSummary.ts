/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * The order's summary details.
 */
export type VendorOrderSummary = {
    /**
     * The order's total including taxes and promotions.
     */
    total?: number;
    /**
     * The order's total excluding taxes, including promotions.
     */
    subtotal?: number;
    /**
     * The order's total taxes.
     */
    total_tax?: number;
    /**
     * The order's total when it was placed.
     */
    ordered_total?: number;
    /**
     * The total of the fulfilled items of the order.
     */
    fulfilled_total?: number;
    /**
     * The total of the order's returned items.
     */
    returned_total?: number;
    /**
     * The total of the items requested to be returned.
     */
    return_request_total?: number;
    /**
     * The total of the items removed from the order.
     */
    write_off_total?: number;
    /**
     * The total amount paid.
     */
    paid_total?: number;
    /**
     * The total amount refunded.
     */
    refunded_total?: number;
};

