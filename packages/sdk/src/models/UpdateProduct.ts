/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { UpdateProductOption } from './UpdateProductOption';
import type { UpdateProductVariant } from './UpdateProductVariant';
export type UpdateProduct = {
    /**
     * The title of the product.
     */
    title?: string;
    /**
     * Whether the product can be discounted.
     */
    discountable?: boolean;
    /**
     * Whether the product is a gift card.
     */
    is_giftcard?: boolean;
    /**
     * The product options to update.
     */
    options?: Array<UpdateProductOption>;
    /**
     * The product variants to update.
     */
    variants?: Array<UpdateProductVariant>;
    /**
     * The subtitle of the product.
     */
    subtitle?: string | null;
    /**
     * The description of the product.
     */
    description?: string | null;
    /**
     * Images of the product.
     */
    images?: Array<{
        url?: string;
    }>;
    /**
     * The thumbnail of the product.
     */
    thumbnail?: string | null;
    /**
     * The handle of the product.
     */
    handle?: string | null;
    /**
     * The ID of the product type.
     */
    type_id?: string | null;
    /**
     * The external ID of the product.
     */
    external_id?: string | null;
    /**
     * The ID of the collection the product belongs to.
     */
    collection_id?: string | null;
    /**
     * Product category IDs to associate with the product.
     */
    categories?: Array<{
        id: string;
    }>;
    /**
     * Product tag IDs to associate with the product.
     */
    tags?: Array<{
        id: string;
    }>;
    /**
     * The weight of the product.
     */
    weight?: number | null;
    /**
     * The length of the product.
     */
    length?: number | null;
    /**
     * The height of the product.
     */
    height?: number | null;
    /**
     * The width of the product.
     */
    width?: number | null;
    /**
     * The HS code of the product.
     */
    hs_code?: string | null;
    /**
     * The MID code of the product.
     */
    mid_code?: string | null;
    /**
     * The country of origin of the product.
     */
    origin_country?: string | null;
    /**
     * The material composition of the product.
     */
    material?: string | null;
    /**
     * Additional metadata for the product.
     */
    metadata?: Record<string, any> | null;
    /**
     * Sales channels to associate the product with.
     */
    sales_channels?: Array<{
        id: string;
    }>;
};

