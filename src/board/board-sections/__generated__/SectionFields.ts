/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: SectionFields
// ====================================================

export interface SectionFields_tasks {
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

export interface SectionFields {
  __typename: "Section";
  id: string;
  projectId: string;
  title: string;
  tasks: SectionFields_tasks[] | null;
  createdAt: any;
  updatedAt: any;
}
