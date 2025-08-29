/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { StoreCollection } from './StoreCollection';
import type { StoreProductImage } from './StoreProductImage';
import type { StoreProductOption } from './StoreProductOption';
import type { StoreProductTag } from './StoreProductTag';
import type { StoreProductType } from './StoreProductType';
import type { StoreProductVariant } from './StoreProductVariant';
/**
 * The product's details.
 */
export type StoreProduct = {
    /**
     * The product's categories.
     */
    categories?: Array<Record<string, any>>;
    type?: StoreProductType;
    /**
     * The product's length.
     */
    length: number;
    /**
     * The product's title.
     */
    title: string;
    /**
     * The product's status.
     */
    status: 'draft' | 'proposed' | 'published' | 'rejected';
    /**
     * The product's options.
     */
    options: Array<StoreProductOption>;
    /**
     * The product's description.
     */
    description: string;
    /**
     * The product's ID.
     */
    id: string;
    /**
     * The product's metadata, can hold custom key-value pairs.
     */
    metadata?: Record<string, any>;
    /**
     * The date the product was created.
     */
    created_at: string;
    /**
     * The date the product was updated.
     */
    updated_at: string;
    /**
     * The product's variants.
     */
    variants: Array<StoreProductVariant>;
    /**
     * The product's handle.
     */
    handle: string;
    /**
     * The product's subtitle.
     */
    subtitle: string;
    /**
     * Whether the product is a gift card.
     */
    is_giftcard: boolean;
    /**
     * The product's thumbnail URL.
     */
    thumbnail: string;
    /**
     * The product's width.
     */
    width: number;
    /**
     * The product's weight.
     */
    weight: number;
    /**
     * The product's height.
     */
    height: number;
    /**
     * The product's origin country.
     */
    origin_country: string;
    /**
     * The product's HS code.
     */
    hs_code: string;
    /**
     * The product's MID code.
     */
    mid_code: string;
    /**
     * The product's material.
     */
    material: string;
    collection?: StoreCollection;
    /**
     * The ID of the collection that the product belongs to.
     */
    collection_id: string;
    /**
     * The ID of the product's type.
     */
    type_id: string;
    /**
     * The product's tags.
     */
    tags?: Array<StoreProductTag>;
    /**
     * The product's images.
     */
    images: Array<StoreProductImage>;
    /**
     * Whether the product can be discounted.
     */
    discountable: boolean;
    /**
     * The ID of the product in an external service or system.
     */
    external_id: string;
    /**
     * The date the product was deleted.
     */
    deleted_at: string;
};

