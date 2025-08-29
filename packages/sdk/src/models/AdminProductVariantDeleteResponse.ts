/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AdminProduct } from './AdminProduct';
/**
 * The details of the product variant's deletion.
 */
export type AdminProductVariantDeleteResponse = {
    /**
     * The product variant's ID.
     */
    id: string;
    /**
     * The name of the deleted object.
     */
    object: string;
    /**
     * Whether the product variant was deleted.
     */
    deleted: boolean;
    parent?: AdminProduct;
};

