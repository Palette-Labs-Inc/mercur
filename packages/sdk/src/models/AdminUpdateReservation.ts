/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * The properties to update in the reservation.
 */
export type AdminUpdateReservation = {
    /**
     * The ID of the associated location.
     */
    location_id?: string;
    /**
     * The reserved quantity.
     */
    quantity?: number;
    /**
     * The reservation's description.
     */
    description?: string;
    /**
     * The reservation's metadata. Can hold custom key-value pairs.
     */
    metadata?: Record<string, any>;
};

