import React from 'react';
import { BiLayerPlus } from 'react-icons/bi';
import { DialogFormProps, MenuDialogItem } from '../../../common/menu-dialog-item';

import { ProjectCreateForm } from './project-create-form';

interface ProjectCreateProps {
  closeDropdown: () => void;
}

export const ProjectCreate: React.FC<ProjectCreateProps> = (props) => {
  return (
    <MenuDialogItem {...props} title="Create Project" form={ProjectCreateForm}>
      <BiLayerPlus /> New Project
    </MenuDialogItem>
  );
};
