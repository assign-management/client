import { gql } from '@apollo/client';

export const CREATE_PROJECT = gql`
  mutation CreateProject($title: String!, $accessibility: Accessibility!) {
    createProject(data: { title: $title, accessibility: $accessibility }) {
      status
      project {
        id
        title
        accessibility
        createdAt
        updatedAt
      }
    }
  }
`;
