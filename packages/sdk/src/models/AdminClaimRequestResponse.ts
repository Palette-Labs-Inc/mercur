/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AdminClaim } from './AdminClaim';
import type { AdminOrderPreview } from './AdminOrderPreview';
import type { AdminReturn } from './AdminReturn';
/**
 * The details of the claim, its return, and a preview of the order when the claim is applied.
 */
export type AdminClaimRequestResponse = {
    return: AdminReturn;
    order_preview: AdminOrderPreview;
    claim: AdminClaim;
};

