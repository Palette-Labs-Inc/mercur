/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CreateProductOption } from './CreateProductOption';
import type { CreateProductVariant } from './CreateProductVariant';
export type CreateProduct = {
    /**
     * The title of the product.
     */
    title: string;
    /**
     * The subtitle of the product.
     */
    subtitle?: string;
    /**
     * The description of the product.
     */
    description?: string;
    /**
     * Whether the product is a gift card.
     */
    is_giftcard?: boolean;
    /**
     * Whether the product can be discounted.
     */
    discountable?: boolean;
    /**
     * Images of the product.
     */
    images?: Array<{
        url: string;
    }>;
    /**
     * The thumbnail of the product.
     */
    thumbnail?: string;
    /**
     * A unique handle to identify the product.
     */
    handle?: string;
    /**
     * The status of the product.
     */
    status?: 'draft' | 'proposed';
    /**
     * The external ID of the product.
     */
    external_id?: string;
    /**
     * The ID of the product type.
     */
    type_id?: string;
    /**
     * The ID of the collection the product belongs to.
     */
    collection_id?: string;
    /**
     * Categories the product belongs to.
     */
    categories?: Array<{
        id: string;
    }>;
    /**
     * Tags associated with the product.
     */
    tags?: Array<{
        id: string;
    }>;
    /**
     * Product options.
     */
    options?: Array<CreateProductOption>;
    /**
     * Product variants.
     */
    variants?: Array<CreateProductVariant>;
    /**
     * The weight of the product.
     */
    weight?: number;
    /**
     * The length of the product.
     */
    length?: number;
    /**
     * The height of the product.
     */
    height?: number;
    /**
     * The width of the product.
     */
    width?: number;
    /**
     * The HS code of the product.
     */
    hs_code?: string;
    /**
     * The MID code of the product.
     */
    mid_code?: string;
    /**
     * The country of origin of the product.
     */
    origin_country?: string;
    /**
     * The material composition of the product.
     */
    material?: string;
    /**
     * Additional metadata for the product.
     */
    metadata?: Record<string, any>;
    /**
     * Sales channels to associate the product with.
     */
    sales_channels?: Array<{
        id: string;
    }>;
};

