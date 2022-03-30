import { DialogTitle, styled } from '@mui/material';

export const TaskPanelHeaderWrapper = styled(DialogTitle)`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  :first-of-type {
    flex: 1;
  }
`;
