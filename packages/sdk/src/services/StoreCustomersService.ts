/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { StoreCreateCustomer } from '../models/StoreCreateCustomer';
import type { StoreCreateCustomerAddress } from '../models/StoreCreateCustomerAddress';
import type { StoreCustomer } from '../models/StoreCustomer';
import type { StoreCustomerAddressListResponse } from '../models/StoreCustomerAddressListResponse';
import type { StoreCustomerAddressResponse } from '../models/StoreCustomerAddressResponse';
import type { StoreCustomerResponse } from '../models/StoreCustomerResponse';
import type { StoreUpdateCustomer } from '../models/StoreUpdateCustomer';
import type { StoreUpdateCustomerAddress } from '../models/StoreUpdateCustomerAddress';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class StoreCustomersService {
    /**
     * Register Customer
     * Register a customer. Use the `/auth/customer/emailpass/register` API route first to retrieve the registration token and pass it in the header of the request.
     * @param xPublishableApiKey Publishable API Key created in the Medusa Admin.
     * @param fields Comma-separated fields that should be included in the returned data. if a field is prefixed with `+` it will be added to the default fields, using `-` will remove it from the default fields. without prefix it will replace the entire default fields.
     * @param requestBody
     * @returns StoreCustomerResponse OK
     * @throws ApiError
     */
    public static storePostCustomers(
        xPublishableApiKey: string,
        fields?: string,
        requestBody?: StoreCreateCustomer,
    ): CancelablePromise<StoreCustomerResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/store/customers',
            headers: {
                'x-publishable-api-key': xPublishableApiKey,
            },
            query: {
                'fields': fields,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Client Error`,
                401: `User is not authorized. Must log in first`,
                404: `Not Found Error`,
                409: `Invalid State Error`,
                422: `Invalid Request Error`,
                500: `Server Error`,
            },
        });
    }
    /**
     * Get Logged-in Customer
     * Retrieve the logged-in customer. You can expand the customer's relations or select the fields that should be returned.
     * @param xPublishableApiKey Publishable API Key created in the Medusa Admin.
     * @param fields Comma-separated fields that should be included in the returned data. if a field is prefixed with `+` it will be added to the default fields, using `-` will remove it from the default fields. without prefix it will replace the entire default fields. This API route restricts the fields that can be selected. Learn how to override the retrievable fields in the [Retrieve Custom Links](https://docs.medusajs.com/learn/fundamentals/api-routes/retrieve-custom-links) documentation.
     * @returns StoreCustomerResponse OK
     * @throws ApiError
     */
    public static storeGetCustomersMe(
        xPublishableApiKey: string,
        fields?: string,
    ): CancelablePromise<StoreCustomerResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/store/customers/me',
            headers: {
                'x-publishable-api-key': xPublishableApiKey,
            },
            query: {
                'fields': fields,
            },
            errors: {
                400: `Client Error`,
                401: `User is not authorized. Must log in first`,
                404: `Not Found Error`,
                409: `Invalid State Error`,
                422: `Invalid Request Error`,
                500: `Server Error`,
            },
        });
    }
    /**
     * Update Customer
     * Update the logged-in customer's details.
     * @param xPublishableApiKey Publishable API Key created in the Medusa Admin.
     * @param fields Comma-separated fields that should be included in the returned data. if a field is prefixed with `+` it will be added to the default fields, using `-` will remove it from the default fields. without prefix it will replace the entire default fields.
     * @param requestBody
     * @returns StoreCustomerResponse OK
     * @throws ApiError
     */
    public static storePostCustomersMe(
        xPublishableApiKey: string,
        fields?: string,
        requestBody?: StoreUpdateCustomer,
    ): CancelablePromise<StoreCustomerResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/store/customers/me',
            headers: {
                'x-publishable-api-key': xPublishableApiKey,
            },
            query: {
                'fields': fields,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Client Error`,
                401: `User is not authorized. Must log in first`,
                404: `Not Found Error`,
                409: `Invalid State Error`,
                422: `Invalid Request Error`,
                500: `Server Error`,
            },
        });
    }
    /**
     * List Customer's Addresses
     * Retrieve the addresses of the logged-in customer. The addresses can be filtered by fields such as `country_code`. The addresses can also be sorted or paginated.
     * @param xPublishableApiKey Publishable API Key created in the Medusa Admin.
     * @param fields Comma-separated fields that should be included in the returned data. if a field is prefixed with `+` it will be added to the default fields, using `-` will remove it from the default fields. without prefix it will replace the entire default fields. This API route restricts the fields that can be selected. Learn how to override the retrievable fields in the [Retrieve Custom Links](https://docs.medusajs.com/learn/fundamentals/api-routes/retrieve-custom-links) documentation.
     * @param offset The number of items to skip when retrieving a list.
     * @param limit Limit the number of items returned in the list.
     * @param order The field to sort the data by. By default, the sort order is ascending. To change the order to descending, prefix the field name with `-`.
     * @param city Filter by the address's city.
     * @param postalCode Filter by the address's postal code.
     * @param countryCode Filter by the address's country code.
     * @param q Search term to filter the address's searchable properties.
     * @param withDeleted Whether to include deleted records in the result.
     * @returns StoreCustomerAddressListResponse OK
     * @throws ApiError
     */
    public static storeGetCustomersMeAddresses(
        xPublishableApiKey: string,
        fields?: string,
        offset?: number,
        limit?: number,
        order?: string,
        city?: (string | Array<string>),
        postalCode?: (string | Array<string>),
        countryCode?: (string | Array<string>),
        q?: string,
        withDeleted?: boolean,
    ): CancelablePromise<StoreCustomerAddressListResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/store/customers/me/addresses',
            headers: {
                'x-publishable-api-key': xPublishableApiKey,
            },
            query: {
                'fields': fields,
                'offset': offset,
                'limit': limit,
                'order': order,
                'city': city,
                'postal_code': postalCode,
                'country_code': countryCode,
                'q': q,
                'with_deleted': withDeleted,
            },
            errors: {
                400: `Client Error`,
                401: `User is not authorized. Must log in first`,
                404: `Not Found Error`,
                409: `Invalid State Error`,
                422: `Invalid Request Error`,
                500: `Server Error`,
            },
        });
    }
    /**
     * Create Address for Logged-In Customer
     * Create an address for the logged-in customer.
     * @param xPublishableApiKey Publishable API Key created in the Medusa Admin.
     * @param fields Comma-separated fields that should be included in the returned data. if a field is prefixed with `+` it will be added to the default fields, using `-` will remove it from the default fields. without prefix it will replace the entire default fields. This API route restricts the fields that can be selected. Learn how to override the retrievable fields in the [Retrieve Custom Links](https://docs.medusajs.com/learn/fundamentals/api-routes/retrieve-custom-links) documentation.
     * @param requestBody
     * @returns StoreCustomerResponse OK
     * @throws ApiError
     */
    public static storePostCustomersMeAddresses(
        xPublishableApiKey: string,
        fields?: string,
        requestBody?: StoreCreateCustomerAddress,
    ): CancelablePromise<StoreCustomerResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/store/customers/me/addresses',
            headers: {
                'x-publishable-api-key': xPublishableApiKey,
            },
            query: {
                'fields': fields,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Client Error`,
                401: `User is not authorized. Must log in first`,
                404: `Not Found Error`,
                409: `Invalid State Error`,
                422: `Invalid Request Error`,
                500: `Server Error`,
            },
        });
    }
    /**
     * Get Customer's Address
     * Retrieve an address of the logged-in customer. You can expand the address's relations or select the fields that should be returned.
     * @param addressId The address's ID.
     * @param xPublishableApiKey Publishable API Key created in the Medusa Admin.
     * @param fields Comma-separated fields that should be included in the returned data. if a field is prefixed with `+` it will be added to the default fields, using `-` will remove it from the default fields. without prefix it will replace the entire default fields. This API route restricts the fields that can be selected. Learn how to override the retrievable fields in the [Retrieve Custom Links](https://docs.medusajs.com/learn/fundamentals/api-routes/retrieve-custom-links) documentation.
     * @returns StoreCustomerAddressResponse OK
     * @throws ApiError
     */
    public static storeGetCustomersMeAddressesAddressId(
        addressId: string,
        xPublishableApiKey: string,
        fields?: string,
    ): CancelablePromise<StoreCustomerAddressResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/store/customers/me/addresses/{address_id}',
            path: {
                'address_id': addressId,
            },
            headers: {
                'x-publishable-api-key': xPublishableApiKey,
            },
            query: {
                'fields': fields,
            },
            errors: {
                400: `Client Error`,
                401: `User is not authorized. Must log in first`,
                404: `Not Found Error`,
                409: `Invalid State Error`,
                422: `Invalid Request Error`,
                500: `Server Error`,
            },
        });
    }
    /**
     * Update Customer's Address
     * Update the logged-in customer's address.
     * @param addressId The address's ID.
     * @param xPublishableApiKey Publishable API Key created in the Medusa Admin.
     * @param fields Comma-separated fields that should be included in the returned data. if a field is prefixed with `+` it will be added to the default fields, using `-` will remove it from the default fields. without prefix it will replace the entire default fields. This API route restricts the fields that can be selected. Learn how to override the retrievable fields in the [Retrieve Custom Links](https://docs.medusajs.com/learn/fundamentals/api-routes/retrieve-custom-links) documentation.
     * @param requestBody
     * @returns StoreCustomerResponse OK
     * @throws ApiError
     */
    public static storePostCustomersMeAddressesAddressId(
        addressId: string,
        xPublishableApiKey: string,
        fields?: string,
        requestBody?: StoreUpdateCustomerAddress,
    ): CancelablePromise<StoreCustomerResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/store/customers/me/addresses/{address_id}',
            path: {
                'address_id': addressId,
            },
            headers: {
                'x-publishable-api-key': xPublishableApiKey,
            },
            query: {
                'fields': fields,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Client Error`,
                401: `User is not authorized. Must log in first`,
                404: `Not Found Error`,
                409: `Invalid State Error`,
                422: `Invalid Request Error`,
                500: `Server Error`,
            },
        });
    }
    /**
     * Remove Customer's Address
     * Remove an address of the logged-in customer.
     * @param addressId The address's ID.
     * @param xPublishableApiKey Publishable API Key created in the Medusa Admin.
     * @param fields Comma-separated fields that should be included in the returned data. if a field is prefixed with `+` it will be added to the default fields, using `-` will remove it from the default fields. without prefix it will replace the entire default fields. This API route restricts the fields that can be selected. Learn how to override the retrievable fields in the [Retrieve Custom Links](https://docs.medusajs.com/learn/fundamentals/api-routes/retrieve-custom-links) documentation.
     * @returns any OK
     * @throws ApiError
     */
    public static storeDeleteCustomersMeAddressesAddressId(
        addressId: string,
        xPublishableApiKey: string,
        fields?: string,
    ): CancelablePromise<({
        /**
         * The address's ID.
         */
        id: string;
        /**
         * The name of the deleted object.
         */
        object: string;
        /**
         * Whether the address was deleted.
         */
        deleted: boolean;
    } & {
        /**
         * The details of the customer the address belongs to.
         */
        parent?: StoreCustomer;
    })> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/store/customers/me/addresses/{address_id}',
            path: {
                'address_id': addressId,
            },
            headers: {
                'x-publishable-api-key': xPublishableApiKey,
            },
            query: {
                'fields': fields,
            },
            errors: {
                400: `Client Error`,
                401: `User is not authorized. Must log in first`,
                404: `Not Found Error`,
                409: `Invalid State Error`,
                422: `Invalid Request Error`,
                500: `Server Error`,
            },
        });
    }
}
