import { useMutation } from '@apollo/client';
import { CREATE_TASK } from './create-task.gql';
import { CreateTask, CreateTaskVariables } from './__generated__/CreateTask';

export const useCreateTask = () => {
  const [createTask, { loading }] = useMutation<CreateTask, CreateTaskVariables>(CREATE_TASK);

  return { createTask, loading };
};
