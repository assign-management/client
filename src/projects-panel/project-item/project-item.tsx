import { CardActionArea, CardHeader } from '@mui/material';
import Link from 'next/link';
import React from 'react';
import { FetchProjects_fetchProjects_projects } from '../projects-list/__generated__/FetchProjects';
import { ProjectItemWrapper } from './project-item-wrapper.styled';

interface ProjectItemProps {
  project: FetchProjects_fetchProjects_projects;
}

export const ProjectItem: React.FC<ProjectItemProps> = ({ project }) => {
  return (
    <ProjectItemWrapper>
      <Link passHref href={`/board/${project.id}`}>
        <CardActionArea>
          <CardHeader title={project.title} subheader={project.accessibility.toLocaleLowerCase()} />
        </CardActionArea>
      </Link>
    </ProjectItemWrapper>
  );
};
