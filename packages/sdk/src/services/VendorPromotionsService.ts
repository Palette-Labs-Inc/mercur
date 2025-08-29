/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { VendorBatchPromotionRule } from '../models/VendorBatchPromotionRule';
import type { VendorCreatePromotion } from '../models/VendorCreatePromotion';
import type { VendorPromotion } from '../models/VendorPromotion';
import type { VendorPromotionRule } from '../models/VendorPromotionRule';
import type { VendorRuleAttributeOption } from '../models/VendorRuleAttributeOption';
import type { VendorUpdatePromotion } from '../models/VendorUpdatePromotion';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class VendorPromotionsService {
    /**
     * List Promotions
     * Retrieves a list of promotions for the authenticated vendor.
     * @param offset The number of items to skip before starting to collect the result set.
     * @param limit The number of items to return.
     * @param fields Comma-separated fields to include in the response.
     * @returns any OK
     * @throws ApiError
     */
    public static vendorListPromotions(
        offset?: number,
        limit?: number,
        fields?: string,
    ): CancelablePromise<{
        promotions?: Array<VendorPromotion>;
        /**
         * The total number of items available
         */
        count?: number;
        /**
         * The number of items skipped before these items
         */
        offset?: number;
        /**
         * The number of items per page
         */
        limit?: number;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/vendor/promotions',
            query: {
                'offset': offset,
                'limit': limit,
                'fields': fields,
            },
        });
    }
    /**
     * Create promotion
     * Creates a new promotion for the authenticated vendor.
     * @param requestBody
     * @returns any Created
     * @throws ApiError
     */
    public static vendorCreatePromotion(
        requestBody?: VendorCreatePromotion,
    ): CancelablePromise<{
        promotion?: VendorPromotion;
    }> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/vendor/promotions',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * List Rule Attribute Options of a Rule Type
     * Retrieve a list of potential rule attributes for the promotion and application method types specified in the query parameters.
     * @param ruleType The rule type.
     * @param promotionType The promotion type to retrieve rules for.
     * @param applicationMethodType The application method type to retrieve rules for.
     * @returns any OK
     * @throws ApiError
     */
    public static vendorGetPromotionsRuleAttributeOptionsRule(
        ruleType: 'rules' | 'target-rules' | 'buy-rules',
        promotionType?: 'standard' | 'buyget',
        applicationMethodType?: 'fixed' | 'percentage',
    ): CancelablePromise<{
        /**
         * The list of attributes.
         */
        attributes?: Array<VendorRuleAttributeOption>;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/vendor/promotions/rule-attribute-options/{rule_type}',
            path: {
                'rule_type': ruleType,
            },
            query: {
                'promotion_type': promotionType,
                'application_method_type': applicationMethodType,
            },
        });
    }
    /**
     * Get promotion
     * Retrieves promotion by id for the authenticated vendor.
     * @param id The ID of the promotion.
     * @param fields Comma-separated fields to include in the response.
     * @returns any OK
     * @throws ApiError
     */
    public static vendorGetPromotionById(
        id: string,
        fields?: string,
    ): CancelablePromise<{
        promotion?: VendorPromotion;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/vendor/promotions/{id}',
            path: {
                'id': id,
            },
            query: {
                'fields': fields,
            },
        });
    }
    /**
     * Update promotion
     * Updates a new promotion for the authenticated vendor.
     * @param id The ID of the promotion.
     * @param requestBody
     * @returns any OK
     * @throws ApiError
     */
    public static vendorUpdatePromotion(
        id: string,
        requestBody?: VendorUpdatePromotion,
    ): CancelablePromise<{
        promotion?: VendorPromotion;
    }> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/vendor/promotions/{id}',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Delete promotion
     * Deletes promotion by id for the authenticated vendor.
     * @param id The ID of the promotion.
     * @returns any OK
     * @throws ApiError
     */
    public static vendorDeletePromotionById(
        id: string,
    ): CancelablePromise<{
        /**
         * The ID of the deleted promotion
         */
        id?: string;
        /**
         * The type of the object that was deleted
         */
        object?: string;
        /**
         * Whether or not the items were deleted
         */
        deleted?: boolean;
    }> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/vendor/promotions/{id}',
            path: {
                'id': id,
            },
        });
    }
    /**
     * Batch buy rules
     * Performs batch create/delete operation on buy-rules
     * @param id The ID of the promotion.
     * @param requestBody
     * @returns any Created
     * @throws ApiError
     */
    public static vendorBatchBuyRules(
        id: string,
        requestBody?: VendorBatchPromotionRule,
    ): CancelablePromise<{
        promotion?: VendorPromotion;
    }> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/vendor/promotions/{id}/buy-rules/batch',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Batch rules
     * Performs batch create/delete operation on rules
     * @param id The ID of the promotion.
     * @param requestBody
     * @returns any Created
     * @throws ApiError
     */
    public static vendorBatchRules(
        id: string,
        requestBody?: VendorBatchPromotionRule,
    ): CancelablePromise<{
        promotion?: VendorPromotion;
    }> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/vendor/promotions/{id}/rules/batch',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Batch target rules
     * Performs batch create/delete operation on target-rules
     * @param id The ID of the promotion.
     * @param requestBody
     * @returns any Created
     * @throws ApiError
     */
    public static vendorBatchTargetRules(
        id: string,
        requestBody?: VendorBatchPromotionRule,
    ): CancelablePromise<{
        promotion?: VendorPromotion;
    }> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/vendor/promotions/{id}/target-rules/batch',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * List Rules of a Promotion
     * Retrieve a list of rules in a promotion.
     * @param id The promotion's ID.
     * @param ruleType The type of rules to retrieve.
     * @param fields Comma-separated fields that should be included in the returned data. if a field is prefixed with `+` it will be added to the default fields, using `-` will remove it from the default fields. without prefix it will replace the entire default fields.
     * @returns any OK
     * @throws ApiError
     */
    public static vendorGetPromotionsIdRuleType(
        id: string,
        ruleType: 'rules' | 'target-rules' | 'buy-rules',
        fields?: string,
    ): CancelablePromise<{
        /**
         * The list of promotion rules.
         */
        rules?: Array<VendorPromotionRule>;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/vendor/promotions/{id}/{rule_type}',
            path: {
                'id': id,
                'rule_type': ruleType,
            },
            query: {
                'fields': fields,
            },
        });
    }
}
