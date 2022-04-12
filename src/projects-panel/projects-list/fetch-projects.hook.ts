import { NetworkStatus, useQuery, useReactiveVar } from '@apollo/client';
import { searchVar } from '../../apollo';
import { FETCH_PROJECTS } from './fetch-projects.gql';
import { FetchProjects, FetchProjectsVariables } from './__generated__/FetchProjects';

export const useFetchProjects = (offset?: number, limit?: number) => {
  const search = useReactiveVar(searchVar);

  const args = search
    ? { offset, limit, filter: [{ field: 'title', value: search }] }
    : { offset, limit };

  const { loading, error, data, networkStatus } = useQuery<FetchProjects, FetchProjectsVariables>(
    FETCH_PROJECTS,
    {
      variables: { args },
      notifyOnNetworkStatusChange: true,
      // pollInterval: 2000,
    }
  );

  const isLoading = networkStatus === NetworkStatus.loading;

  const isRefetching = networkStatus === NetworkStatus.refetch;

  return { loading: isLoading, isRefetching, error, projects: data?.fetchProjects?.projects };
};
