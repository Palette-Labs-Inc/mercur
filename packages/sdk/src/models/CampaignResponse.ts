/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * The campaign's details.
 */
export type CampaignResponse = {
    /**
     * The campaign's ID.
     */
    id: string;
    /**
     * The campaign's name.
     */
    name: string;
    /**
     * The campaign's description.
     */
    description: string;
    /**
     * The campaign's currency.
     */
    currency: string;
    /**
     * The campaign's campaign identifier.
     */
    campaign_identifier: string;
    /**
     * The campaign's starts at.
     */
    starts_at: string;
    /**
     * The campaign's ends at.
     */
    ends_at: string;
    /**
     * The campaign's budget.
     */
    budget: {
        /**
         * The budget's ID.
         */
        id: string;
        type: 'spend' | 'usage';
        /**
         * The budget's currency code.
         */
        currency_code: string;
        /**
         * The budget's limit.
         */
        limit: number;
        /**
         * The budget's used.
         */
        used: number;
    };
};

