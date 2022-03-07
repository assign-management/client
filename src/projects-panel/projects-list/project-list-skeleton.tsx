import React, { useState } from 'react';
import { ProjectItemSkeleton, PROJECT_ITEM_TOTAL_HEIGHT } from '../project-item';
// TODO: find a solution to the ssr hydration error when the skelton num is dynamic
export const ProjectListSkeleton: React.FC = () => {
  const [height] = useState(typeof window === 'undefined' ? 0 : window?.innerHeight);
  const skeletonNum = Math.floor(height / PROJECT_ITEM_TOTAL_HEIGHT);

  return (
    <>
      {Array.from({ length: 3 }, (_, key) => (
        <ProjectItemSkeleton key={key} />
      ))}
    </>
  );
};
