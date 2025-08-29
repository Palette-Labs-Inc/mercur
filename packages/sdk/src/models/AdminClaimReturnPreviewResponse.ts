/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AdminOrderPreview } from './AdminOrderPreview';
import type { AdminReturn } from './AdminReturn';
/**
 * The details of the claim's return, with a preview of the order when the claim's return is applied.
 */
export type AdminClaimReturnPreviewResponse = {
    order_preview: AdminOrderPreview;
    return: AdminReturn;
};

