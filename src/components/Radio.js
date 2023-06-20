import React, { useState } from 'react';
import { CardContent, FormControlLabel, Grid, Box, Paper, Radio, RadioGroup, Stack, Typography } from '@mui/material';
import DividerPage from 'utils/Divider';
import { orange, pink, red } from '@mui/material/colors';

const RadioPage = () => {
  const [selectedValue, setSelectedValue] = useState('a');
  const [selectedColor, setSelectedColor] = useState('a');
  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  const controlProps = (item) => ({
    checked: selectedValue === item,
    onChange: handleChange,
    value: item,
    name: 'size-radio-button-demo',
    inputProps: { 'aria-label': item }
  });

  const handleColorChange = (event) => {
    setSelectedColor(event.target.value);
  };

  const controlColorProps = (item) => ({
    checked: selectedColor === item,
    onChange: handleColorChange,
    value: item,
    name: 'color-radio-button-demo',
    inputProps: { 'aria-label': item }
  });

  return (
    <>
      <Box>
        <Typography variant="h2" className="title">
          Radio
        </Typography>
        <Typography variant="h6" className="description">
          Radio buttons allow the user to select one option from a set.
        </Typography>
      </Box>
      {/* basic radio button */}
      <Box className="demoBox">
        <Grid container className="demoGrid">
          <Stack className="stack" spacing={2}>
            <Paper root rounded className="demo-paper">
              <Typography variant="body1" title className="demo-typography">
                Basic
              </Typography>
              <DividerPage />
              <CardContent className="demo-output">
                <Grid container spacing={2} className="grid-card">
                  <RadioGroup aria-label="gender" defaultValue="male" name="radio-buttons-group" row>
                    <FormControlLabel value="male" control={<Radio color="success" />} label="Male" />
                    <FormControlLabel value="female" control={<Radio color="success" />} label="Female" />
                    <FormControlLabel value="other" control={<Radio color="success" />} label="Other" />
                  </RadioGroup>
                </Grid>
              </CardContent>
            </Paper>

            {/* colored radio button */}
            <Paper root rounded className="demo-paper">
              <Typography variant="body1" title className="demo-typography">
                Color
              </Typography>
              <DividerPage />
              <CardContent className="demo-output">
                <Grid container spacing={2} className="grid-card">
                  <RadioGroup aria-label="gender" defaultValue="Primary" name="radio-buttons-group" row>
                    <FormControlLabel value="Primary" control={<Radio {...controlColorProps('a')} />} label="Primary" />
                    <FormControlLabel value="Success" control={<Radio {...controlColorProps('c')} color="success" />} label="Success" />
                    <FormControlLabel
                      value="warning"
                      control={
                        <Radio
                          {...controlColorProps('d')}
                          sx={{
                            color: orange[800],
                            '&.Mui-checked': {
                              color: orange[600]
                            }
                          }}
                        />
                      }
                      label="Warning"
                    />
                    <FormControlLabel
                      value="Info"
                      control={
                        <Radio
                          {...controlColorProps('e')}
                          sx={{
                            color: pink[800],
                            '&.Mui-checked': {
                              color: pink[600]
                            }
                          }}
                        />
                      }
                      label="Info"
                    />
                    <FormControlLabel
                      value="Error"
                      control={
                        <Radio
                          {...controlColorProps('f')}
                          sx={{
                            color: red[800],
                            '&.Mui-checked': {
                              color: red[600]
                            }
                          }}
                        />
                      }
                      label="Error"
                    />
                  </RadioGroup>
                </Grid>
              </CardContent>
            </Paper>
          </Stack>

          <Stack className="stack" spacing={2}>
            {/* size radio button */}
            <Paper root rounded className="demo-paper">
              <Typography variant="body1" title className="demo-typography">
                Size
              </Typography>
              <DividerPage />
              <CardContent className="demo-output">
                <Grid container spacing={2} className="grid-card">
                  <RadioGroup aria-label="gender" defaultValue="Default" name="radio-buttons-group" row>
                    <FormControlLabel
                      value="Default"
                      control={<Radio {...controlProps('a')} size="small" color="success" />}
                      label="Default"
                    />
                    <FormControlLabel value="Medium" control={<Radio {...controlProps('b')} color="success" />} label="Medium" />
                    <FormControlLabel
                      value="Large "
                      control={
                        <Radio
                          label="large"
                          {...controlProps('c')}
                          color="success"
                          sx={{
                            '& .MuiSvgIcon-root': {
                              fontSize: 28
                            }
                          }}
                        />
                      }
                      label="Large "
                    />
                  </RadioGroup>
                </Grid>
              </CardContent>
            </Paper>

            {/* label placement radio */}
            <Paper root rounded className="demo-paper">
              <Typography variant="body1" title className="demo-typography">
                Label placement
              </Typography>
              <DividerPage />
              <CardContent className="demo-output">
                <Grid container spacing={2} className="grid-card">
                  <RadioGroup row aria-labelledby="demo-form-control-label-placement" name="position" defaultValue="top">
                    <FormControlLabel value="top" control={<Radio color="success" />} label="Top" labelPlacement="top" />
                    <FormControlLabel value="start" control={<Radio color="success" />} label="Start" labelPlacement="start" />
                    <FormControlLabel value="bottom" control={<Radio color="success" />} label="Bottom" labelPlacement="bottom" />
                    <FormControlLabel value="end" control={<Radio color="success" />} label="End" />
                  </RadioGroup>
                </Grid>
              </CardContent>
            </Paper>
          </Stack>
        </Grid>
      </Box>
    </>
  );
};

export default RadioPage;
