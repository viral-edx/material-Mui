import React from 'react';
import { Typography, Box, Grid, Stack, Paper, Divider, CardContent, Button } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import HomeIcon from '@mui/icons-material/Home';
import DividerPage from 'utils/divider';

function ButtonPage() {
  return (
    <>
      <Box>
        <Typography variant="h2" className="title">
          Buttons
        </Typography>
        <Typography variant="h6" className="description">
          Buttons allow users to take actions, and make choices, with a single tap.
        </Typography>
      </Box>
      <Box className="demo-box">
        <Grid container className="demo-grid">
          {/* First Stack (Left Side) */}
          <Stack className="stack" spacing={2}>
            {/* Basic Button */}
            <Paper root elevation rounded elevation0 className="demo-paper">
              <Typography variant="body1" title className="demo-typography">
                Basic Button
              </Typography>
              <DividerPage />
              <CardContent className="demo-output">
                <Grid container spacing={2} className="grid-card">
                  <Button variant="contained">Default</Button>
                  <Button variant="contained" color="secondary">
                    Secondary
                  </Button>
                  <Button variant="contained" color="info">
                    Info
                  </Button>
                  <Button variant="contained" color="success">
                    Success
                  </Button>
                  <Button variant="contained" color="warning">
                    Warning
                  </Button>
                  <Button variant="contained" color="error">
                    Error
                  </Button>
                </Grid>
              </CardContent>
            </Paper>

            {/* Text Button */}
            <Paper root elevation rounded elevation0 className="demo-paper">
              <Typography variant="body1" title className="demo-typography">
                Text Button
              </Typography>
              <Divider sx={{ mt: 0.25, mb: 1.25 }} />
              <CardContent className="demo-output">
                <Grid container spacing={2} className="grid-card">
                  <Button>Default</Button>
                  <Button color="secondary">Secondary</Button>
                  <Button color="info">Info</Button>
                  <Button color="success">Success</Button>
                  <Button color="warning">Warning</Button>
                  <Button color="error">Error</Button>
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
}

export default ButtonPage;
