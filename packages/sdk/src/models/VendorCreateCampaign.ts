/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { VendorCreateCampaignBudget } from './VendorCreateCampaignBudget';
export type VendorCreateCampaign = {
    /**
     * The campaign's name.
     */
    name?: string;
    /**
     * The campaign's identifier.
     */
    campaign_identifier?: string;
    /**
     * The campaign's description.
     */
    description?: string;
    /**
     * The date and time that the campaign starts.
     */
    starts_at?: string;
    /**
     * The date and time that the campaign ends.
     */
    ends_at?: string;
    budget?: VendorCreateCampaignBudget;
};

