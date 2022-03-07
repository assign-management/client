import { gql } from '@apollo/client';

export const FETCH_PROJECTS = gql`
  query FetchProjects($args: PaginationArgs!) {
    fetchProjects(args: $args) {
      total
      projects {
        id
        title
        accessibility
        createdAt
        updatedAt
      }
    }
  }
`;
