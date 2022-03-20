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

export interface PaginationArgs {
  offset?: number | null;
  limit?: number | null;
}

export interface UpdateSectionArgs {
  title?: string | null;
  projectId?: string | null;
}

//==============================================================
// END Enums and Input Objects
//==============================================================
