/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AdminWorkflowExecutionExecution } from './AdminWorkflowExecutionExecution';
import type { WorkflowExecutionContext } from './WorkflowExecutionContext';
/**
 * The workflows execution's details.
 */
export type AdminWorkflowExecution = {
    /**
     * The workflow execution's ID.
     */
    id: string;
    /**
     * The ID of the workflow.
     */
    workflow_id: string;
    /**
     * The workflow execution's transaction ID.
     */
    transaction_id: string;
    execution: AdminWorkflowExecutionExecution;
    context: WorkflowExecutionContext;
    /**
     * The workflow execution's state.
     */
    state: 'not_started' | 'invoking' | 'waiting_to_compensate' | 'compensating' | 'done' | 'reverted' | 'failed';
    /**
     * The date the workflow execution was created.
     */
    created_at: string;
    /**
     * The date the workflow execution was updated.
     */
    updated_at: string;
    /**
     * The date the workflow execution was deleted.
     */
    deleted_at?: string;
};

