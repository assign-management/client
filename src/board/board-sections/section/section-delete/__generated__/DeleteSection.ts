/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { MutationStatus } from "./../../../../../../__generated__/globalTypes";

// ====================================================
// GraphQL mutation operation: DeleteSection
// ====================================================

export interface DeleteSection_deleteSection_section {
  __typename: "Section";
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
