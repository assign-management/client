import { useMutation } from '@apollo/client';
import { FETCH_PROJECTS } from '../../../projects-panel/projects-list/fetch-projects.gql';
import { CREATE_PROJECT } from './create-project.gql';
import { CreateProjectVariables } from './__generated__/CreateProject';

export const useCreateProject = (variables: CreateProjectVariables) =>
  useMutation<CreateProjectVariables>(CREATE_PROJECT, {
    variables,
    refetchQueries: [FETCH_PROJECTS],
    onError(err) {
      console.log(JSON.stringify(err, null, 2));
      const { message } = err;
      console.log('message', message);
    },
  });
