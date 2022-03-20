import React from 'react';
import { BoardSectionsSkeleton } from './board-sections-skeleton';
import { BoardSectionsWrapper } from './board-sections-wrapper.styled';
import { useFetchSections } from './fetch-sections.hook';
import { Section } from './section/section';

interface BoardSectionsProps {
  projectId: string;
}

export const BoardSections: React.FC<BoardSectionsProps> = ({ projectId }) => {
  const { sections, loading } = useFetchSections(projectId);
  console.log('sections', sections);

  return (
    <BoardSectionsWrapper>
      {loading ? (
        <BoardSectionsSkeleton />
      ) : (
        sections?.map((section) => <Section key={section.id} section={section} />)
      )}
    </BoardSectionsWrapper>
  );
};
