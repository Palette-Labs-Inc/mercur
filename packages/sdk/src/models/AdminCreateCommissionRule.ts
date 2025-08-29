/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AdminCreateCommissionRate } from './AdminCreateCommissionRate';
export type AdminCreateCommissionRule = {
    /**
     * Commission rule name.
     */
    name?: string;
    /**
     * Rule reference type
     */
    reference?: string;
    /**
     * Rule reference id
     */
    reference_id?: string;
    /**
     * Indicates if rule is active.
     */
    is_active?: boolean;
    rate?: AdminCreateCommissionRate;
};

