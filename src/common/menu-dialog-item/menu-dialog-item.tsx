import { DialogContent, MenuItem } from '@mui/material';
import React from 'react';
import { DialogFormPropsProps } from './dialog-form-props.interface';
import { DialogHeader } from './dialog-header/dialog-header';
import { useDialog } from './dialog.hook';
import { MenuDialog } from './menu-dialog.styled';

interface MenuDialogItemProps {
  content: React.ReactNode;
  onClick: () => void;
  form: React.ComponentType<DialogFormPropsProps>;
  title: string;
}

export const MenuDialogItem: React.FC<MenuDialogItemProps> = ({
  children,
  onClick,
  form: Form,
  title,
}) => {
  const { open, handleOpen, handleClose, handleTabPropagation } = useDialog(false, onClick);
  return (
    <>
      <MenuItem onClick={handleOpen}>{children}</MenuItem>

      <MenuDialog onClose={handleClose} open={open} onKeyDown={handleTabPropagation}>
        <DialogHeader handleClose={handleClose} title={title} />
        <DialogContent>
          <Form handleClose={handleClose} />
        </DialogContent>
      </MenuDialog>
    </>
  );
};
