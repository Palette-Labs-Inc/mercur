/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AdminCustomer } from './AdminCustomer';
import type { AdminOrderAddress } from './AdminOrderAddress';
import type { AdminOrderChange } from './AdminOrderChange';
import type { AdminOrderFulfillment } from './AdminOrderFulfillment';
import type { AdminPaymentCollection } from './AdminPaymentCollection';
import type { AdminProduct } from './AdminProduct';
import type { AdminRegion } from './AdminRegion';
import type { AdminSalesChannel } from './AdminSalesChannel';
import type { BaseOrderItemDetail } from './BaseOrderItemDetail';
import type { BaseOrderLineItemAdjustment } from './BaseOrderLineItemAdjustment';
import type { BaseOrderLineItemTaxLine } from './BaseOrderLineItemTaxLine';
import type { BaseOrderShippingMethodAdjustment } from './BaseOrderShippingMethodAdjustment';
import type { BaseOrderShippingMethodTaxLine } from './BaseOrderShippingMethodTaxLine';
import type { BaseOrderSummary } from './BaseOrderSummary';
import type { BaseOrderTransaction } from './BaseOrderTransaction';
import type { BaseProductVariant } from './BaseProductVariant';
import type { OrderCreditLine } from './OrderCreditLine';
/**
 * A preview of an order if a change, such as exchange, return, edit, or claim is applied on it.
 */
export type AdminOrderPreview = {
    /**
     * The total of the requested return.
     */
    return_requested_total: number;
    order_change: AdminOrderChange;
    /**
     * The order's items.
     */
    items?: Array<({
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
        variant?: BaseProductVariant;
        /**
         * The ID of the associated variant.
         */
        variant_id: string;
        product?: AdminProduct;
        /**
         * The ID of the associated product.
         */
        product_id: string;
        /**
         * The title of the item's product.
         */
        product_title: string;
        /**
         * The description of the item's product.
         */
        product_description: string;
        /**
         * The subtitle of the item's product.
         */
        product_subtitle: string;
        /**
         * The ID of type of the item's product.
         */
        product_type: string;
        /**
         * The ID of collection of the item's product.
         */
        product_collection: string;
        /**
         * The handle of the item's product.
         */
        product_handle: string;
        /**
         * The SKU of the item's variant.
         */
        variant_sku: string;
        /**
         * The barcode of the item's variant.
         */
        variant_barcode: string;
        /**
         * The title of the item's variant.
         */
        variant_title: string;
        /**
         * The option values of the item's variant as key-value pairs. The key is the title of an option, and the value is the option's value.
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
         * Whether the item's price includes taxes.
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
        tax_lines?: Array<BaseOrderLineItemTaxLine>;
        /**
         * The item's adjustments.
         */
        adjustments?: Array<BaseOrderLineItemAdjustment>;
        detail: BaseOrderItemDetail;
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
         * The tax total of the item excluding promotions.
         */
        original_tax_total: number;
        /**
         * The item's total for a single unit including taxes and promotions.
         */
        item_total: number;
        /**
         * The item's total for a single unit excluding taxes, including promotions.
         */
        item_subtotal: number;
        /**
         * The tax total for a single unit of the item including promotions.
         */
        item_tax_total: number;
        /**
         * The item's total including taxes and promotions.
         */
        total: number;
        /**
         * The item's total excluding taxes, including promotions.
         */
        subtotal: number;
        /**
         * The tax total of the item including promotions.
         */
        tax_total: number;
        /**
         * The total of the item's discount / promotion.
         */
        discount_total: number;
        /**
         * The tax total of the item's discount / promotion
         */
        discount_tax_total: number;
        /**
         * The total refundable amount of the item's total.
         */
        refundable_total: number;
        /**
         * The total refundable amount of the item's total for a single unit.
         */
        refundable_total_per_unit: number;
    } & {
        /**
         * The actions applied on an item.
         */
        actions?: Array<Record<string, any>>;
    })>;
    /**
     * The order's shipping methods.
     */
    shipping_methods?: Array<({
        /**
         * The shipping method's ID.
         */
        id: string;
        /**
         * The ID of the order this shipping method belongs to.
         */
        order_id: string;
        /**
         * The shipping method's name.
         */
        name: string;
        /**
         * The shipping method's description.
         */
        description?: string;
        /**
         * The shipping method's amount.
         */
        amount: number;
        /**
         * Whether the shipping method's amount is tax inclusive.
         */
        is_tax_inclusive: boolean;
        /**
         * The ID of the shipping option this method was created from.
         */
        shipping_option_id: string;
        /**
         * The data relevant for the fulfillment provider to process this shipment.
         */
        data: Record<string, any>;
        /**
         * The shipping method's metadata, can hold custom key-value pairs.
         */
        metadata: Record<string, any>;
        /**
         * The shipping method's tax lines.
         */
        tax_lines?: Array<BaseOrderShippingMethodTaxLine>;
        /**
         * The shipping method's adjustments.
         */
        adjustments?: Array<BaseOrderShippingMethodAdjustment>;
        original_total: (string | number);
        original_subtotal: (string | number);
        original_tax_total: (string | number);
        total: (string | number);
        subtotal: (string | number);
        tax_total: (string | number);
        discount_total: (string | number);
        discount_tax_total: (string | number);
        /**
         * The date the shipping method was created.
         */
        created_at: string;
        /**
         * The date the shipping method was updated.
         */
        updated_at: string;
    } & {
        /**
         * The actions applied on the shipping method.
         */
        actions?: Array<Record<string, any>>;
    })>;
    /**
     * The order's currency code.
     */
    currency_code: string;
    /**
     * The order's version when this preview is applied.
     */
    version: number;
    /**
     * The order's ID.
     */
    id: string;
    /**
     * The ID of the order's associated region.
     */
    region_id: string;
    /**
     * The ID of the customer that placed the order.
     */
    customer_id: string;
    /**
     * The ID of the sales channel that the order was placed in.
     */
    sales_channel_id: string;
    /**
     * The email of the customer that placed the order.
     */
    email: string;
    /**
     * The order's display ID.
     */
    display_id?: number;
    shipping_address?: AdminOrderAddress;
    billing_address?: AdminOrderAddress;
    /**
     * The order's payment collections.
     */
    payment_collections: Array<AdminPaymentCollection>;
    /**
     * The order's payment status.
     */
    payment_status: 'canceled' | 'not_paid' | 'awaiting' | 'authorized' | 'partially_authorized' | 'captured' | 'partially_captured' | 'partially_refunded' | 'refunded' | 'requires_action';
    /**
     * The order's fulfillments.
     */
    fulfillments?: Array<AdminOrderFulfillment>;
    /**
     * The order's fulfillment status.
     */
    fulfillment_status: 'canceled' | 'not_fulfilled' | 'partially_fulfilled' | 'fulfilled' | 'partially_shipped' | 'shipped' | 'partially_delivered' | 'delivered';
    /**
     * The order's transactions.
     */
    transactions?: Array<BaseOrderTransaction>;
    summary: BaseOrderSummary;
    /**
     * The order's metadata, can hold custom key-value pairs.
     */
    metadata?: Record<string, any>;
    /**
     * The date the order was created.
     */
    created_at: string;
    /**
     * The date the order was updated.
     */
    updated_at: string;
    /**
     * The total of the order's items including taxes, excluding promotions.
     */
    original_item_total: number;
    /**
     * The total of the order's items excluding taxes, including promotions.
     */
    original_item_subtotal: number;
    /**
     * The tax total of the order's items excluding promotions.
     */
    original_item_tax_total: number;
    /**
     * The total of the order's items including taxes and promotions.
     */
    item_total: number;
    /**
     * The total of the order's items excluding taxes, including promotions.
     */
    item_subtotal: number;
    /**
     * The tax total of the order's items including promotions.
     */
    item_tax_total: number;
    /**
     * The order's total excluding promotions, including taxes.
     */
    original_total: number;
    /**
     * The order's total excluding taxes, including promotions.
     */
    original_subtotal: number;
    /**
     * The order's tax total, excluding promotions.
     */
    original_tax_total: number;
    /**
     * The order's total including taxes and promotions.
     */
    total: number;
    /**
     * The order's total excluding taxes, including promotions.
     */
    subtotal: number;
    /**
     * The order's tax total including promotions.
     */
    tax_total: number;
    /**
     * The order's discount or promotions total.
     */
    discount_total: number;
    /**
     * The tax total of order's discount or promotion.
     */
    discount_tax_total: number;
    /**
     * The order's gift card total.
     */
    gift_card_total: number;
    /**
     * The tax total of the order's gift card.
     */
    gift_card_tax_total: number;
    /**
     * The order's shipping total including taxes and promotions.
     */
    shipping_total: number;
    /**
     * The order's shipping total excluding taxes, including promotions.
     */
    shipping_subtotal: number;
    /**
     * The tax total of the order's shipping.
     */
    shipping_tax_total: number;
    /**
     * The order's shipping total including taxes, excluding promotions.
     */
    original_shipping_total: number;
    /**
     * The order's shipping total excluding taxes, including promotions.
     */
    original_shipping_subtotal: number;
    /**
     * The tax total of the order's shipping excluding promotions.
     */
    original_shipping_tax_total: number;
    customer?: AdminCustomer;
    sales_channel?: AdminSalesChannel;
    /**
     * The order's status.
     */
    status: string;
    region?: AdminRegion;
    /**
     * The order preview's credit lines.
     */
    credit_lines?: Array<OrderCreditLine>;
    /**
     * The order preview's credit line total.
     */
    credit_line_total: number;
};

