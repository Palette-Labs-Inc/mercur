/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AdminCreateStoreCreditAccount } from '../models/AdminCreateStoreCreditAccount';
import type { AdminStoreCreditAccountResponse } from '../models/AdminStoreCreditAccountResponse';
import type { AdminStoreCreditAccountsResponse } from '../models/AdminStoreCreditAccountsResponse';
import type { AdminTransactionsResponse } from '../models/AdminTransactionsResponse';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class AdminStoreCreditAccountsService {
    /**
     * List Store Credit Accounts
     * Retrieve a list of store credit accounts. The store credit accounts can be filtered by fields such as `id`. The store credit accounts can also be sorted or paginated.
     * @param fields Comma-separated fields that should be included in the returned data.
     * if a field is prefixed with `+` it will be added to the default fields, using `-` will remove it from the default fields.
     * without prefix it will replace the entire default fields.
     * The fields and relations to retrieve separated by commas.
     *
     * Learn more in the [API reference](https://docs.medusajs.com/api/store#select-fields-and-relations).
     * @param id Filter by the store credit account's ID.
     * @param customerId Filter by customer ID(s) to retrieve their store credit accounts.
     * @param transactionGroupId Filter by the associated transaction group's ID.
     * @param currencyCode Filter by currency code(s) to retrieve store credit accounts in specific currencies.
     * @param createdAt Filter by a store credit account's creation date.
     * @param updatedAt Filter by a store credit account's update date.
     * @param and An array of filters to apply on the entity, where each item in the array is joined with an "and" condition.
     * @param or An array of filters to apply on the entity, where each item in the array is joined with an "or" condition.
     * @param limit Limit the number of items returned in the list.
     * @param offset The number of items to skip when retrieving a list.
     * @param order The field to sort the data by. By default, the sort order is ascending. To change the order to descending, prefix the field name with `-`.
     * @returns AdminStoreCreditAccountsResponse OK
     * @throws ApiError
     */
    public static adminGetStoreCreditAccounts(
        fields?: string,
        id?: (string | Array<string>),
        customerId?: (string | Array<string>),
        transactionGroupId?: (string | Array<string>),
        currencyCode?: (string | Array<string>),
        createdAt?: {
            /**
             * Join query parameters with an AND condition. Each object's content is the same type as the expected query parameters.
             */
            $and?: Array<Record<string, any>>;
            /**
             * Join query parameters with an OR condition. Each object's content is the same type as the expected query parameters.
             */
            $or?: Array<Record<string, any>>;
            $eq?: (string | Array<string>);
            /**
             * Filter by values not equal to this parameter.
             */
            $ne?: string;
            /**
             * Filter by values in this array.
             */
            $in?: Array<string>;
            /**
             * Filter by values not in this array.
             */
            $nin?: Array<string>;
            $not?: (string | Record<string, any> | Array<string>);
            /**
             * Filter by values greater than this parameter. Useful for numbers and dates only.
             */
            $gt?: string;
            /**
             * Filter by values greater than or equal to this parameter. Useful for numbers and dates only.
             */
            $gte?: string;
            /**
             * Filter by values less than this parameter. Useful for numbers and dates only.
             */
            $lt?: string;
            /**
             * Filter by values less than or equal to this parameter. Useful for numbers and dates only.
             */
            $lte?: string;
            /**
             * Apply a `like` filter. Useful for strings only.
             */
            $like?: string;
            /**
             * Apply a regex filter. Useful for strings only.
             */
            $re?: string;
            /**
             * Apply a case-insensitive `like` filter. Useful for strings only.
             */
            $ilike?: string;
            /**
             * Filter to apply on full-text properties.
             */
            $fulltext?: string;
            /**
             * Filter arrays that have overlapping values with this parameter.
             */
            $overlap?: Array<string>;
            /**
             * Filter arrays that contain some of the values of this parameter.
             */
            $contains?: Array<string>;
            /**
             * Filter arrays that contain all values of this parameter.
             */
            $contained?: Array<string>;
            /**
             * Filter by whether a value for this parameter exists (not `null`).
             */
            $exists?: boolean;
        },
        updatedAt?: {
            /**
             * Join query parameters with an AND condition. Each object's content is the same type as the expected query parameters.
             */
            $and?: Array<Record<string, any>>;
            /**
             * Join query parameters with an OR condition. Each object's content is the same type as the expected query parameters.
             */
            $or?: Array<Record<string, any>>;
            $eq?: (string | Array<string>);
            /**
             * Filter by values not equal to this parameter.
             */
            $ne?: string;
            /**
             * Filter by values in this array.
             */
            $in?: Array<string>;
            /**
             * Filter by values not in this array.
             */
            $nin?: Array<string>;
            $not?: (string | Record<string, any> | Array<string>);
            /**
             * Filter by values greater than this parameter. Useful for numbers and dates only.
             */
            $gt?: string;
            /**
             * Filter by values greater than or equal to this parameter. Useful for numbers and dates only.
             */
            $gte?: string;
            /**
             * Filter by values less than this parameter. Useful for numbers and dates only.
             */
            $lt?: string;
            /**
             * Filter by values less than or equal to this parameter. Useful for numbers and dates only.
             */
            $lte?: string;
            /**
             * Apply a `like` filter. Useful for strings only.
             */
            $like?: string;
            /**
             * Apply a regex filter. Useful for strings only.
             */
            $re?: string;
            /**
             * Apply a case-insensitive `like` filter. Useful for strings only.
             */
            $ilike?: string;
            /**
             * Filter to apply on full-text properties.
             */
            $fulltext?: string;
            /**
             * Filter arrays that have overlapping values with this parameter.
             */
            $overlap?: Array<string>;
            /**
             * Filter arrays that contain some of the values of this parameter.
             */
            $contains?: Array<string>;
            /**
             * Filter arrays that contain all values of this parameter.
             */
            $contained?: Array<string>;
            /**
             * Filter by whether a value for this parameter exists (not `null`).
             */
            $exists?: boolean;
        },
        and?: Array<Record<string, any>>,
        or?: Array<Record<string, any>>,
        limit?: number,
        offset?: number,
        order?: string,
    ): CancelablePromise<AdminStoreCreditAccountsResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/admin/store-credit-accounts',
            query: {
                'fields': fields,
                'id': id,
                'customer_id': customerId,
                'transaction_group_id': transactionGroupId,
                'currency_code': currencyCode,
                'created_at': createdAt,
                'updated_at': updatedAt,
                '$and': and,
                '$or': or,
                'limit': limit,
                'offset': offset,
                'order': order,
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
     * Create Store Credit Account
     * Create a store credit account.
     * @param fields Comma-separated fields that should be included in the returned data.
     * if a field is prefixed with `+` it will be added to the default fields, using `-` will remove it from the default fields.
     * without prefix it will replace the entire default fields.
     * @param requestBody
     * @returns AdminStoreCreditAccountResponse OK
     * @throws ApiError
     */
    public static adminPostStoreCreditAccounts(
        fields?: string,
        requestBody?: AdminCreateStoreCreditAccount,
    ): CancelablePromise<AdminStoreCreditAccountResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/admin/store-credit-accounts',
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
     * Get a Store Credit Account
     * Retrieve a store credit account by its ID. You can expand the store credit account's relations or select the fields that should be returned.
     * @param id The store credit account's ID.
     * @param fields Comma-separated fields that should be included in the returned data.
     * if a field is prefixed with `+` it will be added to the default fields, using `-` will remove it from the default fields.
     * without prefix it will replace the entire default fields.
     * The fields and relations to retrieve separated by commas.
     *
     * Learn more in the [API reference](https://docs.medusajs.com/api/store#select-fields-and-relations).
     * @param id Filter by the store credit account's ID.
     * @param customerId Filter by customer ID(s) to retrieve their store credit accounts.
     * @param transactionGroupId Filter by the associated transaction group's ID.
     * @param currencyCode Filter by currency code(s) to retrieve store credit accounts in specific currencies.
     * @param createdAt Filter by a store credit account's creation date.
     * @param updatedAt Filter by a store credit account's update date.
     * @param and An array of filters to apply on the entity, where each item in the array is joined with an "and" condition.
     * @param or An array of filters to apply on the entity, where each item in the array is joined with an "or" condition.
     * @param limit Limit the number of items returned in the list.
     * @param offset The number of items to skip when retrieving a list.
     * @param order The field to sort the data by. By default, the sort order is ascending. To change the order to descending, prefix the field name with `-`.
     * @returns AdminStoreCreditAccountResponse OK
     * @throws ApiError
     */
    public static adminGetStoreCreditAccountsId(
        id: string,
        fields?: string,
        id?: (string | Array<string>),
        customerId?: (string | Array<string>),
        transactionGroupId?: (string | Array<string>),
        currencyCode?: (string | Array<string>),
        createdAt?: {
            /**
             * Join query parameters with an AND condition. Each object's content is the same type as the expected query parameters.
             */
            $and?: Array<Record<string, any>>;
            /**
             * Join query parameters with an OR condition. Each object's content is the same type as the expected query parameters.
             */
            $or?: Array<Record<string, any>>;
            $eq?: (string | Array<string>);
            /**
             * Filter by values not equal to this parameter.
             */
            $ne?: string;
            /**
             * Filter by values in this array.
             */
            $in?: Array<string>;
            /**
             * Filter by values not in this array.
             */
            $nin?: Array<string>;
            $not?: (string | Record<string, any> | Array<string>);
            /**
             * Filter by values greater than this parameter. Useful for numbers and dates only.
             */
            $gt?: string;
            /**
             * Filter by values greater than or equal to this parameter. Useful for numbers and dates only.
             */
            $gte?: string;
            /**
             * Filter by values less than this parameter. Useful for numbers and dates only.
             */
            $lt?: string;
            /**
             * Filter by values less than or equal to this parameter. Useful for numbers and dates only.
             */
            $lte?: string;
            /**
             * Apply a `like` filter. Useful for strings only.
             */
            $like?: string;
            /**
             * Apply a regex filter. Useful for strings only.
             */
            $re?: string;
            /**
             * Apply a case-insensitive `like` filter. Useful for strings only.
             */
            $ilike?: string;
            /**
             * Filter to apply on full-text properties.
             */
            $fulltext?: string;
            /**
             * Filter arrays that have overlapping values with this parameter.
             */
            $overlap?: Array<string>;
            /**
             * Filter arrays that contain some of the values of this parameter.
             */
            $contains?: Array<string>;
            /**
             * Filter arrays that contain all values of this parameter.
             */
            $contained?: Array<string>;
            /**
             * Filter by whether a value for this parameter exists (not `null`).
             */
            $exists?: boolean;
        },
        updatedAt?: {
            /**
             * Join query parameters with an AND condition. Each object's content is the same type as the expected query parameters.
             */
            $and?: Array<Record<string, any>>;
            /**
             * Join query parameters with an OR condition. Each object's content is the same type as the expected query parameters.
             */
            $or?: Array<Record<string, any>>;
            $eq?: (string | Array<string>);
            /**
             * Filter by values not equal to this parameter.
             */
            $ne?: string;
            /**
             * Filter by values in this array.
             */
            $in?: Array<string>;
            /**
             * Filter by values not in this array.
             */
            $nin?: Array<string>;
            $not?: (string | Record<string, any> | Array<string>);
            /**
             * Filter by values greater than this parameter. Useful for numbers and dates only.
             */
            $gt?: string;
            /**
             * Filter by values greater than or equal to this parameter. Useful for numbers and dates only.
             */
            $gte?: string;
            /**
             * Filter by values less than this parameter. Useful for numbers and dates only.
             */
            $lt?: string;
            /**
             * Filter by values less than or equal to this parameter. Useful for numbers and dates only.
             */
            $lte?: string;
            /**
             * Apply a `like` filter. Useful for strings only.
             */
            $like?: string;
            /**
             * Apply a regex filter. Useful for strings only.
             */
            $re?: string;
            /**
             * Apply a case-insensitive `like` filter. Useful for strings only.
             */
            $ilike?: string;
            /**
             * Filter to apply on full-text properties.
             */
            $fulltext?: string;
            /**
             * Filter arrays that have overlapping values with this parameter.
             */
            $overlap?: Array<string>;
            /**
             * Filter arrays that contain some of the values of this parameter.
             */
            $contains?: Array<string>;
            /**
             * Filter arrays that contain all values of this parameter.
             */
            $contained?: Array<string>;
            /**
             * Filter by whether a value for this parameter exists (not `null`).
             */
            $exists?: boolean;
        },
        and?: Array<Record<string, any>>,
        or?: Array<Record<string, any>>,
        limit?: number,
        offset?: number,
        order?: string,
    ): CancelablePromise<AdminStoreCreditAccountResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/admin/store-credit-accounts/{id}',
            path: {
                'id': id,
            },
            query: {
                'fields': fields,
                'id': id,
                'customer_id': customerId,
                'transaction_group_id': transactionGroupId,
                'currency_code': currencyCode,
                'created_at': createdAt,
                'updated_at': updatedAt,
                '$and': and,
                '$or': or,
                'limit': limit,
                'offset': offset,
                'order': order,
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
     * List Transactions
     * Retrieve a list of transactions in a store credit account. The transactions can be filtered by fields like FILTER FIELDS. The transactions can also be paginated.
     * @param id The store credit account's ID.
     * @param id
     * @param transactionGroupId
     * @param createdAt Filter by a transaction's creation date.
     * @param updatedAt Filter by a transaction's update date.
     * @param limit Limit the number of items returned in the list.
     * @param offset The number of items to skip when retrieving a list.
     * @param order The field to sort the data by. By default, the sort order is ascending. To change the order to descending, prefix the field name with `-`.
     * @param fields Comma-separated fields that should be included in the returned data. If a field is prefixed with `+` it will be added to the default fields, using `-` will remove it from the default fields. Without prefix it will replace the entire default fields.
     * @param and Join query parameters with an AND condition. Each object's content is the same type as the expected query parameters.
     * @param or Join query parameters with an OR condition. Each object's content is the same type as the expected query parameters.
     * @param q Search query to filter the transactions by their searchable fields.
     * @returns AdminTransactionsResponse OK
     * @throws ApiError
     */
    public static adminGetStoreCreditAccountsIdTransactions(
        id: string,
        id?: (string | Array<string>),
        transactionGroupId?: (string | Array<string>),
        createdAt?: {
            /**
             * Join query parameters with an AND condition. Each object's content is the same type as the expected query parameters.
             */
            $and?: Array<Record<string, any>>;
            /**
             * Join query parameters with an OR condition. Each object's content is the same type as the expected query parameters.
             */
            $or?: Array<Record<string, any>>;
            $eq?: (string | Array<string>);
            /**
             * Filter by values not equal to this parameter.
             */
            $ne?: string;
            /**
             * Filter by values in this array.
             */
            $in?: Array<string>;
            /**
             * Filter by values not in this array.
             */
            $nin?: Array<string>;
            $not?: (string | Record<string, any> | Array<string>);
            /**
             * Filter by values greater than this parameter. Useful for numbers and dates only.
             */
            $gt?: string;
            /**
             * Filter by values greater than or equal to this parameter. Useful for numbers and dates only.
             */
            $gte?: string;
            /**
             * Filter by values less than this parameter. Useful for numbers and dates only.
             */
            $lt?: string;
            /**
             * Filter by values less than or equal to this parameter. Useful for numbers and dates only.
             */
            $lte?: string;
            /**
             * Apply a `like` filter. Useful for strings only.
             */
            $like?: string;
            /**
             * Apply a regex filter. Useful for strings only.
             */
            $re?: string;
            /**
             * Apply a case-insensitive `like` filter. Useful for strings only.
             */
            $ilike?: string;
            /**
             * Filter to apply on full-text properties.
             */
            $fulltext?: string;
            /**
             * Filter arrays that have overlapping values with this parameter.
             */
            $overlap?: Array<string>;
            /**
             * Filter arrays that contain some of the values of this parameter.
             */
            $contains?: Array<string>;
            /**
             * Filter arrays that contain all values of this parameter.
             */
            $contained?: Array<string>;
            /**
             * Filter by whether a value for this parameter exists (not `null`).
             */
            $exists?: boolean;
        },
        updatedAt?: {
            /**
             * Join query parameters with an AND condition. Each object's content is the same type as the expected query parameters.
             */
            $and?: Array<Record<string, any>>;
            /**
             * Join query parameters with an OR condition. Each object's content is the same type as the expected query parameters.
             */
            $or?: Array<Record<string, any>>;
            $eq?: (string | Array<string>);
            /**
             * Filter by values not equal to this parameter.
             */
            $ne?: string;
            /**
             * Filter by values in this array.
             */
            $in?: Array<string>;
            /**
             * Filter by values not in this array.
             */
            $nin?: Array<string>;
            $not?: (string | Record<string, any> | Array<string>);
            /**
             * Filter by values greater than this parameter. Useful for numbers and dates only.
             */
            $gt?: string;
            /**
             * Filter by values greater than or equal to this parameter. Useful for numbers and dates only.
             */
            $gte?: string;
            /**
             * Filter by values less than this parameter. Useful for numbers and dates only.
             */
            $lt?: string;
            /**
             * Filter by values less than or equal to this parameter. Useful for numbers and dates only.
             */
            $lte?: string;
            /**
             * Apply a `like` filter. Useful for strings only.
             */
            $like?: string;
            /**
             * Apply a regex filter. Useful for strings only.
             */
            $re?: string;
            /**
             * Apply a case-insensitive `like` filter. Useful for strings only.
             */
            $ilike?: string;
            /**
             * Filter to apply on full-text properties.
             */
            $fulltext?: string;
            /**
             * Filter arrays that have overlapping values with this parameter.
             */
            $overlap?: Array<string>;
            /**
             * Filter arrays that contain some of the values of this parameter.
             */
            $contains?: Array<string>;
            /**
             * Filter arrays that contain all values of this parameter.
             */
            $contained?: Array<string>;
            /**
             * Filter by whether a value for this parameter exists (not `null`).
             */
            $exists?: boolean;
        },
        limit?: number,
        offset?: number,
        order?: string,
        fields?: string,
        and?: Array<Record<string, any>>,
        or?: Array<Record<string, any>>,
        q?: string,
    ): CancelablePromise<AdminTransactionsResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/admin/store-credit-accounts/{id}/transactions',
            path: {
                'id': id,
            },
            query: {
                'id': id,
                'transaction_group_id': transactionGroupId,
                'created_at': createdAt,
                'updated_at': updatedAt,
                'limit': limit,
                'offset': offset,
                'order': order,
                'fields': fields,
                '$and': and,
                '$or': or,
                'q': q,
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
