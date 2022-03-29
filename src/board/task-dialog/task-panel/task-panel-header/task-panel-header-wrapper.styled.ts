import { DialogTitle, styled } from '@mui/material';

export const TaskPanelHeaderWrapper = styled(DialogTitle)`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  :first-child {
    flex: 1;
  }
`;
