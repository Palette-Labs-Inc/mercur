/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type AdminCreateRule = {
    /**
     * The type of the rule
     */
    rule_type?: 'global_product_catalog' | 'require_product_approval' | 'product_request_enabled' | 'product_import_enabled';
    is_enabled?: boolean;
};

