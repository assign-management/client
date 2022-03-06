import React from 'react';
import { ProjectsPanelFilter } from './projects-panel-filter';
import { ProjectsPanelWrapper } from './projects-panel-wrapper.styled';

interface ProjectsPanelProps {}

export const ProjectsPanel: React.FC<ProjectsPanelProps> = () => {
  return (
    <ProjectsPanelWrapper>
      <ProjectsPanelFilter />
    </ProjectsPanelWrapper>
  );
};
