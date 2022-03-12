import { useMutation } from '@apollo/client';
import { DELETE_PROJECT } from './delete-project.gql';

export const useDeleteProject = (id: string) => {
  const [deleteProject, { loading }] = useMutation(DELETE_PROJECT, {
    fetchPolicy: 'no-cache',
    variables: { id },
    update(cache) {
      /**
       * ApolloLink does not stop on unmounting a React Component or unsubscribing to a "watchQuery" subscription.
       * @link https://github.com/apollographql/apollo-client/issues/7101
       */
      setTimeout(() => {
        const normalizedId = cache.identify({ id, __typename: 'Project' });
        cache.evict({ id: normalizedId });
        cache.gc();
      });
    },
  });

  return { deleteProject, loading };
};
