import React from 'react';
import { OpenAuthGithubButton } from './open-auth-github-button.styled';
import { OpenAuthGoogleButton } from './open-auth-google-button.styled';

export const OpenAuth: React.FC = () => {
  return (
    <>
      <OpenAuthGithubButton>continue with github</OpenAuthGithubButton>
      <OpenAuthGoogleButton>continue with google</OpenAuthGoogleButton>
    </>
  );
};
