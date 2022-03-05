import { styled } from '@mui/system';

export const LogoWrapper = styled('a')`
  display: inline-flex;
  align-items: center;
  font-size: 4rem;
  color: #fff;
  transition: all 0.5s;
  &:hover {
    opacity: 0.8;
  }
  &:focus,
  &:active {
    background: radial-gradient(rgba(255, 255, 255, 0.4) 10%, transparent, transparent);
    opacity: 0.8;
    border-radius: 30%;
    outline: none;
  }
`;

LogoWrapper.defaultProps = { href: '/' };
