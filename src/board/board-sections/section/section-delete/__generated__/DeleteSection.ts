/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { MutationStatus } from "./../../../../../../__generated__/globalTypes";

// ====================================================
// GraphQL mutation operation: DeleteSection
// ====================================================

export interface DeleteSection_deleteSection_section_tasks {
  __typename: "Task";
  id: string;
  title: string;
  order: number | null;
  dueDate: any | null;
  description: string | null;
  sectionId: string;
  createdAt: any;
  updatedAt: any;
}

export interface DeleteSection_deleteSection_section {
  __typename: "Section";
  id: string;
  projectId: string;
  title: string;
  tasks: DeleteSection_deleteSection_section_tasks[] | null;
  createdAt: any;
  updatedAt: any;
}

export interface DeleteSection_deleteSection {
  __typename: "SectionMutationResponse";
  status: MutationStatus;
  section: DeleteSection_deleteSection_section | null;
}

export interface DeleteSection {
  deleteSection: DeleteSection_deleteSection | null;
}

export interface DeleteSectionVariables {
  id: string;
}
