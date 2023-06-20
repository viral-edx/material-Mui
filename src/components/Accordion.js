import { Box, Breadcrumbs, CardContent, Grid, Paper, Stack, Typography } from '@mui/material';
import React from 'react';
import DividerPage from 'utils/Divider';

const AccordionPage = () => {
  return (
    <>
      <Box>
        <Typography variant="h2" className="title">
          Typography
        </Typography>
        <Typography variant="h6" className="description">
          Use typography to present your design and content as clearly and efficiently as possible.
        </Typography>
      </Box>

      <Box className="demoBox">
        <Grid container className="demoGrid">
          {/* First Stack (Left Side) */}
          <Stack className="stack" spacing={2}>
            {/* Basic Typography */}
            <Paper root rounded className="demo-paper">
              <Typography variant="body1" title className="demo-typography">
                Basic Typography
              </Typography>
              <DividerPage />
              <CardContent className="demo-output">
                <Grid container spacing={2} className="grid-card">
                  <Typography variant="h1">Inter</Typography>
                  <Typography variant="h5">Font Family</Typography>
                  <Breadcrumbs aria-label="breadcrumb">
                    <Typography variant="h6">Regular</Typography>
                    <Typography variant="h6">Medium</Typography>
                    <Typography variant="h6">Bold</Typography>
                  </Breadcrumbs>
                </Grid>
              </CardContent>
            </Paper>

            {/* Body 1 */}
            <Paper root rounded className="demo-paper">
              <Typography variant="body1" title className="demo-typography">
                Body 1
              </Typography>
              <DividerPage />
              <CardContent className="demo-output">
                <Grid container spacing={2} className="grid-card">
                  <Typography variant="body1" gutterBottom>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </Typography>
                </Grid>
              </CardContent>
            </Paper>

            {/* Subtitle 1 */}
            <Paper root rounded className="demo-paper">
              <Typography variant="body1" title className="demo-typography">
                Subtitle 1
              </Typography>
              <DividerPage />
              <CardContent className="demo-output">
                <Grid container spacing={2} className="grid-card">
                  <Typography variant="subtitle1" gutterBottom>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </Typography>
                </Grid>
              </CardContent>
            </Paper>

            {/* Colors */}
            <Paper root rounded className="demo-paper">
              <Typography variant="body1" title className="demo-typography">
                Colors
              </Typography>
              <DividerPage />
              <CardContent className="demo-output">
                <Grid container spacing={2} className="grid-card">
                  <Typography variant="h6" color="primary" gutterBottom>
                    This is primary text color.
                  </Typography>
                  <Typography variant="h6" color="secondary" gutterBottom>
                    This is secondary text color.
                  </Typography>
                  <Typography variant="h6" color="success" gutterBottom>
                    This is success text color.
                  </Typography>
                  <Typography variant="h6" color="warning" gutterBottom>
                    This is warning text color.
                  </Typography>
                  <Typography variant="h6" color="error" gutterBottom>
                    This is error text color.
                  </Typography>
                </Grid>
              </CardContent>
            </Paper>
          </Stack>

          {/* Right Stack (Right Side) */}
          <Stack className="stack" spacing={2}>
            {/* Heading */}
            <Paper root rounded className="demo-paper">
              <Typography variant="body1" title className="demo-typography">
                Heading
              </Typography>
              <DividerPage />
              <CardContent className="demo-output">
                <Grid container spacing={2} className="grid-card">
                  <Typography variant="h1" gutterBottom>
                    h1. Heading
                  </Typography>
                  <Typography variant="h2" gutterBottom>
                    h2. Heading
                  </Typography>
                  <Typography variant="h3" gutterBottom>
                    h3. Heading
                  </Typography>
                  <Typography variant="h4" gutterBottom>
                    h4. Heading
                  </Typography>
                  <Typography variant="h5" gutterBottom>
                    h5. Heading
                  </Typography>
                  <Typography variant="h6" gutterBottom>
                    h6. Heading
                  </Typography>
                </Grid>
              </CardContent>
            </Paper>

            {/* Body 2 */}
            <Paper root rounded className="demo-paper">
              <Typography variant="body1" title className="demo-typography">
                Body 2
              </Typography>
              <DividerPage />
              <CardContent className="demo-output">
                <Grid container spacing={2} className="grid-card">
                  <Typography variant="body2" gutterBottom>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </Typography>
                </Grid>
              </CardContent>
            </Paper>

            {/* Subtitle 2 */}
            <Paper root rounded className="demo-paper">
              <Typography variant="body1" title className="demo-typography">
                Subtitle 2
              </Typography>
              <DividerPage />
              <CardContent className="demo-output">
                <Grid container spacing={2} className="grid-card">
                  <Typography variant="subtitle2" gutterBottom>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </Typography>
                </Grid>
              </CardContent>
            </Paper>
          </Stack>
        </Grid>
      </Box>
    </>
  );
};

export default AccordionPage;
