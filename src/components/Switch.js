import { Box, CardContent, FormControlLabel, Grid, Paper, Stack, Switch, Typography } from '@mui/material';
import React from 'react';
import DividerPage from 'utils/Divider';
import { pink } from '@mui/material/colors';
import { alpha, styled } from '@mui/material/styles';

const SwitchPage = () => {
  const label = { inputProps: { 'aria-label': 'Switch demo' } };

  const PinkSwitch = styled(Switch)(({ theme }) => ({
    '& .MuiSwitch-switchBase.Mui-checked': {
      color: pink[600],
      '&:hover': {
        backgroundColor: alpha(pink[600], theme.palette.action.hoverOpacity)
      }
    },
    '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
      backgroundColor: pink[600]
    }
  }));

  const colorLabel = { inputProps: { 'aria-label': 'Color switch demo' } };
  return (
    <>
      <Box>
        <Typography variant="h2" className="title">
          Switch
        </Typography>
        <Typography variant="h6" className="description">
          Switches toggle the state of a single setting on or off.
        </Typography>
      </Box>
      <Box className="demoBox">
        <Grid container className="demoGrid">
          {/* First Stack (Left Side) */}
          <Stack className="stack" spacing={2}>
            {/* Basic Switch */}
            <Paper root rounded className="demoPaper">
              <Typography variant="body1" title className="demoTypography">
                Basic
              </Typography>
              <DividerPage />
              <CardContent className="demoOutput">
                <Grid container spacing={2} className="gridCard">
                  <Switch {...label} defaultChecked color="success" />
                  <Switch {...label} color="success" />
                  <Switch {...label} disabled defaultChecked color="success" />
                  <Switch {...label} disabled color="success" />
                </Grid>
              </CardContent>
            </Paper>

            {/* Labeled Switch */}
            <Paper root rounded className="demoPaper">
              <Typography variant="body1" title className="demoTypography">
                Labeled Switch
              </Typography>
              <DividerPage />
              <CardContent className="demoOutput">
                <Grid container spacing={2} className="gridCard">
                  <FormControlLabel control={<Switch defaultChecked color="success" />} label="Label" />
                  <FormControlLabel required control={<Switch color="success" />} label="Required" />
                  <FormControlLabel disabled control={<Switch color="success" />} label="Disabled" />
                </Grid>
              </CardContent>
            </Paper>
            {/* With Size */}
            <Paper root rounded className="demoPaper">
              <Typography variant="body1" title className="demoTypography">
                Size
              </Typography>
              <DividerPage />
              <CardContent className="demoOutput">
                <Grid container spacing={2} className="gridCard">
                  <Switch {...label} defaultChecked size="small" color="success" />
                  <Switch {...label} defaultChecked color="success" />
                </Grid>
              </CardContent>
            </Paper>
          </Stack>

          {/* Right Stack (Right Side) */}
          <Stack className="stack" spacing={2}>
            {/* Color Switch */}
            <Paper root rounded className="demoPaper">
              <Typography variant="body1" title className="demoTypography">
                Color
              </Typography>
              <DividerPage />
              <CardContent className="demoOutput">
                <Grid container spacing={2} className="gridCard">
                  <Switch {...colorLabel} defaultChecked />
                  <Switch {...colorLabel} defaultChecked color="success" />
                  <Switch {...colorLabel} defaultChecked color="warning" />
                  <Switch {...colorLabel} defaultChecked color="default" />
                  <PinkSwitch {...colorLabel} defaultChecked />
                </Grid>
              </CardContent>
            </Paper>

            {/* Label placement Switch */}
            <Paper root rounded className="demoPaper">
              <Typography variant="body1" title className="demoTypography">
                Label placement
              </Typography>
              <DividerPage />
              <CardContent className="demoOutput">
                <Grid container spacing={2} className="gridCard">
                  <FormControlLabel value="top" control={<Switch color="success" />} label="Top" labelPlacement="top" />
                  <FormControlLabel value="start" control={<Switch color="success" />} label="Start" labelPlacement="start" />
                  <FormControlLabel value="bottom" control={<Switch color="success" />} label="Bottom" labelPlacement="bottom" />
                  <FormControlLabel value="end" control={<Switch color="success" />} label="End" labelPlacement="end" />
                </Grid>
              </CardContent>
            </Paper>
          </Stack>
        </Grid>
      </Box>
    </>
  );
};

export default SwitchPage;
