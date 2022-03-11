import { useMutation } from '@apollo/client';
import { DELETE_PROJECT } from './delete-project.gql';

export const useDeleteProject = (id: string) => {
  const [deleteProject, { loading }] = useMutation(DELETE_PROJECT, {
    fetchPolicy: 'no-cache',
    variables: { id },
    update(cache) {
      const normalizedId = cache.identify({ id, __typename: 'Project' });
      cache.evict({ id: normalizedId });
      cache.gc();
    },
  });

  return { deleteProject, loading };
};
