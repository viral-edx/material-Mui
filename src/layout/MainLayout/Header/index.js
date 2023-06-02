import PropTypes from 'prop-types';

// material-ui
import { useTheme } from '@mui/material/styles';
import { Avatar, Box, ButtonBase } from '@mui/material';

// project imports
import LogoSection from '../LogoSection';
import SearchSection from './SearchSection';
// import ProfileSection from './ProfileSection';
// import NotificationSection from './NotificationSection';

// assets
import { IconMenu2 } from '@tabler/icons';
import NotificationSection from './NotificationSection';
import ProfileSection from './ProfileSection';

// ==============================|| MAIN NAVBAR / HEADER ||============================== //

const Header = ({ handleLeftDrawerToggle }) => {
  const theme = useTheme();

  return (
    <>
      {/* logo & toggler button */}
      <Box
        sx={{
          width: 100,
          [theme.breakpoints.down('md')]: {
            width: 'auto'
          }
        }}
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
      </Box>

      <Box component="span" sx={{ display: { xs: 'none', md: 'flex' }, marginTop: '15px' }}>
        <LogoSection />
      </Box>
      {/* header search */}

      <SearchSection />

      {/* notification and profile section */}
      <NotificationSection />
      <ProfileSection />
    </>
  );
};

Header.propTypes = {
  handleLeftDrawerToggle: PropTypes.func
};

export default Header;
