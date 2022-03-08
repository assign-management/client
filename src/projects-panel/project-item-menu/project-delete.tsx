import { ListItemIcon, MenuItem } from '@mui/material';
import React from 'react';
import { GoX } from 'react-icons/go';
import { MenuDialogItem } from '../../common/menu-dialog-item';
import { ProjectDeleteForm } from './project-delete-form';

interface ProjectDeleteProps {
  closeDropdown: () => void;
}

export const ProjectDelete: React.FC<ProjectDeleteProps> = (props) => {
  return (
    <MenuDialogItem
      title="Create Project"
      {...props}
      form={ProjectDeleteForm as any}
      formAdditionalProps={props}
    >
      <ListItemIcon>
        <GoX />
      </ListItemIcon>
      Delete
    </MenuDialogItem>
  );
};
