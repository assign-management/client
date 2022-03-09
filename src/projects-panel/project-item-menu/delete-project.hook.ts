import { useMutation } from '@apollo/client';
import { DELETE_PROJECT } from './delete-project.gql';

export const useDeleteProject = () => {
  const [deleteProject, { loading }] = useMutation(DELETE_PROJECT);

  return { deleteProject, loading };
};
