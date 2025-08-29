/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { VendorCreateServiceZone } from '../models/VendorCreateServiceZone';
import type { VendorFulfillmentSet } from '../models/VendorFulfillmentSet';
import type { VendorUpdateServiceZone } from '../models/VendorUpdateServiceZone';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class VendorFulfillmentSetsService {
    /**
     * Delete a Fulfillment Set
     * Deletes a Fulfillment Set.
     * @param id The ID of the Fulfillment Set.
     * @returns any OK
     * @throws ApiError
     */
    public static vendorDeleteFulfillmentSet(
        id: string,
    ): CancelablePromise<{
        /**
         * The ID of the deleted Fulfillment Set.
         */
        id?: string;
        /**
         * The type of the object that was deleted.
         */
        object?: string;
        /**
         * Whether or not the items were deleted.
         */
        deleted?: boolean;
    }> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/vendor/fulfillment-sets/{id}',
            path: {
                'id': id,
            },
        });
    }
    /**
     * Create a Service Zone
     * Creates a Service Zone.
     * @param id The ID of the Fulfillment Set.
     * @param requestBody
     * @returns any OK
     * @throws ApiError
     */
    public static vendorCreateServiceZone(
        id: string,
        requestBody?: VendorCreateServiceZone,
    ): CancelablePromise<{
        fulfillment_set?: VendorFulfillmentSet;
    }> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/vendor/fulfillment-sets/{id}/service-zones',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Update a Service Zone
     * Updates a Service Zone.
     * @param id The ID of the Fulfillment Set.
     * @param zoneId The ID of the Service Zone.
     * @param requestBody
     * @returns any OK
     * @throws ApiError
     */
    public static vendorUpdateServiceZoneById(
        id: string,
        zoneId: string,
        requestBody?: VendorUpdateServiceZone,
    ): CancelablePromise<{
        fulfillment_set?: VendorFulfillmentSet;
    }> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/vendor/fulfillment-sets/{id}/service-zones/{zone_id}',
            path: {
                'id': id,
                'zone_id': zoneId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Delete a Service Zone
     * Deletes a Service Zone.
     * @param id The ID of the Fulfillment Set.
     * @param zoneId The ID of the Service Zone.
     * @returns any OK
     * @throws ApiError
     */
    public static vendorDeleteServiceZoneById(
        id: string,
        zoneId: string,
    ): CancelablePromise<{
        /**
         * The ID of the deleted Service Zone.
         */
        id?: string;
        /**
         * The type of the object that was deleted.
         */
        object?: string;
        /**
         * Whether or not the items were deleted.
         */
        deleted?: boolean;
    }> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/vendor/fulfillment-sets/{id}/service-zones/{zone_id}',
            path: {
                'id': id,
                'zone_id': zoneId,
            },
        });
    }
}
