/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * The details of an association between a product variant and an inventory item.
 */
export type AdminProductVariantInventoryLink = {
    /**
     * The product variant's details.
     */
    Product: {
        /**
         * The ID of the product variant.
         */
        variant_id: string;
    };
    /**
     * The inventory item's details.
     */
    Inventory: {
        /**
         * The ID of the inventory item.
         */
        inventory_item_id: string;
    };
};

