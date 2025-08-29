/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BaseCollection } from './BaseCollection';
import type { BaseProductCategory } from './BaseProductCategory';
import type { BaseProductImage } from './BaseProductImage';
import type { BaseProductOption } from './BaseProductOption';
import type { BaseProductTag } from './BaseProductTag';
import type { BaseProductType } from './BaseProductType';
/**
 * The product's details.
 */
export type BaseProduct = {
    collection?: BaseCollection;
    /**
     * The product's categories.
     */
    categories?: Array<BaseProductCategory>;
    /**
     * The product's variants.
     */
    variants: Array<Record<string, any>>;
    type?: BaseProductType;
    /**
     * The product's tags.
     */
    tags?: Array<BaseProductTag>;
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
    options: Array<BaseProductOption>;
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
     * The product's unique handle.
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
     * The product's thumbnail.
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
    /**
     * The ID of the collection that the product belongs to.
     */
    collection_id: string;
    /**
     * The ID of the product's type.
     */
    type_id: string;
    /**
     * The product's images.
     */
    images: Array<BaseProductImage>;
    /**
     * Whether discounts can be applied on the product.
     */
    discountable: boolean;
    /**
     * The ID of a product in an external system, such as an ERP or CMS.
     */
    external_id: string;
    /**
     * The date the product was deleted.
     */
    deleted_at: string;
};

