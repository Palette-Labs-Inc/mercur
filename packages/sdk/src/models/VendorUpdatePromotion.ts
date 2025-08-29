/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { VendorUpdateApplicationMethod } from './VendorUpdateApplicationMethod';
export type VendorUpdatePromotion = {
    /**
     * The code of the promotion.
     */
    code?: string;
    /**
     * Whether the promotion is applied automatically.
     */
    is_automatic?: boolean;
    /**
     * The campaign id.
     */
    campaign_id?: string;
    /**
     * The status of the promotion.
     */
    status?: 'draft' | 'active' | 'inactive';
    application_method?: VendorUpdateApplicationMethod;
};

