/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AdminBatchUpdateProduct } from './AdminBatchUpdateProduct';
import type { AdminCreateProduct } from './AdminCreateProduct';
/**
 * The products to create, update, or delete.
 */
export type AdminBatchProductRequest = {
    /**
     * The products to create.
     */
    create?: Array<AdminCreateProduct>;
    /**
     * The products to update.
     */
    update?: Array<AdminBatchUpdateProduct>;
    /**
     * The products to delete.
     */
    delete?: Array<string>;
};

