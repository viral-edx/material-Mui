import React, { useState } from 'react';
import { CardContent, Grid, Pagination, PaginationItem, Paper, Typography } from '@mui/material';
import { Box, Stack } from '@mui/system';
import DividerPage from 'utils/divider';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const PaginationPage = () => {
  const [page, setPage] = useState(1);
  const handleChange = (event, value) => {
    setPage(value);
  };
  return (
    <>
      <>
        <Box>
          <Typography variant="h2" className="title">
            Pagination
          </Typography>
          <Typography variant="h6" className="description">
            The Pagination component enables the user to select a specific page from a range of pages.
          </Typography>
        </Box>

        <Box className="demoBox">
          <Grid container className="demoGrid">
            {/* First Stack (Left Side) */}
            <Stack className="stack" spacing={2}>
              {/*  Basic pagination */}
              <Paper root rounded className="demoPaper">
                <Typography variant="body1" title className="demoTypography">
                  Basic pagination
                </Typography>
                <DividerPage />
                <CardContent className="demoOutput">
                  <Grid container spacing={2} className="gridCard">
                    <Stack spacing={2}>
                      <Pagination count={10} />
                      <Pagination count={10} color="primary" />
                      <Pagination count={10} color="secondary" />
                      <Pagination count={10} disabled />
                    </Stack>
                  </Grid>
                </CardContent>
              </Paper>

              {/*   Rounded pagination */}
              <Paper root rounded className="demoPaper">
                <Typography variant="body1" title className="demoTypography">
                  Rounded pagination
                </Typography>
                <DividerPage />
                <CardContent className="demoOutput">
                  <Grid container spacing={2} className="gridCard">
                    <Stack spacing={2}>
                      <Pagination count={10} shape="rounded" />
                      <Pagination count={10} variant="outlined" shape="rounded" />
                    </Stack>
                  </Grid>
                </CardContent>
              </Paper>

              {/* Pagination  size*/}
              <Paper root rounded className="demoPaper">
                <Typography variant="body1" title className="demoTypography">
                  Pagination size
                </Typography>
                <DividerPage />
                <CardContent className="demoOutput">
                  <Grid container spacing={2} className="gridCard">
                    <Stack spacing={2}>
                      <Pagination count={10} size="small" />
                      <Pagination count={10} />
                      <Pagination count={10} size="large" />
                    </Stack>
                  </Grid>
                </CardContent>
              </Paper>
            </Stack>

            {/* Right Stack (Right Side) */}
            <Stack className="stack" spacing={2}>
              {/* Buttons pagination */}

              <Paper root rounded className="demoPaper">
                <Typography variant="body1" title className="demoTypography">
                  Buttons
                </Typography>
                <DividerPage />
                <CardContent className="demoOutput">
                  <Grid container spacing={2} className="gridCard">
                    <Stack spacing={2}>
                      <Pagination count={10} showFirstButton showLastButton />
                      <Pagination count={10} hidePrevButton hideNextButton />
                    </Stack>
                  </Grid>
                </CardContent>
              </Paper>

              {/* Custom pagination */}
              <Paper root rounded className="demoPaper">
                <Typography variant="body1" title className="demoTypography">
                  Custom
                </Typography>
                <DividerPage />
                <CardContent className="demoOutput">
                  <Grid container spacing={2} className="gridCard">
                    <Stack spacing={2}>
                      <Pagination
                        count={10}
                        renderItem={(item) => <PaginationItem slots={{ previous: ArrowBackIcon, next: ArrowForwardIcon }} {...item} />}
                      />
                    </Stack>
                  </Grid>
                </CardContent>
              </Paper>

              {/*   Controlled pagination */}
              <Paper root rounded className="demoPaper">
                <Typography variant="body1" title className="demoTypography">
                  Controlled pagination
                </Typography>
                <DividerPage />
                <CardContent className="demoOutput">
                  <Grid container spacing={2} className="gridCard">
                    <Stack spacing={2}>
                      <Typography>Page: {page}</Typography>
                      <Pagination count={10} page={page} onChange={handleChange} />
                    </Stack>
                  </Grid>
                </CardContent>
              </Paper>
            </Stack>
          </Grid>
        </Box>
      </>
    </>
  );
};

export default PaginationPage;
