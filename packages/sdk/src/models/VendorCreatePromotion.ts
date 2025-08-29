/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { VendorCreateApplicationMethod } from './VendorCreateApplicationMethod';
import type { VendorCreateCampaign } from './VendorCreateCampaign';
import type { VendorCreatePromotionRule } from './VendorCreatePromotionRule';
export type VendorCreatePromotion = {
    /**
     * The code of the promotion.
     */
    code?: string;
    /**
     * Whether the promotion is applied automatically.
     */
    is_automatic?: boolean;
    /**
     * The status of the promotion.
     */
    status?: 'draft' | 'active' | 'inactive';
    /**
     * The campaign id.
     */
    campaign_id?: string;
    campaign?: VendorCreateCampaign;
    /**
     * The type of the promotion.
     */
    type?: 'standard';
    application_method?: VendorCreateApplicationMethod;
    /**
     * Promotion rules.
     */
    rules?: Array<VendorCreatePromotionRule>;
};

