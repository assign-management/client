import React from 'react';
import { OpenAuthGithubButton } from './open-auth-github-button.styled';
import { OpenAuthGoogleButton } from './open-auth-google-button.styled';

type OpenAuthDomain = 'github' | 'google';

const handleOpenAuth = (domain: OpenAuthDomain) => () => {
  window.open(`http://localhost:4000/auth/${domain}`, '_self');
};

export const OpenAuth: React.FC = () => {
  return (
    <>
      <OpenAuthGithubButton onClick={handleOpenAuth('github')}>
        continue with github
      </OpenAuthGithubButton>
      <OpenAuthGoogleButton onClick={handleOpenAuth('google')}>
        continue with google
      </OpenAuthGoogleButton>
    </>
  );
};
