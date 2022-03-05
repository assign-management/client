import React from 'react';
import { LogoIcon } from './LogoIcon.styled';
import { LogoText } from './LogoText.styled';
import { LogoWrapper } from './LogoWrapper.styled';

interface LogoProps {
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({ className }) => {
  return (
    <LogoWrapper className={className}>
      <LogoIcon />
      <LogoText>Assign</LogoText>
    </LogoWrapper>
  );
};
