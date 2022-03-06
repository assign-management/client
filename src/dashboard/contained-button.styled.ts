import { Button } from '@mui/material';
import { styled } from '@mui/system';
import { css } from '@emotion/react';

export const ContainedButton = styled(Button)`
  ${({ theme }) => css`
    position: relative;

    display: flex;
    justify-content: center;
    align-items: center;

    min-height: 4.5rem;
    min-width: 9rem;
    margin: 1rem 0;
    padding: 0;

    text-transform: capitalize;
    font-size: 1.6rem;
    font-weight: 600;

    transition: all 0.2s;
    background: #0073b1;
    color: #fff;

    &:hover {
      box-shadow: ${(theme.shadows as number[])[5]};
      background: #0073b1;
    }

    &:disabled {
      background: #0073b1;
    }
  `}
`;

ContainedButton.defaultProps = {
  variant: 'contained',
  color: 'primary',
};
