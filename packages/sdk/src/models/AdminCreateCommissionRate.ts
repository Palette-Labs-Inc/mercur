/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AdminCommissionRatePrice } from './AdminCommissionRatePrice';
export type AdminCreateCommissionRate = {
    /**
     * Rate type.
     */
    type?: 'flat' | 'percentage';
    /**
     * The subtitle of the product.
     */
    percentage_rate?: number;
    /**
     * The description of the product.
     */
    include_tax?: boolean;
    price_set?: Array<AdminCommissionRatePrice>;
    min_price_set?: Array<AdminCommissionRatePrice>;
    max_price_set?: Array<AdminCommissionRatePrice>;
};

