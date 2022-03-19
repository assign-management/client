import { gql } from '@apollo/client';
import { SECTION_FIELDS } from '../../section-fields.gql';

export const DELETE_SECTION = gql`
  ${SECTION_FIELDS}
  mutation DeleteSection($id: ID!) {
    deleteSection(id: $id) {
      status
      section {
        ...SectionFields
      }
    }
  }
`;
