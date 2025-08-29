/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * The promotion's promotions.
 */
export type StoreCartPromotion = {
    /**
     * The promotion's ID.
     */
    id: string;
    /**
     * The promotion's code.
     */
    code?: string;
    /**
     * The promotion's is automatic.
     */
    is_automatic?: boolean;
    /**
     * The promotion's application method.
     */
    application_method?: {
        /**
         * The application method's value.
         */
        value: string;
        /**
         * The application method's type.
         */
        type: 'fixed' | 'percentage';
        /**
         * The application method's currency code.
         */
        currency_code: string;
    };
};

