import React from 'react';
import { UserAvatar } from './user-avatar.styled';
import { UserOptionsMenuButton } from './user-options-button-wrapper.styled';

interface UserOptionsButtonProps {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  letter?: string | null;
}

export const UserOptionsButton: React.FC<UserOptionsButtonProps> = ({ letter, onClick }) => {
  return (
    <UserOptionsMenuButton color="inherit" onClick={onClick}>
      <UserAvatar>{letter}</UserAvatar>
    </UserOptionsMenuButton>
  );
};
