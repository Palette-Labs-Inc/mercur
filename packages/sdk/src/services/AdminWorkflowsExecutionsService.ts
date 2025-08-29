/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AdminCreateWorkflowsAsyncResponse } from '../models/AdminCreateWorkflowsAsyncResponse';
import type { AdminCreateWorkflowsRun } from '../models/AdminCreateWorkflowsRun';
import type { AdminWorkflowExecution } from '../models/AdminWorkflowExecution';
import type { AdminWorkflowExecutionResponse } from '../models/AdminWorkflowExecutionResponse';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class AdminWorkflowsExecutionsService {
    /**
     * List Workflows Executions
     * Retrieve a list of workflows executions. The workflows executions can be filtered by fields such as `id`. The workflows executions can also be sorted or paginated.
     * @param fields Comma-separated fields that should be included in the returned data. if a field is prefixed with `+` it will be added to the default fields, using `-` will remove it from the default fields. without prefix it will replace the entire default fields.
     * @param offset The number of items to skip when retrieving a list.
     * @param limit Limit the number of items returned in the list.
     * @param order The field to sort the data by. By default, the sort order is ascending. To change the order to descending, prefix the field name with `-`.
     * @param transactionId
     * @param workflowId
     * @param q Search query to filter by a workflow execution's searchable fields.
     * @param withDeleted Whether to include deleted records in the result.
     * @returns any OK
     * @throws ApiError
     */
    public static adminGetWorkflowsExecutions(
        fields?: string,
        offset?: number,
        limit?: number,
        order?: string,
        transactionId?: (string | Array<string>),
        workflowId?: (string | Array<string>),
        q?: string,
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
         * The workflows execution's workflow executions.
         */
        workflow_executions: Array<AdminWorkflowExecution>;
    })> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/admin/workflows-executions',
            query: {
                'fields': fields,
                'offset': offset,
                'limit': limit,
                'order': order,
                'transaction_id': transactionId,
                'workflow_id': workflowId,
                'q': q,
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
     * Get a Workflows Execution
     * Retrieve a workflows execution by its ID. You can expand the workflows execution's relations or select the fields that should be returned.
     * @param id The workflows execution's ID.
     * @param fields Comma-separated fields that should be included in the returned data. if a field is prefixed with `+` it will be added to the default fields, using `-` will remove it from the default fields. without prefix it will replace the entire default fields.
     * @returns AdminWorkflowExecutionResponse OK
     * @throws ApiError
     */
    public static adminGetWorkflowsExecutionsId(
        id: string,
        fields?: string,
    ): CancelablePromise<AdminWorkflowExecutionResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/admin/workflows-executions/{id}',
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
     * Execute a Workflow
     * Execute a workflow by its ID.
     * @param workflowId The workflow's ID.
     * @param requestBody
     * @returns any OK
     * @throws ApiError
     */
    public static adminPostWorkflowsExecutionsWorkflowIdRun(
        workflowId: string,
        requestBody?: AdminCreateWorkflowsRun,
    ): CancelablePromise<{
        /**
         * The workflow's details
         */
        acknowledgement: {
            /**
             * The ID of the executed workflow.
             */
            workflowId: string;
            /**
             * The ID of the workflow exection's transaction. Use this later to track the workflow execution's progress or succeed / fail its steps.
             */
            transactionId: string;
            /**
             * The idempotency key of the workflow execution.
             */
            parentStepIdempotencyKey?: string;
            /**
             * Whether the workflow execution has finished.
             */
            hasFinished: boolean;
            /**
             * Whether the workflow execution has failed.
             */
            hasFailed: boolean;
        };
    }> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/admin/workflows-executions/{workflow_id}/run',
            path: {
                'workflow_id': workflowId,
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
     * Fail a Step in a Workflow's Execution
     * Set the status of a step in a workflow's execution as failed. This is useful for long-running workflows.
     * @param workflowId The workflows execution's workflow id.
     * @param requestBody
     * @returns any OK
     * @throws ApiError
     */
    public static adminPostWorkflowsExecutionsWorkflowIdStepsFailure(
        workflowId: string,
        requestBody?: AdminCreateWorkflowsAsyncResponse,
    ): CancelablePromise<{
        /**
         * Whether the workflow step has failed successfully.
         */
        success: boolean;
    }> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/admin/workflows-executions/{workflow_id}/steps/failure',
            path: {
                'workflow_id': workflowId,
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
     * Succeed a Step in a Workflow's Execution
     * Set the status of a step in a workflow's execution as successful. This is useful for long-running workflows.
     * @param workflowId The workflows execution's workflow id.
     * @param requestBody
     * @returns any OK
     * @throws ApiError
     */
    public static adminPostWorkflowsExecutionsWorkflowIdStepsSuccess(
        workflowId: string,
        requestBody?: AdminCreateWorkflowsAsyncResponse,
    ): CancelablePromise<{
        /**
         * Whether the workflow step was succeeded.
         */
        success: boolean;
    }> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/admin/workflows-executions/{workflow_id}/steps/success',
            path: {
                'workflow_id': workflowId,
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
     * Subscribe to a Workflow's Execution
     * Subscribe to a workflow's execution to receive real-time information about its steps, status, and data.
     * This route returns an event stream that you can consume using the [EventSource API](https://developer.mozilla.org/en-US/docs/Web/API/EventSource).
     *
     * @param workflowId The workflows execution's workflow id.
     * @returns string Stream of the step's status.
     * @throws ApiError
     */
    public static adminGetWorkflowsExecutionsWorkflowIdSubscribe(
        workflowId: string,
    ): CancelablePromise<string> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/admin/workflows-executions/{workflow_id}/subscribe',
            path: {
                'workflow_id': workflowId,
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
     * Get Workflow Execution's Details
     * Get the details of the workflow's execution.
     * @param workflowId The workflows execution's workflow id.
     * @param transactionId The workflows execution's transaction id.
     * @param fields Comma-separated fields that should be included in the returned data. if a field is prefixed with `+` it will be added to the default fields, using `-` will remove it from the default fields. without prefix it will replace the entire default fields.
     * @returns AdminWorkflowExecutionResponse OK
     * @throws ApiError
     */
    public static adminGetWorkflowsExecutionsWorkflowIdTransactionId(
        workflowId: string,
        transactionId: string,
        fields?: string,
    ): CancelablePromise<AdminWorkflowExecutionResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/admin/workflows-executions/{workflow_id}/{transaction_id}',
            path: {
                'workflow_id': workflowId,
                'transaction_id': transactionId,
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
     * Subscribe to Step of a Workflow's Execution
     * Subscribe to a step in a workflow's execution to receive real-time information about its status and data.
     * This route returns an event stream that you can consume using the [EventSource API](https://developer.mozilla.org/en-US/docs/Web/API/EventSource).
     *
     * @param workflowId The workflows execution's workflow id.
     * @param transactionId The workflows execution's transaction id.
     * @param stepId The workflows execution's step id.
     * @returns string Stream of the step's status.
     * @throws ApiError
     */
    public static adminGetWorkflowsExecutionsWorkflowIdTransactionIdStepIdSubscribe(
        workflowId: string,
        transactionId: string,
        stepId: string,
    ): CancelablePromise<string> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/admin/workflows-executions/{workflow_id}/{transaction_id}/{step_id}/subscribe',
            path: {
                'workflow_id': workflowId,
                'transaction_id': transactionId,
                'step_id': stepId,
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
