/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AdminOrderPreview } from './AdminOrderPreview';
import type { AdminReturn } from './AdminReturn';
/**
 * The details of a return and a preview of the order once the return is applied.
 */
export type AdminReturnPreviewResponse = {
    order_preview: AdminOrderPreview;
    return: AdminReturn;
};

