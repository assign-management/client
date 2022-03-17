/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { MutationStatus } from "./../../../../../__generated__/globalTypes";

// ====================================================
// GraphQL mutation operation: DeleteProject
// ====================================================

export interface DeleteProject_deleteProject {
  __typename: "ProjectMutationResponse";
  status: MutationStatus;
}

export interface DeleteProject {
  deleteProject: DeleteProject_deleteProject | null;
}

export interface DeleteProjectVariables {
  id: string;
}
