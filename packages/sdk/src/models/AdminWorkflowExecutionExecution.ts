/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * The workflow execution's steps details.
 */
export type AdminWorkflowExecutionExecution = {
    /**
     * The execution's steps. Each object key is a step ID, and the value is the object whose properties are shown below.
     */
    steps: Record<string, {
        /**
         * The step's ID.
         */
        id?: string;
        /**
         * The state of the step's invokation function.
         */
        invoke?: {
            /**
             * The invokation step's state.
             */
            state: 'failed' | 'not_started' | 'invoking' | 'compensating' | 'done' | 'reverted' | 'dormant' | 'skipped' | 'skipped_failure' | 'timeout';
            /**
             * The invokation step's state.
             */
            status: 'idle' | 'ok' | 'waiting_response' | 'temp_failure' | 'permanent_failure';
        };
        /**
         * The step's definition details.
         */
        definition?: {
            /**
             * Whether the step is async.
             */
            async?: boolean;
            /**
             * Whether the compensation function of the step is async.
             */
            compensateAsync?: boolean;
            /**
             * Whether the step doesn't have a compensation function.
             */
            noCompensation?: boolean;
            /**
             * Whether the workflow should continue executing even if its status is changed to failed.
             */
            continueOnPermanentFailure?: boolean;
            skipOnPermanentFailure?: (string | boolean);
            /**
             * The maximum number of times to retry the step.
             */
            maxRetries?: number;
            /**
             * Whether the workflow shouldn't wait for the step to finish before moving to the next step.
             */
            noWait?: boolean;
            /**
             * The interval in seconds between retry attempts when the step fails.
             */
            retryInterval?: number;
            /**
             * The interval in seconds to retry a step even if its status is `waiting_response`.
             */
            retryIntervalAwaiting?: number;
            /**
             * Whether the step's response is stored.
             */
            saveResponse?: boolean;
            /**
             * The maximum time in seconds to wait for this step to complete. If the step exceeds this time, the step's state is changed to `timeout`, but the step continues executing.
             */
            timeout?: number;
        };
        /**
         * The state of the step's compensation function.
         */
        compensate?: {
            /**
             * The compensation function's state.
             */
            state: 'failed' | 'not_started' | 'invoking' | 'compensating' | 'done' | 'reverted' | 'dormant' | 'skipped' | 'skipped_failure' | 'timeout';
            /**
             * The compensation function's status.
             */
            status: 'idle' | 'ok' | 'waiting_response' | 'temp_failure' | 'permanent_failure';
        };
        /**
         * The step's depth in the workflow's execution.
         */
        depth?: number;
        /**
         * The timestamp the step started executing.
         */
        startedAt?: number;
    }>;
};

