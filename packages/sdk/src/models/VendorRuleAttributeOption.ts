/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { VendorBaseRuleOperatorOptions } from './VendorBaseRuleOperatorOptions';
export type VendorRuleAttributeOption = {
    /**
     * The rule attribute's ID, which is a rule's `attribute` it refers to.
     */
    id?: string;
    /**
     * The rule value's value.
     */
    value?: string;
    /**
     * The rule value's label.
     */
    label?: string;
    /**
     * The attribute's operators.
     */
    operators?: any[];
    items?: VendorBaseRuleOperatorOptions;
};

