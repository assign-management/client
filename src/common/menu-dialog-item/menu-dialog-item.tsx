import { DialogContent, MenuItem } from '@mui/material';
import React from 'react';
import { DialogFormProps, DialogFormPropsWithInitialData } from './dialog-form-props.interface';
import { DialogHeader } from './dialog-header/dialog-header';
import { useDialog } from './dialog.hook';
import { MenuDialog } from './menu-dialog.styled';

interface MenuDialogItemProps {
  closeDropdown: () => void;
  form: React.ComponentType<any>;
  title: string;
  formAdditionalProps?: unknown;
}

export const MenuDialogItem: React.FC<MenuDialogItemProps> = ({
  children,
  closeDropdown,
  form: Form,
  title,
  formAdditionalProps,
}) => {
  const { open, handleOpen, handleClose, handleTabPropagation } = useDialog(false, closeDropdown);
  return (
    <>
      <MenuItem onClick={handleOpen}>{children}</MenuItem>

      <MenuDialog onClose={handleClose} open={open} onKeyDown={handleTabPropagation}>
        <DialogHeader handleClose={handleClose} title={title} />
        <DialogContent>
          <Form handleDialogClose={handleClose} {...formAdditionalProps} />
        </DialogContent>
      </MenuDialog>
    </>
  );
};
