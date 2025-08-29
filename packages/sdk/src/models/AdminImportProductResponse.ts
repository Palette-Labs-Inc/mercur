/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * The import process's details.
 */
export type AdminImportProductResponse = {
    /**
     * The ID of the workflow execution's transaction. This is useful to confirm the import using the `/admin/products/:transaction-id/import` API route.
     */
    transaction_id: string;
    /**
     * The import's summary.
     */
    summary: {
        /**
         * The number of products that will be created by this import.
         */
        toCreate: number;
        /**
         * The number of products that will be updated by this import.
         */
        toUpdate: number;
    };
};

