import React from 'react';
import { BiLayerPlus } from 'react-icons/bi';
import { MenuDialogItem } from '../../../common/menu-dialog-item';

import { ProjectCreateButton } from './project-create-button';
import { ProjectCreateForm } from './project-create-form';

interface ProjectCreateProps {
  onClick: () => void;
}

export const ProjectCreate: React.FC<ProjectCreateProps> = (props) => {
  return (
    <MenuDialogItem
      title="Create Project"
      {...props}
      content={<ProjectCreateButton />}
      form={ProjectCreateForm}
    >
      <BiLayerPlus /> New Project
    </MenuDialogItem>
  );
};
