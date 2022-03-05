import React, { useState } from 'react';
import { DashboardContent } from './dashboard-content.styled';
import { DashboardHeader } from './dashboard-header';
import { DashboardWrapper } from './dashboard-wrapper.styled';

export const DashboardLayout: React.FC = ({ children }) => {
  const [term, setTerm] = useState('');

  return (
    <DashboardWrapper>
      <DashboardHeader value={term} onChange={setTerm} />
      <DashboardContent>{children}</DashboardContent>
    </DashboardWrapper>
  );
};
