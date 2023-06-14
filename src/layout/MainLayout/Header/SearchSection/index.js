import PropTypes from 'prop-types';
import { useState } from 'react';

// material-ui
import { useTheme, styled } from '@mui/material/styles';
import { Box, InputAdornment, OutlinedInput } from '@mui/material';

// third-party
import PopupState from 'material-ui-popup-state';

// assets
import { shouldForwardProp } from '@mui/system';
import { Search } from '@mui/icons-material';

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

// ==============================|| SEARCH INPUT - MOBILE||============================== //

const MobileSearch = ({ value, setValue }) => {
  const theme = useTheme();

  return (
    <OutlineInputStyle
      id="input-search-header"
      value={value}
      onChange={(e) => setValue(e.target.value)}
      placeholder="Search"
      startAdornment={
        <InputAdornment position="start">
          <Search stroke={1.5} size="1rem" color={theme.palette.grey[500]} />
        </InputAdornment>
      }
      aria-describedby="search-helper-text"
      inputProps={{ 'aria-label': 'weight' }}
    />
  );
};

MobileSearch.propTypes = {
  value: PropTypes.string,
  setValue: PropTypes.func,
  popupState: PopupState
};

// ==============================|| SEARCH INPUT ||============================== //

const SearchSection = () => {
  const theme = useTheme();
  const [value, setValue] = useState('');

  return (
    <>
      <Box sx={{ display: { xs: 'none', md: 'block' }, paddingTop: '14px', width: '100%' }}>
        <OutlineInputStyle
          id="input-search-header"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Search"
          startAdornment={
            <InputAdornment position="start">
              <Search stroke={1.5} size="1rem" color={theme.palette.grey[500]} />
            </InputAdornment>
          }
          sx={{ marginLeft: '100px' }}
          aria-describedby="search-helper-text"
          inputProps={{ 'aria-label': 'weight' }}
        />
      </Box>
    </>
  );
};

export default SearchSection;
