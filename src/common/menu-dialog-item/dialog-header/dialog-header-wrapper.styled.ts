import { DialogTitle } from '@mui/material';
import { styled } from '@mui/system';

export const DialogHeaderWrapper = styled(DialogTitle)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  &.MuiDialogTitle-root {
    padding-right: 1.2rem;
  }
`;
