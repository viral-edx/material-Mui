import React, { useState } from 'react';
import { Typography, Box, Grid, Stack, Paper, CardContent, Slider } from '@mui/material';
import DividerPage from 'utils/divider';
import VolumeDown from '@mui/icons-material/VolumeDown';
import VolumeUp from '@mui/icons-material/VolumeUp';

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

  const [value1, setValue1] = React.useState([20, 37]);

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
            <Paper root elevation rounded elevation0 className="demoPaper">
              <Typography variant="body1" title className="demoTypography">
                Continuous sliders
              </Typography>
              <DividerPage />
              <CardContent className="demoOutput">
                <Stack spacing={2} direction="row" sx={{ mb: 1 }} alignItems="center">
                  <VolumeDown />
                  <Slider aria-label="Volume" value={value} onChange={handleChange} />
                  <VolumeUp />
                </Stack>
                <Slider disabled defaultValue={30} aria-label="Disabled slider" />
              </CardContent>
            </Paper>

            {/* Sizes */}
            <Paper root elevation rounded elevation0 className="demoPaper">
              <Typography variant="body1" title className="demoTypography">
                Sizes
              </Typography>
              <DividerPage />
              <CardContent className="demoOutput">
                <Box width={300}>
                  <Slider size="small" defaultValue={70} aria-label="Small" valueLabelDisplay="auto" />
                  <Slider defaultValue={50} aria-label="Default" valueLabelDisplay="auto" />
                </Box>
              </CardContent>
            </Paper>

            {/* Discrete sliders */}
            <Paper root elevation rounded elevation0 className="demoPaper">
              <Typography variant="body1" title className="demoTypography">
                Discrete sliders
              </Typography>
              <DividerPage />
              <CardContent className="demoOutput">
                <Box width={300}>
                  <Slider
                    aria-label="Temperature"
                    defaultValue={30}
                    getAriaValueText={valuetext}
                    valueLabelDisplay="auto"
                    step={10}
                    marks
                    min={10}
                    max={110}
                  />
                  <Slider defaultValue={30} step={10} marks min={10} max={110} disabled />
                </Box>
              </CardContent>
            </Paper>

            {/* Colors */}
            <Paper root elevation rounded elevation0 className="demoPaper">
              <Typography variant="body1" title className="demoTypography">
                Colors
              </Typography>
              <DividerPage />
              <CardContent className="demoOutput">
                <Stack spacing={2} direction="row" sx={{ mb: 1 }} alignItems="center">
                  <Slider aria-label="Temperature" defaultValue={30} getAriaValueText={valuetext} />
                  <Slider aria-label="Temperature" defaultValue={30} getAriaValueText={valuetext} color="success" />
                  <Slider aria-label="Temperature" defaultValue={30} getAriaValueText={valuetext} color="warning" />
                  <Slider aria-label="Temperature" defaultValue={30} getAriaValueText={valuetext} color="error" />
                </Stack>
              </CardContent>
            </Paper>
          </Stack>

          {/* Right Stack (Right Side) */}
          <Stack className="stack" spacing={2}>
            {/* Range slider */}
            <Paper root elevation rounded elevation0 className="demoPaper">
              <Typography variant="body1" title className="demoTypography">
                Range slider
              </Typography>
              <DividerPage />
              <CardContent className="demoOutput">
                <Box width={300}>
                  <Slider
                    getAriaLabel={() => 'Temperature range'}
                    value={value1}
                    onChange={handleChange1}
                    valueLabelDisplay="auto"
                    getAriaValueText={valuetext}
                  />
                </Box>
              </CardContent>
            </Paper>

            {/* Vertical Slider */}
            <Paper root elevation rounded elevation0 className="demoPaper">
              <Typography variant="body1" title className="demoTypography">
                Range slider
              </Typography>
              <DividerPage />
              <CardContent className="demoOutput">
                <Box width={300} height={500}>
                  <Slider
                    aria-label="Temperature"
                    orientation="vertical"
                    getAriaValueText={valuetext}
                    valueLabelDisplay="auto"
                    defaultValue={30}
                  />
                  <Slider aria-label="Temperature" orientation="vertical" defaultValue={30} valueLabelDisplay="auto" disabled />
                  <Slider
                    getAriaLabel={() => 'Temperature'}
                    orientation="vertical"
                    getAriaValueText={valuetext}
                    defaultValue={[20, 37]}
                    valueLabelDisplay="auto"
                    marks={marks}
                  />
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
