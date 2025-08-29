/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * The filfillment's details.
 */
export type AdminCreateFulfillment = {
    /**
     * The ID of the location the items are fulfilled from.
     */
    location_id: string;
    /**
     * The ID of the provider handling this fulfillment.
     */
    provider_id: string;
    /**
     * The address to deliver the items to.
     */
    delivery_address: {
        /**
         * The customer's first name.
         */
        first_name?: string;
        /**
         * The customer's last name.
         */
        last_name?: string;
        /**
         * The customer's phone.
         */
        phone?: string;
        /**
         * The delivery address's company.
         */
        company?: string;
        /**
         * The delivery address's first line.
         */
        address_1?: string;
        /**
         * The delivery address's second line.
         */
        address_2?: string;
        /**
         * The delivery address's city.
         */
        city?: string;
        /**
         * The delivery address's country code.
         */
        country_code?: string;
        /**
         * The delivery address's ISO 3166-2 province code. Must be lower-case.
         */
        province?: string;
        /**
         * The delivery address's postal code.
         */
        postal_code?: string;
        /**
         * The delivery address's metadata, used to store custom key-value pairs.
         */
        metadata?: Record<string, any>;
    };
    /**
     * The items to fulfill.
     */
    items: Array<{
        /**
         * The item's title.
         */
        title: string;
        /**
         * The item's SKU.
         */
        sku: string;
        /**
         * The quantity to fulfill of the item.
         */
        quantity: number;
        /**
         * The item's barcode.
         */
        barcode: string;
        /**
         * The ID of the associated line item.
         */
        line_item_id?: string;
        /**
         * The ID of the inventory item associated with the underlying variant.
         */
        inventory_item_id?: string;
    }>;
    /**
     * The labels for the fulfillment's shipments.
     */
    labels: Array<{
        /**
         * The label's tracking number.
         */
        tracking_number: string;
        /**
         * The label's tracking URL.
         */
        tracking_url: string;
        /**
         * The label's URL.
         */
        label_url: string;
    }>;
    /**
     * The ID of the order this fulfillment is created for.
     */
    order_id: string;
    /**
     * The ID of the shipping option used in the order.
     */
    shipping_option_id?: string;
    /**
     * Any data useful for the fulfillment provider to handle the fulfillment.
     */
    data: Record<string, any>;
    /**
     * The date and time the fulfillment was packed.
     */
    packed_at?: string;
    /**
     * The date and time the fulfillment was shipped.
     */
    shipped_at?: string;
    /**
     * The date and time the fulfillment was delivered.
     */
    delivered_at?: string;
    /**
     * The date and time the fulfillment was canceled.
     */
    canceled_at?: string;
    /**
     * The fulfillment's metadata, used to store custom key-value pairs.
     */
    metadata: Record<string, any>;
};

