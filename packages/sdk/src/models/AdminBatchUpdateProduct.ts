/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AdminCreateProductVariant } from './AdminCreateProductVariant';
import type { AdminUpdateProductOption } from './AdminUpdateProductOption';
import type { AdminUpdateProductVariant } from './AdminUpdateProductVariant';
/**
 * The product's details.
 */
export type AdminBatchUpdateProduct = {
    /**
     * The product's title.
     */
    title?: string;
    /**
     * The product's subtitle.
     */
    subtitle?: string;
    /**
     * The product's description.
     */
    description?: string;
    /**
     * Whether the product is a gift card.
     */
    is_giftcard?: boolean;
    /**
     * Whether discounts can be applied on the product.
     */
    discountable?: boolean;
    /**
     * The product's images.
     */
    images?: Array<{
        /**
         * The image's URL.
         */
        url: string;
    }>;
    /**
     * The product's thumbnail URL.
     */
    thumbnail?: string;
    /**
     * The product's unique handle.
     */
    handle?: string;
    /**
     * The product's status.
     */
    status?: 'draft' | 'proposed' | 'published' | 'rejected';
    /**
     * The ID of the product's type.
     */
    type_id?: string;
    /**
     * The ID of the product's collection.
     */
    collection_id?: string;
    /**
     * The product's categories.
     */
    categories?: Array<{
        /**
         * The category's ID.
         */
        id: string;
    }>;
    /**
     * The product's tags.
     */
    tags?: Array<{
        /**
         * The tag's ID.
         */
        id: string;
    }>;
    /**
     * The product's options.
     */
    options?: Array<AdminUpdateProductOption>;
    /**
     * The product's variants. You can add new variants or update existing ones, passing their IDs in the object.
     */
    variants?: Array<(AdminCreateProductVariant | AdminUpdateProductVariant)>;
    /**
     * The sales channels that the product is available in.
     */
    sales_channels?: Array<{
        /**
         * The sales channel's ID.
         */
        id: string;
    }>;
    /**
     * The product's weight.
     */
    weight?: number;
    /**
     * The product's length.
     */
    length?: number;
    /**
     * The product's height.
     */
    height?: number;
    /**
     * The product's width.
     */
    width?: number;
    /**
     * The product's HS code.
     */
    hs_code?: string;
    /**
     * The product's MID code.
     */
    mid_code?: string;
    /**
     * The product's origin country.
     */
    origin_country?: string;
    /**
     * The product's material.
     */
    material?: string;
    /**
     * The product's metadata, can hold custom key-value pairs.
     */
    metadata?: Record<string, any>;
    /**
     * The ID of the product in an external or third-party system.
     */
    external_id?: string;
    /**
     * The product's ID.
     */
    id: string;
    /**
     * The ID of the product's shipping profile.
     */
    shipping_profile_id?: string;
};

