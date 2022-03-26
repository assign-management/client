import { gql } from '@apollo/client';
import { TASK_FIELDS } from '../../common/fragments/task-fields.gql';

export const SECTION_FIELDS = gql`
  ${TASK_FIELDS}
  fragment SectionFields on Section {
    id
    projectId
    title
    tasks {
      ...TaskFields
    }
    createdAt
    updatedAt
  }
`;
