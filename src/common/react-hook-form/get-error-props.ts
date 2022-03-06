import { ControllerFieldState } from 'react-hook-form';

export const getErrorProps = ({ invalid, error }: ControllerFieldState) => ({
  error: invalid,
  helperText: error?.message ?? ' ',
});
