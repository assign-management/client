import { useMutation } from '@apollo/client';
import { CREATE_PROJECT } from './create-project.gql';
import { CreateProjectVariables } from './__generated__/CreateProject';

export const useCreateProject = () => useMutation<CreateProjectVariables>(CREATE_PROJECT);
