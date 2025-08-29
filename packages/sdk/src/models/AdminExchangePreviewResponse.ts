/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AdminExchange } from './AdminExchange';
import type { AdminOrderPreview } from './AdminOrderPreview';
/**
 * A preview of the order once the exchange is applied.
 */
export type AdminExchangePreviewResponse = {
    order_preview: AdminOrderPreview;
    exchange: AdminExchange;
};

