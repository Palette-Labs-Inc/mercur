/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AdminProduct } from './AdminProduct';
/**
 * The details of the products created, updated, or deleted.
 */
export type AdminBatchProductResponse = {
    /**
     * The created products
     */
    created: Array<AdminProduct>;
    /**
     * The updated products.
     */
    updated: Array<AdminProduct>;
    /**
     * The deleted products' details.
     */
    deleted: {
        /**
         * The IDs of deleted products.
         */
        ids: Array<string>;
        /**
         * The name of the deleted objects.
         */
        object: string;
        /**
         * Whether the products were deleted.
         */
        deleted: boolean;
    };
};

