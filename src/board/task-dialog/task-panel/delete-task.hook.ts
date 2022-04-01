import { useMutation } from '@apollo/client';
import { DELETE_TASK } from './delete-task.gql';
import { DeleteTask, DeleteTaskVariables } from './__generated__/DeleteTask';

interface UserDeleteTaskArguments {
  id: string;
  onCompleted: (data: DeleteTask) => void;
}

export const useDeleteTask = ({ id, onCompleted }: UserDeleteTaskArguments) => {
  const [deleteTask] = useMutation<DeleteTask, DeleteTaskVariables>(DELETE_TASK, {
    variables: { id },
    async update(cache, { data }) {
      const __typename = data?.deleteTask?.task?.__typename;
      if (__typename) cache.evict({ id: cache.identify({ __typename, id }) });
      cache.gc();
    },
    onCompleted,
  });

  return { deleteTask };
};
