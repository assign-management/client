import { Box, CircularProgress, Fade, LinearProgress } from '@mui/material';
import React from 'react';
import { ProjectItem } from '../project-item';
import { useFetchProjects } from './fetch-projects.hook';
import { ProjectListSkeleton } from './project-list-skeleton';
import { ProjectsListContainer } from './projects-list-container.styled';
import { ProjectsListWrapper } from './projects-list-wrapper.styled';
import { InView } from 'react-intersection-observer';

interface ProjectsListProps {}

export const ProjectsList: React.FC<ProjectsListProps> = () => {
  const { projects, loading, error, handleFetchMore, isFetchingMore, isRefetching, total } =
    useFetchProjects(0, 20);

  // TODO: add error svg and on error and when no projects were found
  if (error) return <span>Error: {error.message}</span>;

  return (
    <ProjectsListContainer>
      <ProjectsListWrapper>
        {isRefetching && <LinearProgress sx={{ height: 3, marginBottom: 2 }} />}
        {loading ? (
          <ProjectListSkeleton />
        ) : (
          projects?.map((project) => <ProjectItem key={project.id} project={project} />)
        )}
        {total !== projects?.length && (
          <InView
            onChange={(inView) => {
              if (!loading && inView) {
                handleFetchMore();
              }
            }}
          >
            <Box
              sx={{ height: 40, display: 'fex', justifyContent: 'center', alignItems: 'center' }}
            >
              <Fade
                in={isFetchingMore}
                style={{
                  transitionDelay: '800ms',
                }}
                unmountOnExit
              >
                <CircularProgress />
              </Fade>
            </Box>
          </InView>
        )}
      </ProjectsListWrapper>
    </ProjectsListContainer>
  );
};
