/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { StoreProduct } from './StoreProduct';
/**
 * The category's details.
 */
export type StoreProductCategory = {
    /**
     * The category's ID.
     */
    id: string;
    /**
     * The category's name.
     */
    name: string;
    /**
     * The category's description.
     */
    description: string;
    /**
     * The category's handle.
     */
    handle: string;
    /**
     * The category's rank.
     */
    rank: number;
    /**
     * The ID of the category's parent.
     */
    parent_category_id: string;
    parent_category: Record<string, any>;
    /**
     * The category's children.
     */
    category_children: Array<Record<string, any>>;
    /**
     * The category's metadata, can hold custom key-value pairs.
     */
    metadata?: Record<string, any>;
    /**
     * The date the category was created.
     */
    created_at: string;
    /**
     * The date the category was updated.
     */
    updated_at: string;
    /**
     * The date the category was deleted.
     */
    deleted_at: string;
    /**
     * The category's products.
     */
    products?: Array<StoreProduct>;
};

