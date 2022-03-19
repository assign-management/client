import React from 'react';
import { SectionFields } from '../__generated__/SectionFields';
import { SectionWrapper } from './board-section-wrapper.styled';
import { SectionContainer } from './section-container.styled';
import { SectionHeader } from './section-header';

interface BoardSectionProps {
  section: SectionFields;
}

export const Section: React.FC<BoardSectionProps> = (props) => {
  return (
    <SectionContainer>
      <SectionWrapper>
        <SectionHeader {...props} />
      </SectionWrapper>
    </SectionContainer>
  );
};
