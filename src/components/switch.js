import { Box, CardContent, FormControlLabel, Grid, Paper, Stack, Switch, Typography } from '@mui/material';
import React from 'react';
import DividerPage from 'utils/divider';
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
      <Box className="demo-box">
        <Grid container className="demo-grid">
          {/* First Stack (Left Side) */}
          <Stack className="stack" spacing={2}>
            {/* Basic Switch */}
            <Paper root elevation rounded elevation0 className="demo-paper">
              <Typography variant="body1" title className="demo-typography">
                Basic
              </Typography>
              <DividerPage />
              <CardContent className="demo-output">
                <Grid container spacing={2} className="grid-card">
                  <Switch {...label} defaultChecked />
                  <Switch {...label} />
                  <Switch {...label} disabled defaultChecked />
                  <Switch {...label} disabled />
                </Grid>
              </CardContent>
            </Paper>

            {/* Labeled Switch */}
            <Paper root elevation rounded elevation0 className="demo-paper">
              <Typography variant="body1" title className="demo-typography">
                Labeled Switch
              </Typography>
              <DividerPage />
              <CardContent className="demo-output">
                <Grid container spacing={2} className="grid-card">
                  <FormControlLabel control={<Switch defaultChecked />} label="Label" />
                  <FormControlLabel required control={<Switch />} label="Required" />
                  <FormControlLabel disabled control={<Switch />} label="Disabled" />
                </Grid>
              </CardContent>
            </Paper>
            {/* With Size */}
            <Paper root elevation rounded elevation0 className="demo-paper">
              <Typography variant="body1" title className="demo-typography">
                Size
              </Typography>
              <DividerPage />
              <CardContent className="demo-output">
                <Grid container spacing={2} className="grid-card">
                  <Switch {...label} defaultChecked size="small" />
                  <Switch {...label} defaultChecked />
                </Grid>
              </CardContent>
            </Paper>
          </Stack>

          {/* Right Stack (Right Side) */}
          <Stack className="stack" spacing={2}>
            {/* Color Switch */}
            <Paper root elevation rounded elevation0 className="demo-paper">
              <Typography variant="body1" title className="demo-typography">
                Color
              </Typography>
              <DividerPage />
              <CardContent className="demo-output">
                <Grid container spacing={2} className="grid-card">
                  <Switch {...colorLabel} defaultChecked />
                  <Switch {...colorLabel} defaultChecked color="secondary" />
                  <Switch {...colorLabel} defaultChecked color="warning" />
                  <Switch {...colorLabel} defaultChecked color="default" />
                  <PinkSwitch {...colorLabel} defaultChecked />
                </Grid>
              </CardContent>
            </Paper>

            {/* Label placement Switch */}
            <Paper root elevation rounded elevation0 className="demo-paper">
              <Typography variant="body1" title className="demo-typography">
                Label placement
              </Typography>
              <DividerPage />
              <CardContent className="demo-output">
                <Grid container spacing={2} className="grid-card">
                  <FormControlLabel value="top" control={<Switch color="primary" />} label="Top" labelPlacement="top" />
                  <FormControlLabel value="start" control={<Switch color="primary" />} label="Start" labelPlacement="start" />
                  <FormControlLabel value="bottom" control={<Switch color="primary" />} label="Bottom" labelPlacement="bottom" />
                  <FormControlLabel value="end" control={<Switch color="primary" />} label="End" labelPlacement="end" />
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
