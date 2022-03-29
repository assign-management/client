import { gql } from '@apollo/client';

export const UPDATE_TASK = gql`
  mutation UpdateTask($id: ID!, $data: UpdateTaskData!) {
    updateTask(id: $id, data: $data) {
      status
    }
  }
`;
