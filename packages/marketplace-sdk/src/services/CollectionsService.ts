/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { StoreCollection } from '../models/StoreCollection';
import type { StoreCollectionResponse } from '../models/StoreCollectionResponse';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class CollectionsService {
    /**
     * List Collections
     * Retrieve a list of collections. The collections can be filtered by fields such as `handle`. The collections can also be sorted or paginated.
     * @param xPublishableApiKey Publishable API Key created in the Medusa Admin.
     * @param fields Comma-separated fields that should be included in the returned data. if a field is prefixed with `+` it will be added to the default fields, using `-` will remove it from the default fields. without prefix it will replace the entire default fields.
     * @param offset The number of items to skip when retrieving a list.
     * @param limit Limit the number of items returned in the list.
     * @param order The field to sort the data by. By default, the sort order is ascending. To change the order to descending, prefix the field name with `-`.
     * @param title
     * @param createdAt Filter by the collection's creation date.
     * @param updatedAt Filter by the collection's update date.
     * @param handle
     * @param q Search term to filter the collection's searchable properties.
     * @param and Join query parameters with an AND condition. Each object's content is the same type as the expected query parameters.
     * @param or Join query parameters with an OR condition. Each object's content is the same type as the expected query parameters.
     * @param withDeleted Whether to include deleted records in the result.
     * @returns any OK
     * @throws ApiError
     */
    public static getCollections(
        xPublishableApiKey: string,
        fields?: string,
        offset?: number,
        limit?: number,
        order?: string,
        title?: (string | Array<string>),
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
            $not?: (string | {
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
                 * Filter by values not matching this parameter.
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
            } | Array<string>);
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
            $not?: (string | {
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
                 * Filter by values not matching this parameter.
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
            } | Array<string>);
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
        handle?: (string | Array<string>),
        q?: string,
        and?: Array<Record<string, any>>,
        or?: Array<Record<string, any>>,
        withDeleted?: boolean,
    ): CancelablePromise<({
        /**
         * The maximum number of items returned.
         */
        limit: number;
        /**
         * The number of items skipped before retrieving the returned items.
         */
        offset: number;
        /**
         * The total number of items.
         */
        count: number;
    } & {
        /**
         * The collection's collections.
         */
        collections: Array<StoreCollection>;
    })> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/store/collections',
            headers: {
                'x-publishable-api-key': xPublishableApiKey,
            },
            query: {
                'fields': fields,
                'offset': offset,
                'limit': limit,
                'order': order,
                'title': title,
                'created_at': createdAt,
                'updated_at': updatedAt,
                'handle': handle,
                'q': q,
                '$and': and,
                '$or': or,
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
     * Get a Collection
     * Retrieve a collection by its ID. You can expand the collection's relations or select the fields that should be returned.
     * @param id The collection's ID.
     * @param xPublishableApiKey Publishable API Key created in the Medusa Admin.
     * @param fields Comma-separated fields that should be included in the returned data. if a field is prefixed with `+` it will be added to the default fields, using `-` will remove it from the default fields. without prefix it will replace the entire default fields.
     * @returns StoreCollectionResponse OK
     * @throws ApiError
     */
    public static getCollectionsId(
        id: string,
        xPublishableApiKey: string,
        fields?: string,
    ): CancelablePromise<StoreCollectionResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/store/collections/{id}',
            path: {
                'id': id,
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
