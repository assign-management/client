import { NetworkStatus, useQuery } from '@apollo/client';
import { FETCH_PROJECTS } from './fetch-projects.gql';
import { FetchProjects } from './__generated__/FetchProjects';

export const useFetchProjects = (offset: number, limit: number) => {
  const { loading, error, data, networkStatus } = useQuery<FetchProjects>(FETCH_PROJECTS, {
    variables: { args: { offset, limit } },
    notifyOnNetworkStatusChange: true,
    // pollInterval: 2000,
  });

  const isLoading = networkStatus === NetworkStatus.loading;

  const isRefetching = networkStatus === NetworkStatus.refetch;

  return { loading: isLoading, isRefetching, error, projects: data?.fetchProjects?.projects };
};
