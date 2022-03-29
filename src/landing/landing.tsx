import React from 'react';
import { About } from './about';
import { LandingHeader } from './landing-header';

export const Landing: React.FC = () => {
  return (
    <>
      <LandingHeader />
      <About />
    </>
  );
};
