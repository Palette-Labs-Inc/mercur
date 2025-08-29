/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BaseOrderItemDetail } from './BaseOrderItemDetail';
import type { StoreProduct } from './StoreProduct';
import type { StoreProductVariant } from './StoreProductVariant';
/**
 * The item's details.
 */
export type StoreOrderLineItem = {
    /**
     * The item's ID.
     */
    id: string;
    /**
     * The item's title.
     */
    title: string;
    /**
     * The item's subtitle.
     */
    subtitle: string;
    /**
     * The URL of the item's thumbnail.
     */
    thumbnail: string;
    variant?: StoreProductVariant;
    /**
     * The ID of the associated variant.
     */
    variant_id: string;
    product?: StoreProduct;
    /**
     * The ID of the associated product.
     */
    product_id: string;
    /**
     * The item's product title.
     */
    product_title: string;
    /**
     * The item's product description.
     */
    product_description: string;
    /**
     * The item's product subtitle.
     */
    product_subtitle: string;
    /**
     * The item's product type.
     */
    product_type: string;
    /**
     * The ID of the collection the item's product belongs to.
     */
    product_collection: string;
    /**
     * The item's product handle.
     */
    product_handle: string;
    /**
     * The item's variant SKU.
     */
    variant_sku: string;
    /**
     * The item's variant barcode.
     */
    variant_barcode: string;
    /**
     * The item's variant title.
     */
    variant_title: string;
    /**
     * The values of the item variant's options.
     */
    variant_option_values: Record<string, any>;
    /**
     * Whether the item requires shipping.
     */
    requires_shipping: boolean;
    /**
     * Whether the item is discountable.
     */
    is_discountable: boolean;
    /**
     * Whether the item is tax inclusive.
     */
    is_tax_inclusive: boolean;
    /**
     * The original price of the item before a promotion or sale.
     */
    compare_at_unit_price?: number;
    /**
     * The item's unit price.
     */
    unit_price: number;
    /**
     * The item's quantity.
     */
    quantity: number;
    /**
     * The item's tax lines.
     */
    tax_lines?: Array<({
        /**
         * The tax line's item.
         */
        item: {
            /**
             * The item's ID.
             */
            id: string;
            /**
             * The item's title.
             */
            title: string;
            /**
             * The item's subtitle.
             */
            subtitle: string;
            /**
             * The item's thumbnail.
             */
            thumbnail: string;
            /**
             * The item's variant.
             */
            variant?: {
                /**
                 * The variant's ID.
                 */
                id: string;
                /**
                 * The variant's title.
                 */
                title: string;
                /**
                 * The variant's sku.
                 */
                sku: string;
                /**
                 * The variant's barcode.
                 */
                barcode: string;
                /**
                 * The variant's ean.
                 */
                ean: string;
                /**
                 * The variant's upc.
                 */
                upc: string;
                /**
                 * The variant's allow backorder.
                 */
                allow_backorder: boolean;
                /**
                 * The variant's manage inventory.
                 */
                manage_inventory: boolean;
                /**
                 * The variant's inventory quantity.
                 */
                inventory_quantity?: number;
                /**
                 * The variant's hs code.
                 */
                hs_code: string;
                /**
                 * The variant's origin country.
                 */
                origin_country: string;
                /**
                 * The variant's mid code.
                 */
                mid_code: string;
                /**
                 * The variant's material.
                 */
                material: string;
                /**
                 * The variant's weight.
                 */
                weight: number;
                /**
                 * The variant's length.
                 */
                length: number;
                /**
                 * The variant's height.
                 */
                height: number;
                /**
                 * The variant's width.
                 */
                width: number;
                /**
                 * The variant's variant rank.
                 */
                variant_rank?: number;
                /**
                 * The variant's options.
                 */
                options: Array<Record<string, any>>;
                /**
                 * The variant's product.
                 */
                product?: Record<string, any>;
                /**
                 * The variant's product id.
                 */
                product_id?: string;
                /**
                 * The variant's calculated price.
                 */
                calculated_price?: Record<string, any>;
                /**
                 * The variant's created at.
                 */
                created_at: string;
                /**
                 * The variant's updated at.
                 */
                updated_at: string;
                /**
                 * The variant's deleted at.
                 */
                deleted_at: string;
                /**
                 * The variant's metadata.
                 */
                metadata?: Record<string, any>;
            };
            /**
             * The item's variant id.
             */
            variant_id: string;
            /**
             * The item's product.
             */
            product?: {
                /**
                 * The product's ID.
                 */
                id: string;
                /**
                 * The product's title.
                 */
                title: string;
                /**
                 * The product's handle.
                 */
                handle: string;
                /**
                 * The product's subtitle.
                 */
                subtitle: string;
                /**
                 * The product's description.
                 */
                description: string;
                /**
                 * The product's is giftcard.
                 */
                is_giftcard: boolean;
                /**
                 * The product's status.
                 */
                status: 'draft' | 'proposed' | 'published' | 'rejected';
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
                 * The product's length.
                 */
                length: number;
                /**
                 * The product's height.
                 */
                height: number;
                /**
                 * The product's origin country.
                 */
                origin_country: string;
                /**
                 * The product's hs code.
                 */
                hs_code: string;
                /**
                 * The product's mid code.
                 */
                mid_code: string;
                /**
                 * The product's material.
                 */
                material: string;
                /**
                 * The product's collection.
                 */
                collection?: Record<string, any>;
                /**
                 * The product's collection id.
                 */
                collection_id: string;
                /**
                 * The product's categories.
                 */
                categories?: Array<Record<string, any>>;
                /**
                 * The product's type.
                 */
                type?: Record<string, any>;
                /**
                 * The product's type id.
                 */
                type_id: string;
                /**
                 * The product's tags.
                 */
                tags?: Array<Record<string, any>>;
                /**
                 * The product's variants.
                 */
                variants: Array<Record<string, any>>;
                /**
                 * The product's options.
                 */
                options: Array<Record<string, any>>;
                /**
                 * The product's images.
                 */
                images: Array<Record<string, any>>;
                /**
                 * The product's discountable.
                 */
                discountable: boolean;
                /**
                 * The product's external id.
                 */
                external_id: string;
                /**
                 * The product's created at.
                 */
                created_at: string;
                /**
                 * The product's updated at.
                 */
                updated_at: string;
                /**
                 * The product's deleted at.
                 */
                deleted_at: string;
                /**
                 * The product's metadata.
                 */
                metadata?: Record<string, any>;
            };
            /**
             * The item's product id.
             */
            product_id: string;
            /**
             * The item's product title.
             */
            product_title: string;
            /**
             * The item's product description.
             */
            product_description: string;
            /**
             * The item's product subtitle.
             */
            product_subtitle: string;
            /**
             * The item's product type.
             */
            product_type: string;
            /**
             * The item's product collection.
             */
            product_collection: string;
            /**
             * The item's product handle.
             */
            product_handle: string;
            /**
             * The item's variant sku.
             */
            variant_sku: string;
            /**
             * The item's variant barcode.
             */
            variant_barcode: string;
            /**
             * The item's variant title.
             */
            variant_title: string;
            /**
             * The item's variant option values.
             */
            variant_option_values: Record<string, any>;
            /**
             * The item's requires shipping.
             */
            requires_shipping: boolean;
            /**
             * The item's is discountable.
             */
            is_discountable: boolean;
            /**
             * The item's is tax inclusive.
             */
            is_tax_inclusive: boolean;
            /**
             * The item's compare at unit price.
             */
            compare_at_unit_price?: number;
            /**
             * The item's unit price.
             */
            unit_price: number;
            /**
             * The item's quantity.
             */
            quantity: number;
            /**
             * The item's tax lines.
             */
            tax_lines?: Array<{
                /**
                 * The tax line's item.
                 */
                item: Record<string, any>;
                /**
                 * The tax line's item id.
                 */
                item_id: string;
                /**
                 * The tax line's total.
                 */
                total: number;
                /**
                 * The tax line's subtotal.
                 */
                subtotal: number;
                /**
                 * The tax line's ID.
                 */
                id: string;
                /**
                 * The tax line's description.
                 */
                description?: string;
                /**
                 * The tax line's tax rate id.
                 */
                tax_rate_id?: string;
                /**
                 * The tax line's code.
                 */
                code: string;
                /**
                 * The tax line's rate.
                 */
                rate: number;
                /**
                 * The tax line's provider id.
                 */
                provider_id?: string;
                /**
                 * The tax line's created at.
                 */
                created_at: string;
                /**
                 * The tax line's updated at.
                 */
                updated_at: string;
            }>;
            /**
             * The item's adjustments.
             */
            adjustments?: Array<{
                /**
                 * The adjustment's item.
                 */
                item: Record<string, any>;
                /**
                 * The adjustment's item id.
                 */
                item_id: string;
                /**
                 * The adjustment's ID.
                 */
                id: string;
                /**
                 * The adjustment's code.
                 */
                code?: string;
                /**
                 * The adjustment's amount.
                 */
                amount: number;
                /**
                 * The adjustment's order id.
                 */
                order_id: string;
                /**
                 * The adjustment's description.
                 */
                description?: string;
                /**
                 * The adjustment's promotion id.
                 */
                promotion_id?: string;
                /**
                 * The adjustment's provider id.
                 */
                provider_id?: string;
                /**
                 * The adjustment's created at.
                 */
                created_at: string;
                /**
                 * The adjustment's updated at.
                 */
                updated_at: string;
            }>;
            /**
             * The item's detail.
             */
            detail: {
                /**
                 * The detail's ID.
                 */
                id: string;
                /**
                 * The detail's item id.
                 */
                item_id: string;
                /**
                 * The detail's item.
                 */
                item: Record<string, any>;
                /**
                 * The detail's quantity.
                 */
                quantity: number;
                /**
                 * The detail's fulfilled quantity.
                 */
                fulfilled_quantity: number;
                /**
                 * The detail's delivered quantity.
                 */
                delivered_quantity: number;
                /**
                 * The detail's shipped quantity.
                 */
                shipped_quantity: number;
                /**
                 * The detail's return requested quantity.
                 */
                return_requested_quantity: number;
                /**
                 * The detail's return received quantity.
                 */
                return_received_quantity: number;
                /**
                 * The detail's return dismissed quantity.
                 */
                return_dismissed_quantity: number;
                /**
                 * The detail's written off quantity.
                 */
                written_off_quantity: number;
                /**
                 * The detail's metadata.
                 */
                metadata: Record<string, any>;
                /**
                 * The detail's created at.
                 */
                created_at: string;
                /**
                 * The detail's updated at.
                 */
                updated_at: string;
            };
            /**
             * The item's created at.
             */
            created_at: string;
            /**
             * The item's updated at.
             */
            updated_at: string;
            /**
             * The item's metadata.
             */
            metadata: Record<string, any>;
            /**
             * The item's original total.
             */
            original_total: number;
            /**
             * The item's original subtotal.
             */
            original_subtotal: number;
            /**
             * The item's original tax total.
             */
            original_tax_total: number;
            /**
             * The item's item total.
             */
            item_total: number;
            /**
             * The item's item subtotal.
             */
            item_subtotal: number;
            /**
             * The item's item tax total.
             */
            item_tax_total: number;
            /**
             * The item's total.
             */
            total: number;
            /**
             * The item's subtotal.
             */
            subtotal: number;
            /**
             * The item's tax total.
             */
            tax_total: number;
            /**
             * The item's discount total.
             */
            discount_total: number;
            /**
             * The item's discount tax total.
             */
            discount_tax_total: number;
            /**
             * The item's refundable total.
             */
            refundable_total: number;
            /**
             * The item's refundable total per unit.
             */
            refundable_total_per_unit: number;
        };
        /**
         * The tax line's item id.
         */
        item_id: string;
        /**
         * The tax line's total.
         */
        total: number;
        /**
         * The tax line's subtotal.
         */
        subtotal: number;
        /**
         * The tax line's ID.
         */
        id: string;
        /**
         * The tax line's description.
         */
        description?: string;
        /**
         * The tax line's tax rate id.
         */
        tax_rate_id?: string;
        /**
         * The tax line's code.
         */
        code: string;
        /**
         * The tax line's rate.
         */
        rate: number;
        /**
         * The tax line's provider id.
         */
        provider_id?: string;
        /**
         * The tax line's created at.
         */
        created_at: string;
        /**
         * The tax line's updated at.
         */
        updated_at: string;
    } & {
        /**
         * The tax line's item.
         */
        item: {
            /**
             * The item's variant.
             */
            variant?: {
                /**
                 * The variant's options.
                 */
                options: Array<Record<string, any>>;
                /**
                 * The variant's product.
                 */
                product?: Record<string, any>;
                /**
                 * The variant's length.
                 */
                length: number;
                /**
                 * The variant's title.
                 */
                title: string;
                /**
                 * The variant's ID.
                 */
                id: string;
                /**
                 * The variant's metadata.
                 */
                metadata?: Record<string, any>;
                /**
                 * The variant's created at.
                 */
                created_at: string;
                /**
                 * The variant's updated at.
                 */
                updated_at: string;
                /**
                 * The variant's product id.
                 */
                product_id?: string;
                /**
                 * The variant's width.
                 */
                width: number;
                /**
                 * The variant's weight.
                 */
                weight: number;
                /**
                 * The variant's height.
                 */
                height: number;
                /**
                 * The variant's origin country.
                 */
                origin_country: string;
                /**
                 * The variant's hs code.
                 */
                hs_code: string;
                /**
                 * The variant's mid code.
                 */
                mid_code: string;
                /**
                 * The variant's material.
                 */
                material: string;
                /**
                 * The variant's deleted at.
                 */
                deleted_at: string;
                /**
                 * The variant's sku.
                 */
                sku: string;
                /**
                 * The variant's barcode.
                 */
                barcode: string;
                /**
                 * The variant's ean.
                 */
                ean: string;
                /**
                 * The variant's upc.
                 */
                upc: string;
                /**
                 * The variant's allow backorder.
                 */
                allow_backorder: boolean;
                /**
                 * The variant's manage inventory.
                 */
                manage_inventory: boolean;
                /**
                 * The variant's inventory quantity.
                 */
                inventory_quantity?: number;
                /**
                 * The variant's variant rank.
                 */
                variant_rank?: number;
                /**
                 * The variant's calculated price.
                 */
                calculated_price?: Record<string, any>;
            };
            /**
             * The item's product.
             */
            product?: {
                /**
                 * The product's collection.
                 */
                collection?: Record<string, any>;
                /**
                 * The product's categories.
                 */
                categories?: Array<Record<string, any>>;
                /**
                 * The product's variants.
                 */
                variants: Array<Record<string, any>>;
                /**
                 * The product's type.
                 */
                type?: Record<string, any>;
                /**
                 * The product's tags.
                 */
                tags?: Array<Record<string, any>>;
                /**
                 * The product's options.
                 */
                options: Array<Record<string, any>>;
                /**
                 * The product's images.
                 */
                images: Array<Record<string, any>>;
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
                 * The product's description.
                 */
                description: string;
                /**
                 * The product's ID.
                 */
                id: string;
                /**
                 * The product's metadata.
                 */
                metadata?: Record<string, any>;
                /**
                 * The product's created at.
                 */
                created_at: string;
                /**
                 * The product's updated at.
                 */
                updated_at: string;
                /**
                 * The product's subtitle.
                 */
                subtitle: string;
                /**
                 * The product's thumbnail.
                 */
                thumbnail: string;
                /**
                 * The product's handle.
                 */
                handle: string;
                /**
                 * The product's is giftcard.
                 */
                is_giftcard: boolean;
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
                 * The product's hs code.
                 */
                hs_code: string;
                /**
                 * The product's mid code.
                 */
                mid_code: string;
                /**
                 * The product's material.
                 */
                material: string;
                /**
                 * The product's collection id.
                 */
                collection_id: string;
                /**
                 * The product's type id.
                 */
                type_id: string;
                /**
                 * The product's discountable.
                 */
                discountable: boolean;
                /**
                 * The product's external id.
                 */
                external_id: string;
                /**
                 * The product's deleted at.
                 */
                deleted_at: string;
            };
            /**
             * The item's tax lines.
             */
            tax_lines?: Array<({
                /**
                 * The tax line's item.
                 */
                item: Record<string, any>;
                /**
                 * The tax line's item id.
                 */
                item_id: string;
                /**
                 * The tax line's total.
                 */
                total: number;
                /**
                 * The tax line's subtotal.
                 */
                subtotal: number;
                /**
                 * The tax line's ID.
                 */
                id: string;
                /**
                 * The tax line's description.
                 */
                description?: string;
                /**
                 * The tax line's tax rate id.
                 */
                tax_rate_id?: string;
                /**
                 * The tax line's code.
                 */
                code: string;
                /**
                 * The tax line's rate.
                 */
                rate: number;
                /**
                 * The tax line's provider id.
                 */
                provider_id?: string;
                /**
                 * The tax line's created at.
                 */
                created_at: string;
                /**
                 * The tax line's updated at.
                 */
                updated_at: string;
            } & {
                /**
                 * The tax line's item.
                 */
                item: Record<string, any>;
            })>;
            /**
             * The item's adjustments.
             */
            adjustments?: Array<({
                /**
                 * The adjustment's item.
                 */
                item: Record<string, any>;
                /**
                 * The adjustment's item id.
                 */
                item_id: string;
                /**
                 * The adjustment's ID.
                 */
                id: string;
                /**
                 * The adjustment's code.
                 */
                code?: string;
                /**
                 * The adjustment's amount.
                 */
                amount: number;
                /**
                 * The adjustment's order id.
                 */
                order_id: string;
                /**
                 * The adjustment's description.
                 */
                description?: string;
                /**
                 * The adjustment's promotion id.
                 */
                promotion_id?: string;
                /**
                 * The adjustment's provider id.
                 */
                provider_id?: string;
                /**
                 * The adjustment's created at.
                 */
                created_at: string;
                /**
                 * The adjustment's updated at.
                 */
                updated_at: string;
            } & {
                /**
                 * The adjustment's item.
                 */
                item: Record<string, any>;
            })>;
            detail: ({
                /**
                 * The detail's ID.
                 */
                id: string;
                /**
                 * The detail's item id.
                 */
                item_id: string;
                /**
                 * The detail's item.
                 */
                item: Record<string, any>;
                /**
                 * The detail's quantity.
                 */
                quantity: number;
                /**
                 * The detail's fulfilled quantity.
                 */
                fulfilled_quantity: number;
                /**
                 * The detail's delivered quantity.
                 */
                delivered_quantity: number;
                /**
                 * The detail's shipped quantity.
                 */
                shipped_quantity: number;
                /**
                 * The detail's return requested quantity.
                 */
                return_requested_quantity: number;
                /**
                 * The detail's return received quantity.
                 */
                return_received_quantity: number;
                /**
                 * The detail's return dismissed quantity.
                 */
                return_dismissed_quantity: number;
                /**
                 * The detail's written off quantity.
                 */
                written_off_quantity: number;
                /**
                 * The detail's metadata.
                 */
                metadata: Record<string, any>;
                /**
                 * The detail's created at.
                 */
                created_at: string;
                /**
                 * The detail's updated at.
                 */
                updated_at: string;
            } & {
                /**
                 * The detail's item.
                 */
                item: Record<string, any>;
            });
            /**
             * The item's title.
             */
            title: string;
            /**
             * The item's ID.
             */
            id: string;
            /**
             * The item's metadata.
             */
            metadata: Record<string, any>;
            /**
             * The item's created at.
             */
            created_at: string;
            /**
             * The item's updated at.
             */
            updated_at: string;
            /**
             * The item's item total.
             */
            item_total: number;
            /**
             * The item's item subtotal.
             */
            item_subtotal: number;
            /**
             * The item's item tax total.
             */
            item_tax_total: number;
            /**
             * The item's original total.
             */
            original_total: number;
            /**
             * The item's original subtotal.
             */
            original_subtotal: number;
            /**
             * The item's original tax total.
             */
            original_tax_total: number;
            /**
             * The item's total.
             */
            total: number;
            /**
             * The item's subtotal.
             */
            subtotal: number;
            /**
             * The item's tax total.
             */
            tax_total: number;
            /**
             * The item's discount total.
             */
            discount_total: number;
            /**
             * The item's discount tax total.
             */
            discount_tax_total: number;
            /**
             * The item's subtitle.
             */
            subtitle: string;
            /**
             * The item's thumbnail.
             */
            thumbnail: string;
            /**
             * The item's variant id.
             */
            variant_id: string;
            /**
             * The item's product id.
             */
            product_id: string;
            /**
             * The item's product title.
             */
            product_title: string;
            /**
             * The item's product description.
             */
            product_description: string;
            /**
             * The item's product subtitle.
             */
            product_subtitle: string;
            /**
             * The item's product type.
             */
            product_type: string;
            /**
             * The item's product collection.
             */
            product_collection: string;
            /**
             * The item's product handle.
             */
            product_handle: string;
            /**
             * The item's variant sku.
             */
            variant_sku: string;
            /**
             * The item's variant barcode.
             */
            variant_barcode: string;
            /**
             * The item's variant title.
             */
            variant_title: string;
            /**
             * The item's variant option values.
             */
            variant_option_values: Record<string, any>;
            /**
             * The item's requires shipping.
             */
            requires_shipping: boolean;
            /**
             * The item's is discountable.
             */
            is_discountable: boolean;
            /**
             * The item's is tax inclusive.
             */
            is_tax_inclusive: boolean;
            /**
             * The item's compare at unit price.
             */
            compare_at_unit_price?: number;
            /**
             * The item's unit price.
             */
            unit_price: number;
            /**
             * The item's quantity.
             */
            quantity: number;
            /**
             * The item's refundable total.
             */
            refundable_total: number;
            /**
             * The item's refundable total per unit.
             */
            refundable_total_per_unit: number;
        };
    })>;
    /**
     * The item's adjustments.
     */
    adjustments?: Array<({
        /**
         * The adjustment's item.
         */
        item: {
            /**
             * The item's ID.
             */
            id: string;
            /**
             * The item's title.
             */
            title: string;
            /**
             * The item's subtitle.
             */
            subtitle: string;
            /**
             * The item's thumbnail.
             */
            thumbnail: string;
            /**
             * The item's variant.
             */
            variant?: {
                /**
                 * The variant's ID.
                 */
                id: string;
                /**
                 * The variant's title.
                 */
                title: string;
                /**
                 * The variant's sku.
                 */
                sku: string;
                /**
                 * The variant's barcode.
                 */
                barcode: string;
                /**
                 * The variant's ean.
                 */
                ean: string;
                /**
                 * The variant's upc.
                 */
                upc: string;
                /**
                 * The variant's allow backorder.
                 */
                allow_backorder: boolean;
                /**
                 * The variant's manage inventory.
                 */
                manage_inventory: boolean;
                /**
                 * The variant's inventory quantity.
                 */
                inventory_quantity?: number;
                /**
                 * The variant's hs code.
                 */
                hs_code: string;
                /**
                 * The variant's origin country.
                 */
                origin_country: string;
                /**
                 * The variant's mid code.
                 */
                mid_code: string;
                /**
                 * The variant's material.
                 */
                material: string;
                /**
                 * The variant's weight.
                 */
                weight: number;
                /**
                 * The variant's length.
                 */
                length: number;
                /**
                 * The variant's height.
                 */
                height: number;
                /**
                 * The variant's width.
                 */
                width: number;
                /**
                 * The variant's variant rank.
                 */
                variant_rank?: number;
                /**
                 * The variant's options.
                 */
                options: Array<Record<string, any>>;
                /**
                 * The variant's product.
                 */
                product?: Record<string, any>;
                /**
                 * The variant's product id.
                 */
                product_id?: string;
                /**
                 * The variant's calculated price.
                 */
                calculated_price?: Record<string, any>;
                /**
                 * The variant's created at.
                 */
                created_at: string;
                /**
                 * The variant's updated at.
                 */
                updated_at: string;
                /**
                 * The variant's deleted at.
                 */
                deleted_at: string;
                /**
                 * The variant's metadata.
                 */
                metadata?: Record<string, any>;
            };
            /**
             * The item's variant id.
             */
            variant_id: string;
            /**
             * The item's product.
             */
            product?: {
                /**
                 * The product's ID.
                 */
                id: string;
                /**
                 * The product's title.
                 */
                title: string;
                /**
                 * The product's handle.
                 */
                handle: string;
                /**
                 * The product's subtitle.
                 */
                subtitle: string;
                /**
                 * The product's description.
                 */
                description: string;
                /**
                 * The product's is giftcard.
                 */
                is_giftcard: boolean;
                /**
                 * The product's status.
                 */
                status: 'draft' | 'proposed' | 'published' | 'rejected';
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
                 * The product's length.
                 */
                length: number;
                /**
                 * The product's height.
                 */
                height: number;
                /**
                 * The product's origin country.
                 */
                origin_country: string;
                /**
                 * The product's hs code.
                 */
                hs_code: string;
                /**
                 * The product's mid code.
                 */
                mid_code: string;
                /**
                 * The product's material.
                 */
                material: string;
                /**
                 * The product's collection.
                 */
                collection?: Record<string, any>;
                /**
                 * The product's collection id.
                 */
                collection_id: string;
                /**
                 * The product's categories.
                 */
                categories?: Array<Record<string, any>>;
                /**
                 * The product's type.
                 */
                type?: Record<string, any>;
                /**
                 * The product's type id.
                 */
                type_id: string;
                /**
                 * The product's tags.
                 */
                tags?: Array<Record<string, any>>;
                /**
                 * The product's variants.
                 */
                variants: Array<Record<string, any>>;
                /**
                 * The product's options.
                 */
                options: Array<Record<string, any>>;
                /**
                 * The product's images.
                 */
                images: Array<Record<string, any>>;
                /**
                 * The product's discountable.
                 */
                discountable: boolean;
                /**
                 * The product's external id.
                 */
                external_id: string;
                /**
                 * The product's created at.
                 */
                created_at: string;
                /**
                 * The product's updated at.
                 */
                updated_at: string;
                /**
                 * The product's deleted at.
                 */
                deleted_at: string;
                /**
                 * The product's metadata.
                 */
                metadata?: Record<string, any>;
            };
            /**
             * The item's product id.
             */
            product_id: string;
            /**
             * The item's product title.
             */
            product_title: string;
            /**
             * The item's product description.
             */
            product_description: string;
            /**
             * The item's product subtitle.
             */
            product_subtitle: string;
            /**
             * The item's product type.
             */
            product_type: string;
            /**
             * The item's product collection.
             */
            product_collection: string;
            /**
             * The item's product handle.
             */
            product_handle: string;
            /**
             * The item's variant sku.
             */
            variant_sku: string;
            /**
             * The item's variant barcode.
             */
            variant_barcode: string;
            /**
             * The item's variant title.
             */
            variant_title: string;
            /**
             * The item's variant option values.
             */
            variant_option_values: Record<string, any>;
            /**
             * The item's requires shipping.
             */
            requires_shipping: boolean;
            /**
             * The item's is discountable.
             */
            is_discountable: boolean;
            /**
             * The item's is tax inclusive.
             */
            is_tax_inclusive: boolean;
            /**
             * The item's compare at unit price.
             */
            compare_at_unit_price?: number;
            /**
             * The item's unit price.
             */
            unit_price: number;
            /**
             * The item's quantity.
             */
            quantity: number;
            /**
             * The item's tax lines.
             */
            tax_lines?: Array<{
                /**
                 * The tax line's item.
                 */
                item: Record<string, any>;
                /**
                 * The tax line's item id.
                 */
                item_id: string;
                /**
                 * The tax line's total.
                 */
                total: number;
                /**
                 * The tax line's subtotal.
                 */
                subtotal: number;
                /**
                 * The tax line's ID.
                 */
                id: string;
                /**
                 * The tax line's description.
                 */
                description?: string;
                /**
                 * The tax line's tax rate id.
                 */
                tax_rate_id?: string;
                /**
                 * The tax line's code.
                 */
                code: string;
                /**
                 * The tax line's rate.
                 */
                rate: number;
                /**
                 * The tax line's provider id.
                 */
                provider_id?: string;
                /**
                 * The tax line's created at.
                 */
                created_at: string;
                /**
                 * The tax line's updated at.
                 */
                updated_at: string;
            }>;
            /**
             * The item's adjustments.
             */
            adjustments?: Array<{
                /**
                 * The adjustment's item.
                 */
                item: Record<string, any>;
                /**
                 * The adjustment's item id.
                 */
                item_id: string;
                /**
                 * The adjustment's ID.
                 */
                id: string;
                /**
                 * The adjustment's code.
                 */
                code?: string;
                /**
                 * The adjustment's amount.
                 */
                amount: number;
                /**
                 * The adjustment's order id.
                 */
                order_id: string;
                /**
                 * The adjustment's description.
                 */
                description?: string;
                /**
                 * The adjustment's promotion id.
                 */
                promotion_id?: string;
                /**
                 * The adjustment's provider id.
                 */
                provider_id?: string;
                /**
                 * The adjustment's created at.
                 */
                created_at: string;
                /**
                 * The adjustment's updated at.
                 */
                updated_at: string;
            }>;
            /**
             * The item's detail.
             */
            detail: {
                /**
                 * The detail's ID.
                 */
                id: string;
                /**
                 * The detail's item id.
                 */
                item_id: string;
                /**
                 * The detail's item.
                 */
                item: Record<string, any>;
                /**
                 * The detail's quantity.
                 */
                quantity: number;
                /**
                 * The detail's fulfilled quantity.
                 */
                fulfilled_quantity: number;
                /**
                 * The detail's delivered quantity.
                 */
                delivered_quantity: number;
                /**
                 * The detail's shipped quantity.
                 */
                shipped_quantity: number;
                /**
                 * The detail's return requested quantity.
                 */
                return_requested_quantity: number;
                /**
                 * The detail's return received quantity.
                 */
                return_received_quantity: number;
                /**
                 * The detail's return dismissed quantity.
                 */
                return_dismissed_quantity: number;
                /**
                 * The detail's written off quantity.
                 */
                written_off_quantity: number;
                /**
                 * The detail's metadata.
                 */
                metadata: Record<string, any>;
                /**
                 * The detail's created at.
                 */
                created_at: string;
                /**
                 * The detail's updated at.
                 */
                updated_at: string;
            };
            /**
             * The item's created at.
             */
            created_at: string;
            /**
             * The item's updated at.
             */
            updated_at: string;
            /**
             * The item's metadata.
             */
            metadata: Record<string, any>;
            /**
             * The item's original total.
             */
            original_total: number;
            /**
             * The item's original subtotal.
             */
            original_subtotal: number;
            /**
             * The item's original tax total.
             */
            original_tax_total: number;
            /**
             * The item's item total.
             */
            item_total: number;
            /**
             * The item's item subtotal.
             */
            item_subtotal: number;
            /**
             * The item's item tax total.
             */
            item_tax_total: number;
            /**
             * The item's total.
             */
            total: number;
            /**
             * The item's subtotal.
             */
            subtotal: number;
            /**
             * The item's tax total.
             */
            tax_total: number;
            /**
             * The item's discount total.
             */
            discount_total: number;
            /**
             * The item's discount tax total.
             */
            discount_tax_total: number;
            /**
             * The item's refundable total.
             */
            refundable_total: number;
            /**
             * The item's refundable total per unit.
             */
            refundable_total_per_unit: number;
        };
        /**
         * The adjustment's item id.
         */
        item_id: string;
        /**
         * The adjustment's ID.
         */
        id: string;
        /**
         * The adjustment's code.
         */
        code?: string;
        /**
         * The adjustment's amount.
         */
        amount: number;
        /**
         * The adjustment's order id.
         */
        order_id: string;
        /**
         * The adjustment's description.
         */
        description?: string;
        /**
         * The adjustment's promotion id.
         */
        promotion_id?: string;
        /**
         * The adjustment's provider id.
         */
        provider_id?: string;
        /**
         * The adjustment's created at.
         */
        created_at: string;
        /**
         * The adjustment's updated at.
         */
        updated_at: string;
    } & {
        /**
         * The adjustment's item.
         */
        item: {
            /**
             * The item's variant.
             */
            variant?: {
                /**
                 * The variant's options.
                 */
                options: Array<Record<string, any>>;
                /**
                 * The variant's product.
                 */
                product?: Record<string, any>;
                /**
                 * The variant's length.
                 */
                length: number;
                /**
                 * The variant's title.
                 */
                title: string;
                /**
                 * The variant's ID.
                 */
                id: string;
                /**
                 * The variant's metadata.
                 */
                metadata?: Record<string, any>;
                /**
                 * The variant's created at.
                 */
                created_at: string;
                /**
                 * The variant's updated at.
                 */
                updated_at: string;
                /**
                 * The variant's product id.
                 */
                product_id?: string;
                /**
                 * The variant's width.
                 */
                width: number;
                /**
                 * The variant's weight.
                 */
                weight: number;
                /**
                 * The variant's height.
                 */
                height: number;
                /**
                 * The variant's origin country.
                 */
                origin_country: string;
                /**
                 * The variant's hs code.
                 */
                hs_code: string;
                /**
                 * The variant's mid code.
                 */
                mid_code: string;
                /**
                 * The variant's material.
                 */
                material: string;
                /**
                 * The variant's deleted at.
                 */
                deleted_at: string;
                /**
                 * The variant's sku.
                 */
                sku: string;
                /**
                 * The variant's barcode.
                 */
                barcode: string;
                /**
                 * The variant's ean.
                 */
                ean: string;
                /**
                 * The variant's upc.
                 */
                upc: string;
                /**
                 * The variant's allow backorder.
                 */
                allow_backorder: boolean;
                /**
                 * The variant's manage inventory.
                 */
                manage_inventory: boolean;
                /**
                 * The variant's inventory quantity.
                 */
                inventory_quantity?: number;
                /**
                 * The variant's variant rank.
                 */
                variant_rank?: number;
                /**
                 * The variant's calculated price.
                 */
                calculated_price?: Record<string, any>;
            };
            /**
             * The item's product.
             */
            product?: {
                /**
                 * The product's collection.
                 */
                collection?: Record<string, any>;
                /**
                 * The product's categories.
                 */
                categories?: Array<Record<string, any>>;
                /**
                 * The product's variants.
                 */
                variants: Array<Record<string, any>>;
                /**
                 * The product's type.
                 */
                type?: Record<string, any>;
                /**
                 * The product's tags.
                 */
                tags?: Array<Record<string, any>>;
                /**
                 * The product's options.
                 */
                options: Array<Record<string, any>>;
                /**
                 * The product's images.
                 */
                images: Array<Record<string, any>>;
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
                 * The product's description.
                 */
                description: string;
                /**
                 * The product's ID.
                 */
                id: string;
                /**
                 * The product's metadata.
                 */
                metadata?: Record<string, any>;
                /**
                 * The product's created at.
                 */
                created_at: string;
                /**
                 * The product's updated at.
                 */
                updated_at: string;
                /**
                 * The product's subtitle.
                 */
                subtitle: string;
                /**
                 * The product's thumbnail.
                 */
                thumbnail: string;
                /**
                 * The product's handle.
                 */
                handle: string;
                /**
                 * The product's is giftcard.
                 */
                is_giftcard: boolean;
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
                 * The product's hs code.
                 */
                hs_code: string;
                /**
                 * The product's mid code.
                 */
                mid_code: string;
                /**
                 * The product's material.
                 */
                material: string;
                /**
                 * The product's collection id.
                 */
                collection_id: string;
                /**
                 * The product's type id.
                 */
                type_id: string;
                /**
                 * The product's discountable.
                 */
                discountable: boolean;
                /**
                 * The product's external id.
                 */
                external_id: string;
                /**
                 * The product's deleted at.
                 */
                deleted_at: string;
            };
            /**
             * The item's tax lines.
             */
            tax_lines?: Array<({
                /**
                 * The tax line's item.
                 */
                item: Record<string, any>;
                /**
                 * The tax line's item id.
                 */
                item_id: string;
                /**
                 * The tax line's total.
                 */
                total: number;
                /**
                 * The tax line's subtotal.
                 */
                subtotal: number;
                /**
                 * The tax line's ID.
                 */
                id: string;
                /**
                 * The tax line's description.
                 */
                description?: string;
                /**
                 * The tax line's tax rate id.
                 */
                tax_rate_id?: string;
                /**
                 * The tax line's code.
                 */
                code: string;
                /**
                 * The tax line's rate.
                 */
                rate: number;
                /**
                 * The tax line's provider id.
                 */
                provider_id?: string;
                /**
                 * The tax line's created at.
                 */
                created_at: string;
                /**
                 * The tax line's updated at.
                 */
                updated_at: string;
            } & {
                /**
                 * The tax line's item.
                 */
                item: Record<string, any>;
            })>;
            /**
             * The item's adjustments.
             */
            adjustments?: Array<({
                /**
                 * The adjustment's item.
                 */
                item: Record<string, any>;
                /**
                 * The adjustment's item id.
                 */
                item_id: string;
                /**
                 * The adjustment's ID.
                 */
                id: string;
                /**
                 * The adjustment's code.
                 */
                code?: string;
                /**
                 * The adjustment's amount.
                 */
                amount: number;
                /**
                 * The adjustment's order id.
                 */
                order_id: string;
                /**
                 * The adjustment's description.
                 */
                description?: string;
                /**
                 * The adjustment's promotion id.
                 */
                promotion_id?: string;
                /**
                 * The adjustment's provider id.
                 */
                provider_id?: string;
                /**
                 * The adjustment's created at.
                 */
                created_at: string;
                /**
                 * The adjustment's updated at.
                 */
                updated_at: string;
            } & {
                /**
                 * The adjustment's item.
                 */
                item: Record<string, any>;
            })>;
            detail: ({
                /**
                 * The detail's ID.
                 */
                id: string;
                /**
                 * The detail's item id.
                 */
                item_id: string;
                /**
                 * The detail's item.
                 */
                item: Record<string, any>;
                /**
                 * The detail's quantity.
                 */
                quantity: number;
                /**
                 * The detail's fulfilled quantity.
                 */
                fulfilled_quantity: number;
                /**
                 * The detail's delivered quantity.
                 */
                delivered_quantity: number;
                /**
                 * The detail's shipped quantity.
                 */
                shipped_quantity: number;
                /**
                 * The detail's return requested quantity.
                 */
                return_requested_quantity: number;
                /**
                 * The detail's return received quantity.
                 */
                return_received_quantity: number;
                /**
                 * The detail's return dismissed quantity.
                 */
                return_dismissed_quantity: number;
                /**
                 * The detail's written off quantity.
                 */
                written_off_quantity: number;
                /**
                 * The detail's metadata.
                 */
                metadata: Record<string, any>;
                /**
                 * The detail's created at.
                 */
                created_at: string;
                /**
                 * The detail's updated at.
                 */
                updated_at: string;
            } & {
                /**
                 * The detail's item.
                 */
                item: Record<string, any>;
            });
            /**
             * The item's title.
             */
            title: string;
            /**
             * The item's ID.
             */
            id: string;
            /**
             * The item's metadata.
             */
            metadata: Record<string, any>;
            /**
             * The item's created at.
             */
            created_at: string;
            /**
             * The item's updated at.
             */
            updated_at: string;
            /**
             * The item's item total.
             */
            item_total: number;
            /**
             * The item's item subtotal.
             */
            item_subtotal: number;
            /**
             * The item's item tax total.
             */
            item_tax_total: number;
            /**
             * The item's original total.
             */
            original_total: number;
            /**
             * The item's original subtotal.
             */
            original_subtotal: number;
            /**
             * The item's original tax total.
             */
            original_tax_total: number;
            /**
             * The item's total.
             */
            total: number;
            /**
             * The item's subtotal.
             */
            subtotal: number;
            /**
             * The item's tax total.
             */
            tax_total: number;
            /**
             * The item's discount total.
             */
            discount_total: number;
            /**
             * The item's discount tax total.
             */
            discount_tax_total: number;
            /**
             * The item's subtitle.
             */
            subtitle: string;
            /**
             * The item's thumbnail.
             */
            thumbnail: string;
            /**
             * The item's variant id.
             */
            variant_id: string;
            /**
             * The item's product id.
             */
            product_id: string;
            /**
             * The item's product title.
             */
            product_title: string;
            /**
             * The item's product description.
             */
            product_description: string;
            /**
             * The item's product subtitle.
             */
            product_subtitle: string;
            /**
             * The item's product type.
             */
            product_type: string;
            /**
             * The item's product collection.
             */
            product_collection: string;
            /**
             * The item's product handle.
             */
            product_handle: string;
            /**
             * The item's variant sku.
             */
            variant_sku: string;
            /**
             * The item's variant barcode.
             */
            variant_barcode: string;
            /**
             * The item's variant title.
             */
            variant_title: string;
            /**
             * The item's variant option values.
             */
            variant_option_values: Record<string, any>;
            /**
             * The item's requires shipping.
             */
            requires_shipping: boolean;
            /**
             * The item's is discountable.
             */
            is_discountable: boolean;
            /**
             * The item's is tax inclusive.
             */
            is_tax_inclusive: boolean;
            /**
             * The item's compare at unit price.
             */
            compare_at_unit_price?: number;
            /**
             * The item's unit price.
             */
            unit_price: number;
            /**
             * The item's quantity.
             */
            quantity: number;
            /**
             * The item's refundable total.
             */
            refundable_total: number;
            /**
             * The item's refundable total per unit.
             */
            refundable_total_per_unit: number;
        };
    })>;
    /**
     * The item's detail.
     */
    detail: (BaseOrderItemDetail & {
        /**
         * The detail's item.
         */
        item: {
            /**
             * The item's variant.
             */
            variant?: {
                /**
                 * The variant's options.
                 */
                options: Array<Record<string, any>>;
                /**
                 * The variant's product.
                 */
                product?: Record<string, any>;
                /**
                 * The variant's length.
                 */
                length: number;
                /**
                 * The variant's title.
                 */
                title: string;
                /**
                 * The variant's ID.
                 */
                id: string;
                /**
                 * The variant's metadata.
                 */
                metadata?: Record<string, any>;
                /**
                 * The variant's created at.
                 */
                created_at: string;
                /**
                 * The variant's updated at.
                 */
                updated_at: string;
                /**
                 * The variant's product id.
                 */
                product_id?: string;
                /**
                 * The variant's width.
                 */
                width: number;
                /**
                 * The variant's weight.
                 */
                weight: number;
                /**
                 * The variant's height.
                 */
                height: number;
                /**
                 * The variant's origin country.
                 */
                origin_country: string;
                /**
                 * The variant's hs code.
                 */
                hs_code: string;
                /**
                 * The variant's mid code.
                 */
                mid_code: string;
                /**
                 * The variant's material.
                 */
                material: string;
                /**
                 * The variant's deleted at.
                 */
                deleted_at: string;
                /**
                 * The variant's sku.
                 */
                sku: string;
                /**
                 * The variant's barcode.
                 */
                barcode: string;
                /**
                 * The variant's ean.
                 */
                ean: string;
                /**
                 * The variant's upc.
                 */
                upc: string;
                /**
                 * The variant's allow backorder.
                 */
                allow_backorder: boolean;
                /**
                 * The variant's manage inventory.
                 */
                manage_inventory: boolean;
                /**
                 * The variant's inventory quantity.
                 */
                inventory_quantity?: number;
                /**
                 * The variant's variant rank.
                 */
                variant_rank?: number;
                /**
                 * The variant's calculated price.
                 */
                calculated_price?: Record<string, any>;
            };
            /**
             * The item's product.
             */
            product?: {
                /**
                 * The product's collection.
                 */
                collection?: Record<string, any>;
                /**
                 * The product's categories.
                 */
                categories?: Array<Record<string, any>>;
                /**
                 * The product's variants.
                 */
                variants: Array<Record<string, any>>;
                /**
                 * The product's type.
                 */
                type?: Record<string, any>;
                /**
                 * The product's tags.
                 */
                tags?: Array<Record<string, any>>;
                /**
                 * The product's options.
                 */
                options: Array<Record<string, any>>;
                /**
                 * The product's images.
                 */
                images: Array<Record<string, any>>;
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
                 * The product's description.
                 */
                description: string;
                /**
                 * The product's ID.
                 */
                id: string;
                /**
                 * The product's metadata.
                 */
                metadata?: Record<string, any>;
                /**
                 * The product's created at.
                 */
                created_at: string;
                /**
                 * The product's updated at.
                 */
                updated_at: string;
                /**
                 * The product's subtitle.
                 */
                subtitle: string;
                /**
                 * The product's thumbnail.
                 */
                thumbnail: string;
                /**
                 * The product's handle.
                 */
                handle: string;
                /**
                 * The product's is giftcard.
                 */
                is_giftcard: boolean;
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
                 * The product's hs code.
                 */
                hs_code: string;
                /**
                 * The product's mid code.
                 */
                mid_code: string;
                /**
                 * The product's material.
                 */
                material: string;
                /**
                 * The product's collection id.
                 */
                collection_id: string;
                /**
                 * The product's type id.
                 */
                type_id: string;
                /**
                 * The product's discountable.
                 */
                discountable: boolean;
                /**
                 * The product's external id.
                 */
                external_id: string;
                /**
                 * The product's deleted at.
                 */
                deleted_at: string;
            };
            /**
             * The item's tax lines.
             */
            tax_lines?: Array<({
                /**
                 * The tax line's item.
                 */
                item: Record<string, any>;
                /**
                 * The tax line's item id.
                 */
                item_id: string;
                /**
                 * The tax line's total.
                 */
                total: number;
                /**
                 * The tax line's subtotal.
                 */
                subtotal: number;
                /**
                 * The tax line's ID.
                 */
                id: string;
                /**
                 * The tax line's description.
                 */
                description?: string;
                /**
                 * The tax line's tax rate id.
                 */
                tax_rate_id?: string;
                /**
                 * The tax line's code.
                 */
                code: string;
                /**
                 * The tax line's rate.
                 */
                rate: number;
                /**
                 * The tax line's provider id.
                 */
                provider_id?: string;
                /**
                 * The tax line's created at.
                 */
                created_at: string;
                /**
                 * The tax line's updated at.
                 */
                updated_at: string;
            } & {
                /**
                 * The tax line's item.
                 */
                item: Record<string, any>;
            })>;
            /**
             * The item's adjustments.
             */
            adjustments?: Array<({
                /**
                 * The adjustment's item.
                 */
                item: Record<string, any>;
                /**
                 * The adjustment's item id.
                 */
                item_id: string;
                /**
                 * The adjustment's ID.
                 */
                id: string;
                /**
                 * The adjustment's code.
                 */
                code?: string;
                /**
                 * The adjustment's amount.
                 */
                amount: number;
                /**
                 * The adjustment's order id.
                 */
                order_id: string;
                /**
                 * The adjustment's description.
                 */
                description?: string;
                /**
                 * The adjustment's promotion id.
                 */
                promotion_id?: string;
                /**
                 * The adjustment's provider id.
                 */
                provider_id?: string;
                /**
                 * The adjustment's created at.
                 */
                created_at: string;
                /**
                 * The adjustment's updated at.
                 */
                updated_at: string;
            } & {
                /**
                 * The adjustment's item.
                 */
                item: Record<string, any>;
            })>;
            detail: ({
                /**
                 * The detail's ID.
                 */
                id: string;
                /**
                 * The detail's item id.
                 */
                item_id: string;
                /**
                 * The detail's item.
                 */
                item: Record<string, any>;
                /**
                 * The detail's quantity.
                 */
                quantity: number;
                /**
                 * The detail's fulfilled quantity.
                 */
                fulfilled_quantity: number;
                /**
                 * The detail's delivered quantity.
                 */
                delivered_quantity: number;
                /**
                 * The detail's shipped quantity.
                 */
                shipped_quantity: number;
                /**
                 * The detail's return requested quantity.
                 */
                return_requested_quantity: number;
                /**
                 * The detail's return received quantity.
                 */
                return_received_quantity: number;
                /**
                 * The detail's return dismissed quantity.
                 */
                return_dismissed_quantity: number;
                /**
                 * The detail's written off quantity.
                 */
                written_off_quantity: number;
                /**
                 * The detail's metadata.
                 */
                metadata: Record<string, any>;
                /**
                 * The detail's created at.
                 */
                created_at: string;
                /**
                 * The detail's updated at.
                 */
                updated_at: string;
            } & {
                /**
                 * The detail's item.
                 */
                item: Record<string, any>;
            });
            /**
             * The item's title.
             */
            title: string;
            /**
             * The item's ID.
             */
            id: string;
            /**
             * The item's metadata.
             */
            metadata: Record<string, any>;
            /**
             * The item's created at.
             */
            created_at: string;
            /**
             * The item's updated at.
             */
            updated_at: string;
            /**
             * The item's item total.
             */
            item_total: number;
            /**
             * The item's item subtotal.
             */
            item_subtotal: number;
            /**
             * The item's item tax total.
             */
            item_tax_total: number;
            /**
             * The item's original total.
             */
            original_total: number;
            /**
             * The item's original subtotal.
             */
            original_subtotal: number;
            /**
             * The item's original tax total.
             */
            original_tax_total: number;
            /**
             * The item's total.
             */
            total: number;
            /**
             * The item's subtotal.
             */
            subtotal: number;
            /**
             * The item's tax total.
             */
            tax_total: number;
            /**
             * The item's discount total.
             */
            discount_total: number;
            /**
             * The item's discount tax total.
             */
            discount_tax_total: number;
            /**
             * The item's subtitle.
             */
            subtitle: string;
            /**
             * The item's thumbnail.
             */
            thumbnail: string;
            /**
             * The item's variant id.
             */
            variant_id: string;
            /**
             * The item's product id.
             */
            product_id: string;
            /**
             * The item's product title.
             */
            product_title: string;
            /**
             * The item's product description.
             */
            product_description: string;
            /**
             * The item's product subtitle.
             */
            product_subtitle: string;
            /**
             * The item's product type.
             */
            product_type: string;
            /**
             * The item's product collection.
             */
            product_collection: string;
            /**
             * The item's product handle.
             */
            product_handle: string;
            /**
             * The item's variant sku.
             */
            variant_sku: string;
            /**
             * The item's variant barcode.
             */
            variant_barcode: string;
            /**
             * The item's variant title.
             */
            variant_title: string;
            /**
             * The item's variant option values.
             */
            variant_option_values: Record<string, any>;
            /**
             * The item's requires shipping.
             */
            requires_shipping: boolean;
            /**
             * The item's is discountable.
             */
            is_discountable: boolean;
            /**
             * The item's is tax inclusive.
             */
            is_tax_inclusive: boolean;
            /**
             * The item's compare at unit price.
             */
            compare_at_unit_price?: number;
            /**
             * The item's unit price.
             */
            unit_price: number;
            /**
             * The item's quantity.
             */
            quantity: number;
            /**
             * The item's refundable total.
             */
            refundable_total: number;
            /**
             * The item's refundable total per unit.
             */
            refundable_total_per_unit: number;
        };
    });
    /**
     * The date the item was created.
     */
    created_at: string;
    /**
     * The date the item was updated.
     */
    updated_at: string;
    /**
     * The item's metadata, can hold custom key-value pairs.
     */
    metadata: Record<string, any>;
    /**
     * The item's total including taxes, excluding promotions.
     */
    original_total: number;
    /**
     * The item's total excluding taxes, including promotions.
     */
    original_subtotal: number;
    /**
     * The total taxes of the item, excluding promotions.
     */
    original_tax_total: number;
    /**
     * The total taxes of the item, including promotions.
     */
    item_total: number;
    /**
     * The item's total excluding taxes, including promotions.
     */
    item_subtotal: number;
    /**
     * The total taxes of the item, including promotions.
     */
    item_tax_total: number;
    /**
     * The item's total, including taxes and promotions.
     */
    total: number;
    /**
     * The item's subtotal excluding taxes, including promotions.
     */
    subtotal: number;
    /**
     * The tax total of the item including promotions.
     */
    tax_total: number;
    /**
     * The total discount amount of the item.
     */
    discount_total: number;
    /**
     * The total taxes applied on the discounted amount.
     */
    discount_tax_total: number;
    /**
     * The total refundable amount of the item's total.
     */
    refundable_total: number;
    /**
     * The total refundable amount of the item's total for a single quantity.
     */
    refundable_total_per_unit: number;
    /**
     * The ID of the associated product's type.
     */
    product_type_id: string;
};

