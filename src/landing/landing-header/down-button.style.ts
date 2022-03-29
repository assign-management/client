import { Button, styled, css } from '@mui/material';
import { scrollMoveInKeyframe } from './animation/scroll-move-in.keyframe';
import { touchScrollKeyframe } from './animation/touch-scroll.keyframe';

export const DownButton = styled(Button)`
  ${({ theme }) => css`
    min-width: 0;
    padding: 0;
    color: #fff;
    position: absolute;
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);
    transition: all 0.3s;
    border: 2px solid #fff;
    border-radius: 50px;
    width: 30px;
    height: 50px;
    animation: ${scrollMoveInKeyframe} 1s ease-out;
    animation-delay: 0.8s;
    animation-fill-mode: backwards;

    &:hover,
    &:active,
    &:focus {
      outline: none;
      background: radial-gradient(#000, #fff);
    }

    &:focus,
    &:hover {
      opacity: 0.5;
    }

    &:active {
      opacity: 1;
    }

    &::before {
      position: absolute;
      background-color: #fff;
      content: '';
      width: 4px;
      height: 4px;
      border-radius: 100%;
      transform: translateX(-50%);
      top: 10px;
      left: 50%;
      animation: ${touchScrollKeyframe} 1.3s infinite;
    }

    ${theme.breakpoints.down('sm')} {
      display: none;
    }
  `}
`;
