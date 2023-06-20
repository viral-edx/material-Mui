import { Box, CardContent, CircularProgress, Grid, Paper, Stack, Typography, LinearProgress } from '@mui/material';
import React from 'react';
import { useRef } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import DividerPage from 'utils/Divider';

const ProgressPage = () => {
  const [progress, setProgress] = useState(0);
  const [buffer, setBuffer] = useState(10);

  const progressRef = useRef(() => {});
  useEffect(() => {
    progressRef.current = () => {
      if (progress > 100) {
        setProgress(0);
        setBuffer(10);
      } else {
        const diff = Math.random() * 10;
        const diff2 = Math.random() * 10;
        setProgress(progress + diff);
        setBuffer(progress + diff + diff2);
      }
    };
  });

  useEffect(() => {
    const timer = setInterval(() => {
      progressRef.current();
    }, 500);

    return () => {
      clearInterval(timer);
    };
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) => (prevProgress >= 100 ? 10 : prevProgress + 10));
    }, 800);
    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <>
      <>
        <Box>
          <Typography variant="h2" className="title">
            Progress
          </Typography>
          <Typography variant="h6" className="description">
            Progress indicators commonly known as spinners, express an unspecified wait time or display the length of a process.
          </Typography>
        </Box>

        <Box className="demoBox">
          <Grid container className="demoGrid">
            {/* First Stack (Left Side) */}
            <Stack className="stack" spacing={2}>
              {/*   Circular Indeterminate Progress */}
              <Paper root rounded className="demo-paper">
                <Typography variant="body1" title className="demo-typography">
                  Circular Indeterminate
                </Typography>
                <DividerPage />
                <CardContent className="demo-output">
                  <Grid container spacing={2} className="grid-card">
                    <CircularProgress sx={{ color: 'red' }} />
                    <CircularProgress color="secondary" />
                    <CircularProgress color="success" />
                    <CircularProgress color="warning" />
                    <CircularProgress color="info" />
                    <CircularProgress color="error" />
                  </Grid>
                </CardContent>
              </Paper>

              {/* Linear Indeterminate*/}
              <Paper root rounded className="demo-paper">
                <Typography variant="body1" title className="demo-typography">
                  Linear Indeterminate
                </Typography>
                <DividerPage />
                <CardContent className="demo-output">
                  <Grid container spacing={2} className="grid-card">
                    <Box sx={{ width: '100%' }}>
                      <LinearProgress color="success" />
                    </Box>
                  </Grid>
                </CardContent>
              </Paper>
            </Stack>

            {/* Right Stack (Right Side) */}
            <Stack className="stack" spacing={2}>
              {/* Linear buffer progress*/}
              <Paper root rounded className="demo-paper">
                <Typography variant="body1" title className="demo-typography">
                  Linear buffer
                </Typography>
                <DividerPage />
                <CardContent className="demo-output">
                  <Grid container spacing={2} className="grid-card">
                    <Box sx={{ width: '100%' }}>
                      <LinearProgress variant="buffer" value={progress} color="success" valueBuffer={buffer} />
                    </Box>
                  </Grid>
                </CardContent>
              </Paper>

              {/* Linear  progress*/}
              <Paper root rounded className="demo-paper">
                <Typography variant="body1" title className="demo-typography">
                  Linear color
                </Typography>
                <DividerPage />
                <CardContent className="demo-output">
                  <Grid container spacing={2} className="grid-card">
                    <Stack sx={{ width: '100%', color: 'grey.500' }} spacing={2}>
                      <LinearProgress color="secondary" />
                      <LinearProgress color="success" />
                      <LinearProgress color="inherit" />
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

export default ProgressPage;
