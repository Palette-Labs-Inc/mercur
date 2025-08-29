/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AdminCurrency } from './AdminCurrency';
/**
 * The details of a store's currency.
 */
export type AdminStoreCurrency = {
    /**
     * The currency's ID.
     */
    id: string;
    /**
     * The currency's code.
     */
    currency_code: string;
    /**
     * The ID of the store this currency belongs to.
     */
    store_id: string;
    /**
     * Whether this currency is the default in the store.
     */
    is_default: boolean;
    currency: AdminCurrency;
    /**
     * The date the currency was created.
     */
    created_at: string;
    /**
     * The date the currency was updated.
     */
    updated_at: string;
    /**
     * The date the currency was deleted.
     */
    deleted_at: string;
};

