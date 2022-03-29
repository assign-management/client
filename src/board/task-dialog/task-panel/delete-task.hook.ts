import { useMutation } from '@apollo/client';
import { DELETE_TASK } from './delete-task.gql';
import { DeleteTask, DeleteTaskVariables } from './__generated__/DeleteTask';

export const useDeleteTask = (id: string, onUpdate: () => void) => {
  const [deleteTask] = useMutation<DeleteTask, DeleteTaskVariables>(DELETE_TASK, {
    variables: { id },
    onCompleted: () => {
      onUpdate();
    },
  });

  return { deleteTask };
};
