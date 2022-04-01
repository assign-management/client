import { UpdateTaskCacheHandler } from '../update-task.hook';

export const update: UpdateTaskCacheHandler = (cache, { data }) => {
  const task = data?.updateTask?.task;
  if (task) {
    const { id, __typename, description } = task;
    cache.modify({
      id: cache.identify({ id, __typename }),
      fields: {
        description() {
          return description;
        },
      },
    });
  }
};
