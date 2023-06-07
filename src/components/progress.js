import { Box, CardContent, CircularProgress, Grid, Paper, Stack, Typography, LinearProgress } from '@mui/material';
import React from 'react';
import { useRef } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import DividerPage from 'utils/divider';

const Progress = () => {
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
              <Paper root elevation rounded elevation0 className="demoPaper">
                <Typography variant="body1" title className="demoTypography">
                  Circular Indeterminate
                </Typography>
                <DividerPage />
                <CardContent className="demoOutput">
                  <Grid container spacing={2} className="gridCard">
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
              <Paper root elevation rounded elevation0 className="demoPaper">
                <Typography variant="body1" title className="demoTypography">
                  Linear Indeterminate
                </Typography>
                <DividerPage />
                <CardContent className="demoOutput">
                  <Grid container spacing={2} className="gridCard">
                    <Box sx={{ width: '100%' }}>
                      <LinearProgress />
                    </Box>
                  </Grid>
                </CardContent>
              </Paper>
            </Stack>

            {/* Right Stack (Right Side) */}
            <Stack className="stack" spacing={2}>
              {/* Linear buffer progress*/}
              <Paper root elevation rounded elevation0 className="demoPaper">
                <Typography variant="body1" title className="demoTypography">
                  Linear buffer
                </Typography>
                <DividerPage />
                <CardContent className="demoOutput">
                  <Grid container spacing={2} className="gridCard">
                    <Box sx={{ width: '100%' }}>
                      <LinearProgress variant="buffer" value={progress} valueBuffer={buffer} />
                    </Box>
                  </Grid>
                </CardContent>
              </Paper>

              {/* Linear  progress*/}
              <Paper root elevation rounded elevation0 className="demoPaper">
                <Typography variant="body1" title className="demoTypography">
                  Linear color
                </Typography>
                <DividerPage />
                <CardContent className="demoOutput">
                  <Grid container spacing={2} className="gridCard">
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

export default Progress;
