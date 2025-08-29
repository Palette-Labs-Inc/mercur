/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AdminCreatePromotionRule } from '../models/AdminCreatePromotionRule';
import type { AdminPromotion } from '../models/AdminPromotion';
import type { AdminPromotionResponse } from '../models/AdminPromotionResponse';
import type { AdminPromotionRule } from '../models/AdminPromotionRule';
import type { AdminRuleAttributeOption } from '../models/AdminRuleAttributeOption';
import type { AdminRuleValueOption } from '../models/AdminRuleValueOption';
import type { AdminUpdatePromotionRule } from '../models/AdminUpdatePromotionRule';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class AdminPromotionsService {
    /**
     * List Promotions
     * Retrieve a list of promotions. The promotions can be filtered by fields such as `id`. The promotions can also be sorted or paginated.
     * @param fields Comma-separated fields that should be included in the returned data. if a field is prefixed with `+` it will be added to the default fields, using `-` will remove it from the default fields. without prefix it will replace the entire default fields.
     * @param offset The number of items to skip when retrieving a list.
     * @param limit Limit the number of items returned in the list.
     * @param order The field to sort the data by. By default, the sort order is ascending. To change the order to descending, prefix the field name with `-`.
     * @param q Search term to filter the promotion's searchable attributes.
     * @param code
     * @param campaignId
     * @param applicationMethod Apply filters on the application methods to retrieve the promotions of the matching application methods.
     * @param createdAt Filter by a promotion's creation date.
     * @param updatedAt Filter by a promotion's update date.
     * @param deletedAt Filter by a promotion's deletion date.
     * @param and
     * @param or
     * @param currencyCode
     * @param applicationMethodType
     * @param withDeleted Whether to include deleted records in the result.
     * @returns any OK
     * @throws ApiError
     */
    public static adminGetPromotions(
        fields?: string,
        offset?: number,
        limit?: number,
        order?: string,
        q?: string,
        code?: (string | Array<string>),
        campaignId?: (string | Array<string>),
        applicationMethod?: {
            currency_code?: (string | Array<string>);
        },
        createdAt?: {
            /**
             * Join query parameters with an AND condition. Each object's content is the same type as the expected query parameters.
             */
            $and?: Array<Record<string, any>>;
            /**
             * Join query parameters with an OR condition. Each object's content is the same type as the expected query parameters.
             */
            $or?: Array<Record<string, any>>;
            $eq?: (string | Array<string>);
            /**
             * Filter by values not equal to this parameter.
             */
            $ne?: string;
            /**
             * Filter by values in this array.
             */
            $in?: Array<string>;
            /**
             * Filter by values not in this array.
             */
            $nin?: Array<string>;
            $not?: (string | Record<string, any> | Array<string>);
            /**
             * Filter by values greater than this parameter. Useful for numbers and dates only.
             */
            $gt?: string;
            /**
             * Filter by values greater than or equal to this parameter. Useful for numbers and dates only.
             */
            $gte?: string;
            /**
             * Filter by values less than this parameter. Useful for numbers and dates only.
             */
            $lt?: string;
            /**
             * Filter by values less than or equal to this parameter. Useful for numbers and dates only.
             */
            $lte?: string;
            /**
             * Apply a `like` filter. Useful for strings only.
             */
            $like?: string;
            /**
             * Apply a regex filter. Useful for strings only.
             */
            $re?: string;
            /**
             * Apply a case-insensitive `like` filter. Useful for strings only.
             */
            $ilike?: string;
            /**
             * Filter to apply on full-text properties.
             */
            $fulltext?: string;
            /**
             * Filter arrays that have overlapping values with this parameter.
             */
            $overlap?: Array<string>;
            /**
             * Filter arrays that contain some of the values of this parameter.
             */
            $contains?: Array<string>;
            /**
             * Filter arrays that contain all values of this parameter.
             */
            $contained?: Array<string>;
            /**
             * Filter by whether a value for this parameter exists (not `null`).
             */
            $exists?: boolean;
        },
        updatedAt?: {
            /**
             * Join query parameters with an AND condition. Each object's content is the same type as the expected query parameters.
             */
            $and?: Array<Record<string, any>>;
            /**
             * Join query parameters with an OR condition. Each object's content is the same type as the expected query parameters.
             */
            $or?: Array<Record<string, any>>;
            $eq?: (string | Array<string>);
            /**
             * Filter by values not equal to this parameter.
             */
            $ne?: string;
            /**
             * Filter by values in this array.
             */
            $in?: Array<string>;
            /**
             * Filter by values not in this array.
             */
            $nin?: Array<string>;
            $not?: (string | Record<string, any> | Array<string>);
            /**
             * Filter by values greater than this parameter. Useful for numbers and dates only.
             */
            $gt?: string;
            /**
             * Filter by values greater than or equal to this parameter. Useful for numbers and dates only.
             */
            $gte?: string;
            /**
             * Filter by values less than this parameter. Useful for numbers and dates only.
             */
            $lt?: string;
            /**
             * Filter by values less than or equal to this parameter. Useful for numbers and dates only.
             */
            $lte?: string;
            /**
             * Apply a `like` filter. Useful for strings only.
             */
            $like?: string;
            /**
             * Apply a regex filter. Useful for strings only.
             */
            $re?: string;
            /**
             * Apply a case-insensitive `like` filter. Useful for strings only.
             */
            $ilike?: string;
            /**
             * Filter to apply on full-text properties.
             */
            $fulltext?: string;
            /**
             * Filter arrays that have overlapping values with this parameter.
             */
            $overlap?: Array<string>;
            /**
             * Filter arrays that contain some of the values of this parameter.
             */
            $contains?: Array<string>;
            /**
             * Filter arrays that contain all values of this parameter.
             */
            $contained?: Array<string>;
            /**
             * Filter by whether a value for this parameter exists (not `null`).
             */
            $exists?: boolean;
        },
        deletedAt?: {
            /**
             * Join query parameters with an AND condition. Each object's content is the same type as the expected query parameters.
             */
            $and?: Array<Record<string, any>>;
            /**
             * Join query parameters with an OR condition. Each object's content is the same type as the expected query parameters.
             */
            $or?: Array<Record<string, any>>;
            $eq?: (string | Array<string>);
            /**
             * Filter by values not equal to this parameter.
             */
            $ne?: string;
            /**
             * Filter by values in this array.
             */
            $in?: Array<string>;
            /**
             * Filter by values not in this array.
             */
            $nin?: Array<string>;
            $not?: (string | Record<string, any> | Array<string>);
            /**
             * Filter by values greater than this parameter. Useful for numbers and dates only.
             */
            $gt?: string;
            /**
             * Filter by values greater than or equal to this parameter. Useful for numbers and dates only.
             */
            $gte?: string;
            /**
             * Filter by values less than this parameter. Useful for numbers and dates only.
             */
            $lt?: string;
            /**
             * Filter by values less than or equal to this parameter. Useful for numbers and dates only.
             */
            $lte?: string;
            /**
             * Apply a `like` filter. Useful for strings only.
             */
            $like?: string;
            /**
             * Apply a regex filter. Useful for strings only.
             */
            $re?: string;
            /**
             * Apply a case-insensitive `like` filter. Useful for strings only.
             */
            $ilike?: string;
            /**
             * Filter to apply on full-text properties.
             */
            $fulltext?: string;
            /**
             * Filter arrays that have overlapping values with this parameter.
             */
            $overlap?: Array<string>;
            /**
             * Filter arrays that contain some of the values of this parameter.
             */
            $contains?: Array<string>;
            /**
             * Filter arrays that contain all values of this parameter.
             */
            $contained?: Array<string>;
            /**
             * Filter by whether a value for this parameter exists (not `null`).
             */
            $exists?: boolean;
        },
        and?: Array<Record<string, any>>,
        or?: Array<Record<string, any>>,
        currencyCode?: (string | Array<string>),
        applicationMethodType?: (string | Array<string>),
        withDeleted?: boolean,
    ): CancelablePromise<({
        /**
         * The maximum number of items returned.
         */
        limit: number;
        /**
         * The number of items skipped before retrieving the returned items.
         */
        offset: number;
        /**
         * The total number of items.
         */
        count: number;
    } & {
        /**
         * The list of promotions.
         */
        promotions: Array<AdminPromotion>;
    })> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/admin/promotions',
            query: {
                'fields': fields,
                'offset': offset,
                'limit': limit,
                'order': order,
                'q': q,
                'code': code,
                'campaign_id': campaignId,
                'application_method': applicationMethod,
                'created_at': createdAt,
                'updated_at': updatedAt,
                'deleted_at': deletedAt,
                '$and': and,
                '$or': or,
                'currency_code': currencyCode,
                'application_method_type': applicationMethodType,
                'with_deleted': withDeleted,
            },
            errors: {
                400: `Client Error`,
                401: `User is not authorized. Must log in first`,
                404: `Not Found Error`,
                409: `Invalid State Error`,
                422: `Invalid Request Error`,
                500: `Server Error`,
            },
        });
    }
    /**
     * Create Promotion
     * Create a promotion.
     * @param fields Comma-separated fields that should be included in the returned data. if a field is prefixed with `+` it will be added to the default fields, using `-` will remove it from the default fields. without prefix it will replace the entire default fields.
     * @param requestBody
     * @returns AdminPromotionResponse OK
     * @throws ApiError
     */
    public static adminPostPromotions(
        fields?: string,
        requestBody?: ({
            /**
             * The promotion's code.
             */
            code: string;
            /**
             * Whether the promotion is applied automatically.
             */
            is_automatic?: boolean;
            /**
             * The promotion's type.
             */
            type: 'standard' | 'buyget';
            /**
             * The ID of the campaign that the promotion belongs to.
             */
            campaign_id: string;
            /**
             * The details of a campaign to create and add the promotion to it.
             */
            campaign?: {
                /**
                 * The campaign's name.
                 */
                name: string;
                /**
                 * The campaign's identifier.
                 */
                campaign_identifier: string;
                /**
                 * The campaign's description.
                 */
                description: string;
                /**
                 * The campaign's budget which, when crossed, ends the campaign.
                 */
                budget: {
                    /**
                     * The budget's type. This can't be edited later. Use `spend` to set a limit on the total amount discounted by the campaign's promotions. Use `usage` to set a limit on the total number of times the campaign's promotions can be used.
                     *
                     */
                    type: 'spend' | 'usage';
                    /**
                     * The budget's limit.
                     */
                    limit: number;
                    /**
                     * The campaign budget's currency code. This can't be edited later.
                     */
                    currency_code: string;
                };
                /**
                 * The campaign's start date.
                 */
                starts_at: string;
                /**
                 * The campaign's end date.
                 */
                ends_at: string;
            };
            /**
             * The promotion's application method.
             */
            application_method: {
                /**
                 * The application method's description.
                 */
                description: string;
                /**
                 * The discounted amount applied by the associated promotion based on the `type`.
                 */
                value: number;
                /**
                 * The application method's currency code.
                 */
                currency_code: string;
                /**
                 * The max quantity allowed in the cart for the associated promotion to be applied.
                 */
                max_quantity: number;
                /**
                 * The type of the application method indicating how the associated promotion is applied.
                 */
                type: 'fixed' | 'percentage';
                /**
                 * The target type of the application method indicating whether the associated promotion is applied to the cart's items, shipping methods, or the whole order.
                 */
                target_type: 'order' | 'shipping_methods' | 'items';
                /**
                 * The allocation value that indicates whether the associated promotion is applied on each item in a cart or split between the items in the cart.
                 */
                allocation?: 'each' | 'across';
                /**
                 * The application method's target rules.
                 */
                target_rules?: Array<{
                    /**
                     * The operator used to check whether the target rule applies on a cart. For example, `eq` means that the cart's value for the specified attribute must match the specified value.
                     */
                    operator: 'gte' | 'lte' | 'gt' | 'lt' | 'eq' | 'ne' | 'in';
                    /**
                     * The target rule's description.
                     */
                    description: string;
                    /**
                     * The attribute to compare against when checking whether a promotion can be applied on a cart.
                     */
                    attribute: string;
                    values: (string | Array<string>);
                }>;
                /**
                 * The application method's buy rules.
                 */
                buy_rules?: Array<{
                    /**
                     * The operator used to check whether the buy rule applies on a cart. For example, `eq` means that the cart's value for the specified attribute must match the specified value.
                     */
                    operator: 'gte' | 'lte' | 'gt' | 'lt' | 'eq' | 'ne' | 'in';
                    /**
                     * The buy rule's description.
                     */
                    description: string;
                    /**
                     * The attribute to compare against when checking whether a promotion can be applied on a cart.
                     */
                    attribute: string;
                    values: (string | Array<string>);
                }>;
                /**
                 * The quantity that results from matching the `buyget` promotion's condition. For example, if the promotion is a "Buy 2 shirts get 1 free", the value f this attribute is `1`.
                 */
                apply_to_quantity: number;
                /**
                 * The minimum quantity required for a `buyget` promotion to be applied. For example, if the promotion is a "Buy 2 shirts get 1 free", the value of this attribute is `2`.
                 */
                buy_rules_min_quantity: number;
            };
            /**
             * The promotion's rules.
             */
            rules?: Array<{
                /**
                 * The operator used to check whether the buy rule applies on a cart. For example, `eq` means that the cart's value for the specified attribute must match the specified value.
                 */
                operator: 'gte' | 'lte' | 'gt' | 'lt' | 'eq' | 'ne' | 'in';
                /**
                 * The rule's description.
                 */
                description: string;
                /**
                 * The attribute to compare against when checking whether a promotion can be applied on a cart.
                 */
                attribute: string;
                values: (string | Array<string>);
            }>;
        } & {
            /**
             * Pass additional custom data to the API route. This data is passed to the underlying workflow under the `additional_data` parameter.
             */
            additional_data?: Record<string, any>;
        }),
    ): CancelablePromise<AdminPromotionResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/admin/promotions',
            query: {
                'fields': fields,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Client Error`,
                401: `User is not authorized. Must log in first`,
                404: `Not Found Error`,
                409: `Invalid State Error`,
                422: `Invalid Request Error`,
                500: `Server Error`,
            },
        });
    }
    /**
     * List Rule Attribute Options of a Rule Type
     * Retrieve a list of potential rule attributes for the promotion and application method types specified in the query parameters.
     * Only the attributes of the rule type specified in the path parameter are retrieved:
     * - If `rule_type` is `rules`, the attributes of the promotion's type are retrieved.
     *
     * - If `rule_type` is `target-rules`, the target rules' attributes of the application method's type are retrieved.
     *
     * - If `rule_type` is `buy-rules`, the buy rules' attributes of the application method's type are retrieved.
     *
     * @param ruleType The rule type.
     * @param promotionType The promotion type to retrieve rules for.
     * @param applicationMethodType The application method type to retrieve rules for.
     * @param applicationMethodTargetType The application method target type to retrieve rules for.
     * @returns any OK
     * @throws ApiError
     */
    public static adminGetPromotionsRuleAttributeOptionsRuleType(
        ruleType: 'rules' | 'target-rules' | 'buy-rules',
        promotionType?: 'standard' | 'buyget',
        applicationMethodType?: 'fixed' | 'percentage',
        applicationMethodTargetType?: 'items' | 'shipping_methods' | 'order',
    ): CancelablePromise<{
        /**
         * The list of attributes.
         */
        attributes: Array<AdminRuleAttributeOption>;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/admin/promotions/rule-attribute-options/{rule_type}',
            path: {
                'rule_type': ruleType,
            },
            query: {
                'promotion_type': promotionType,
                'application_method_type': applicationMethodType,
                'application_method_target_type': applicationMethodTargetType,
            },
            errors: {
                400: `Client Error`,
                401: `User is not authorized. Must log in first`,
                404: `Not Found Error`,
                409: `Invalid State Error`,
                422: `Invalid Request Error`,
                500: `Server Error`,
            },
        });
    }
    /**
     * List Rule Values Given a Rule Attribute
     * Retrieve all potential values for promotion rules and target and buy rules based on the specified rule attribute and type.
     * For example, if you provide the ID of the `currency_code` rule attribute, and set `rule_type` to `rules`, a list of currencies are retrieved in label-value pairs.
     *
     * @param ruleType The rule type.
     * @param ruleAttributeId The rule attribute's ID.
     * @param offset The number of items to skip when retrieving a list.
     * @param limit Limit the number of items returned in the list.
     * @param order The field to sort the data by. By default, the sort order is ascending. To change the order to descending, prefix the field name with `-`.
     * @param promotionType The promotion type to retrieve rules for.
     * @param applicationMethodType The application method type to retrieve rules for.
     * @param withDeleted Whether to include deleted records in the result.
     * @param applicationMethodTargetType The application method target type to retrieve rules for.
     * @returns any OK
     * @throws ApiError
     */
    public static adminGetPromotionsRuleValueOptionsRuleTypeRuleAttributeId(
        ruleType: 'rules' | 'target-rules' | 'buy-rules',
        ruleAttributeId: string,
        offset?: number,
        limit?: number,
        order?: string,
        promotionType?: 'standard' | 'buyget',
        applicationMethodType?: 'fixed' | 'percentage',
        withDeleted?: boolean,
        applicationMethodTargetType?: string,
    ): CancelablePromise<({
        /**
         * The maximum number of items returned.
         */
        limit: number;
        /**
         * The number of items skipped before retrieving the returned items.
         */
        offset: number;
        /**
         * The total number of items.
         */
        count: number;
    } & {
        /**
         * The list of rule values.
         */
        values: Array<AdminRuleValueOption>;
    })> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/admin/promotions/rule-value-options/{rule_type}/{rule_attribute_id}',
            path: {
                'rule_type': ruleType,
                'rule_attribute_id': ruleAttributeId,
            },
            query: {
                'offset': offset,
                'limit': limit,
                'order': order,
                'promotion_type': promotionType,
                'application_method_type': applicationMethodType,
                'with_deleted': withDeleted,
                'application_method_target_type': applicationMethodTargetType,
            },
            errors: {
                400: `Client Error`,
                401: `User is not authorized. Must log in first`,
                404: `Not Found Error`,
                409: `Invalid State Error`,
                422: `Invalid Request Error`,
                500: `Server Error`,
            },
        });
    }
    /**
     * Get a Promotion
     * Retrieve a promotion by its ID. You can expand the promotion's relations or select the fields that should be returned.
     * @param id The promotion's ID.
     * @param fields Comma-separated fields that should be included in the returned data. if a field is prefixed with `+` it will be added to the default fields, using `-` will remove it from the default fields. without prefix it will replace the entire default fields.
     * @returns AdminPromotionResponse OK
     * @throws ApiError
     */
    public static adminGetPromotionsId(
        id: string,
        fields?: string,
    ): CancelablePromise<AdminPromotionResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/admin/promotions/{id}',
            path: {
                'id': id,
            },
            query: {
                'fields': fields,
            },
            errors: {
                400: `Client Error`,
                401: `User is not authorized. Must log in first`,
                404: `Not Found Error`,
                409: `Invalid State Error`,
                422: `Invalid Request Error`,
                500: `Server Error`,
            },
        });
    }
    /**
     * Update a Promotion
     * Update a promotion's details.
     * @param id The promotion's ID.
     * @param fields Comma-separated fields that should be included in the returned data. if a field is prefixed with `+` it will be added to the default fields, using `-` will remove it from the default fields. without prefix it will replace the entire default fields.
     * @param requestBody
     * @returns AdminPromotionResponse OK
     * @throws ApiError
     */
    public static adminPostPromotionsId(
        id: string,
        fields?: string,
        requestBody?: ({
            /**
             * The promotion's code.
             */
            code?: string;
            /**
             * Whether the promotion is applied automatically.
             */
            is_automatic?: boolean;
            /**
             * The promotion's type.
             */
            type?: 'standard' | 'buyget';
            /**
             * The ID of the campaign that the promotion belongs to.
             */
            campaign_id: string;
            /**
             * The properties to update in the application method.
             */
            application_method?: {
                /**
                 * The application method's ID.
                 */
                id: string;
                /**
                 * The application method's description.
                 */
                description: string;
                /**
                 * The discounted amount applied by the associated promotion based on the `type`.
                 */
                value?: number;
                /**
                 * The max quantity allowed in the cart for the associated promotion to be applied.
                 */
                max_quantity: number;
                /**
                 * The application method's currency code.
                 */
                currency_code: string;
                /**
                 * The type of the application method indicating how the associated promotion is applied.
                 */
                type?: 'fixed' | 'percentage';
                /**
                 * The target type of the application method indicating whether the associated promotion is applied to the cart's items, shipping methods, or the whole order.
                 */
                target_type?: 'order' | 'shipping_methods' | 'items';
                /**
                 * The allocation value that indicates whether the associated promotion is applied on each item in a cart or split between the items in the cart.
                 */
                allocation?: 'each' | 'across';
                /**
                 * The quantity that results from matching the `buyget` promotion's condition. For example, if the promotion is a "Buy 2 shirts get 1 free", the value f this attribute is `1`.
                 */
                apply_to_quantity: number;
                /**
                 * The minimum quantity required for a `buyget` promotion to be applied. For example, if the promotion is a "Buy 2 shirts get 1 free", the value of this attribute is `2`.
                 */
                buy_rules_min_quantity: number;
            };
        } & {
            /**
             * Pass additional custom data to the API route. This data is passed to the underlying workflow under the `additional_data` parameter.
             */
            additional_data?: Record<string, any>;
        }),
    ): CancelablePromise<AdminPromotionResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/admin/promotions/{id}',
            path: {
                'id': id,
            },
            query: {
                'fields': fields,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Client Error`,
                401: `User is not authorized. Must log in first`,
                404: `Not Found Error`,
                409: `Invalid State Error`,
                422: `Invalid Request Error`,
                500: `Server Error`,
            },
        });
    }
    /**
     * Delete a Promotion
     * Delete a promotion.
     * @param id The promotion's ID.
     * @returns any OK
     * @throws ApiError
     */
    public static adminDeletePromotionsId(
        id: string,
    ): CancelablePromise<{
        /**
         * The promotion's ID.
         */
        id: string;
        /**
         * The name of the deleted object.
         */
        object: string;
        /**
         * Whether the promotion was deleted.
         */
        deleted: boolean;
    }> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/admin/promotions/{id}',
            path: {
                'id': id,
            },
            errors: {
                400: `Client Error`,
                401: `User is not authorized. Must log in first`,
                404: `Not Found Error`,
                409: `Invalid State Error`,
                422: `Invalid Request Error`,
                500: `Server Error`,
            },
        });
    }
    /**
     * Manage the Buy Rules of a Promotion
     * Manage the buy rules of a `buyget` promotion to create, update, or delete them.
     * @param id The promotion's ID.
     * @param fields Comma-separated fields that should be included in the returned data. if a field is prefixed with `+` it will be added to the default fields, using `-` will remove it from the default fields. without prefix it will replace the entire default fields.
     * @param requestBody
     * @returns any OK
     * @throws ApiError
     */
    public static adminPostPromotionsIdBuyRulesBatch(
        id: string,
        fields?: string,
        requestBody?: {
            /**
             * The buy rules to create.
             */
            create?: Array<AdminCreatePromotionRule>;
            /**
             * The buy rules to update.
             */
            update?: Array<AdminUpdatePromotionRule>;
            /**
             * The buy rules to delete.
             */
            delete?: Array<string>;
        },
    ): CancelablePromise<{
        /**
         * The created buy rules.
         */
        created: Array<AdminPromotionRule>;
        /**
         * The updated buy rules.
         */
        updated: Array<AdminPromotionRule>;
        /**
         * The details of the deleted buy rules.
         */
        deleted: {
            /**
             * The IDs of the buy rules that were deleted.
             */
            ids: Array<string>;
            /**
             * The name of the object that was deleted.
             */
            object: string;
            /**
             * Whether the buy rules were deleted.
             */
            deleted: boolean;
        };
    }> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/admin/promotions/{id}/buy-rules/batch',
            path: {
                'id': id,
            },
            query: {
                'fields': fields,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Client Error`,
                401: `User is not authorized. Must log in first`,
                404: `Not Found Error`,
                409: `Invalid State Error`,
                422: `Invalid Request Error`,
                500: `Server Error`,
            },
        });
    }
    /**
     * Manage a Promotion's Rules
     * Manage the rules of a promotion to create, update, or delete them.
     * @param id The promotion's ID.
     * @param fields Comma-separated fields that should be included in the returned data. if a field is prefixed with `+` it will be added to the default fields, using `-` will remove it from the default fields. without prefix it will replace the entire default fields.
     * @param requestBody
     * @returns any OK
     * @throws ApiError
     */
    public static adminPostPromotionsIdRulesBatch(
        id: string,
        fields?: string,
        requestBody?: {
            /**
             * The rules to create.
             */
            create?: Array<AdminCreatePromotionRule>;
            /**
             * The rules to update.
             */
            update?: Array<AdminUpdatePromotionRule>;
            /**
             * The rules to delete.
             */
            delete?: Array<string>;
        },
    ): CancelablePromise<{
        /**
         * The created rules.
         */
        created: Array<AdminPromotionRule>;
        /**
         * The updated rules.
         */
        updated: Array<AdminPromotionRule>;
        /**
         * The details of the deleted buy rules.
         */
        deleted: {
            /**
             * The IDs of the deleted rules.
             */
            ids: Array<string>;
            /**
             * The name of the object that was deleted.
             */
            object: string;
            /**
             * Whether the rules were deleted.
             */
            deleted: boolean;
        };
    }> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/admin/promotions/{id}/rules/batch',
            path: {
                'id': id,
            },
            query: {
                'fields': fields,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Client Error`,
                401: `User is not authorized. Must log in first`,
                404: `Not Found Error`,
                409: `Invalid State Error`,
                422: `Invalid Request Error`,
                500: `Server Error`,
            },
        });
    }
    /**
     * Manage Target Rules of a Promotion
     * Manage the target rules of a promotion to create, update, or delete them.
     * @param id The promotion's ID.
     * @param fields Comma-separated fields that should be included in the returned data. if a field is prefixed with `+` it will be added to the default fields, using `-` will remove it from the default fields. without prefix it will replace the entire default fields.
     * @param requestBody
     * @returns any OK
     * @throws ApiError
     */
    public static adminPostPromotionsIdTargetRulesBatch(
        id: string,
        fields?: string,
        requestBody?: {
            /**
             * The target rules to create.
             */
            create?: Array<AdminCreatePromotionRule>;
            /**
             * The target rules to update.
             */
            update?: Array<AdminUpdatePromotionRule>;
            /**
             * The target rules to delete.
             */
            delete?: Array<string>;
        },
    ): CancelablePromise<{
        /**
         * The created target rules.
         */
        created: Array<AdminPromotionRule>;
        /**
         * The updated target rules.
         */
        updated: Array<AdminPromotionRule>;
        /**
         * The details of the deleted target rules.
         */
        deleted: {
            /**
             * The IDs of deleted target rules.
             */
            ids: Array<string>;
            /**
             * The name of the object that was deleted.
             */
            object: string;
            /**
             * Whether the target rules were deleted.
             */
            deleted: boolean;
        };
    }> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/admin/promotions/{id}/target-rules/batch',
            path: {
                'id': id,
            },
            query: {
                'fields': fields,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Client Error`,
                401: `User is not authorized. Must log in first`,
                404: `Not Found Error`,
                409: `Invalid State Error`,
                422: `Invalid Request Error`,
                500: `Server Error`,
            },
        });
    }
    /**
     * List Rules of a Promotion
     * Retrieve a list of rules in a promotion. The type of rules retrieved depend on the value of the `rule_type` path parameter:
     * - If `rule_type` is `rules`, the promotion's rules are retrivied. - If `rule_type` is `target-rules`, the target rules of the promotion's application method are retrieved.
     *
     * - If `rule_type` is `buy-rules`, the buy rules of the promotion's application method are retrieved.
     *
     * @param id The promotion's ID.
     * @param ruleType The type of rules to retrieve.
     * @param fields Comma-separated fields that should be included in the returned data. if a field is prefixed with `+` it will be added to the default fields, using `-` will remove it from the default fields. without prefix it will replace the entire default fields.
     * @returns any OK
     * @throws ApiError
     */
    public static adminGetPromotionsIdRuleType(
        id: string,
        ruleType: 'rules' | 'target-rules' | 'buy-rules',
        fields?: string,
    ): CancelablePromise<{
        /**
         * The list of promotion rules.
         */
        rules: Array<AdminPromotionRule>;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/admin/promotions/{id}/{rule_type}',
            path: {
                'id': id,
                'rule_type': ruleType,
            },
            query: {
                'fields': fields,
            },
            errors: {
                400: `Client Error`,
                401: `User is not authorized. Must log in first`,
                404: `Not Found Error`,
                409: `Invalid State Error`,
                422: `Invalid Request Error`,
                500: `Server Error`,
            },
        });
    }
}
