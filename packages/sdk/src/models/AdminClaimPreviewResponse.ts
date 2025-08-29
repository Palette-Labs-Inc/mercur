/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AdminClaim } from './AdminClaim';
import type { AdminOrderPreview } from './AdminOrderPreview';
/**
 * The details of the claim, as well as a preview of the order when the claim is applied.
 */
export type AdminClaimPreviewResponse = {
    order_preview: AdminOrderPreview;
    claim: AdminClaim;
};

