import React from 'react';
import { TaskList } from '../task-list';
import { SectionFields } from '../__generated__/SectionFields';
import { SectionWrapper } from './board-section-wrapper.styled';
import { SectionContainer } from './section-container.styled';
import { SectionContent } from './section-content.styled';
import { SectionHeader } from './section-header';
import { TaskCreate } from './task-create/task-create';

interface BoardSectionProps {
  section: SectionFields;
}

export const Section: React.FC<BoardSectionProps> = (props) => {
  return (
    <SectionContainer>
      <SectionWrapper>
        <SectionHeader {...props} />
        <SectionContent>
          <TaskList tasks={props?.section?.tasks ?? []} />
          <TaskCreate sectionId={props.section.id} />
        </SectionContent>
      </SectionWrapper>
    </SectionContainer>
  );
};
