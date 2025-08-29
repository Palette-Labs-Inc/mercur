/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AdminProductVariant } from './AdminProductVariant';
/**
 * The details of the product variants created, updated, or deleted.
 */
export type AdminBatchProductVariantResponse = {
    /**
     * The created product variants.
     */
    created: Array<AdminProductVariant>;
    /**
     * The updated product variants.
     */
    updated: Array<AdminProductVariant>;
    /**
     * The details of the deleted product variants.
     */
    deleted: {
        /**
         * The IDs of the deleted product variants.
         */
        ids: Array<string>;
        /**
         * The name of the deleted objects.
         */
        object: string;
        /**
         * Whether the product variants were deleted.
         */
        deleted: boolean;
    };
};

