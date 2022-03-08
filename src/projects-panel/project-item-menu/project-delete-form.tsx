import React from 'react';
import { DialogFormProps } from '../../common/menu-dialog-item';
import { ProjectItemProps } from '../project-item';
import { FetchProjects_fetchProjects_projects } from '../projects-list/__generated__/FetchProjects';

export interface ProjectDeleteFormProps extends DialogFormProps {
  project: FetchProjects_fetchProjects_projects;
}

export const ProjectDeleteForm: React.FC<ProjectDeleteFormProps> = ({
  handleDialogClose,
  project,
}) => {
  return <div>ProjectDeleteForm</div>;
};
