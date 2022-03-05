import React from 'react';
import { BiLayerPlus } from 'react-icons/bi';

interface ProjectCreateButtonProps {}

export const ProjectCreateButton: React.FC<ProjectCreateButtonProps> = () => {
  return (
    <>
      <BiLayerPlus /> New Project
    </>
  );
};
