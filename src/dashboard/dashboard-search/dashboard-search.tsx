import { IconButton } from '@mui/material';
import React from 'react';
import { DashboardSearchForm } from './dashboard-search-form.styled';
import { DashboardSearchIcon } from './dashboard-search-icon.styled';
import { DashboardSearchInput } from './dashboard-search-input.styled';
import { RiCloseFill } from 'react-icons/ri';
import { searchVar } from '../../apollo';
import { useReactiveVar } from '@apollo/client';

const EMPTY = '';
const SEARCH_PLACEHOLDER = 'Search Content';

export const DashboardSearch: React.FC = () => {
  const searchValue = useReactiveVar(searchVar);
  const clearSearch = () => searchVar(EMPTY);
  const handleInputChange:
    | React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>
    | undefined = (e) => searchVar(e.target.value);

  return (
    <DashboardSearchForm>
      <DashboardSearchIcon />
      <DashboardSearchInput
        value={searchValue}
        onChange={handleInputChange}
        placeholder={SEARCH_PLACEHOLDER}
      />
      <IconButton style={{ visibility: searchValue ? 'visible' : 'hidden' }} onClick={clearSearch}>
        <RiCloseFill />
      </IconButton>
    </DashboardSearchForm>
  );
};
