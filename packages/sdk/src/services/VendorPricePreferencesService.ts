/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { VendorPricePreference } from '../models/VendorPricePreference';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class VendorPricePreferencesService {
    /**
     * List Price Preferences
     * Retrieves a list of price preferences for the authenticated vendor.
     * @param offset The number of items to skip before starting to collect the result set.
     * @param limit The number of items to return.
     * @param fields Comma-separated fields to include in the response.
     * @param q Search term to filter price preferences.
     * @param id Filter by price preference ID(s).
     * @param attribute Filter by attribute name(s).
     * @param value Filter by attribute value(s).
     * @returns any OK
     * @throws ApiError
     */
    public static vendorListPricePreferences(
        offset?: number,
        limit: number = 300,
        fields?: string,
        q?: string,
        id?: (string | Array<string>),
        attribute?: (string | Array<string>),
        value?: (string | Array<string>),
    ): CancelablePromise<{
        price_preferences?: Array<VendorPricePreference>;
        /**
         * The total number of items available
         */
        count?: number;
        /**
         * The number of items skipped before these items
         */
        offset?: number;
        /**
         * The number of items per page
         */
        limit?: number;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/vendor/price-preferences',
            query: {
                'offset': offset,
                'limit': limit,
                'fields': fields,
                'q': q,
                'id': id,
                'attribute': attribute,
                'value': value,
            },
        });
    }
}
