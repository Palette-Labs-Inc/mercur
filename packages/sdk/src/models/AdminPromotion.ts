/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AdminApplicationMethod } from './AdminApplicationMethod';
import type { AdminCampaign } from './AdminCampaign';
import type { AdminPromotionRule } from './AdminPromotionRule';
/**
 * The promotion's details.
 */
export type AdminPromotion = {
    application_method?: AdminApplicationMethod;
    /**
     * The promotion's rules.
     */
    rules?: Array<AdminPromotionRule>;
    /**
     * The promotion's ID.
     */
    id: string;
    /**
     * The promotion's code.
     */
    code?: string;
    /**
     * The promotion's type.
     */
    type?: 'standard' | 'buyget';
    /**
     * Whether the promotion is applied on a cart automatically if it matches the promotion's rules.
     */
    is_automatic?: boolean;
    /**
     * The ID of the campaign this promotion belongs to.
     */
    campaign_id?: string;
    campaign?: AdminCampaign;
    /**
     * The date the promotion was created.
     */
    created_at: string;
    /**
     * The date the promotion was updated.
     */
    updated_at: string;
    /**
     * The date the promotion was deleted.
     */
    deleted_at: string;
    /**
     * The promotion's status.
     */
    status?: 'draft' | 'active' | 'inactive';
    /**
     * Whether the promotion is tax inclusive. If enabled, the promotion is applied after tax is calculated.
     */
    is_tax_inclusive?: boolean;
};

