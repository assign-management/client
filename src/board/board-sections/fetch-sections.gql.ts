import { gql } from '@apollo/client';
import { SECTION_FIELDS } from './section-fields.gql';
export const FETCH_SECTIONS = gql`
  ${SECTION_FIELDS}
  query FetchSections($id: ID!) {
    fetchSections(projectId: $id) {
      total
      sections {
        ...SectionFields
      }
    }
  }
`;
