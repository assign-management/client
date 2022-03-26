/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { CreateSectionData, MutationStatus } from "./../../../../../__generated__/globalTypes";

// ====================================================
// GraphQL mutation operation: CreateSection
// ====================================================

export interface CreateSection_createSection_section_tasks {
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

export interface CreateSection_createSection_section {
  __typename: "Section";
  id: string;
  projectId: string;
  title: string;
  tasks: CreateSection_createSection_section_tasks[] | null;
  createdAt: any;
  updatedAt: any;
}

export interface CreateSection_createSection {
  __typename: "SectionMutationResponse";
  status: MutationStatus;
  section: CreateSection_createSection_section | null;
}

export interface CreateSection {
  createSection: CreateSection_createSection | null;
}

export interface CreateSectionVariables {
  data: CreateSectionData;
}
