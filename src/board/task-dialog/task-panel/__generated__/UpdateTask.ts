/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { UpdateTaskData, MutationStatus } from "./../../../../../__generated__/globalTypes";

// ====================================================
// GraphQL mutation operation: UpdateTask
// ====================================================

export interface UpdateTask_updateTask {
  __typename: "TaskMutationResponse";
  status: MutationStatus;
}

export interface UpdateTask {
  updateTask: UpdateTask_updateTask | null;
}

export interface UpdateTaskVariables {
  id: string;
  data: UpdateTaskData;
}
