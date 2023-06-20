import { Box, CardContent, Grid, Paper, Stack, Typography, Alert, AlertTitle } from '@mui/material';
import React from 'react';
import DividerPage from 'utils/Divider';
import { Check, CheckCircleOutline } from '@mui/icons-material';

const AlertPage = () => {
  return (
    <>
      <Box>
        <Typography variant="h2" className="title">
          Alert
        </Typography>
        <Typography variant="h6" className="description">
          An alert displays a short, important message in a way that attracts the users attention without interrupting the users task.
        </Typography>
      </Box>

      <Box className="demoBox">
        <Grid container className="demoGrid">
          {/* First Stack (Left Side) */}
          <Stack className="stack" spacing={2}>
            {/* Basic alerts */}
            <Paper root rounded className="demo-paper">
              <Typography variant="body1" title className="demo-typography">
                Basic alerts
              </Typography>
              <DividerPage />
              <CardContent className="demo-output">
                <Grid container spacing={2} className="grid-card">
                  <Alert severity="error">This is an error alert — check it out!</Alert>
                  <Alert severity="warning">This is a warning alert — check it out!</Alert>
                  <Alert severity="info">This is an info alert — check it out!</Alert>
                  <Alert severity="success">This is a success alert — check it out!</Alert>
                </Grid>
              </CardContent>
            </Paper>

            {/* Description */}
            <Paper root rounded className="demo-paper">
              <Typography variant="body1" title className="demo-typography">
                Description
              </Typography>
              <DividerPage />
              <CardContent className="demo-output">
                <Grid container spacing={2} className="grid-card">
                  <Alert severity="error">
                    <AlertTitle>Error</AlertTitle>
                    This is an error alert — <strong>check it out!</strong>
                  </Alert>
                  <Alert severity="warning">
                    <AlertTitle>Warning</AlertTitle>
                    This is a warning alert — <strong>check it out!</strong>
                  </Alert>
                  <Alert severity="info">
                    <AlertTitle>Info</AlertTitle>
                    This is an info alert — <strong>check it out!</strong>
                  </Alert>
                  <Alert severity="success">
                    <AlertTitle>Success</AlertTitle>
                    This is a success alert — <strong>check it out!</strong>
                  </Alert>
                </Grid>
              </CardContent>
            </Paper>

            {/* Icons */}
            <Paper root rounded className="demo-paper">
              <Typography variant="body1" title className="demo-typography">
                Icons
              </Typography>
              <DividerPage />
              <CardContent className="demo-output">
                <Grid container spacing={2} className="grid-card">
                  <Alert icon={<Check fontSize="inherit" />} severity="success">
                    This is a success alert — check it out!
                  </Alert>
                  <Alert
                    iconMapping={{
                      success: <CheckCircleOutline fontSize="inherit" />
                    }}
                  >
                    This is a success alert — check it out!
                  </Alert>
                  <Alert icon={false} severity="success">
                    This is a success alert — check it out!
                  </Alert>
                </Grid>
              </CardContent>
            </Paper>
          </Stack>

          {/* Right Stack (Right Side) */}
          <Stack className="stack" spacing={2}>
            {/* Variants with outlined */}
            <Paper root rounded className="demo-paper">
              <Typography variant="body1" title className="demo-typography">
                Variants with outlined
              </Typography>
              <DividerPage />
              <CardContent className="demo-output">
                <Grid container spacing={2} className="grid-card">
                  <Alert variant="outlined" severity="error">
                    This is an error alert — check it out!
                  </Alert>
                  <Alert variant="outlined" severity="warning">
                    This is a warning alert — check it out!
                  </Alert>
                  <Alert variant="outlined" severity="info">
                    This is an info alert — check it out!
                  </Alert>
                  <Alert variant="outlined" severity="success">
                    This is a success alert — check it out!
                  </Alert>
                </Grid>
              </CardContent>
            </Paper>

            {/* Variants with filled */}
            <Paper root rounded className="demo-paper">
              <Typography variant="body1" title className="demo-typography">
                Variants with filled
              </Typography>
              <DividerPage />
              <CardContent className="demo-output">
                <Grid container spacing={2} className="grid-card">
                  <Alert variant="filled" severity="error">
                    This is an error alert — check it out!
                  </Alert>
                  <Alert variant="filled" severity="warning">
                    This is a warning alert — check it out!
                  </Alert>
                  <Alert variant="filled" severity="info">
                    This is an info alert — check it out!
                  </Alert>
                  <Alert variant="filled" severity="success">
                    This is a success alert — check it out!
                  </Alert>
                </Grid>
              </CardContent>
            </Paper>

            {/* Color */}
            <Paper root rounded className="demo-paper">
              <Typography variant="body1" title className="demo-typography">
                Color
              </Typography>
              <DividerPage />
              <CardContent className="demo-output">
                <Grid container spacing={2} className="grid-card">
                  <Alert severity="success">This is a success alert — check it out!</Alert>
                  <Alert severity="success" color="secondary">
                    This is a success alert — check it out!
                  </Alert>
                  <Alert severity="success" color="info">
                    This is a success alert — check it out!
                  </Alert>
                  <Alert severity="success" color="warning">
                    This is a success alert — check it out!
                  </Alert>
                  <Alert severity="success" color="error">
                    This is a success alert — check it out!
                  </Alert>
                </Grid>
              </CardContent>
            </Paper>
          </Stack>
        </Grid>
      </Box>
    </>
  );
};

export default AlertPage;
