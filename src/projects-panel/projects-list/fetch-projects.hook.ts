import { useQuery } from '@apollo/client';
import { FETCH_PROJECTS } from './fetch-projects.gql';
import { FetchProjects } from './__generated__/FetchProjects';

export const useFetchProjects = () =>
  useQuery<FetchProjects>(FETCH_PROJECTS, { variables: { args: { offset: 0, limit: 200 } } });
