/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AdminExchange } from './AdminExchange';
import type { AdminOrderPreview } from './AdminOrderPreview';
import type { AdminReturn } from './AdminReturn';
/**
 * The details of a requested exchange.
 */
export type AdminExchangeRequestResponse = {
    return: AdminReturn;
    order_preview: AdminOrderPreview;
    exchange: AdminExchange;
};

