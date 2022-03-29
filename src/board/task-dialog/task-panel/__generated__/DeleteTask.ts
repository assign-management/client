/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { MutationStatus } from "./../../../../../__generated__/globalTypes";

// ====================================================
// GraphQL mutation operation: DeleteTask
// ====================================================

export interface DeleteTask_deleteTask {
  __typename: "TaskMutationResponse";
  status: MutationStatus;
}

export interface DeleteTask {
  deleteTask: DeleteTask_deleteTask | null;
}

export interface DeleteTaskVariables {
  id: string;
}
