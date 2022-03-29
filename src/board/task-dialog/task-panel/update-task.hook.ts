import { useMutation } from '@apollo/client';
import { UpdateTaskData } from '../../../../__generated__/globalTypes';
import { UPDATE_TASK } from './update-task.gql';
import { UpdateTask, UpdateTaskVariables } from './__generated__/UpdateTask';

export const useUpdateTask = (id: string, data: UpdateTaskData = {}) => {
  const [updateTask] = useMutation<UpdateTask, UpdateTaskVariables>(UPDATE_TASK, {
    variables: { id, data },
  });

  return { updateTask };
};
