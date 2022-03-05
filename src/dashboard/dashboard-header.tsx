import { Container, Grid } from '@mui/material';
import React from 'react';
import { DashboardAppBar } from './dashboard-app-bar.styled';
import { DashboardCreate } from './dashboard-create';
import { DashboardLogo } from './dashboard-logo.style';
import { DashboardNav } from './dashboard-nav';
import { DashboardSearch, DashboardSearchProps } from './dashboard-search';

import { DashboardToolbar } from './dashboard-toolbar.styled';
import { UserOptions } from './user-options';

interface DashboardHeaderProps extends DashboardSearchProps {}

export const DashboardHeader: React.FC<DashboardHeaderProps> = (props) => {
  return (
    <DashboardAppBar position="static" elevation={0} variant="outlined" color="default">
      <Container maxWidth="xl">
        <DashboardToolbar>
          <Grid container direction="row" wrap="nowrap">
            <DashboardLogo />
            <DashboardSearch {...props} />
          </Grid>
          <DashboardNav />
          <Grid container direction="row" justifyContent="flex-end" wrap="nowrap">
            <DashboardCreate />
            <UserOptions />
          </Grid>
        </DashboardToolbar>
      </Container>
    </DashboardAppBar>
  );
};
