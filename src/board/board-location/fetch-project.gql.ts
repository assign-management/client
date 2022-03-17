import { gql } from '@apollo/client';

export const FETCH_PROJECT = gql`
  query FetchProject($id: ID!) {
    fetchProject(id: $id) {
      title
      id
      accessibility
      createdAt
      updatedAt
    }
  }
`;
