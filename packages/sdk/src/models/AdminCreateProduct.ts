/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AdminCreateProductOption } from './AdminCreateProductOption';
import type { AdminCreateProductVariant } from './AdminCreateProductVariant';
/**
 * The product's details.
 */
export type AdminCreateProduct = {
    /**
     * The product's title.
     */
    title: string;
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
     * Whether the product is discountable.
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
     * The URL of the product's thumbnail.
     */
    thumbnail?: string;
    /**
     * The product's handle.
     */
    handle?: string;
    /**
     * The product's status.
     */
    status?: 'draft' | 'proposed' | 'published' | 'rejected';
    /**
     * The ID of the type the product belongs to.
     */
    type_id?: string;
    /**
     * The ID of the collection the product belongs to.
     */
    collection_id?: string;
    /**
     * The categories the product belongs to.
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
    options: Array<AdminCreateProductOption>;
    /**
     * The product's variants.
     */
    variants?: Array<AdminCreateProductVariant>;
    /**
     * The sales channels the product is available in.
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
     * The product's metadata, used to store custom key-value pairs.
     */
    metadata?: Record<string, any>;
    /**
     * The ID of the product in an external or third-party system.
     */
    external_id?: string;
    /**
     * The ID of the product's shipping profile.
     */
    shipping_profile_id?: string;
};

