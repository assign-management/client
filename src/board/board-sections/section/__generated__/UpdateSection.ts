/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { UpdateSectionData, MutationStatus } from "./../../../../../__generated__/globalTypes";

// ====================================================
// GraphQL mutation operation: UpdateSection
// ====================================================

export interface UpdateSection_updateSection_section_tasks {
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

export interface UpdateSection_updateSection_section {
  __typename: "Section";
  id: string;
  projectId: string;
  title: string;
  tasks: UpdateSection_updateSection_section_tasks[] | null;
  createdAt: any;
  updatedAt: any;
}

export interface UpdateSection_updateSection {
  __typename: "SectionMutationResponse";
  status: MutationStatus;
  section: UpdateSection_updateSection_section | null;
}

export interface UpdateSection {
  updateSection: UpdateSection_updateSection | null;
}

export interface UpdateSectionVariables {
  id: string;
  data: UpdateSectionData;
}
