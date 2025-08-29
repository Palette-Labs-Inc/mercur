/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AdminProduct } from './AdminProduct';
/**
 * The details of the product option deletion.
 */
export type AdminProductOptionDeleteResponse = {
    /**
     * The product option's ID.
     */
    id: string;
    /**
     * The name of the deleted object.
     */
    object: string;
    /**
     * Whether the product option was deleted.
     */
    deleted: boolean;
    parent?: AdminProduct;
};

