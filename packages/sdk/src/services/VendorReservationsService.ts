/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { VendorCreateReservation } from '../models/VendorCreateReservation';
import type { VendorReservation } from '../models/VendorReservation';
import type { VendorUpdateReservation } from '../models/VendorUpdateReservation';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class VendorReservationsService {
    /**
     * List Reservations
     * Retrieves a list of reservations for the authenticated vendor.
     * @param offset The number of items to skip before starting to collect the result set.
     * @param limit The number of items to return.
     * @param fields Comma-separated fields to include in the response.
     * @returns any OK
     * @throws ApiError
     */
    public static vendorListReservations(
        offset?: number,
        limit?: number,
        fields?: string,
    ): CancelablePromise<{
        reservations?: Array<VendorReservation>;
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
            url: '/vendor/reservations',
            query: {
                'offset': offset,
                'limit': limit,
                'fields': fields,
            },
        });
    }
    /**
     * Create reservation
     * Creates new reservation
     * @param fields Comma-separated fields to include in the response.
     * @param requestBody
     * @returns any OK
     * @throws ApiError
     */
    public static vendorCreateReservation(
        fields?: string,
        requestBody?: VendorCreateReservation,
    ): CancelablePromise<{
        reservation?: VendorReservation;
    }> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/vendor/reservations',
            query: {
                'fields': fields,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Get reservation
     * Retrieves reservation by id for the authenticated vendor.
     * @param id The ID of the reservation.
     * @param fields Comma-separated fields to include in the response.
     * @returns any OK
     * @throws ApiError
     */
    public static vendorGetReservationById(
        id: string,
        fields?: string,
    ): CancelablePromise<{
        reservation?: VendorReservation;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/vendor/reservations/{id}',
            path: {
                'id': id,
            },
            query: {
                'fields': fields,
            },
        });
    }
    /**
     * Update reservation
     * Updates an existing reservation for the authenticated vendor.
     * @param id The ID of the Reservation.
     * @param fields Comma-separated fields to include in the response.
     * @param requestBody
     * @returns any OK
     * @throws ApiError
     */
    public static vendorUpdateReservationById(
        id: string,
        fields?: string,
        requestBody?: VendorUpdateReservation,
    ): CancelablePromise<{
        reservation?: VendorReservation;
    }> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/vendor/reservations/{id}',
            path: {
                'id': id,
            },
            query: {
                'fields': fields,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Delete reservation
     * Deletes reservation by id for the authenticated vendor.
     * @param id The ID of the reservation.
     * @returns any OK
     * @throws ApiError
     */
    public static vendorDeleteReservationById(
        id: string,
    ): CancelablePromise<{
        /**
         * The ID of the deleted reservation
         */
        id?: string;
        /**
         * The type of the object that was deleted
         */
        object?: string;
        /**
         * Whether or not the items were deleted
         */
        deleted?: boolean;
    }> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/vendor/reservations/{id}',
            path: {
                'id': id,
            },
        });
    }
}
