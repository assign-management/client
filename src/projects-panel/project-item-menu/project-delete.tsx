import { Dialog, ListItemIcon, MenuItem } from '@mui/material';
import React from 'react';
import { GoX } from 'react-icons/go';
import { useDialog } from '../../common/dialog.hook';
import { FetchProjects_fetchProjects_projects } from '../projects-list/__generated__/FetchProjects';
import { ProjectDeleteContent } from './project-delete-content';
import { ProjectDeleteForm } from './project-delete-form';
import { ProjectDeleteHeader } from './project-delete-header';

interface ProjectDeleteProps {
  closeDropdown: () => void;
  project: FetchProjects_fetchProjects_projects;
}

export const ProjectDelete: React.FC<ProjectDeleteProps> = ({ closeDropdown, project }) => {
  const { open, openDialog, closeDialog, handleTabPropagation } = useDialog(false, closeDropdown);
  return (
    <>
      <MenuItem onClick={openDialog}>
        <ListItemIcon>
          <GoX />
        </ListItemIcon>
        Delete
      </MenuItem>

      <Dialog maxWidth="sm" open={open} onClose={closeDialog} onKeyDown={handleTabPropagation}>
        <ProjectDeleteHeader closeDialog={closeDialog} />
        <ProjectDeleteContent projectTitle={project.title} />
        <ProjectDeleteForm project={project} closeDialog={closeDialog} />
      </Dialog>
    </>
  );
};
