import React from 'react';
import { useUpdateSection } from '../section/update-section.hook';
import { SectionFields } from '../__generated__/SectionFields';

interface SectionRenameProps {
  handleHide: () => void;
  section: SectionFields;
}

export const SectionRename: React.FC<SectionRenameProps> = ({ handleHide, section }) => {
  const { updateSection } = useUpdateSection(section.id);
  return <div>SectionRename</div>;
};
