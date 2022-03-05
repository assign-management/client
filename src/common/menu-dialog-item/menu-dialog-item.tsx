import { MenuItem } from '@mui/material';
import React from 'react';
import { DialogFormPropsProps } from './dialog-form-props.interface';
import { useDialog } from './dialog.hook';
import { MenuDialog } from './menu-dialog.styled';

interface MenuDialogItemProps {
  content: React.ReactNode;
  onClick: () => void;
  form: React.ComponentType<DialogFormPropsProps>;
}

export const MenuDialogItem: React.FC<MenuDialogItemProps> = ({
  children,
  onClick,
  form: Form,
}) => {
  const { open, handleOpen, handleClose, handleTabPropagation } = useDialog(false, onClick);
  return (
    <>
      <MenuItem onClick={handleOpen}>{children}</MenuItem>
      <MenuDialog onClose={handleClose} open={open} onKeyDown={handleTabPropagation}>
        <Form onSubmit={handleClose} />
      </MenuDialog>
    </>
  );
};
