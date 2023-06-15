import React from 'react';
import { Typography, Box, Grid, Stack, Paper, CardContent, Button } from '@mui/material';
import { Delete, Send, Home } from '@mui/icons-material';
import DividerPage from 'utils/Divider';

function ButtonPage() {
  return (
    <>
      <Box>
        <Typography variant="h2" className="title">
          Button
        </Typography>
        <Typography variant="h6" className="description">
          Buttons allow users to take actions, and make choices, with a single tap.
        </Typography>
      </Box>
      <Box className="demoBox">
        <Grid container className="demoGrid">
          {/* First Stack (Left Side) */}
          <Stack className="stack" spacing={2}>
            {/* Basic Button */}
            <Paper root rounded className="demoPaper">
              <Typography variant="body1" title className="demoTypography">
                Basic Button
              </Typography>
              <DividerPage />
              <CardContent className="demoOutput">
                <Grid container spacing={2} className="gridCard">
                  <Button variant="contained">Default</Button>
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
            <Paper root rounded className="demoPaper">
              <Typography variant="body1" title className="demoTypography">
                Text Button
              </Typography>
              <DividerPage />
              <CardContent className="demoOutput">
                <Grid container spacing={2} className="gridCard">
                  <Button>Default</Button>
                  <Button color="success">Success</Button>
                  <Button color="warning">Warning</Button>
                  <Button color="error">Error</Button>
                </Grid>
              </CardContent>
            </Paper>

            {/* Sizes Button */}
            <Paper root rounded className="demoPaper">
              <Typography variant="body1" title className="demoTypography">
                Sizes
              </Typography>
              <DividerPage />
              <CardContent className="demoOutput">
                <Grid container spacing={2} className="gridCard">
                  <Button variant="outlined" color="success" size="small">
                    Small
                  </Button>
                  <Button variant="outlined" color="success" size="medium">
                    Medium
                  </Button>
                  <Button variant="outlined" color="success" size="large">
                    Large
                  </Button>
                </Grid>
              </CardContent>
            </Paper>
          </Stack>

          {/* Right Stack (Right Side) */}
          <Stack className="stack" spacing={2}>
            {/* Outlined Button */}
            <Paper root rounded className="demoPaper">
              <Typography variant="body1" title className="demoTypography">
                Outlined Button
              </Typography>
              <DividerPage />
              <CardContent className="demoOutput">
                <Grid container spacing={2} className="gridCard">
                  <Button variant="outlined">Default</Button>
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
            <Paper root rounded className="demoPaper">
              <Typography variant="body1" title className="demoTypography">
                Disabled Button
              </Typography>
              <DividerPage />
              <CardContent className="demoOutput">
                <Grid container spacing={2} className="gridCard">
                  <Button disabled>Default</Button>
                  <Button variant="contained" disabled>
                    Contained
                  </Button>
                  <Button variant="outlined" disabled>
                    Outlined
                  </Button>
                  <Button startIcon={<Home />} disabled>
                    Home
                  </Button>
                  <Button variant="contained" endIcon={<Send />} disabled>
                    Send
                  </Button>
                </Grid>
              </CardContent>
            </Paper>

            {/* With Icon */}
            <Paper root rounded className="demoPaper">
              <Typography variant="body1" title className="demoTypography">
                With Icon
              </Typography>
              <DividerPage />
              <CardContent className="demoOutput">
                <Grid container spacing={2} className="gridCard">
                  <Button color="success" startIcon={<Home />}>
                    Home
                  </Button>
                  <Button variant="contained" color="success" end={<Send />}>
                    Send
                  </Button>
                  <Button variant="outlined" color="success" startIcon={<Delete />}>
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
