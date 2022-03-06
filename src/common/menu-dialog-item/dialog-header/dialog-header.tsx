import { Typography } from '@mui/material';
import React from 'react';
import { MdClose } from 'react-icons/md';
import { CloseButton } from './close-button.styled';
import { DialogHeaderWrapper } from './dialog-header-wrapper.styled';

interface DialogHeaderProps {
  handleClose: React.MouseEventHandler<HTMLButtonElement>;
  title: string;
}

export const DialogHeader: React.FC<DialogHeaderProps> = ({ handleClose, title }) => {
  return (
    <DialogHeaderWrapper>
      <Typography variant="h6" component="span">
        {title}
      </Typography>
      <CloseButton aria-label="close" onClick={handleClose}>
        <MdClose />
      </CloseButton>
    </DialogHeaderWrapper>
  );
};
