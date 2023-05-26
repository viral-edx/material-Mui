import React from 'react';
import { Typography, Box, Grid, Stack, Paper, Divider, CardContent, Button } from '@mui/material';

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
        <Grid>
          <Stack className="stack" spacing={2}>
            <Paper root elevation rounded elevation0 className="demo-paper">
              <Typography variant="body1" title className="demo-typography">
                Basic Button
              </Typography>
              <Divider sx={{ mt: 0.25, mb: 1.25 }} />
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
