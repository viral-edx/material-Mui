import {
  Drafts,
  ExpandLess,
  ExpandMore,
  FileOpenOutlined,
  Inbox,
  Send,
  SpaceDashboardOutlined,
  StarBorder,
  TabUnselectedOutlined
} from '@mui/icons-material';
import {
  Avatar,
  Box,
  CardContent,
  Checkbox,
  Collapse,
  Grid,
  List,
  ListItem,
  ListItemAvatar,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  ListSubheader,
  Paper,
  Stack,
  Typography
} from '@mui/material';
import { FixedSizeList } from 'react-window';
import React, { useState } from 'react';
import DividerPage from 'utils/Divider';

function renderRow(props) {
  const { index, style } = props;

  return (
    <ListItem style={style} key={index} component="div" disablePadding>
      <ListItemButton className="list-hover-item">
        <ListItemText primary={`Item ${index + 1}`} />
      </ListItemButton>
    </ListItem>
  );
}

const ListsPage = () => {
  const [open, setOpen] = useState(true);
  const [checked, setChecked] = React.useState([1]);

  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <>
      <Box>
        <Typography variant="h2" className="title">
          Lists
        </Typography>
        <Typography variant="h6" className="description">
          Lists are continuous, vertical indexes of text or images.
        </Typography>
      </Box>

      <Box className="demoBox">
        <Grid container className="demoGrid">
          {/* First Stack (Left Side) */}
          <Stack className="stack" spacing={2}>
            {/* Basic List */}
            <Paper root rounded className="demo-paper">
              <Typography variant="body1" title className="demo-typography">
                Basic List
              </Typography>
              <DividerPage />
              <CardContent className="demo-output">
                <Grid container spacing={2} className="grid-card">
                  <List className="list-page" component="nav" aria-label="mailbox folders">
                    <ListItem divider>
                      <ListItemButton className="list-hover-item">
                        <ListItemText primary="List item 01" />
                      </ListItemButton>
                    </ListItem>
                    <ListItem divider>
                      <ListItemButton className="list-hover-item">
                        <ListItemText primary="List item 02" />
                      </ListItemButton>
                    </ListItem>
                    <ListItem divider>
                      <ListItemIcon>
                        <ListItemButton className="list-hover-item">
                          <SpaceDashboardOutlined />
                        </ListItemButton>
                      </ListItemIcon>
                      <ListItemText primary="Sample" />
                    </ListItem>
                    <ListItem divider>
                      <ListItemIcon>
                        <ListItemButton className="list-hover-item">
                          <FileOpenOutlined />
                        </ListItemButton>
                      </ListItemIcon>
                      <ListItemText primary="Page" />
                    </ListItem>
                    <ListItem>
                      <ListItemIcon>
                        <ListItemButton className="list-hover-item">
                          <TabUnselectedOutlined />
                        </ListItemButton>
                      </ListItemIcon>
                      <ListItemText primary="UI Elements" />
                    </ListItem>
                  </List>
                </Grid>
              </CardContent>
            </Paper>

            {/* Sticky Sub-Header */}
            <Paper root rounded className="demo-paper">
              <Typography variant="body1" title className="demo-typography">
                Sticky Sub-Header
              </Typography>
              <DividerPage />
              <CardContent className="demo-output">
                <Grid container spacing={2} className="grid-card">
                  <List
                    sx={{
                      width: '100%',
                      maxWidth: 360,
                      bgcolor: 'F3F3F4',
                      position: 'relative',
                      overflow: 'auto',
                      maxHeight: 300,
                      '& ul': { padding: 0 }
                    }}
                    subheader={<li />}
                  >
                    {[0, 1, 2, 3, 4].map((sectionId) => (
                      <li key={`section-${sectionId}`}>
                        <ul>
                          <ListSubheader>{`I'm sticky ${sectionId}`}</ListSubheader>
                          {[0, 1, 2].map((item) => (
                            <ListItem key={`item-${sectionId}-${item}`}>
                              <ListItemText primary={`Item ${item}`} />
                            </ListItem>
                          ))}
                        </ul>
                      </li>
                    ))}
                  </List>
                </Grid>
              </CardContent>
            </Paper>
          </Stack>

          {/* Right Stack (Right Side) */}
          <Stack className="stack" spacing={2}>
            {/* Nested List */}
            <Paper root rounded className="demo-paper">
              <Typography variant="body1" title className="demo-typography">
                Nested List
              </Typography>
              <DividerPage />
              <CardContent className="demo-output">
                <Grid container spacing={2} className="grid-card">
                  <List className="list-page" component="nav" aria-label="mailbox folders">
                    <ListItemButton className="list-hover-item">
                      <ListItemIcon>
                        <Send />
                      </ListItemIcon>
                      <ListItemText primary="Sent mail" />
                    </ListItemButton>
                    <ListItemButton className="list-hover-item">
                      <ListItemIcon>
                        <Drafts />
                      </ListItemIcon>
                      <ListItemText primary="Drafts" />
                    </ListItemButton>
                    <ListItemButton className="list-hover-item" onClick={handleClick}>
                      <ListItemIcon>
                        <Inbox />
                      </ListItemIcon>
                      <ListItemText primary="Inbox" />
                      {open ? <ExpandLess /> : <ExpandMore />}
                    </ListItemButton>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                      <List component="div" disablePadding>
                        <ListItemButton sx={{ pl: 4, '&:hover': { bgcolor: 'transparent' } }}>
                          <ListItemIcon>
                            <StarBorder />
                          </ListItemIcon>
                          <ListItemText primary="Starred" />
                        </ListItemButton>
                      </List>
                    </Collapse>
                  </List>
                </Grid>
              </CardContent>
            </Paper>

            {/* List Controls */}
            <Paper root rounded className="demo-paper">
              <Typography variant="body1" title className="demo-typography">
                List Controls
              </Typography>
              <DividerPage />
              <CardContent className="demo-output">
                <Grid container spacing={2} className="grid-card">
                  <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                    {[0, 1, 2, 3].map((value) => {
                      const labelId = `checkbox-list-secondary-label-${value}`;
                      return (
                        <ListItem
                          key={value}
                          secondaryAction={
                            <Checkbox
                              edge="end"
                              onChange={handleToggle(value)}
                              checked={checked.indexOf(value) !== -1}
                              inputProps={{ 'aria-labelledby': labelId }}
                            />
                          }
                          disablePadding
                        >
                          <ListItemButton className="list-hover-item">
                            <ListItemAvatar>
                              <Avatar alt={`Avatar n°${value + 1}`} src={`/static/images/avatar/${value + 1}.jpg`} />
                            </ListItemAvatar>
                            <ListItemText id={labelId} primary={`Line item ${value + 1}`} />
                          </ListItemButton>
                        </ListItem>
                      );
                    })}
                  </List>
                </Grid>
              </CardContent>
            </Paper>

            {/* Virtualized List */}
            <Paper root rounded className="demo-paper">
              <Typography variant="body1" title className="demo-typography">
                Virtualized List
              </Typography>
              <DividerPage />
              <CardContent className="demo-output">
                <Grid container spacing={2} className="grid-card">
                  <Box sx={{ width: '100%', height: 400, maxWidth: 360, bgcolor: 'background.paper' }}>
                    <FixedSizeList height={400} width={360} itemSize={46} itemCount={200} overscanCount={5}>
                      {renderRow}
                    </FixedSizeList>
                  </Box>
                </Grid>
              </CardContent>
            </Paper>
          </Stack>
        </Grid>
      </Box>
    </>
  );
};

export default ListsPage;
