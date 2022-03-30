import { ApolloCache, DefaultContext, MutationUpdaterFunction, useMutation } from '@apollo/client';
import { UpdateTaskData } from '../../../../__generated__/globalTypes';
import { UPDATE_TASK } from './update-task.gql';
import { UpdateTask, UpdateTaskVariables } from './__generated__/UpdateTask';

interface UseUpdateTaskArguments {
  update: MutationUpdaterFunction<
    UpdateTask,
    UpdateTaskVariables,
    DefaultContext,
    ApolloCache<any>
  >;
}

export const useUpdateTask = ({ update }: UseUpdateTaskArguments) => {
  const [updateTask] = useMutation<UpdateTask, UpdateTaskVariables>(UPDATE_TASK, {
    update,
  });

  return { updateTask };
};
