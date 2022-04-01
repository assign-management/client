import { ApolloCache, DefaultContext, MutationUpdaterFunction, useMutation } from '@apollo/client';
import { UPDATE_TASK } from './update-task.gql';
import { UpdateTask, UpdateTaskVariables } from './__generated__/UpdateTask';

export type UpdateTaskCacheHandler = MutationUpdaterFunction<
  UpdateTask,
  UpdateTaskVariables,
  DefaultContext,
  ApolloCache<any>
>;

interface UseUpdateTaskArguments {
  update: UpdateTaskCacheHandler;
}

export const useUpdateTask = ({ update }: UseUpdateTaskArguments) => {
  const [updateTask] = useMutation<UpdateTask, UpdateTaskVariables>(UPDATE_TASK, {
    update,
  });

  return { updateTask };
};
