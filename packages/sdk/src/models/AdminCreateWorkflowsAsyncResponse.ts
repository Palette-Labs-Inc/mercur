/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * The details of changing a workflow execution's step status.
 */
export type AdminCreateWorkflowsAsyncResponse = {
    /**
     * The workflows execution's transaction ID.
     */
    transaction_id: string;
    /**
     * The ID of the step whose status was changed.
     */
    step_id: string;
    /**
     * Sets the step's response. It accepts any type.
     */
    response?: any;
    /**
     * Sets the compensation function's input. It accepts any response.
     */
    compensate_input?: any;
    /**
     * Whether to invoke or compensate the step.
     */
    action?: 'invoke' | 'compensate';
};

