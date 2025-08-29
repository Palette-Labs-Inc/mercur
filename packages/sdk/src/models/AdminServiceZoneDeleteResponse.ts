/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AdminFulfillmentSet } from './AdminFulfillmentSet';
/**
 * The details of the service zone deletion.
 */
export type AdminServiceZoneDeleteResponse = {
    /**
     * The service zone's ID.
     */
    id: string;
    /**
     * The name of the deleted object.
     */
    object: string;
    /**
     * Whether the service zone was deleted.
     */
    deleted: boolean;
    parent?: AdminFulfillmentSet;
};

