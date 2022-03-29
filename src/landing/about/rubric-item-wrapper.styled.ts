import { styled, css } from '@mui/material';

export const RubricItemWrapper = styled('div')`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    &:not(:last-child) {
      margin-bottom: 5rem;
    }
    ${theme.breakpoints.down('md')} {
      justify-content: 'center';
      align-items: center;
      margin: 3rem;
      margin-top: 5rem;
    }
  `}
`;
