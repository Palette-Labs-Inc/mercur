/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AdminCollection } from './AdminCollection';
import type { AdminProductCategory } from './AdminProductCategory';
import type { AdminProductImage } from './AdminProductImage';
import type { AdminProductOption } from './AdminProductOption';
import type { AdminProductTag } from './AdminProductTag';
import type { AdminProductType } from './AdminProductType';
import type { AdminProductVariant } from './AdminProductVariant';
import type { AdminSalesChannel } from './AdminSalesChannel';
import type { AdminShippingProfile } from './AdminShippingProfile';
/**
 * The product's details.
 */
export type AdminProduct = {
    collection?: AdminCollection;
    /**
     * The product's categories.
     */
    categories?: Array<AdminProductCategory>;
    /**
     * The sales channels that the product is available in.
     */
    sales_channels?: Array<AdminSalesChannel>;
    /**
     * The product's variants.
     */
    variants: Array<AdminProductVariant>;
    type: AdminProductType;
    /**
     * The product's tags.
     */
    tags?: Array<AdminProductTag>;
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
    options: Array<AdminProductOption>;
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
    images: Array<AdminProductImage>;
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
    shipping_profile?: AdminShippingProfile;
};

