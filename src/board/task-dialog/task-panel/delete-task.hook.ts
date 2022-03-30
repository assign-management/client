import { useMutation } from '@apollo/client';
import { DELETE_TASK } from './delete-task.gql';
import { DeleteTask, DeleteTaskVariables } from './__generated__/DeleteTask';

export const useDeleteTask = (id: string) => {
  const [deleteTask] = useMutation<DeleteTask, DeleteTaskVariables>(DELETE_TASK, {
    variables: { id },
    update(cache, { data }) {
      const __typename = data?.deleteTask?.task?.__typename;
      if (__typename) cache.evict({ id: cache.identify({ __typename, id }) });
      cache.gc();
    },
  });

  return { deleteTask };
};
