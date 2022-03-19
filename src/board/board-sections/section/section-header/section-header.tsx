import React, { useState } from 'react';
import { SectionRename } from '../../section-rename';
import { SectionFields } from '../../__generated__/SectionFields';
import { SectionMenu } from '../section-menu';
import { SectionHeaderTitle } from './section-header-title.styled';
import { SectionHeaderWrapper } from './section-header-wrapper.styled';

interface SectionHeaderProps {
  section: SectionFields;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({ section }) => {
  const [showForm, setShowForm] = useState(false);
  const handleShow = () => setShowForm(true);
  const handleHide = () => setShowForm(false);
  return (
    <SectionHeaderWrapper>
      {showForm ? (
        <SectionRename handleHide={handleHide} section={section} />
      ) : (
        <SectionHeaderTitle onClick={handleShow}>{section.title}</SectionHeaderTitle>
      )}

      <SectionMenu sectionId={section.id} />
    </SectionHeaderWrapper>
  );
};
