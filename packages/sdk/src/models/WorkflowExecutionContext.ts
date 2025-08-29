/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * The workflow execution's context.
 */
export type WorkflowExecutionContext = {
    /**
     * The context's data.
     */
    data?: {
        /**
         * The step's invokation details.
         */
        invoke: Record<string, {
            /**
             * The invokation's details.
             */
            output?: {
                /**
                 * the step's output
                 */
                output: any;
                /**
                 * the compensation function's input.
                 */
                compensateInput: any;
            };
        }>;
        /**
         * the payload of the transaction.
         */
        payload?: any;
    };
    /**
     * The context's compensate.
     */
    compensate: Record<string, any>;
    /**
     * The context's errors.
     */
    errors: Array<{
        /**
         * The error's details.
         */
        error: Record<string, any>;
        /**
         * The error's action.
         */
        action: string;
        /**
         * The error's handler type.
         */
        handlerType: string;
    }>;
};

