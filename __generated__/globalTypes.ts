/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

//==============================================================
// START Enums and Input Objects
//==============================================================

/**
 * This enum stand for who can see the Project:
 */
export enum Accessibility {
  PRIVATE = "PRIVATE",
  PUBLIC = "PUBLIC",
  TEAM = "TEAM",
}

export enum MutationStatus {
  FAILURE = "FAILURE",
  SUCCESS = "SUCCESS",
}

export interface CreateSectionData {
  title: string;
  projectId: string;
}

export interface CreateTaskData {
  title: string;
  sectionId: string;
}

export interface PaginationArgs {
  offset?: number | null;
  limit?: number | null;
}

export interface UpdateSectionData {
  title?: string | null;
}

export interface UpdateTaskData {
  title?: string | null;
  dueDate?: any | null;
  description?: string | null;
}

//==============================================================
// END Enums and Input Objects
//==============================================================
