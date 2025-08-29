/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AdminPrice } from './AdminPrice';
/**
 * The details of the created, updated, and deleted prices in a price list.
 */
export type AdminPriceListBatchResponse = {
    /**
     * The created prices.
     */
    created: Array<AdminPrice>;
    /**
     * The updated prices.
     */
    updated: Array<AdminPrice>;
    /**
     * The details of the deleted prices.
     */
    deleted: {
        /**
         * The IDs of the deleted prices.
         */
        ids: Array<string>;
        /**
         * The name of the deleted object.
         */
        object: string;
        /**
         * Whether the prices were deleted.
         */
        deleted: boolean;
    };
};

