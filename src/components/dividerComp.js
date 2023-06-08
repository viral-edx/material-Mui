import {
  Avatar,
  Box,
  CardContent,
  Divider,
  Grid,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Paper,
  Stack,
  Typography
} from '@mui/material';
import React from 'react';
import DividerPage from 'utils/divider';
import ImageIcon from '@mui/icons-material/Image';
import WorkIcon from '@mui/icons-material/Work';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';
import FormatAlignLeftIcon from '@mui/icons-material/FormatAlignLeft';
import FormatAlignCenterIcon from '@mui/icons-material/FormatAlignCenter';
import FormatAlignRightIcon from '@mui/icons-material/FormatAlignRight';
import FormatBoldIcon from '@mui/icons-material/FormatBold';
import FormatItalicIcon from '@mui/icons-material/FormatItalic';

const DividerPageComp = () => {
  const style = {
    width: '100%',
    maxWidth: 360,
    bgcolor: 'rgb(243,243,244)'
  };

  return (
    <>
      <Box>
        <Typography variant="h2" className="title">
          Divider
        </Typography>
        <Typography variant="h6" className="description">
          A divider is a thin line that groups content in lists and layouts.
        </Typography>
      </Box>

      <Box className="demoBox">
        <Grid container className="demoGrid">
          {/* First Stack (Left Side) */}
          <Stack className="stack" spacing={2}>
            {/* Inset dividers */}

            <Paper root rounded className="demoPaper">
              <Typography variant="body1" title className="demoTypography">
                List dividers
              </Typography>
              <DividerPage />
              <CardContent className="demoOutput">
                <Grid container spacing={2} className="gridCard">
                  <List sx={style} component="nav" aria-label="mailbox folders">
                    <ListItem>
                      <ListItemText primary="Inbox" />
                    </ListItem>
                    <Divider />
                    <ListItem divider>
                      <ListItemText primary="Drafts" />
                    </ListItem>
                    <ListItem>
                      <ListItemText primary="Trash" />
                    </ListItem>
                    <Divider light />
                    <ListItem>
                      <ListItemText primary="Spam" />
                    </ListItem>
                  </List>
                </Grid>
              </CardContent>
            </Paper>
            <Paper root rounded className="demoPaper">
              <Typography variant="body1" title className="demoTypography">
                Inset dividers
              </Typography>
              <DividerPage />
              <CardContent className="demoOutput">
                <Grid container spacing={2} className="gridCard">
                  <List
                    sx={{
                      width: '100%',
                      maxWidth: 360,
                      bgcolor: 'rgb(243,243,244)'
                    }}
                  >
                    <ListItem>
                      <ListItemAvatar>
                        <Avatar>
                          <ImageIcon />
                        </Avatar>
                      </ListItemAvatar>
                      <ListItemText primary="Photos" secondary="Jan 9, 2014" />
                    </ListItem>
                    <Divider variant="inset" component="li" />
                    <ListItem>
                      <ListItemAvatar>
                        <Avatar>
                          <WorkIcon />
                        </Avatar>
                      </ListItemAvatar>
                      <ListItemText primary="Work" secondary="Jan 7, 2014" />
                    </ListItem>
                    <Divider variant="inset" component="li" />
                    <ListItem>
                      <ListItemAvatar>
                        <Avatar>
                          <BeachAccessIcon />
                        </Avatar>
                      </ListItemAvatar>
                      <ListItemText primary="Vacation" secondary="July 20, 2014" />
                    </ListItem>
                  </List>
                </Grid>
              </CardContent>
            </Paper>
          </Stack>

          <Stack className="stack" spacing={2}>
            {/* Subheader dividers */}
            <Paper root rounded className="demoPaper">
              <Typography variant="body1" title className="demoTypography">
                Subheader dividers
              </Typography>
              <DividerPage />
              <CardContent className="demoOutput">
                <Grid container spacing={2} className="gridCard">
                  <List
                    sx={{
                      width: '100%',
                      maxWidth: 360,
                      bgcolor: 'rgb(243,243,244)'
                    }}
                  >
                    <ListItem>
                      <ListItemText primary="Photos" secondary="Jan 9, 2014" />
                    </ListItem>
                    <Divider component="li" />
                    <li>
                      <Typography sx={{ mt: 0.5, ml: 2 }} color="text.secondary" display="block" variant="caption">
                        Divider
                      </Typography>
                    </li>
                    <ListItem>
                      <ListItemText primary="Work" secondary="Jan 7, 2014" />
                    </ListItem>
                    <Divider component="li" variant="inset" />
                    <li>
                      <Typography sx={{ mt: 0.5, ml: 9 }} color="text.secondary" display="block" variant="caption">
                        Leisure
                      </Typography>
                    </li>
                    <ListItem>
                      <ListItemAvatar>
                        <Avatar>
                          <BeachAccessIcon />
                        </Avatar>
                      </ListItemAvatar>
                      <ListItemText primary="Vacation" secondary="July 20, 2014" />
                    </ListItem>
                  </List>
                </Grid>
              </CardContent>
            </Paper>

            <Paper root rounded className="demoPaper">
              <Typography variant="body1" title className="demoTypography">
                Vertical dividers
              </Typography>
              <DividerPage />
              <CardContent className="demoOutput">
                <Grid container spacing={2} className="gridCard">
                  <div>
                    <Box
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        width: 'fit-content',
                        border: (theme) => `1px solid ${theme.palette.divider}`,
                        borderRadius: 1,
                        bgcolor: 'background.paper',
                        color: 'text.secondary',
                        '& svg': {
                          m: 1.5
                        },
                        '& hr': {
                          mx: 0.5
                        }
                      }}
                    >
                      <FormatAlignLeftIcon />
                      <FormatAlignCenterIcon />
                      <FormatAlignRightIcon />
                      <Divider orientation="vertical" flexItem />
                      <FormatBoldIcon />
                      <FormatItalicIcon />
                    </Box>
                  </div>
                </Grid>
              </CardContent>
            </Paper>
          </Stack>
        </Grid>
      </Box>
    </>
  );
};

export default DividerPageComp;
