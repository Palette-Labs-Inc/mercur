/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BaseRuleOperatorOptions } from './BaseRuleOperatorOptions';
/**
 * The details of a potential rule attribute.
 */
export type AdminRuleAttributeOption = {
    /**
     * The rule attribute's ID, which is a rule's `attribute` it refers to.
     */
    id: string;
    /**
     * The rule attribute's value.
     */
    value: string;
    /**
     * The rule attribute option's label.
     */
    label: string;
    /**
     * The attribute's operators.
     */
    operators: Array<BaseRuleOperatorOptions>;
};

