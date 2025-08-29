/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AdminCreateFulfillmentSetServiceZones } from '../models/AdminCreateFulfillmentSetServiceZones';
import type { AdminFulfillmentSetDeleteResponse } from '../models/AdminFulfillmentSetDeleteResponse';
import type { AdminFulfillmentSetResponse } from '../models/AdminFulfillmentSetResponse';
import type { AdminServiceZoneDeleteResponse } from '../models/AdminServiceZoneDeleteResponse';
import type { AdminServiceZoneResponse } from '../models/AdminServiceZoneResponse';
import type { AdminUpdateFulfillmentSetServiceZones } from '../models/AdminUpdateFulfillmentSetServiceZones';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class AdminFulfillmentSetsService {
    /**
     * Delete Fulfillment Set
     * Delete a fulfillment set.
     * @param id The fulfillment set's ID.
     * @returns AdminFulfillmentSetDeleteResponse OK
     * @throws ApiError
     */
    public static adminDeleteFulfillmentSetsId(
        id: string,
    ): CancelablePromise<AdminFulfillmentSetDeleteResponse> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/admin/fulfillment-sets/{id}',
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
    /**
     * Add a Service Zone to a Fulfillment Set
     * Add a service zone to a fulfillment set.
     * @param id The fulfillment set's ID.
     * @param fields Comma-separated fields that should be included in the returned data. if a field is prefixed with `+` it will be added to the default fields, using `-` will remove it from the default fields. without prefix it will replace the entire default fields.
     * @param requestBody
     * @returns AdminFulfillmentSetResponse OK
     * @throws ApiError
     */
    public static adminPostFulfillmentSetsIdServiceZones(
        id: string,
        fields?: string,
        requestBody?: AdminCreateFulfillmentSetServiceZones,
    ): CancelablePromise<AdminFulfillmentSetResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/admin/fulfillment-sets/{id}/service-zones',
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
     * Get a Service Zone in a Fulfillment Set
     * Retrieve a service zone that belongs to a fulfillment set. be paginated.
     * @param id The fulfillment set's ID.
     * @param zoneId The service zone's ID.
     * @param fields Comma-separated fields that should be included in the returned data. if a field is prefixed with `+` it will be added to the default fields, using `-` will remove it from the default fields. without prefix it will replace the entire default fields.
     * @returns AdminServiceZoneResponse OK
     * @throws ApiError
     */
    public static adminGetFulfillmentSetsIdServiceZonesZoneId(
        id: string,
        zoneId: string,
        fields?: string,
    ): CancelablePromise<AdminServiceZoneResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/admin/fulfillment-sets/{id}/service-zones/{zone_id}',
            path: {
                'id': id,
                'zone_id': zoneId,
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
     * Update the Service Zone of a Fulfillment Set
     * Update the details of a service zone in a fulfillment set.
     * @param id The fulfillment set's ID.
     * @param zoneId The service zone's ID.
     * @param fields Comma-separated fields that should be included in the returned data. if a field is prefixed with `+` it will be added to the default fields, using `-` will remove it from the default fields. without prefix it will replace the entire default fields.
     * @param requestBody
     * @returns AdminFulfillmentSetResponse OK
     * @throws ApiError
     */
    public static adminPostFulfillmentSetsIdServiceZonesZoneId(
        id: string,
        zoneId: string,
        fields?: string,
        requestBody?: AdminUpdateFulfillmentSetServiceZones,
    ): CancelablePromise<AdminFulfillmentSetResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/admin/fulfillment-sets/{id}/service-zones/{zone_id}',
            path: {
                'id': id,
                'zone_id': zoneId,
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
     * Remove a Service Zone from Fulfillment Set
     * Remove a service zone that belongs to a fulfillment set.
     * @param id The fulfillment set's ID.
     * @param zoneId The service zone's ID.
     * @returns AdminServiceZoneDeleteResponse OK
     * @throws ApiError
     */
    public static adminDeleteFulfillmentSetsIdServiceZonesZoneId(
        id: string,
        zoneId: string,
    ): CancelablePromise<AdminServiceZoneDeleteResponse> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/admin/fulfillment-sets/{id}/service-zones/{zone_id}',
            path: {
                'id': id,
                'zone_id': zoneId,
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
