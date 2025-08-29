/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class StoreShippingOptionsService {
    /**
     * Get Return Shipping Options
     * Retrieves a list of return shipping options for a specific order
     * @param orderId The ID of the order to get return shipping options for
     * @returns any Successfully retrieved return shipping options
     * @throws ApiError
     */
    public static getReturnShippingOptions(
        orderId: string,
    ): CancelablePromise<{
        shipping_options?: Array<{
            /**
             * The ID of the shipping option
             */
            id?: string;
            /**
             * The name of the shipping option
             */
            name?: string;
            /**
             * The type of price calculation
             */
            price_type?: 'flat_rate' | 'calculated';
            /**
             * The amount to charge for the shipping option
             */
            amount?: number;
            /**
             * Additional data about the shipping option
             */
            data?: Record<string, any>;
            /**
             * Requirements for the shipping option
             */
            requirements?: Record<string, any>;
        }>;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/store/shipping-options/return',
            query: {
                'order_id': orderId,
            },
        });
    }
}
