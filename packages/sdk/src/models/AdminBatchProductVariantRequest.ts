/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AdminBatchUpdateProductVariant } from './AdminBatchUpdateProductVariant';
import type { AdminCreateProductVariant } from './AdminCreateProductVariant';
/**
 * The product variants to create, update, or delete.
 */
export type AdminBatchProductVariantRequest = {
    /**
     * The product variants to create.
     */
    create?: Array<AdminCreateProductVariant>;
    /**
     * The product variants to update.
     */
    update?: Array<AdminBatchUpdateProductVariant>;
    /**
     * The product variants to delete.
     */
    delete?: Array<string>;
};

