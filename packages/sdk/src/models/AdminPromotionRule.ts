/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BasePromotionRuleValue } from './BasePromotionRuleValue';
/**
 * The promotion rule's details.
 */
export type AdminPromotionRule = {
    /**
     * The promotion rule's ID.
     */
    id: string;
    /**
     * The promotion rule's description.
     */
    description?: string;
    /**
     * The promotion rule's attribute.
     */
    attribute?: string;
    /**
     * The rule's operator.
     */
    operator?: 'gt' | 'lt' | 'eq' | 'ne' | 'in' | 'lte' | 'gte';
    /**
     * The rule's values.
     */
    values: Array<BasePromotionRuleValue>;
};

