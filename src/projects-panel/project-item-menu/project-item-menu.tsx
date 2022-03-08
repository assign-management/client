import React, { Fragment } from 'react';
import { ProjectIconButton } from './project-icon-button.styled';
import { GoKebabVertical, GoX } from 'react-icons/go';
import { useDropdown } from '../../common/dropdown.hook';
import { ListItemIcon, Menu } from '@mui/material';
import { ProjectItemProps } from '../project-item';
import { MenuDialogItem } from '../../common/menu-dialog-item';
import { ProjectDeleteForm } from './project-delete-form';

interface ProjectItemMenuProps extends ProjectItemProps {}

export const ProjectItemMenu: React.FC<ProjectItemMenuProps> = ({ project }) => {
  const { dropdown, openDropdown, closeDropdown } = useDropdown();

  return (
    <Fragment>
      <ProjectIconButton onClick={openDropdown}>
        <GoKebabVertical />
      </ProjectIconButton>

      <Menu
        anchorEl={dropdown}
        keepMounted
        open={Boolean(dropdown)}
        onClose={closeDropdown}
        transformOrigin={{
          vertical: 'center',
          horizontal: 'center',
        }}
      >
        <MenuDialogItem
          title="Are you absolutely sure?"
          closeDropdown={closeDropdown}
          form={ProjectDeleteForm}
          formAdditionalProps={{ project }}
        >
          <ListItemIcon>
            <GoX />
          </ListItemIcon>
          Delete
        </MenuDialogItem>
      </Menu>
    </Fragment>
  );
};
