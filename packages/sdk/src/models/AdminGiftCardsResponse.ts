/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AdminGiftCard } from './AdminGiftCard';
/**
 * The paginated list of gift cards.
 */
export type AdminGiftCardsResponse = {
    /**
     * The maximum number of gift cards to return.
     */
    limit: number;
    /**
     * The number of gift cards to skip before retrieving the results.
     */
    offset: number;
    /**
     * The total number of gift cards available.
     */
    count: number;
    /**
     * The list of gift cards.
     */
    gift_cards: Array<AdminGiftCard>;
    /**
     * The gift card's estimate count.
     */
    estimate_count?: number;
};

