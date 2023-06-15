import { useState, useRef, useEffect } from 'react';

import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import Logo from '../../../../assets/images/logo-icon-1.svg';

// material-ui
import { useTheme } from '@mui/material/styles';
import {
  Avatar,
  Box,
  ClickAwayListener,
  Divider,
  Grid,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Paper,
  Popper,
  Stack,
  Typography
} from '@mui/material';

// project imports
import MainCard from 'uiComponent/cards/MainCard';
import Transitions from 'uiComponent/extended/Transitions';

// assets
import { Logout, Person, Settings } from '@mui/icons-material';

// ==============================|| PROFILE MENU ||============================== //

const ProfileSection = () => {
  const theme = useTheme();
  const customization = useSelector((state) => state.customization);
  const navigate = useNavigate();
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const [open, setOpen] = useState(false);

  const anchorRef = useRef(null);
  const handleLogout = async () => {};

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }
    setOpen(false);
  };

  const handleListItemClick = (event, index, route = '') => {
    setSelectedIndex(index);
    handleClose(event);

    if (route && route !== '') {
      navigate(route);
    }
  };
  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const prevOpen = useRef(open);

  useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);

  const handleKeyDown = (event) => {
    if (event.key === 'Enter' || event.key === '') {
      handleToggle();
    }
  };

  return (
    <>
      <div className="profile-chip-section" role="button" tabIndex={0} onClick={handleToggle} onKeyDown={handleKeyDown}>
        <img src={Logo} alt="Company Logo" />
        <Avatar
          sx={{
            ...theme.typography.mediumAvatar
          }}
          ref={anchorRef}
          aria-controls={open ? 'menu-list-grow' : undefined}
          aria-haspopup="true"
          className="profileAvatar"
        />
      </div>
      <Popper
        placement="bottom-end"
        open={open}
        anchorEl={anchorRef.current}
        role={undefined}
        transition
        disablePortal
        popperOptions={{
          modifiers: [
            {
              name: 'offset',
              options: {
                offset: [0, 14]
              }
            }
          ]
        }}
      >
        {({ TransitionProps }) => (
          <Transitions in={open} {...TransitionProps}>
            <Paper>
              <ClickAwayListener onClickAway={handleClose}>
                <MainCard border={false} elevation={16} content={false} boxShadow shadow={theme.shadows[16]}>
                  <Box sx={{ p: 2, width: '400px', background: theme.palette.secondary.dark }}>
                    <Stack>
                      <Typography variant="subtitle2" textAlign="center" marginBottom="10px">
                        This account is managed by ioMarket.team
                      </Typography>

                      <List
                        component="nav"
                        className="inner-box-profile-section"
                        sx={{
                          [theme.breakpoints.down('md')]: {
                            minWidth: '100%'
                          }
                        }}
                      >
                        <ListItemButton
                          sx={{ borderRadius: `${customization.borderRadius}px` }}
                          className="item-profile-section"
                          selected={selectedIndex === 0}
                          onClick={(event) => handleListItemClick(event, 0, '#')}
                        >
                          <ListItemIcon>
                            <Settings stroke={2.5} size="1.3rem" />
                          </ListItemIcon>
                          <ListItemText primary={<Typography variant="body2">Account Settings</Typography>} />
                        </ListItemButton>
                        <ListItemButton
                          sx={{ borderRadius: `${customization.borderRadius}px`, marginTop: '5px' }}
                          selected={selectedIndex === 1}
                          className="item-profile-section"
                          onClick={(event) => handleListItemClick(event, 1, '#')}
                        >
                          <ListItemIcon>
                            <Person stroke={2.5} size="1.3rem" />
                          </ListItemIcon>
                          <ListItemText
                            primary={
                              <Grid container spacing={1} justifyContent="space-between">
                                <Grid item>
                                  <Typography variant="body2">Social Profile</Typography>
                                </Grid>
                              </Grid>
                            }
                          />
                        </ListItemButton>
                      </List>
                    </Stack>
                    <ListItemButton
                      sx={{ borderRadius: `${customization.borderRadius}px` }}
                      selected={selectedIndex === 4}
                      onClick={handleLogout}
                      className="item-profile-section"
                    >
                      <ListItemIcon>
                        <Logout stroke={2.5} size="1.3rem" />
                      </ListItemIcon>
                      <ListItemText primary={<Typography variant="body2">Sign Out</Typography>} />
                    </ListItemButton>
                    <Divider style={{ marginTop: '10px' }} />
                    <Typography variant="subtitle2" textAlign="center" marginTop="10px">
                      <div className="privacy-terms-of-service-setting">
                        <Link to="/" className="blue_link">
                          Privacy Policy
                        </Link>
                        <Link to="/" className="blue_link">
                          Terms of Service
                        </Link>
                      </div>
                    </Typography>
                  </Box>
                </MainCard>
              </ClickAwayListener>
            </Paper>
          </Transitions>
        )}
      </Popper>
    </>
  );
};

export default ProfileSection;
