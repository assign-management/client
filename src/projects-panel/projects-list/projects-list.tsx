import React from 'react';
import { ProjectItem } from '../project-item';
import { useFetchProjects } from './fetch-projects.hook';
import { ProjectListSkeleton } from './project-list-skeleton';
import { ProjectsListContainer } from './projects-list-container.styled';
import { ProjectsListWrapper } from './projects-list-wrapper.styled';

interface ProjectsListProps {}

export const ProjectsList: React.FC<ProjectsListProps> = () => {
  const { data, loading, error } = useFetchProjects();

  // TODO: add error svg and on error and when no projects were found
  if (error) return <span>Error: {error.message}</span>;

  return (
    <ProjectsListContainer>
      <ProjectsListWrapper>
        {loading ? (
          <ProjectListSkeleton />
        ) : (
          data?.fetchProjects?.projects.map((project) => (
            <ProjectItem key={project.id} project={project} />
          ))
        )}
      </ProjectsListWrapper>
    </ProjectsListContainer>
  );
};