import { IconButton } from '@mui/material';
import React from 'react';
import { DashboardSearchForm } from './dashboard-search-form.styled';
import { DashboardSearchIcon } from './dashboard-search-icon.styled';
import { DashboardSearchInput } from './dashboard-search-input.styled';
import { RiCloseFill } from 'react-icons/ri';
import { DashboardSearchProps } from './dashboard-search-props.interface';

const EMPTY = '';
const SEARCH_PLACEHOLDER = 'Search Content';

export const DashboardSearch: React.FC<DashboardSearchProps> = ({ value, onChange }) => {
  const clearSearch = () => onChange(EMPTY);
  const handleInputChange:
    | React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>
    | undefined = (e) => onChange(e.target.value);

  return (
    <DashboardSearchForm>
      <DashboardSearchIcon />
      <DashboardSearchInput onChange={handleInputChange} placeholder={SEARCH_PLACEHOLDER} />
      <IconButton style={{ visibility: value ? 'visible' : 'hidden' }} onClick={clearSearch}>
        <RiCloseFill />
      </IconButton>
    </DashboardSearchForm>
  );
};
