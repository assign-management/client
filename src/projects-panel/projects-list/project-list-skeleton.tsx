import React, { useEffect, useState } from 'react';
import { ProjectItemSkeleton, PROJECT_ITEM_TOTAL_HEIGHT } from '../project-item';

const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });

  const handleResize = () => {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Call handler right away so state gets updated with initial window size
      handleResize();
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }
  }, []);

  return windowSize;
};

export const ProjectListSkeleton: React.FC = () => {
  const { height } = useWindowSize();
  const skeletonNum = Math.floor(height / PROJECT_ITEM_TOTAL_HEIGHT);

  return (
    <>
      {Array.from({ length: skeletonNum }, (_, key) => (
        <ProjectItemSkeleton key={key} />
      ))}
    </>
  );
};
