import PropTypes from 'prop-types';

// material-ui
import { useTheme } from '@mui/material/styles';
import { Avatar, Box, ButtonBase } from '@mui/material';

// project imports
import LogoSection from '../LogoSection';
import SearchSection from './SearchSection';
import NotificationSection from './NotificationSection';
import ProfileSection from './ProfileSection';

// assets
import { IconMenu2 } from '@tabler/icons';
import React from 'react';

// ==============================|| MAIN NAVBAR / HEADER ||============================== //

const Header = ({ handleLeftDrawerToggle }) => {
  const theme = useTheme();

  return (
    <>
      {/* logo & toggler button */}
      <Box
        sx={{
          [theme.breakpoints.down('md')]: {
            width: 'auto'
          }
        }}
        className="logo-toggler-button-css"
      >
        <ButtonBase sx={{ borderRadius: '12px', overflow: 'hidden' }} className="btn_base">
          <Avatar
            variant="rounded"
            className="buttonHamburger"
            sx={{
              ...theme.typography.mediumAvatar
            }}
            onClick={handleLeftDrawerToggle}
          >
            <IconMenu2 stroke={1.5} size="1.5rem" />
          </Avatar>
        </ButtonBase>
        <Box component="span" sx={{ display: { xs: 'none', md: 'flex' }, marginTop: '15px', marginLeft: '25px' }}>
          <LogoSection />
        </Box>
      </Box>

      {/* header search */}
      <SearchSection />

      {/* notification and profile section */}

      <Box component="div" sx={{ display: 'flex', flexDirection: 'row' }}>
        <NotificationSection />
        <ProfileSection />
      </Box>
    </>
  );
};

Header.propTypes = {
  handleLeftDrawerToggle: PropTypes.func
};

export default Header;
