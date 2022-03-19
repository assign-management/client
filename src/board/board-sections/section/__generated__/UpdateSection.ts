/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { UpdateSectionArgs, MutationStatus } from "./../../../../../__generated__/globalTypes";

// ====================================================
// GraphQL mutation operation: UpdateSection
// ====================================================

export interface UpdateSection_updateSection_section {
  __typename: "Section";
  id: string;
  title: string | null;
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
  args?: UpdateSectionArgs | null;
}
