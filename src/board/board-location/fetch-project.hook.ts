import { useQuery } from '@apollo/client';
import { FETCH_PROJECT } from './fetch-project.gql';
import { FetchProject } from './__generated__/FetchProject';

export const useFetchProject = (id: string) => {
  const { data, loading } = useQuery<FetchProject>(FETCH_PROJECT, {
    variables: { id },
  });

  return { project: data?.fetchProject, loading };
};
