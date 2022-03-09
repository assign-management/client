/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { MutationStatus, Accessibility } from "./../../../../__generated__/globalTypes";

// ====================================================
// GraphQL mutation operation: DeleteProject
// ====================================================

export interface DeleteProject_deleteProject_project {
  __typename: "Project";
  /**
   * support markdown language
   * Description for field
   * Supports **multi-line** description for your [API](http: // example.com)!
   */
  id: string;
  title: string;
  accessibility: Accessibility;
  createdAt: any;
  updatedAt: any;
}

export interface DeleteProject_deleteProject {
  __typename: "ProjectMutationResponse";
  status: MutationStatus;
  project: DeleteProject_deleteProject_project | null;
}

export interface DeleteProject {
  deleteProject: DeleteProject_deleteProject | null;
}

export interface DeleteProjectVariables {
  id: string;
}
