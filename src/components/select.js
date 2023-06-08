import React, { useState } from 'react';
import { Typography, Box, Grid, Stack, Paper, CardContent, FormControl, InputLabel, Select, MenuItem, FormHelperText } from '@mui/material';
import DividerPage from 'utils/divider';

const SelectPage = () => {
  const [age1, setAge1] = useState('');
  const [age2, setAge2] = useState('');
  const [age3, setAge3] = useState('');
  const [age4, setAge4] = useState('');
  const [age5, setAge5] = useState('');
  const [age6, setAge6] = useState('');

  const handleChangeFirst = (event) => {
    setAge1(event.target.value);
  };

  const handleChangeSecond = (event) => {
    setAge2(event.target.value);
  };

  const handleChangeThird = (event) => {
    setAge3(event.target.value);
  };

  const handleChangeFourth = (event) => {
    setAge4(event.target.value);
  };

  const handleChangeFifth = (event) => {
    setAge5(event.target.value);
  };

  const handleChangeSixth = (event) => {
    setAge6(event.target.value);
  };
  return (
    <>
      <Box>
        <Typography variant="h2" className="title">
          Select
        </Typography>
        <Typography variant="h6" className="description">
          Select components are used for collecting user provided information from a list of options.
        </Typography>
      </Box>
      <Box className="demoBox">
        <Grid container className="demoGrid">
          {/* First Stack (Left Side) */}
          <Stack className="stack" spacing={2}>
            {/* Basic Select */}
            <Paper root rounded className="demoPaper">
              <Typography variant="body1" title className="demoTypography">
                Basic Select
              </Typography>
              <DividerPage />
              <CardContent className="demoOutput">
                <Grid container spacing={2} className="gridCard">
                  <FormControl sx={{ m: 1, minWidth: 120 }}>
                    <InputLabel id="demo-simple-select-label">Age</InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={age1}
                      label="Age"
                      onChange={handleChangeFirst}
                    >
                      <MenuItem value={10}>Ten</MenuItem>
                      <MenuItem value={20}>Twenty</MenuItem>
                      <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
              </CardContent>
            </Paper>

            {/* Filled and standard variants*/}
            <Paper root rounded className="demoPaper">
              <Typography variant="body1" title className="demoTypography">
                Filled and standard variants
              </Typography>
              <DividerPage />
              <CardContent className="demoOutput">
                <Grid container spacing={2} className="gridCard">
                  <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
                    <InputLabel id="demo-simple-select-standard-label">Age</InputLabel>
                    <Select
                      labelId="demo-simple-select-standard-label"
                      id="demo-simple-select-standard"
                      value={age2}
                      onChange={handleChangeSecond}
                      label="Age"
                    >
                      <MenuItem value="">
                        <em>None</em>
                      </MenuItem>
                      <MenuItem value={10}>Ten</MenuItem>
                      <MenuItem value={20}>Twenty</MenuItem>
                      <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                  </FormControl>
                  <FormControl variant="filled" sx={{ m: 1, minWidth: 120 }}>
                    <InputLabel id="demo-simple-select-filled-label">Age</InputLabel>
                    <Select
                      labelId="demo-simple-select-filled-label"
                      id="demo-simple-select-filled"
                      value={age2}
                      onChange={handleChangeSecond}
                    >
                      <MenuItem value="">
                        <em>None</em>
                      </MenuItem>
                      <MenuItem value={10}>Ten</MenuItem>
                      <MenuItem value={20}>Twenty</MenuItem>
                      <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
              </CardContent>
            </Paper>

            {/* Labels and helper text */}
            <Paper root rounded className="demoPaper">
              <Typography variant="body1" title className="demoTypography">
                Labels and helper text
              </Typography>
              <DividerPage />
              <CardContent className="demoOutput">
                <Grid container spacing={2} className="gridCard">
                  <FormControl sx={{ m: 1, minWidth: 120 }}>
                    <InputLabel id="demo-simple-select-helper-label">Age</InputLabel>
                    <Select
                      labelId="demo-simple-select-helper-label"
                      id="demo-simple-select-helper"
                      value={age3}
                      label="Age"
                      onChange={handleChangeThird}
                    >
                      <MenuItem value="">
                        <em>None</em>
                      </MenuItem>
                      <MenuItem value={10}>Ten</MenuItem>
                      <MenuItem value={20}>Twenty</MenuItem>
                      <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                    <FormHelperText>With label + helper text</FormHelperText>
                  </FormControl>
                  <FormControl sx={{ m: 1, minWidth: 120 }}>
                    <Select value={age3} onChange={handleChangeThird} displayEmpty inputProps={{ 'aria-label': 'Without label' }}>
                      <MenuItem value="">
                        <em>None</em>
                      </MenuItem>
                      <MenuItem value={10}>Ten</MenuItem>
                      <MenuItem value={20}>Twenty</MenuItem>
                      <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                    <FormHelperText>Without label</FormHelperText>
                  </FormControl>
                </Grid>
              </CardContent>
            </Paper>
          </Stack>

          {/* Right Stack (Right Side) */}
          <Stack className="stack" spacing={2}>
            {/* Small Size */}
            <Paper root rounded className="demoPaper">
              <Typography variant="body1" title className="demoTypography">
                Small Size
              </Typography>
              <DividerPage />
              <CardContent className="demoOutput">
                <Grid container spacing={2} className="gridCard">
                  <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                    <InputLabel id="demo-select-small-label">Age</InputLabel>
                    <Select labelId="demo-select-small-label" id="demo-select-small" value={age4} label="Age" onChange={handleChangeFourth}>
                      <MenuItem value="">
                        <em>None</em>
                      </MenuItem>
                      <MenuItem value={10}>Ten</MenuItem>
                      <MenuItem value={20}>Twenty</MenuItem>
                      <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
              </CardContent>
            </Paper>

            {/* Auto width */}
            <Paper root rounded className="demoPaper">
              <Typography variant="body1" title className="demoTypography">
                Auto width
              </Typography>
              <DividerPage />
              <CardContent className="demoOutput">
                <Grid container spacing={2} className="gridCard">
                  <FormControl sx={{ m: 1, minWidth: 80 }}>
                    <InputLabel id="demo-simple-select-autowidth-label">Age</InputLabel>
                    <Select
                      labelId="demo-simple-select-autowidth-label"
                      id="demo-simple-select-autowidth"
                      value={age5}
                      onChange={handleChangeFifth}
                      autoWidth
                      label="Age"
                    >
                      <MenuItem value="">
                        <em>None</em>
                      </MenuItem>
                      <MenuItem value={10}>Twenty</MenuItem>
                      <MenuItem value={21}>Twenty one</MenuItem>
                      <MenuItem value={22}>Twenty one and a half</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
              </CardContent>
            </Paper>

            {/* Other props */}
            <Paper root rounded className="demoPaper">
              <Typography variant="body1" title className="demoTypography">
                Other props
              </Typography>
              <DividerPage />
              <CardContent className="demoOutput">
                <Grid container spacing={2} className="gridCard">
                  <FormControl sx={{ m: 1, minWidth: 120 }} disabled>
                    <InputLabel id="demo-simple-select-disabled-label">Age</InputLabel>
                    <Select
                      labelId="demo-simple-select-disabled-label"
                      id="demo-simple-select-disabled"
                      value={age6}
                      label="Age"
                      onChange={handleChangeSixth}
                    >
                      <MenuItem value="">
                        <em>None</em>
                      </MenuItem>
                      <MenuItem value={10}>Ten</MenuItem>
                      <MenuItem value={20}>Twenty</MenuItem>
                      <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                    <FormHelperText>Disabled</FormHelperText>
                  </FormControl>
                  <FormControl sx={{ m: 1, minWidth: 120 }} error>
                    <InputLabel id="demo-simple-select-error-label">Age</InputLabel>
                    <Select
                      labelId="demo-simple-select-error-label"
                      id="demo-simple-select-error"
                      value={age6}
                      label="Age"
                      onChange={handleChangeSixth}
                      renderValue={(value) => `⚠️  - ${value}`}
                    >
                      <MenuItem value="">
                        <em>None</em>
                      </MenuItem>
                      <MenuItem value={10}>Ten</MenuItem>
                      <MenuItem value={20}>Twenty</MenuItem>
                      <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                    <FormHelperText>Error</FormHelperText>
                  </FormControl>
                  <FormControl sx={{ m: 1, minWidth: 120 }}>
                    <InputLabel id="demo-simple-select-readonly-label">Age</InputLabel>
                    <Select
                      labelId="demo-simple-select-readonly-label"
                      id="demo-simple-select-readonly"
                      value={age6}
                      label="Age"
                      onChange={handleChangeSixth}
                      inputProps={{ readOnly: true }}
                    >
                      <MenuItem value="">
                        <em>None</em>
                      </MenuItem>
                      <MenuItem value={10}>Ten</MenuItem>
                      <MenuItem value={20}>Twenty</MenuItem>
                      <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                    <FormHelperText>Read only</FormHelperText>
                  </FormControl>
                  <FormControl required sx={{ m: 1, minWidth: 120 }}>
                    <InputLabel id="demo-simple-select-required-label">Age</InputLabel>
                    <Select
                      labelId="demo-simple-select-required-label"
                      id="demo-simple-select-required"
                      value={age6}
                      label="Age *"
                      onChange={handleChangeSixth}
                    >
                      <MenuItem value="">
                        <em>None</em>
                      </MenuItem>
                      <MenuItem value={10}>Ten</MenuItem>
                      <MenuItem value={20}>Twenty</MenuItem>
                      <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                    <FormHelperText>Required</FormHelperText>
                  </FormControl>
                </Grid>
              </CardContent>
            </Paper>
          </Stack>
        </Grid>
      </Box>
    </>
  );
};

export default SelectPage;
