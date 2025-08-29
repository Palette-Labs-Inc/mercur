/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AdminCreateRefundReason } from '../models/AdminCreateRefundReason';
import type { AdminRefundReason } from '../models/AdminRefundReason';
import type { AdminUpdatePaymentRefundReason } from '../models/AdminUpdatePaymentRefundReason';
import type { RefundReasonResponse } from '../models/RefundReasonResponse';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class AdminRefundReasonsService {
    /**
     * List Refund Reasons
     * Retrieve a list of refund reasons. The refund reasons can be filtered by fields such as `id`. The refund reasons can also be sorted or paginated.
     * @param fields Comma-separated fields that should be included in the returned data. if a field is prefixed with `+` it will be added to the default fields, using `-` will remove it from the default fields. without prefix it will replace the entire default fields.
     * @param offset The number of items to skip when retrieving a list.
     * @param limit Limit the number of items returned in the list.
     * @param order The field to sort the data by. By default, the sort order is ascending. To change the order to descending, prefix the field name with `-`.
     * @param id
     * @param q Search term to filter the refund reason's searchable properties.
     * @param and Join query parameters with an AND condition. Each object's content is the same type as the expected query parameters.
     * @param or Join query parameters with an OR condition. Each object's content is the same type as the expected query parameters.
     * @param withDeleted Whether to include deleted records in the result.
     * @returns any OK
     * @throws ApiError
     */
    public static adminGetRefundReasons(
        fields?: string,
        offset?: number,
        limit?: number,
        order?: string,
        id?: (string | Array<string>),
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
         * The refund reason's refund reasons.
         */
        refund_reasons: Array<AdminRefundReason>;
    })> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/admin/refund-reasons',
            query: {
                'fields': fields,
                'offset': offset,
                'limit': limit,
                'order': order,
                'id': id,
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
     * Create Refund Reason
     * Create a refund reason.
     * @param fields Comma-separated fields that should be included in the returned data. if a field is prefixed with `+` it will be added to the default fields, using `-` will remove it from the default fields. without prefix it will replace the entire default fields.
     * @param requestBody
     * @returns RefundReasonResponse OK
     * @throws ApiError
     */
    public static adminPostRefundReasons(
        fields?: string,
        requestBody?: AdminCreateRefundReason,
    ): CancelablePromise<RefundReasonResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/admin/refund-reasons',
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
     * Get a Refund Reason
     * Retrieve a refund reason by its ID. You can expand the refund reason's relations or select the fields that should be returned.
     * @param id The refund reason's ID.
     * @param fields Comma-separated fields that should be included in the returned data. if a field is prefixed with `+` it will be added to the default fields, using `-` will remove it from the default fields. without prefix it will replace the entire default fields.
     * @returns RefundReasonResponse OK
     * @throws ApiError
     */
    public static adminGetRefundReasonsId(
        id: string,
        fields?: string,
    ): CancelablePromise<RefundReasonResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/admin/refund-reasons/{id}',
            path: {
                'id': id,
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
     * Update a Refund Reason
     * Update a refund reason's details.
     * @param id The refund reason's ID.
     * @param fields Comma-separated fields that should be included in the returned data. if a field is prefixed with `+` it will be added to the default fields, using `-` will remove it from the default fields. without prefix it will replace the entire default fields.
     * @param requestBody
     * @returns RefundReasonResponse OK
     * @throws ApiError
     */
    public static adminPostRefundReasonsId(
        id: string,
        fields?: string,
        requestBody?: AdminUpdatePaymentRefundReason,
    ): CancelablePromise<RefundReasonResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/admin/refund-reasons/{id}',
            path: {
                'id': id,
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
     * Delete a Refund Reason
     * Delete a refund reason.
     * @param id The refund reason's ID.
     * @returns any OK
     * @throws ApiError
     */
    public static adminDeleteRefundReasonsId(
        id: string,
    ): CancelablePromise<{
        /**
         * The refund reason's ID.
         */
        id: string;
        /**
         * The name of the deleted object.
         */
        object: string;
        /**
         * Whether the refund reason was deleted.
         */
        deleted: boolean;
    }> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/admin/refund-reasons/{id}',
            path: {
                'id': id,
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
