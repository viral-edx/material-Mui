import React, { useState } from 'react';
import { Search } from '@mui/icons-material';
import { Box, InputAdornment, OutlinedInput } from '@mui/material';
import { useTheme, styled } from '@mui/material/styles';
import { shouldForwardProp } from '@mui/system';

const OutlineInputStyle = styled(OutlinedInput, { shouldForwardProp })(({ theme }) => ({
  width: 434,
  marginLeft: 16,
  paddingLeft: 16,
  paddingRight: 16,
  '& input': {
    background: 'transparent !important',
    paddingLeft: '4px !important'
  },
  [theme.breakpoints.down('lg')]: {
    width: 250
  },
  [theme.breakpoints.down('md')]: {
    width: '100%',
    marginLeft: 4,
    background: theme.palette.background.paper
  }
}));

const SearchBar = () => {
  const theme = useTheme();
  const [value, setValue] = useState('');

  return (
    <Box sx={{ display: { xs: 'none', md: 'block' }, paddingTop: '14px', width: '50%' }}>
      <OutlineInputStyle
        className="text-field textfield-border"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Search"
        startAdornment={
          <InputAdornment position="start">
            <Search stroke={1.5} size="1rem" color={theme.palette.grey[500]} />
          </InputAdornment>
        }
        aria-describedby="search-helper-text"
        color="tertiary"
        inputProps={{ 'aria-label': 'weight' }}
      />
    </Box>
  );
};

export default SearchBar;
