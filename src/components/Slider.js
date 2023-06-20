import React, { useState } from 'react';
import { Typography, Box, Grid, Stack, Paper, CardContent, Slider } from '@mui/material';
import DividerPage from 'utils/Divider';
import { VolumeUp, VolumeDown } from '@mui/icons-material';

function valuetext(value) {
  return `${value}°C`;
}

const marks = [
  {
    value: 0,
    label: '0°C'
  },
  {
    value: 20,
    label: '20°C'
  },
  {
    value: 37,
    label: '37°C'
  },
  {
    value: 100,
    label: '100°C'
  }
];

const SliderPage = () => {
  const [value, setValue] = useState(30);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const [value1, setValue1] = useState([20, 37]);

  const handleChange1 = (event, newValue) => {
    setValue1(newValue);
  };
  return (
    <>
      <Box>
        <Typography variant="h2" className="title">
          Slider
        </Typography>
        <Typography variant="h6" className="description">
          Sliders allow users to make selections from a range of values.
        </Typography>
      </Box>
      <Box className="demoBox">
        <Grid container className="demoGrid">
          {/* First Stack (Left Side) */}
          <Stack className="stack" spacing={2}>
            {/* Continuous sliders */}
            <Paper root rounded className="demo-paper">
              <Typography variant="body1" title className="demo-typography">
                Continuous sliders
              </Typography>
              <DividerPage />
              <CardContent className="demo-output">
                <Stack spacing={2} direction="row" sx={{ mb: 1 }} alignItems="center">
                  <VolumeDown />
                  <Slider aria-label="Volume" value={value} color="success" onChange={handleChange} />
                  <VolumeUp />
                </Stack>
                <Slider disabled defaultValue={30} color="success" aria-label="Disabled slider" />
              </CardContent>
            </Paper>

            {/* Sizes */}
            <Paper root rounded className="demo-paper">
              <Typography variant="body1" title className="demo-typography">
                Sizes
              </Typography>
              <DividerPage />
              <CardContent className="demo-output">
                <Box>
                  <Grid container spacing={2} className="grid-card">
                    <Slider size="small" defaultValue={70} aria-label="Small" color="success" valueLabelDisplay="auto" />
                    <Slider defaultValue={50} aria-label="Default" color="success" valueLabelDisplay="auto" />
                  </Grid>
                </Box>
              </CardContent>
            </Paper>

            {/* Discrete sliders */}
            <Paper root rounded className="demo-paper">
              <Typography variant="body1" title className="demo-typography">
                Discrete sliders
              </Typography>
              <DividerPage />
              <CardContent className="demo-output">
                <Box>
                  <Grid container spacing={2} className="grid-card">
                    <Slider
                      aria-label="Temperature"
                      defaultValue={30}
                      getAriaValueText={valuetext}
                      valueLabelDisplay="auto"
                      step={10}
                      marks
                      min={10}
                      max={110}
                      color="success"
                    />
                    <Slider defaultValue={30} step={10} marks min={10} max={110} color="success" disabled />
                  </Grid>
                </Box>
              </CardContent>
            </Paper>

            {/* Colors */}
            <Paper root rounded className="demo-paper">
              <Typography variant="body1" title className="demo-typography">
                Colors
              </Typography>
              <DividerPage />
              <CardContent className="demo-output">
                <Stack spacing={2} direction="row" sx={{ mb: 1 }} alignItems="center">
                  <Grid container spacing={2} className="grid-card">
                    <Slider aria-label="Temperature" defaultValue={15} getAriaValueText={valuetext} />
                    <Slider aria-label="Temperature" defaultValue={30} getAriaValueText={valuetext} color="success" />
                    <Slider aria-label="Temperature" defaultValue={50} getAriaValueText={valuetext} color="warning" />
                    <Slider aria-label="Temperature" defaultValue={80} getAriaValueText={valuetext} color="error" />
                  </Grid>
                </Stack>
              </CardContent>
            </Paper>
          </Stack>

          {/* Right Stack (Right Side) */}
          <Stack className="stack" spacing={2}>
            {/* Range slider */}
            <Paper root rounded className="demo-paper">
              <Typography variant="body1" title className="demo-typography">
                Range slider
              </Typography>
              <DividerPage />
              <CardContent className="demo-output">
                <Box>
                  <Grid container spacing={2} className="grid-card">
                    <Slider
                      getAriaLabel={() => 'Temperature range'}
                      value={value1}
                      onChange={handleChange1}
                      valueLabelDisplay="auto"
                      getAriaValueText={valuetext}
                      color="success"
                    />
                  </Grid>
                </Box>
              </CardContent>
            </Paper>

            {/* Vertical Slider */}
            <Paper root rounded className="demo-paper">
              <Typography variant="body1" title className="demo-typography">
                Range slider
              </Typography>
              <DividerPage />
              <CardContent className="demo-output">
                <Box>
                  <Grid container spacing={2} className="grid-card" height={500}>
                    <Slider
                      aria-label="Temperature"
                      orientation="vertical"
                      getAriaValueText={valuetext}
                      valueLabelDisplay="auto"
                      defaultValue={30}
                      color="success"
                    />
                    <Slider
                      aria-label="Temperature"
                      color="success"
                      orientation="vertical"
                      defaultValue={30}
                      valueLabelDisplay="auto"
                      disabled
                    />
                    <Slider
                      getAriaLabel={() => 'Temperature'}
                      orientation="vertical"
                      getAriaValueText={valuetext}
                      defaultValue={[20, 37]}
                      valueLabelDisplay="auto"
                      marks={marks}
                      color="success"
                    />
                  </Grid>
                </Box>
              </CardContent>
            </Paper>
          </Stack>
        </Grid>
      </Box>
    </>
  );
};

export default SliderPage;
