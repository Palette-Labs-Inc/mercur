/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AdminProductVariant } from './AdminProductVariant';
import type { AdminProductVariantInventoryLink } from './AdminProductVariantInventoryLink';
/**
 * The details of the deleted associated between a product variant and an inventory item.
 */
export type AdminProductVariantInventoryLinkDeleteResponse = {
    id: AdminProductVariantInventoryLink;
    /**
     * The name of the deleted object.
     */
    object: string;
    /**
     * Whether the association was deleted.
     */
    deleted: boolean;
    parent: AdminProductVariant;
};

