import React from 'react';
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
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import HomeIcon from '@mui/icons-material/Home';

const MenuPage = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
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
      <Box className="demo-box">
        <Grid container className="demo-grid">
          {/* First Stack (Left Side) */}
          <Stack className="stack" spacing={2}>
            {/* Basic Menu */}
            <Paper root elevation rounded elevation0 className="demo-paper">
              <Typography variant="body1" title className="demo-typography">
                Basic Menu
              </Typography>
              <Divider sx={{ mt: 0.25, mb: 1.25 }} />
              <CardContent className="demo-output">
                <Grid container spacing={2} className="grid-card">
                  <Button
                    id="basic-button"
                    aria-controls={open ? 'basic-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                    onClick={handleClick}
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
            <Paper root elevation rounded elevation0 className="demo-paper">
              <Typography variant="body1" title className="demo-typography">
                Icon menu
              </Typography>
              <Divider sx={{ mt: 0.25, mb: 1.25 }} />
              <CardContent className="demo-output">
                <Grid container spacing={2} className="grid-card">
                  <MenuList>
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

            {/* Sizes Button */}
            <Paper root elevation rounded elevation0 className="demo-paper">
              <Typography variant="body1" title className="demo-typography">
                Sizes
              </Typography>
              <Divider sx={{ mt: 0.25, mb: 1.25 }} />
              <CardContent className="demo-output">
                <Grid container spacing={2} className="grid-card">
                  <Button variant="outlined" size="small">
                    Small
                  </Button>
                  <Button variant="outlined" size="medium">
                    Medium
                  </Button>
                  <Button variant="outlined" size="large">
                    Large
                  </Button>
                </Grid>
              </CardContent>
            </Paper>
          </Stack>

          {/* Right Stack (Right Side) */}
          <Stack className="stack" spacing={2}>
            {/* Outlined Button */}
            <Paper root elevation rounded elevation0 className="demo-paper">
              <Typography variant="body1" title className="demo-typography">
                Outlined Button
              </Typography>
              <Divider sx={{ mt: 0.25, mb: 1.25 }} />
              <CardContent className="demo-output">
                <Grid container spacing={2} className="grid-card">
                  <Button variant="outlined">Default</Button>
                  <Button variant="outlined" color="secondary">
                    Secondary
                  </Button>
                  <Button variant="outlined" color="info">
                    Info
                  </Button>
                  <Button variant="outlined" color="success">
                    Success
                  </Button>
                  <Button variant="outlined" color="warning">
                    Warning
                  </Button>
                  <Button variant="outlined" color="error">
                    Error
                  </Button>
                </Grid>
              </CardContent>
            </Paper>

            {/* Disabled Button */}
            <Paper root elevation rounded elevation0 className="demo-paper">
              <Typography variant="body1" title className="demo-typography">
                Disabled Button
              </Typography>
              <Divider sx={{ mt: 0.25, mb: 1.25 }} />
              <CardContent className="demo-output">
                <Grid container spacing={2} className="grid-card">
                  <Button disabled>Default</Button>
                  <Button variant="contained" disabled>
                    Contained
                  </Button>
                  <Button variant="outlined" disabled>
                    Outlined
                  </Button>
                  <Button startIcon={<HomeIcon />} disabled>
                    Home
                  </Button>
                  <Button variant="contained" endIcon={<SendIcon />} disabled>
                    Send
                  </Button>
                  <Button variant="outlined" startIcon={<DeleteIcon />} disabled>
                    Delete
                  </Button>
                </Grid>
              </CardContent>
            </Paper>

            {/* With Icon */}
            <Paper root elevation rounded elevation0 className="demo-paper">
              <Typography variant="body1" title className="demo-typography">
                With Icon
              </Typography>
              <Divider sx={{ mt: 0.25, mb: 1.25 }} />
              <CardContent className="demo-output">
                <Grid container spacing={2} className="grid-card">
                  <Button startIcon={<HomeIcon />}>Home</Button>
                  <Button variant="contained" endIcon={<SendIcon />}>
                    Send
                  </Button>
                  <Button variant="outlined" startIcon={<DeleteIcon />}>
                    Delete
                  </Button>
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
