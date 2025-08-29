/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * The details of a variant's inventory item.
 */
export type AdminCreateProductVariantInventoryKit = {
    /**
     * The inventory item's ID.
     */
    inventory_item_id: string;
    /**
     * The number of units a single quantity is equivalent to. For example, if a customer orders one quantity of the variant, Medusa checks the availability of the quantity multiplied by the value set for `required_quantity`. When the customer orders the quantity, Medusa reserves the ordered quantity multiplied by the value set for `required_quantity`.
     */
    required_quantity?: number;
};

