/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * The campaign's details.
 */
export type AdminCampaign = {
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
     * The campaign's identifier.
     */
    campaign_identifier: string;
    /**
     * The date and time that the campaign starts.
     */
    starts_at: string;
    /**
     * The date and time that the campaign ends.
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
        /**
         * The budget's type. `spend` means the limit is set on the total amount discounted by the campaign's promotions; `usage` means the limit is set on the total number of times the campaign's promotions can be used.
         *
         */
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
         * How much of the budget has been used. If the limit is `spend`, this property holds the total amount discounted so far. If the limit is `usage`, it holds the number of times the campaign's promotions have been used so far.
         *
         */
        used: number;
    };
    /**
     * The date the campaign was created.
     */
    created_at: string;
    /**
     * The date the campaign was updated.
     */
    updated_at: string;
    /**
     * The date the campaign was deleted.
     */
    deleted_at: string;
};

