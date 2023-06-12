import React, { useState } from 'react';
import {
  Typography,
  Box,
  Grid,
  Stack,
  Paper,
  Divider,
  CardContent,
  ListItemText,
  Button,
  Menu,
  MenuItem,
  MenuList,
  ListItemIcon
} from '@mui/material';
import ContentCut from '@mui/icons-material/ContentCut';
import ContentCopy from '@mui/icons-material/ContentCopy';
import ContentPaste from '@mui/icons-material/ContentPaste';
import Cloud from '@mui/icons-material/Cloud';
import DividerPage from 'utils/divider';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';
import { Fragment } from 'react';

const MenuPage = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      <Box>
        <Typography variant="h2" className="title">
          Menu
        </Typography>
        <Typography variant="h6" className="description">
          Menus display a list of choices on temporary surfaces.
        </Typography>
      </Box>
      <Box className="demoBox">
        <Grid container className="demoGrid">
          {/* First Stack (Left Side) */}
          <Stack className="stack" spacing={2}>
            {/* Basic Menu */}
            <Paper root rounded className="demoPaper">
              <Typography variant="body1" title className="demoTypography">
                Basic Menu
              </Typography>
              <DividerPage />
              <CardContent className="demoOutput">
                <Grid container spacing={2} className="gridCard">
                  <Button
                    id="basic-button"
                    aria-controls={open ? 'basic-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                    onClick={handleClick}
                    color="success"
                  >
                    Dashboard
                  </Button>
                  <Menu
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    MenuListProps={{
                      'aria-labelledby': 'basic-button'
                    }}
                  >
                    <MenuItem onClick={handleClose}>Profile</MenuItem>
                    <MenuItem onClick={handleClose}>My account</MenuItem>
                    <MenuItem onClick={handleClose}>Logout</MenuItem>
                  </Menu>
                </Grid>
              </CardContent>
            </Paper>

            {/* Icon menu */}
            <Paper root rounded className="demoPaper">
              <Typography variant="body1" title className="demoTypography">
                Icon menu
              </Typography>
              <DividerPage />
              <CardContent className="demoOutput">
                <Grid container spacing={2} className="gridCard">
                  <MenuList sx={{ backgroundColor: '#f3f3f4' }}>
                    <MenuItem>
                      <ListItemIcon>
                        <ContentCut fontSize="small" />
                      </ListItemIcon>
                      <ListItemText>Cut</ListItemText>
                      <Typography variant="body2" color="text.secondary">
                        ⌘X
                      </Typography>
                    </MenuItem>
                    <MenuItem>
                      <ListItemIcon>
                        <ContentCopy fontSize="small" />
                      </ListItemIcon>
                      <ListItemText>Copy</ListItemText>
                      <Typography variant="body2" color="text.secondary">
                        ⌘C
                      </Typography>
                    </MenuItem>
                    <MenuItem>
                      <ListItemIcon>
                        <ContentPaste fontSize="small" />
                      </ListItemIcon>
                      <ListItemText>Paste</ListItemText>
                      <Typography variant="body2" color="text.secondary">
                        ⌘V
                      </Typography>
                    </MenuItem>
                    <Divider />
                    <MenuItem>
                      <ListItemIcon>
                        <Cloud fontSize="small" />
                      </ListItemIcon>
                      <ListItemText>Web Clipboard</ListItemText>
                    </MenuItem>
                  </MenuList>
                </Grid>
              </CardContent>
            </Paper>
          </Stack>

          {/* Right Stack (Right Side) */}

          <Stack className="stack" spacing={2}>
            {/* Popup-state */}
            <Paper root rounded className="demoPaper">
              <Typography variant="body1" title className="demoTypography">
                Popup-state
              </Typography>
              <DividerPage />
              <CardContent className="demoOutput">
                <Grid container spacing={2} className="gridCard">
                  <PopupState variant="popover" popupId="demo-popup-menu">
                    {(popupState) => (
                      <Fragment>
                        <Button variant="contained" color="success" {...bindTrigger(popupState)}>
                          Dashboard
                        </Button>
                        <Menu {...bindMenu(popupState)}>
                          <MenuItem onClick={popupState.close}>Profile</MenuItem>
                          <MenuItem onClick={popupState.close}>My account</MenuItem>
                          <MenuItem onClick={popupState.close}>Logout</MenuItem>
                        </Menu>
                      </Fragment>
                    )}
                  </PopupState>
                </Grid>
              </CardContent>
            </Paper>
          </Stack>
        </Grid>
      </Box>
    </>
  );
};

export default MenuPage;
