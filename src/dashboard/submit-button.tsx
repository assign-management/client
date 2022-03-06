import React from 'react';
import { ContainedButton } from './contained-button.styled';
import { ProgressCircular } from './progress-circular.styled';

interface SubmitButtonProps {
  inProgress: boolean;
  text?: string;
}

export const SubmitButton: React.FC<SubmitButtonProps> = ({ inProgress, text }) => {
  return (
    <ContainedButton type="submit" disabled={inProgress}>
      {inProgress ? <ProgressCircular size="2.4rem" /> : text}
    </ContainedButton>
  );
};

SubmitButton.defaultProps = {
  text: 'Submit',
};
